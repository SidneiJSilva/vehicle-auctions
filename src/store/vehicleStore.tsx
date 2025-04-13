// store/vehicleStore.ts
import { create } from 'zustand'
import { Vehicle } from '@/types/vehicle'

interface Store {
  // Vehicle list
  vehicleList: Vehicle[]
  setVehicles: (vehicles: Vehicle[]) => void

  // Filters
  selectedMake: string | null
  selectedModel: string | null
  selectedPriceRange: [number, number]
  setSelectedMake: (make: string | null) => void
  setSelectedModel: (model: string | null) => void
  setSelectedPriceRange: (range: [number, number]) => void
  resetFilters: () => void

  // Sorting
  sortOption: { field: keyof Vehicle; direction: 'asc' | 'desc' } | null
  setSortOption: (
    option: { field: keyof Vehicle; direction: 'asc' | 'desc' } | null
  ) => void

  // Pagination
  selectedPage: number
  setSelectedPage: (page: number) => void
  itemsPerPage: string
  itemsPerPageOptions: string[]
  setItemsPerPage: (pageSize: string) => void
  showOnlyFavorites: boolean
  setShowOnlyFavorites: (value: boolean) => void

  // Favorites
  favVehicles: string[]
  addFav: (id: string) => void
  removeFav: (id: string) => void
}

const useVehicleStore = create<Store>((set) => ({
  vehicleList: [],
  setVehicles: (vehicles) => set(() => ({ vehicleList: vehicles })),

  selectedMake: null,
  selectedModel: null,
  selectedPriceRange: [0, 100000],
  setSelectedMake: (make) =>
    set(() => ({ selectedMake: make, selectedModel: null, selectedPage: 1 })),
  setSelectedModel: (model) =>
    set(() => ({ selectedModel: model, selectedPage: 1 })),
  setSelectedPriceRange: (range) =>
    set(() => ({ selectedPriceRange: range, selectedPage: 1 })),
  resetFilters: () =>
    set(() => ({
      selectedMake: null,
      selectedModel: null,
      selectedPriceRange: [0, 100000],
      selectedPage: 1,
      showOnlyFavorites: false
    })),
  showOnlyFavorites: false,
  setShowOnlyFavorites: (value) => set({ showOnlyFavorites: value }),

  sortOption: null, // ou algo como { field: 'startingBid', direction: 'asc' }
  setSortOption: (option) => set({ sortOption: option }),

  selectedPage: 1,
  setSelectedPage: (page) => set(() => ({ selectedPage: page })),
  itemsPerPage: '5',
  itemsPerPageOptions: ['5', '10', '20'],
  setItemsPerPage: (pageSize) => set(() => ({ itemsPerPage: pageSize })),

  favVehicles: [],
  addFav: (id) =>
    set((state) => ({
      favVehicles: state.favVehicles.includes(id)
        ? state.favVehicles
        : [...state.favVehicles, id]
    })),
  removeFav: (id) =>
    set((state) => ({
      favVehicles: state.favVehicles.filter((favId) => favId !== id)
    }))
}))

export default useVehicleStore
