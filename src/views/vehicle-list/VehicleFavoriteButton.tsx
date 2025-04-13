import useVehicleStore from '@/store/vehicleStore'
import { FavoriteButton } from '../home/VehicleCard.styled'

interface VehicleFavoriteButtonProps {
  id: string
}

export default function VehicleFavoriteButton({
  id
}: VehicleFavoriteButtonProps) {
  const isFavorite = useVehicleStore((state) => state.favVehicles.includes(id))
  const addFav = useVehicleStore((state) => state.addFav)
  const removeFav = useVehicleStore((state) => state.removeFav)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (isFavorite) {
      removeFav(id)
    } else {
      addFav(id)
    }
  }

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <FavoriteButton data-active={isFavorite} aria-label="Favoritar veículo">
        {isFavorite ? '❤️' : '🤍'}
      </FavoriteButton>
    </div>
  )
}
