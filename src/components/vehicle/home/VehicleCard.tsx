import {
  Card,
  ImagePlaceholder,
  Content,
  Title,
  InfoRow,
  Price
} from './VehicleCard.styled'

import { useRouter } from 'next/navigation'
import { Vehicle } from '@/interfaces/vehicle.interface'
import { formatNumberWithSeparators } from '@/helpers/numbers'

type Props = {
  vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: Props) {
  const router = useRouter()
  const auctionDate = new Date(vehicle.auctionDateTime)

  return (
    <Card
      onClick={() => {
        localStorage.setItem('selectedVehicle', JSON.stringify(vehicle))
        router.push(`/vehicle/${vehicle.id}`)
      }}
    >
      <ImagePlaceholder>📷 Image</ImagePlaceholder>

      <Content>
        <Title>
          {vehicle.make} {vehicle.model}
        </Title>

        <InfoRow>
          <span>{vehicle.year}</span>
          <span>{`${vehicle.mileage}km`}</span>
        </InfoRow>

        <InfoRow>
          <div>
            <p className="text-xs text-muted-foreground">Auction date:</p>
            <p className="text-sm">
              {auctionDate.toLocaleDateString()} -{' '}
              {auctionDate.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>

          <Price>
            {`€${formatNumberWithSeparators(vehicle.startingBid.toString())}`}
          </Price>
        </InfoRow>
      </Content>
    </Card>
  )
}
