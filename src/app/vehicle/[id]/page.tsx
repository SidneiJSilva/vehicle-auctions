import VehicleDetails from '@/views/vehicle-list/VehicleDetails'

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params

  return <VehicleDetails id={id} />
}
