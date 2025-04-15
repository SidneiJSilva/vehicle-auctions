import { Vehicle } from '@/interfaces/vehicle.interface'

export const mockVehicle: Vehicle = {
  id: '1',
  make: 'Toyota',
  model: 'Corolla',
  engineSize: '1.8L',
  fuel: 'Gasoline',
  year: 2020,
  mileage: 35000,
  auctionDateTime: new Date(),
  startingBid: 15000,
  favourite: false,
  details: {
    specification: {
      vehicleType: 'Car',
      colour: 'Red',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      numberOfDoors: 4,
      co2Emissions: '120 g/km',
      noxEmissions: 0.05,
      numberOfKeys: 2
    },
    ownership: {
      logBook: 'Present',
      numberOfOwners: 1,
      dateOfRegistration: new Date('2020-01-01')
    },
    equipment: ['Air Conditioning', 'Bluetooth']
  }
}

export const mockVehicles: Vehicle[] = [mockVehicle]
