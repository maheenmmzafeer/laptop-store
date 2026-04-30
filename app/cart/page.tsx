import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

export default function Cart() {
  // Static demo state to show a polished cart design
  const cartItems = [
    {
      id: 1,
      name: "MacBook Pro M3",
      price: "$1,999",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      quantity: 1,
    },
    {
      id: 2,
      name: "Dell XPS 15",
      price: "$1,499",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      quantity: 1,
    }
  ];

  return (
    <main className="page-wrapper">
    <div className="max-w-5xl mx-auto space-y-8">
      <PageHeader 
        title="Your Cart" 
        subtitle="Review your items and proceed to checkout."
      />

      {cartItems.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-8 animate-fade-up animate-fade-up-delay-1">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="card p-4 flex gap-4 items-center group">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-lg bg-[var(--surface-hover)]"
                />
                
                <div className="flex-grow">
                  <h3 className="font-semibold text-[var(--text-primary)] font-outfit text-lg">{item.name}</h3>
                  <p className="text-[var(--text-secondary)] mb-2">{item.price}</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-[var(--surface-hover)] rounded-lg border border-[var(--border)]">
                      <button className="px-3 py-1 text-[var(--text-secondary)] hover:text-white transition-colors">−</button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button className="px-3 py-1 text-[var(--text-secondary)] hover:text-white transition-colors">+</button>
                    </div>
                    <button className="text-sm text-red-400 hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-lg">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h3 className="text-xl font-bold font-outfit mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Subtotal</span>
                  <span>$3,498</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                
                <div className="h-px w-full bg-[var(--border)] my-4"></div>
                
                <div className="flex justify-between text-xl font-bold font-outfit">
                  <span>Total</span>
                  <span className="text-blue-400">$3,498</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Checkout
              </Button>
              
              <p className="text-center text-xs text-[var(--text-tertiary)] mt-4 flex items-center justify-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Secure Checkout
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="card text-center py-20 flex flex-col items-center justify-center animate-fade-up animate-fade-up-delay-1 max-w-2xl mx-auto">
          <div className="w-24 h-24 mb-6 rounded-full bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center text-[var(--text-tertiary)]">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="heading-md mb-3">Your cart is empty</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-md">
            Looks like you haven't added anything to your cart yet. Discover our premium laptops and find the perfect one for you.
          </p>
          <Button href="/products" size="lg">
            Browse Products
          </Button>
        </div>
      )}

    </div>
    </main>
  );
}