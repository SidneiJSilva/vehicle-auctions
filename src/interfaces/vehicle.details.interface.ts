import { VehicleSpecification } from './vehicle.specification.interface'
import { VehicleOwnership } from './vehicle.ownership.interface'

export interface VehicleDetails {
  specification: VehicleSpecification
  ownership: VehicleOwnership
  equipment: string[]
}
