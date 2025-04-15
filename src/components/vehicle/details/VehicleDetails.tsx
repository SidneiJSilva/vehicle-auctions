'use client'

import { notFound } from 'next/navigation'
import VehicleDetailsImageGallery from './VehicleDetailsImageGallery'
import VehicleDetailsSidebar from './VehicleDetailsSidebar'
import { Button } from '@/components/ui/button'

import useVehicleStore from '@/store/vehicle.store'
import type { Vehicle } from '@/interfaces/vehicle.interface'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  id: string
}

export default function VehicleDetails({ id }: Props) {
  const router = useRouter()

  const { vehicleList } = useVehicleStore()

  let vehicle = vehicleList.find((v) => v.id === id)

  if (!vehicle && typeof window !== 'undefined') {
    const stored = localStorage.getItem('selectedVehicle')
    if (stored) {
      try {
        const parsed: Vehicle = JSON.parse(stored)
        if (parsed.id === id) {
          vehicle = parsed
        }
      } catch (e) {
        console.error('Erro ao carregar veículo do localStorage', e)
      }
    }
  }

  useEffect(() => {
    const cleanup = () => {
      localStorage.removeItem('selectedVehicle')
    }

    return cleanup
  }, [])

  if (!vehicle) {
    return notFound()
  }

  return (
    <div className="p-6 space-y-4">
      <Button
        variant="outline"
        className="cursor-pointer"
        onClick={() => router.push('/vehicle-list')}
      >
        Back to list
      </Button>

      <h1 className="text-4xl font-bold">
        {vehicle.make} {vehicle.model} ({vehicle.year})
      </h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <VehicleDetailsImageGallery />
        </div>

        <div>
          <VehicleDetailsSidebar vehicle={vehicle} />
        </div>
      </div>
    </div>
  )
}
