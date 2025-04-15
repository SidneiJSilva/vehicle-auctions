import { useMemo } from 'react'
import useVehicleStore from '@/store/vehicle.store'

export const useFilters = () => {
  const {
    vehicleList,
    selectedMake,
    selectedModel,
    selectedPage,
    itemsPerPage,
    selectedPriceRange,
    showOnlyFavorites,
    favVehicles,
    sortOption
  } = useVehicleStore()

  const itemsPerPageNumber = Number(itemsPerPage) || 10

  const filteredVehicles = useMemo(() => {
    let result = [...vehicleList]

    if (selectedMake) {
      result = result.filter((vehicle) => vehicle.make === selectedMake)
    }

    if (selectedModel) {
      result = result.filter((vehicle) => vehicle.model === selectedModel)
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange
      result = result.filter(
        (vehicle) => vehicle.startingBid >= min && vehicle.startingBid <= max
      )
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange
      result = result.filter(
        (vehicle) => vehicle.startingBid >= min && vehicle.startingBid <= max
      )
    }

    if (showOnlyFavorites) {
      result = result.filter((vehicle) => favVehicles.includes(vehicle.id))
    }

    if (sortOption) {
      const { field, direction } = sortOption

      result.sort((a, b) => {
        const valA = a[field]
        const valB = b[field]

        if (valA < valB) return direction === 'asc' ? -1 : 1
        if (valA > valB) return direction === 'asc' ? 1 : -1

        return 0
      })
    }

    return result
  }, [
    vehicleList,
    selectedMake,
    selectedModel,
    selectedPriceRange,
    showOnlyFavorites,
    favVehicles,
    sortOption
  ])

  const paginatedVehicles = useMemo(() => {
    const start = (selectedPage - 1) * itemsPerPageNumber
    const end = start + itemsPerPageNumber
    return filteredVehicles.slice(start, end)
  }, [filteredVehicles, selectedPage, itemsPerPageNumber])

  const totalPages = useMemo(() => {
    return Math.ceil(filteredVehicles.length / itemsPerPageNumber)
  }, [filteredVehicles, itemsPerPageNumber])

  const uniqueMakes = useMemo(() => {
    return [...new Set(vehicleList.map((v) => v.make))]
  }, [vehicleList])

  const uniqueModels = useMemo(() => {
    const source = selectedMake
      ? vehicleList.filter((v) => v.make === selectedMake)
      : vehicleList

    return [...new Set(source.map((v) => v.model))]
  }, [vehicleList, selectedMake])

  const priceRange = useMemo(() => {
    if (!vehicleList.length) return [0, 100000]
    const prices = vehicleList.map((v) => v.startingBid)
    return [Math.min(...prices), Math.max(...prices)] as [number, number]
  }, [vehicleList])

  return {
    selectedMake,
    selectedModel,
    filteredVehicles,
    paginatedVehicles,
    uniqueMakes,
    uniqueModels,
    totalPages,
    priceRange
  }
}
