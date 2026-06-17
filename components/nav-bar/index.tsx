'use client'
import { Clock, Heart, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export default function NavBar(){
    const { cartItems } = useCartStore()
    return (
        <nav className="sticky top-0 z-45 bg-white/95 backdrop-blur-md border-b border-zinc-150 py-4.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          

          <button 
            className="flex items-center gap-2 group text-left outline-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-md transition group-hover:bg-zinc-800 group-active:scale-95">
              <ShoppingBag size={18} strokeWidth={2.2} />
            </div>
            <div>
              <h1 className="text-sm font-bold text-zinc-900 tracking-tight leading-none">
                E-Commerce Store
              </h1>
              <span className="text-[10px] text-zinc-400 font-medium block mt-0.5 font-mono">
                Curated Workspace & Wellness
              </span>
            </div>
          </button>

          {/* Quick Stats Block (Architectural Honesty) */}
          <div className="hidden lg:flex items-center gap-6 text-xs text-zinc-500 font-medium font-mono">
            <span className="flex items-center gap-1.5"><Clock size={12} /> Same-day Dispatch</span>
            <span className="flex items-center gap-1.5"><Heart size={12} /> Rated 4.9/5 Stars</span>
          </div>

          {/* Cart triggers */}
          <div className="flex items-center gap-3">
            <button
                id="cart-drawer-trigger"
                className="relative flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 hover:border-zinc-300 active:scale-95"
              >
                <ShoppingBag size={15} />
                <span className="hidden sm:inline">Bag</span>
                 {cartItems.length}
              </button>
          </div>
        </div>
      </nav>
    )
}