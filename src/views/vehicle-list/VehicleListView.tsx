'use client'

import Filters from './Filters'
import VehicleList from './VehicleList'

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
