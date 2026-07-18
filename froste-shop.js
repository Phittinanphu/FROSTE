var PRODUCTS = [
  { id: 'acne', name: 'Acne Care', tone: 'acne', serif: 'Clear skin, zero drama.', about: "A featherlight mist that calms breakouts and blurs redness while you're out living. Spray, go, glow.", tags: ['Salicylic', 'Oil-free', 'Fragrance-free'], rating: '4.9', reviews: '1,243', bestseller: true },
  { id: 'oil', name: 'Oil Control', tone: 'oil', serif: 'Shine? Never met her.', about: 'Locks makeup in place and keeps midday shine on mute. A quick mist resets your whole face.', tags: ['Mattifying', 'Pore-blur', '12h hold'], rating: '4.8', reviews: '982', bestseller: false },
  { id: 'dewy', name: 'Dewy Glow', tone: 'dewy', serif: 'Your face, but dewier.', about: 'A dewy veil of hydration for that lit-from-within finish. The one everyone stops you to ask about.', tags: ['Hyaluronic', 'Lit-from-within', 'Dewy finish'], rating: '5.0', reviews: '1,587', bestseller: true },
];

var CHARMS = [
  { id: 'bear', emoji: '🧸', name: 'Gummy Bear' },
  { id: 'duck', emoji: '🦆', name: 'Rubber Duck' },
  { id: 'heart', emoji: '💖', name: 'Love Heart' },
  { id: 'balloon', emoji: '🎈', name: 'Balloon Dog' },
];

