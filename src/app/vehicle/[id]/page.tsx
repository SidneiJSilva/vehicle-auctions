import VehicleDetails from '@/components/vehicle/details/VehicleDetails'

export default async function Vehicle({ params }: { params: { id: string } }) {
  const { id } = await params
  // Dynamic APIs are Asynchronous
  // In Next 15, these APIs have been made asynchronous.
  // If the warning occurred on the Server (e.g. a route handler,
  // or a Server Component), you must await the dynamic API to
  // access its properties
  // https://nextjs.org/docs/messages/sync-dynamic-apis

  return <VehicleDetails id={id} />
}
