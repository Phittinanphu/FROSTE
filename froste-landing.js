var REVIEWS = [
  { initial: 'B', handle: '@bbnamfon', variant: 'Dewy Glow', quote: "Spray, go, glow — my whole feed asked what filter I'm using. It's not a filter. 💖" },
  { initial: 'P', handle: '@peachy.jolie', variant: 'Acne Care', quote: 'Broke out before finals and this saved my face and my confidence. Clear skin, zero drama.' },
  { initial: 'M', handle: '@minnie.nn', variant: 'Oil Control', quote: 'Bangkok heat, zero shine, 12 hours straight. Certified miracle in a bottle.' },
  { initial: 'C', handle: '@charmxx', variant: 'Dewy Glow', quote: "Ordered for the mist, stayed for the charm. My keychain is my whole personality now. 🫧" },
  { initial: 'A', handle: '@its.aomsin', variant: 'Acne Care', quote: 'Fits in my tiniest bag and my whole squad wants one. ฿159 well spent.' },
];

var FAQS = [
  { q: 'How long does one bottle actually last?', a: "About 4–6 weeks of daily spritzing — it's slim, not skimpy." },
  { q: 'Can I mist over makeup?', a: "Yes — that's half the point. Set it, don't sweat it." },
  { q: 'Which variant is right for me?', a: "Oily T-zone → Oil Control. Breakout season → Acne Care. Just want the glow → Dewy Glow. Can't choose? Get all three." },
  { q: 'Wait, the charm is actually free?', a: "Every single order ships with one — pick your favorite before checkout." },
  { q: 'Do you ship across Thailand?', a: "Yep, nationwide — order today, spray by the weekend." },
];

var _FrosteLandingComponent = function(DCLogic) {
  class Component extends DCLogic {
    state = {
      faqOpen: 0, stickyBarVisible: false, cartItems: [], showLoader: true, loaderFading: false,
      flowStep: null, toastMsg: '', shipName: '', shipPhone: '', shipAddress: '', checkoutError: '', paymentMethod: 'card', lastOrder: null,
    };

    componentDidMount() {
      this._loaderTimer = setTimeout(() => {
        this.setState({ loaderFading: true });
        this._loaderTimer2 = setTimeout(() => this.setState({ showLoader: false }), 450);
      }, 900);
      this._onScroll = () => this.setState({ stickyBarVisible: window.scrollY > 560 });
      window.addEventListener('scroll', this._onScroll, { passive: true });
      this._onScroll();

      this.setState({ cartItems: this.readCart() });
      this._onCartUpdate = () => this.setState({ cartItems: this.readCart() });
      window.addEventListener('storage', this._onCartUpdate);
      window.addEventListener('froste-cart-update', this._onCartUpdate);
      window.addEventListener('focus', this._onCartUpdate);
    }

    componentWillUnmount() {
      clearTimeout(this._loaderTimer);
      clearTimeout(this._loaderTimer2);
      clearTimeout(this._toastTimer);
      window.removeEventListener('scroll', this._onScroll);
      window.removeEventListener('storage', this._onCartUpdate);
      window.removeEventListener('froste-cart-update', this._onCartUpdate);
      window.removeEventListener('focus', this._onCartUpdate);
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

    goToCheckout = () => { if (this.state.cartItems.length) this.setState({ flowStep: 'checkout' }); };
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

    continueShopping = () => this.setState({ flowStep: null });

    onShipNameChange = (e) => this.setState({ shipName: e.target.value });
    onShipPhoneChange = (e) => this.setState({ shipPhone: e.target.value });
    onShipAddressChange = (e) => this.setState({ shipAddress: e.target.value });
    onSelectCard = () => this.setState({ paymentMethod: 'card' });
    onSelectPromptpay = () => this.setState({ paymentMethod: 'promptpay' });
    onSelectCod = () => this.setState({ paymentMethod: 'cod' });

    renderVals() {
      const state = this.state;
      const price = this.props.priceAmount ?? 159;

      const faqs = FAQS.map((f, i) => ({
        ...f,
        open: i === state.faqOpen,
        closed: i !== state.faqOpen,
        onToggle: () => this.setState({ faqOpen: state.faqOpen === i ? -1 : i }),
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

      return {
        showLoader: state.showLoader,
        loaderOpacity: state.loaderFading ? '0' : '1',
        price,
        reviews: REVIEWS,
        faqs,
        cartCount, hasCart: cartCount > 0,
        showSticky: (this.props.showStickyCta ?? true) && state.stickyBarVisible,
        openCart: this.openCart,
        closeFlow: this.closeFlow,
        cartOpen: state.flowStep === 'cart',
        checkoutOpen: state.flowStep === 'checkout',
        paymentOpen: state.flowStep === 'payment',
        successOpen: state.flowStep === 'success',
        cartLines, cartEmpty: cartLines.length === 0, cartHasItems: cartLines.length > 0,
        subtotal, total, shippingLabel: shipping === 0 ? 'Free' : `฿${shipping}`,
        goToCheckout: this.goToCheckout,
        backToCart: this.backToCart,
        goToPayment: this.goToPayment,
        backToCheckout: this.backToCheckout,
        placeOrder: this.placeOrder,
        continueShopping: this.continueShopping,
        shipName: state.shipName, shipPhone: state.shipPhone, shipAddress: state.shipAddress,
        onShipNameChange: this.onShipNameChange, onShipPhoneChange: this.onShipPhoneChange, onShipAddressChange: this.onShipAddressChange,
        checkoutError: state.checkoutError,
        isCard: state.paymentMethod === 'card', isPromptpay: state.paymentMethod === 'promptpay', isCod: state.paymentMethod === 'cod',
        onSelectCard: this.onSelectCard, onSelectPromptpay: this.onSelectPromptpay, onSelectCod: this.onSelectCod,
        orderNumber: state.lastOrder ? state.lastOrder.orderNumber : '',
        orderTotal: state.lastOrder ? state.lastOrder.total : 0,
        toastMsg: state.toastMsg,
        toastVisible: !!state.toastMsg,
      };
    }
  }
  return Component;
};
