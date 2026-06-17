
'use client'

import { useSearchParams } from "next/navigation";
import { useState } from "react";

type Category = {
    id: number,
    name: string
}
const CATEGORIES: Category[] = [
    { "id": 1, "name": "All" },
    { "id": 2, "name": "Audio" },
    { "id": 3, "name": "Workspace" },
    { "id": 4, "name": "Lifestyle" },
    { "id": 5, "name": "Wellness" }
]

export default function CategoryTab() {
    const searchParams = useSearchParams()
    const paramCategory = searchParams.get("category")
    console.log(paramCategory)
    return (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none bg-white">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat.id}
                    id={`cat-tab-${cat}`}
                    className={`rounded-xl px-3.5 py-2.5 text-xs font-semibold whitespace-nowrap transition-all ${cat.name.toLocaleLowerCase() == paramCategory
                            ? 'bg-zinc-950 text-white shadow-sm'
                            : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                        }`}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    )
}