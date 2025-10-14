const FAVORITES_KEY = 'favoriteItems'

export function getFavorites(): number[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(FAVORITES_KEY)
    return data ? JSON.parse(data) : []
  } catch (e) {
    console.error('getFavorites parse error', e);
    return []
  }
}

export function addFavorite(id: number) {
  const favorites = getFavorites()
  if (!favorites.includes(id)) {
    favorites.push(id)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }
}

export function removeFavorite(id: number) {
  const favorites = getFavorites().filter(f => f !== id)
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

export function isFavorited(id: number) {
  return getFavorites().includes(id)
}
