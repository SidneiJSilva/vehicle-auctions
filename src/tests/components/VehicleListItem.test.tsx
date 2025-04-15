import { render, screen, fireEvent } from '@testing-library/react'
import VehicleListItem from '@/components/vehicle-list/VehicleListItem'
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation'
import { mockVehicle } from '../mocks/mockVechiles'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

describe('VehicleListItem', () => {
  it('renders vehicle information', () => {
    render(<VehicleListItem vehicle={mockVehicle} />)

    expect(screen.getByText(/Toyota Corolla/i)).toBeInTheDocument()
    expect(screen.getByText(/2020/)).toBeInTheDocument()
    expect(screen.getByText(/35.000km/i)).toBeInTheDocument()
    expect(screen.getByText(/15.000/i)).toBeInTheDocument()
  })

  it('redirects to details page on click', () => {
    const push = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push })

    render(<VehicleListItem vehicle={mockVehicle} />)

    const clickable = screen.getByText(/Toyota Corolla/i).closest('div')
    expect(clickable).toBeTruthy()

    if (clickable) {
      fireEvent.click(clickable)
    }

    expect(push).toHaveBeenCalledWith('/vehicle/1')
  })
})
