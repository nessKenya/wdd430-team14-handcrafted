"use client"

import { useState, useEffect } from "react";
import ItemCard from "@/components/item-card"
import { getItemsByIds } from "@/app/lib/actions"
import { getFavorites } from "@/app/utils/favorites";
import { Item } from "@/types";

export default function FavoriteListing() {
  const [items, setItems] = useState<Item[]>([]);
   const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchFavorites() {
        const ids = getFavorites();
        if (ids.length === 0) {
          setLoading(false);
          return
        };
        try {
          const data = await getItemsByIds(ids);
          setItems(data);
        } catch (err) {
          console.error('Error fetching favorite items:', err);
        } finally {
          setLoading(false);
        }
      }

      fetchFavorites();
    }, []);

    if (loading) {
        return (
          <div className="p-6 text-gray-500">Loading favorites...</div>
        );
      }

    if (!items.length) {
        return (
          <div className="p-6 text-gray-500">No favorites yet.</div>
        );
      }

  return <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-8">
    {
      items.map((item) => <ItemCard key={item.id} item={item} />)
    }
  </div>
}
