import { render, screen, fireEvent } from '@testing-library/react'
import VehicleDetails from '@/components/vehicle/details/VehicleDetails'
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation'
import { mockVehicle } from '../mocks/mockVechiles'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

describe('VehicleDetails', () => {
  beforeEach(() => {
    localStorage.setItem('selectedVehicle', JSON.stringify(mockVehicle))
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('renders vehicle details from localStorage', () => {
    render(<VehicleDetails id="1" />)

    expect(
      screen.getByRole('heading', { name: /Toyota Corolla/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Red/)).toBeInTheDocument()
    expect(screen.getByText(/Air Conditioning/)).toBeInTheDocument()
  })

  it('navigates back to list on "Back to list" button click', () => {
    const push = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push })

    render(<VehicleDetails id="1" />)

    const backButton = screen.getByRole('button', { name: /Back to list/i })
    fireEvent.click(backButton)

    expect(push).toHaveBeenCalledWith('/vehicle-list')
  })
})
