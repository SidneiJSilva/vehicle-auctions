import useVehicleStore from '@/store/vehicle.store'
import { Favorite } from '../vehicle/home/VehicleCard.styled'

type VehicleFavoriteButtonProps = {
  id: string
}

export default function FavoriteButton({ id }: VehicleFavoriteButtonProps) {
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
      <Favorite data-active={isFavorite} aria-label="Favoritar veículo">
        {isFavorite ? '❤️' : '🤍'}
      </Favorite>
    </div>
  )
}
