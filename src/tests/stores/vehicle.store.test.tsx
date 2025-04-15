import useVehicleStore from '@/store/vehicle.store'
import { mockVehicles } from '../mocks/mockVechiles'

describe('vehicleStore', () => {
  beforeEach(() => {
    useVehicleStore.setState({
      ...useVehicleStore.getState(),
      vehicleList: [],
      selectedMake: null,
      selectedModel: null,
      selectedPriceRange: [0, 100000],
      sortOption: null,
      selectedPage: 1,
      itemsPerPage: '5',
      showOnlyFavorites: false,
      favVehicles: []
    })
  })

  it('sets vehicle list', () => {
    useVehicleStore.getState().setVehicles(mockVehicles)

    expect(useVehicleStore.getState().vehicleList).toHaveLength(1)
    expect(useVehicleStore.getState().vehicleList[0].make).toBe('Toyota')
  })

  it('adds and removes favorites', () => {
    useVehicleStore.getState().addFav('1')
    expect(useVehicleStore.getState().favVehicles).toContain('1')

    useVehicleStore.getState().removeFav('1')
    expect(useVehicleStore.getState().favVehicles).not.toContain('1')
  })

  it('sets and resets filters', () => {
    const store = useVehicleStore.getState()

    store.setSelectedMake('Toyota')
    store.setSelectedModel('Corolla')
    store.setSelectedPriceRange([10000, 20000])

    expect(useVehicleStore.getState().selectedMake).toBe('Toyota')
    expect(useVehicleStore.getState().selectedModel).toBe('Corolla')
    expect(useVehicleStore.getState().selectedPriceRange).toEqual([
      10000, 20000
    ])

    store.resetFilters()
    expect(useVehicleStore.getState().selectedMake).toBeNull()
    expect(useVehicleStore.getState().selectedModel).toBeNull()
    expect(useVehicleStore.getState().selectedPriceRange).toEqual([0, 100000])
  })

  it('sets sort option', () => {
    useVehicleStore
      .getState()
      .setSortOption({ field: 'mileage', direction: 'asc' })

    expect(useVehicleStore.getState().sortOption).toEqual({
      field: 'mileage',
      direction: 'asc'
    })
  })

  it('sets pagination values', () => {
    const store = useVehicleStore.getState()

    store.setSelectedPage(3)
    store.setItemsPerPage('10')

    expect(useVehicleStore.getState().selectedPage).toBe(3)
    expect(useVehicleStore.getState().itemsPerPage).toBe('10')
  })
})
