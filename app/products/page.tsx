import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";

const laptops = [
  {
    name: "MacBook Pro M3",
    price: "$1,999",
    category: "Professional",
    rating: 5,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    name: "Dell XPS 15",
    price: "$1,499",
    category: "Ultrabook",
    rating: 4,
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    name: "ASUS ROG Strix",
    price: "$1,799",
    category: "Gaming",
    rating: 5,
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    name: "ThinkPad X1 Carbon",
    price: "$1,649",
    category: "Business",
    rating: 4,
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
  },
  {
    name: "Razer Blade 16",
    price: "$2,499",
    category: "Gaming",
    rating: 5,
    img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
  },
  {
    name: "HP Spectre x360",
    price: "$1,399",
    category: "2-in-1",
    rating: 4,
    img: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db",
  },
];

export default function Products() {
  return (
    <div className="space-y-10">
      
      <PageHeader 
        title="Our Laptops" 
        subtitle="Explore our curated collection of premium laptops. From ultra-light productivity machines to desktop-replacement gaming rigs."
        badge="In Stock Now"
      />

      {/* Filter Tabs (Static for MVP) */}
      <div className="flex flex-wrap gap-3 mb-10 animate-fade-up">
        {['All', 'Gaming', 'Professional', 'Ultrabook', 'Business', '2-in-1'].map((cat, i) => (
          <button 
            key={i}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              i === 0 
                ? 'bg-blue-600 text-white shadow-[0_4px_14px_0_rgba(59,130,246,0.39)]' 
                : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fade-up">
        {laptops.map((l, i) => (
          <ProductCard key={i} {...l} />
        ))}
      </div>

    </div>
  );
}