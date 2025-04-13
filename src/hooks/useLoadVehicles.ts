'use client'

import { useEffect } from 'react'
import { Vehicle } from '@/types/vehicle'
import { v4 as uuidv4 } from 'uuid'

import useVehicleStore from '@/store/vehicleStore'
import vehicleData from '@/data/vehicles_dataset.json'

export function useLoadVehicles() {
  const { setVehicles, vehicleList } = useVehicleStore()

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

  useEffect(() => {
    if (vehicleList.length > 0) return

    const parsedVehicles = formatVehicleData()

    setVehicles(parsedVehicles)
  }, [setVehicles, vehicleList.length])
}
