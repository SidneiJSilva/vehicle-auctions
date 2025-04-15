import { create } from 'zustand'
import { StoreInterface } from '@/interfaces/store.interface'

const useVehicleStore = create<StoreInterface>((set) => ({
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
  setFavVehicles: (favIds) => set(() => ({ favVehicles: favIds })),
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
