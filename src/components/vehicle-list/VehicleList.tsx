import VehicleListItem from './VehicleListItem'
import { VehicleListEmptyResults } from './VehicleListEmptyResults'

import useVehicleStore from '@/store/vehicleStore'
import { useFilters } from '@/hooks/useFilters'

export default function VehicleList() {
  const { paginatedVehicles } = useFilters()

  const { resetFilters } = useVehicleStore()

  return (
    <div>
      {paginatedVehicles.length > 0 ? (
        <div className="flex flex-col gap-4">
          {paginatedVehicles.map((vehicle) => (
            <VehicleListItem key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <VehicleListEmptyResults onResetFilters={resetFilters} />
      )}
    </div>
  )
}
