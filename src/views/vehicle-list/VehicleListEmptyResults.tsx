import { FilterX } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EmptyResultsProps {
  onResetFilters?: () => void
}

export function VehicleListEmptyResults({ onResetFilters }: EmptyResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <FilterX className="w-16 h-16 text-gray-400 mb-4" />

      <h3 className="text-xl font-semibold mb-2">No vehicles found</h3>

      <p className="text-gray-600 max-w-md mb-6">
        We couldnt find any results with the current filters
      </p>

      <Button
        onClick={onResetFilters}
        variant="destructive"
        className="cursor-pointer"
      >
        Clean filters
      </Button>
    </div>
  )
}
