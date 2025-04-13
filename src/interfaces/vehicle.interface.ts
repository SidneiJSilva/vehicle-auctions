import { VehicleDetails } from './vehicle.details.interface'

export interface Vehicle {
  id: string
  make: string
  model: string
  engineSize: string
  fuel: string
  year: number
  mileage: number
  auctionDateTime: Date
  startingBid: number
  favourite: boolean
  details: VehicleDetails
}
