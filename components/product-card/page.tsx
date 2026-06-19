'use client'
import React, { useState } from 'react';
import { Star, ShoppingCart, Eye, Tag, AlertTriangle } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"
import { useDialogStore } from '../dialog-test/dialog-store';


interface ProductCardProps {
  product: Product;
  key?: string;
}

export default function ProductCard({
  product
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, setLastAddedItemId, lastAddedItemId } = useCartStore()
  const { setOpen, setSelectProduct } = useDialogStore()
  const router = useRouter()

  const handleAddToCart = () => {
    addToCart(product); 
    toast("item added", { position: "top-right" })
    setLastAddedItemId(product.id)
    setTimeout(() => {
      setLastAddedItemId(null)
    }, 1000)
  }

  return (
    <motion.div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-100 bg-white p-4 transition-all duration-300 hover:border-zinc-200 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        {/* Image and badges */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-50">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-900 shadow-sm backdrop-blur">
            <Tag size={12} className="text-zinc-500" />
            {product.category}
          </div>

          {product.stock <= 5 && (
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-600 border border-rose-100 uppercase tracking-widest">
              <AlertTriangle size={10} />
              Low Stock
            </div>
          )}

          {/* Quick View Overlays */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[2px] transition-all"
              >
                <button
                  id={`quick-view-btn-${product.id}`}
                  onClick={() => { setSelectProduct(product); setOpen(true) } }
                  className="flex items-center gap-1.5 rounded-xl bg-white px-4.5 py-2.5 text-xs font-semibold text-zinc-900 shadow-lg transform transition active:scale-95 hover:bg-zinc-50"
                >
                  <Eye size={14} />
                  Quick View
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Details */}
        <div className="mt-4">
          <div className="flex items-center gap-1">
            <div className="flex items-center text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => {
                const isGold = i < Math.floor(product.rating);
                return (
                  <Star
                    key={i}
                    size={12}
                    fill={isGold ? 'currentColor' : 'none'}
                    className={isGold ? 'text-amber-400' : 'text-zinc-300'}
                  />
                );
              })}
            </div>
            <span className="text-[11px] font-medium text-zinc-500 font-mono">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          <h3 className="mt-2 text-sm font-semibold tracking-tight text-zinc-800 line-clamp-1 group-hover:text-zinc-900">
            {product.name}
          </h3>

          <p className="mt-1 text-xs text-zinc-500 line-clamp-2 h-8 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Pricing / CTA */}
      <div className="mt-4 pt-3 border-t border-zinc-50 flex items-center justify-between">
        <div>
          <span className="text-xs text-zinc-400 block font-medium">Price</span>
          <span className="text-sm font-semibold text-zinc-900 font-mono">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {product.stock === 0 ? (
          <button
            disabled
            className="flex items-center gap-1.5 rounded-xl bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-400 cursor-not-allowed"
          >
            Sold Out
          </button>
        ) : (
          <button
            id={`add-to-cart-btn-${product.id}`}
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold select-none transition-all active:scale-95 duration-200 ${
              lastAddedItemId == product.id
                ? 'bg-emerald-500 text-white shadow-emerald-100'
                : 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-zinc-200'
            } shadow`}
          >
            {lastAddedItemId == product.id ? (
              <>
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-1"
                >
                  <ShoppingCart size={13} fill="currentColor" />
                  Added!
                </motion.span>
              </>
            ) : (
              <>
                <ShoppingCart size={13} />
                Add to Cart
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
}
