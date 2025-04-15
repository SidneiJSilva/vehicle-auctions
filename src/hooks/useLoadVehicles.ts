'use client'

import { useEffect } from 'react'
import { Vehicle } from '@/interfaces/vehicle.interface'
import { v4 as uuidv4 } from 'uuid'

import useVehicleStore from '@/store/vehicle.store'
import vehicleData from '@/data/vehicles_dataset.json'

export function useLoadVehicles() {
  const { setVehicles, vehicleList, setFavVehicles } = useVehicleStore()

  useEffect(() => {
    if (vehicleList.length > 0) return

    const formatVehicleData = (): Vehicle[] => {
      return vehicleData.map((v) => ({
        ...v,
        id: uuidv4(),
        auctionDateTime: new Date(v.auctionDateTime),
        details: {
          ...v.details,
          ownership: {
            ...v.details.ownership,
            dateOfRegistration: new Date(v.details.ownership.dateOfRegistration)
          }
        }
      }))
    }

    const getFavoriteVehicles = (vehicles: Vehicle[]) => {
      const favoriteVehicleIds = vehicles
        .filter((vehicle) => vehicle.favourite)
        .map((vehicle) => vehicle.id)

      setFavVehicles(favoriteVehicleIds)
    }

    const parsedVehicles = formatVehicleData()

    getFavoriteVehicles(parsedVehicles)

    setVehicles(parsedVehicles)
  }, [setVehicles, vehicleList.length, setFavVehicles])
}
