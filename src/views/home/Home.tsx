'use client'

import { useMemo } from 'react'
import { useLoadVehicles } from '@/hooks/useLoadVehicles'
import useVehicleStore from '@/store/vehicleStore'
import VehicleCard from './VehicleCard'

export default function Home() {
  useLoadVehicles()
  const { vehicleList } = useVehicleStore()

  const { cheapest, mostExpensive } = useMemo(() => {
    const sorted = [...vehicleList].sort(
      (a, b) => a.startingBid - b.startingBid
    )
    return {
      cheapest: sorted.slice(0, 2),
      mostExpensive: sorted.slice(-2).reverse()
    }
  }, [vehicleList])

  return (
    <div className="space-y-10 mt-10">
      <div className="flex justify-center text-2xl font-bold mb-4 text-green-500 ">
        Best deals
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cheapest.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>

      <div className="flex justify-center text-2xl font-bold mb-4 text-amber-600 ">
        Premium
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mostExpensive.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  )
}
