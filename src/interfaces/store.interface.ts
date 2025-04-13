import { Vehicle } from './vehicle.interface'

export interface StoreInterface {
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
