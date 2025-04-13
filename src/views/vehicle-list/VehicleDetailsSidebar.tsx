import Separator from '@/components/layout/Separator'
import VehicleFavoriteButton from './VehicleFavoriteButton'

import { Calendar, Fuel, Gauge, Settings, Ticket, User } from 'lucide-react'
import { formatNumberWithSeparators } from '@/helpers/numbers'

import type { Vehicle } from '@/types/vehicle'

export default function VehicleDetailsSidebar({
  vehicle
}: {
  vehicle: Vehicle
}) {
  const { details } = vehicle
  const { specification, ownership, equipment } = details

  return (
    <div className="w-full border border-black p-6 space-y-4 rounded-2xl">
      <div className="flex justify-end">
        <VehicleFavoriteButton id={vehicle.id} />
      </div>

      <div className="flex flex-col text-center">
        <span className="text-xs text-muted-foreground">Start bid</span>

        <span className="text-4xl font-semibold ">
          € {formatNumberWithSeparators(vehicle.startingBid.toString())}
        </span>
      </div>

      <Separator color="border-blue-600" className="border-2" />

      <div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <DetailItem
            icon={<Gauge className="w-5 h-5" />}
            label="Mileage"
            value={`${vehicle.mileage.toLocaleString()} km`}
          />
          <DetailItem
            icon={<Calendar className="w-5 h-5" />}
            label="Year"
            value={vehicle.year.toString()}
          />
          <DetailItem
            icon={<Fuel className="w-5 h-5" />}
            label="Fuel"
            value={specification.fuel}
          />
          <DetailItem
            icon={<Settings className="w-5 h-5" />}
            label="Transmission"
            value={specification.transmission}
          />
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5" /> <span>Specifications</span>
        </h3>

        <div className="space-y-2">
          <SpecItem label="Vehicle type" value={specification.vehicleType} />
          <SpecItem label="Color" value={specification.colour} />
          <SpecItem
            label="Doors"
            value={specification.numberOfDoors.toString()}
          />
          <SpecItem label="CO₂" value={specification.co2Emissions} />
          <SpecItem
            label="Keys"
            value={specification.numberOfKeys.toString()}
          />
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <User className="w-5 h-5" /> <span>History</span>
        </h3>

        <div className="space-y-3">
          <SpecItem
            label="Owners"
            value={ownership.numberOfOwners.toString()}
          />
          <SpecItem
            label="First registration"
            value={ownership.dateOfRegistration.toLocaleDateString()}
          />
          <SpecItem label="Documentation" value={ownership.logBook} />
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Ticket className="w-5 h-5" /> <span>Equipment</span>
        </h3>

        <div className="flex flex-wrap gap-2">
          {equipment.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function DetailItem({
  icon,
  label,
  value
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-gray-500">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  )
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