var _FrosteShopComponent = function(DCLogic) {
  class Component extends DCLogic {
    state = {
      selectedVariant: 'dewy',
      selectedCharm: 'bear',
      cartItems: [],
      flowStep: null,
      toastMsg: '',
      stickyBarVisible: false,
      shipName: '',
      shipPhone: '',
      shipAddress: '',
      checkoutError: '',
      paymentMethod: 'card',
      lastOrder: null,
      qty: 1,
      showLoader: true,
      loaderFading: false,
    };

    componentDidMount() {
      this._loaderTimer = setTimeout(() => {
        this.setState({ loaderFading: true });
        this._loaderTimer2 = setTimeout(() => this.setState({ showLoader: false }), 450);
      }, 900);
      const params = new URLSearchParams(window.location.search);
      const qVariant = params.get('variant');
      const initial = (qVariant && PRODUCTS.some((p) => p.id === qVariant)) ? qVariant
        : (this.props.defaultVariant && PRODUCTS.some((p) => p.id === this.props.defaultVariant)) ? this.props.defaultVariant
        : this.state.selectedVariant;
      this.setState({ selectedVariant: initial });

      this.setState({ cartItems: this.readCart() });
      if (window.location.hash === '#cart') this.setState({ flowStep: 'cart' });

      this._onScroll = () => this.setState({ stickyBarVisible: window.scrollY > 420 });
      window.addEventListener('scroll', this._onScroll, { passive: true });
      this._onScroll();
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this._onScroll);
      clearTimeout(this._toastTimer);
      clearTimeout(this._loaderTimer);
      clearTimeout(this._loaderTimer2);
    }

    scrollToId(id) {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    readCart() {
      try {
        const raw = JSON.parse(localStorage.getItem('froste_cart_v1'));
        return Array.isArray(raw) ? raw : [];
      } catch (e) { return []; }
    }

    persistCart(items) {
      localStorage.setItem('froste_cart_v1', JSON.stringify(items));
      window.dispatchEvent(new Event('froste-cart-update'));
    }

    selectVariant = (id) => {
      this.setState({ selectedVariant: id });
      this.scrollToId('shop-top');
    };

    addToBag = () => {
      const p = PRODUCTS.find((x) => x.id === this.state.selectedVariant);
      const c = CHARMS.find((x) => x.id === this.state.selectedCharm);
      const price = this.props.priceAmount ?? 159;
      const addQty = this.state.qty;
      clearTimeout(this._toastTimer);
      this.setState((s) => {
        const items = [...s.cartItems];
        const idx = items.findIndex((it) => it.productId === p.id && it.charmId === c.id);
        if (idx >= 0) items[idx] = { ...items[idx], qty: items[idx].qty + addQty };
        else items.push({ productId: p.id, charmId: c.id, name: p.name, grad: `var(--grad-${p.id})`, price, qty: addQty, charm: { emoji: c.emoji, name: c.name } });
        this.persistCart(items);
        return { cartItems: items, qty: 1, toastMsg: `Added ${addQty} × ${p.name} + ${c.emoji} ${c.name} to your bag` };
      });
      this._toastTimer = setTimeout(() => this.setState({ toastMsg: '' }), 2800);
    };

    incQty = () => this.setState((s) => ({ qty: Math.min(s.qty + 1, 10) }));
    decQty = () => this.setState((s) => ({ qty: Math.max(s.qty - 1, 1) }));

    openCart = () => this.setState({ flowStep: 'cart' });
    closeFlow = () => this.setState({ flowStep: null });

    cartQty = (idx, delta) => this.setState((s) => {
      const items = [...s.cartItems];
      const next = items[idx].qty + delta;
      if (next <= 0) items.splice(idx, 1);
      else items[idx] = { ...items[idx], qty: next };
      this.persistCart(items);
      return { cartItems: items };
    });

    goToCheckout = () => {
      if (this.state.cartItems.length === 0) return;
      this.setState({ flowStep: 'checkout' });
    };

    backToCart = () => this.setState({ flowStep: 'cart' });

    goToPayment = () => {
      const { shipName, shipPhone, shipAddress } = this.state;
      if (!shipName.trim() || !shipPhone.trim() || !shipAddress.trim()) {
        this.setState({ checkoutError: 'Fill in every field so your mist actually arrives.' });
        return;
      }
      this.setState({ checkoutError: '', flowStep: 'payment' });
    };

    backToCheckout = () => this.setState({ flowStep: 'checkout' });

    placeOrder = () => {
      const subtotal = this.state.cartItems.reduce((s, it) => s + it.price * it.qty, 0);
      const shipping = subtotal >= 300 || subtotal === 0 ? 0 : 40;
      const orderNumber = 'FR' + Math.floor(10000 + Math.random() * 89999);
      this.persistCart([]);
      this.setState({ flowStep: 'success', lastOrder: { orderNumber, total: subtotal + shipping }, cartItems: [], shipName: '', shipPhone: '', shipAddress: '' });
    };

    continueShopping = () => {
      this.setState({ flowStep: null });
      this.scrollToId('shop-top');
    };

    onShipNameChange = (e) => this.setState({ shipName: e.target.value });
    onShipPhoneChange = (e) => this.setState({ shipPhone: e.target.value });
    onShipAddressChange = (e) => this.setState({ shipAddress: e.target.value });
    onSelectCard = () => this.setState({ paymentMethod: 'card' });
    onSelectPromptpay = () => this.setState({ paymentMethod: 'promptpay' });
    onSelectCod = () => this.setState({ paymentMethod: 'cod' });

    renderVals() {
      const state = this.state;
      const price = this.props.priceAmount ?? 159;
      const current = PRODUCTS.find((p) => p.id === state.selectedVariant) || PRODUCTS[0];

      const products = PRODUCTS.map((p) => ({
        ...p,
        selected: p.id === state.selectedVariant,
        onSelect: () => this.setState({ selectedVariant: p.id }),
      }));

      const charms = CHARMS.map((c) => ({
        ...c,
        selected: c.id === state.selectedCharm,
        onSelect: () => this.setState({ selectedCharm: c.id }),
      }));

      const cartLines = state.cartItems.map((it, idx) => ({
        ...it,
        isAcne: it.productId === 'acne',
        isOil: it.productId === 'oil',
        isDewy: it.productId === 'dewy',
        charmLabel: `${it.charm.emoji} ${it.charm.name}`,
        lineTotal: it.price * it.qty,
        onInc: () => this.cartQty(idx, 1),
        onDec: () => this.cartQty(idx, -1),
      }));
      const subtotal = state.cartItems.reduce((s, it) => s + it.price * it.qty, 0);
      const shipping = subtotal >= 300 || subtotal === 0 ? 0 : 40;
      const total = subtotal + shipping;
      const cartCount = state.cartItems.reduce((s, it) => s + it.qty, 0);
      const lineTotalPrice = price * state.qty;

      return {
        showLoader: state.showLoader,
        loaderOpacity: state.loaderFading ? '0' : '1',
        price, current, products, charms,
        qty: state.qty, incQty: this.incQty, decQty: this.decQty, lineTotalPrice,
        isAcne: current.id === 'acne',
        isOil: current.id === 'oil',
        isDewy: current.id === 'dewy',
        cartLines, cartEmpty: cartLines.length === 0, cartHasItems: cartLines.length > 0,
        subtotal, total, shippingLabel: shipping === 0 ? 'Free' : `฿${shipping}`,
        cartCount, hasCart: cartCount > 0,
        toastMsg: state.toastMsg,
        toastVisible: !!state.toastMsg,
        showSticky: state.stickyBarVisible,
        addToBag: this.addToBag,
        openCart: this.openCart,
        closeFlow: this.closeFlow,
        goToCheckout: this.goToCheckout,
        backToCart: this.backToCart,
        goToPayment: this.goToPayment,
        backToCheckout: this.backToCheckout,
        placeOrder: this.placeOrder,
        continueShopping: this.continueShopping,
        cartOpen: state.flowStep === 'cart',
        checkoutOpen: state.flowStep === 'checkout',
        paymentOpen: state.flowStep === 'payment',
        successOpen: state.flowStep === 'success',
        shipName: state.shipName, shipPhone: state.shipPhone, shipAddress: state.shipAddress,
        onShipNameChange: this.onShipNameChange, onShipPhoneChange: this.onShipPhoneChange, onShipAddressChange: this.onShipAddressChange,
        checkoutError: state.checkoutError,
        isCard: state.paymentMethod === 'card', isPromptpay: state.paymentMethod === 'promptpay', isCod: state.paymentMethod === 'cod',
        onSelectCard: this.onSelectCard, onSelectPromptpay: this.onSelectPromptpay, onSelectCod: this.onSelectCod,
        orderNumber: state.lastOrder ? state.lastOrder.orderNumber : '',
        orderTotal: state.lastOrder ? state.lastOrder.total : 0,
        selectAcne: () => this.selectVariant('acne'),
        selectOil: () => this.selectVariant('oil'),
        selectDewy: () => this.selectVariant('dewy'),
      };
    }
  }
  return Component;
};
