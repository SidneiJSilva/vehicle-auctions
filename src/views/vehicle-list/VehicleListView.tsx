'use client'

import Filters from '@/components/filters/Filters'
import VehicleList from '@/components/vehicle-list/VehicleList'

import { useLoadVehicles } from '@/hooks/useLoadVehicles'

export default function VehicleListView() {
  useLoadVehicles()

  return (
    <div className="flex flex-col gap-4">
      <Filters />

      <VehicleList />
    </div>
  )
}
