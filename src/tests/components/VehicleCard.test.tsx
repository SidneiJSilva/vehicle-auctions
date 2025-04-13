import { render, screen } from '@testing-library/react'
import VehicleCard from '@/components/vehicle/home/VehicleCard'
import { fireEvent } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import '@testing-library/jest-dom'

const mockVehicle = {
  id: '1',
  make: 'Toyota',
  model: 'Corolla',
  engineSize: '1.8L',
  fuel: 'Gasoline',
  year: 2020,
  mileage: 35000,
  auctionDateTime: new Date(Date.now() + 2 * 86400000),
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

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

describe('VehicleCard', () => {
  it('renders make and model correctly', () => {
    render(<VehicleCard vehicle={mockVehicle} />)
    expect(screen.getByText(/Toyota Corolla/i)).toBeInTheDocument()
  })

  it('render year and mileage', () => {
    render(<VehicleCard vehicle={mockVehicle} />)
    expect(screen.getByText(/2020/)).toBeInTheDocument()
    expect(screen.getByText(/35000km/)).toBeInTheDocument()
  })

  it('displays the formatted auction date', () => {
    render(<VehicleCard vehicle={mockVehicle} />)
    expect(screen.getByText(/Auction date/i)).toBeInTheDocument()
  })

  it('render formated price', () => {
    render(<VehicleCard vehicle={mockVehicle} />)
    expect(screen.getByText(/€15.000/)).toBeInTheDocument()
  })

  it('redirect to vehicle details page', () => {
    const push = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push })

    render(<VehicleCard vehicle={mockVehicle} />)

    const card = screen.getByText(/Toyota Corolla/i).closest('div')
    expect(card).toBeTruthy()

    if (card) {
      fireEvent.click(card)
    }

    expect(push).toHaveBeenCalledWith('/vehicle/1')
  })
})
