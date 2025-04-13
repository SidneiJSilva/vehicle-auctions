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

export interface VehicleDetails {
  specification: VehicleSpecification
  ownership: VehicleOwnership
  equipment: string[]
}

export interface VehicleSpecification {
  vehicleType: string
  colour: string
  fuel: string
  transmission: string
  numberOfDoors: number
  co2Emissions: string
  noxEmissions: number
  numberOfKeys: number
}

export interface VehicleOwnership {
  logBook: string
  numberOfOwners: number
  dateOfRegistration: Date
}
