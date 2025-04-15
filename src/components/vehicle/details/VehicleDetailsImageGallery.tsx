export default function VehicleDetailsImageGallery() {
  const additionalImages = Array(4).fill(null)

  return (
    <div>
      <div className="w-full h-120 bg-muted flex items-center justify-center text-sm text-muted-foreground">
        📷 Image
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">
        {additionalImages.map((_, index) => (
          <div
            key={index}
            className="h-60 bg-muted flex items-center justify-center text-sm text-muted-foreground"
          >
            📷 Image {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
