'use client'

import { useEffect, useState } from 'react'
import type { Vehicle } from '@/interfaces/vehicle.interface'
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { formatNumberWithSeparators } from '@/helpers/numbers'
import VehicleFavoriteButton from '../buttons/FavoriteButton'

type VehicleItemProps = {
  vehicle: Vehicle
}

export default function VehicleListItem({ vehicle }: VehicleItemProps) {
  const router = useRouter()

  const [timeLeft, setTimeLeft] = useState<string>('Calculating...')

  useEffect(() => {
    const auctionDate = new Date(vehicle.auctionDateTime)

    const updateTimer = () => {
      const now = new Date()
      const difference = auctionDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft('Auction started')

        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      const parts = []

      if (days > 0) parts.push(`${days}d`)
      if (hours > 0 || days > 0) parts.push(`${hours}h`)
      if (minutes > 0 || hours > 0 || days > 0) parts.push(`${minutes}m`)

      parts.push(`${seconds}s`)

      setTimeLeft(parts.join(' '))
    }

    updateTimer()

    const timerId = setInterval(updateTimer, 1000)

    return () => clearInterval(timerId)
  }, [vehicle])

  const redirectToDetails = () => {
    localStorage.setItem('selectedVehicle', JSON.stringify(vehicle))

    router.push(`/vehicle/${vehicle.id}`)
  }

  const auctionDate = new Date(vehicle.auctionDateTime)

  return (
    <Card
      className="hover:shadow-md transition-shadow cursor-pointer hover:bg-cyan-100/20"
      onClick={redirectToDetails}
    >
      <CardContent className="flex gap-4 items-stretch h-full">
        <div className="w-28 h-28 bg-muted flex items-center justify-center text-sm text-muted-foreground">
          Image
        </div>

        <div className="flex-1 space-y-2">
          <h2 className="text-lg font-semibold">
            {vehicle.make} {vehicle.model}
          </h2>

          <div className="text-sm text-muted-foreground">
            <div className="mb-2">
              <p>
                {vehicle.year} • {vehicle.engineSize} • {vehicle.fuel}
              </p>
              <p>Mileage: {vehicle.mileage.toLocaleString()} km</p>
            </div>

            <p>
              <span className="font-semibold">Auction starts: </span>
              {auctionDate.toLocaleDateString(undefined, {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })}{' '}
              at{' '}
              {auctionDate.toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit'
              })}
              <span className="ml-2 text-blue-600 font-medium">
                {timeLeft.startsWith('Auction')
                  ? ` (${timeLeft})`
                  : ` (in ${timeLeft})`}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex gap-1">
              <p className="text-lg">€</p>

              <div className="font-bold text-3xl">
                {formatNumberWithSeparators(vehicle.startingBid.toString())}
              </div>
            </div>
            <div className="flex justify-end text-xs">Start bid</div>
          </div>

          <div className="flex justify-end">
            <VehicleFavoriteButton id={vehicle.id} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
