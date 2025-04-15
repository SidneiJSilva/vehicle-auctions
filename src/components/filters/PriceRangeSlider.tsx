'use client'

import { useEffect, useState } from 'react'
import { Slider } from '@/components/ui/slider'
import useVehicleStore from '@/store/vehicle.store'
import { useFilters } from '@/hooks/useFilters'

export default function PriceRangeSlider() {
  const { priceRange } = useFilters()
  const { selectedPriceRange, setSelectedPriceRange } = useVehicleStore()

  const [value, setValue] = useState<[number, number]>(selectedPriceRange)

  useEffect(() => {
    setValue(selectedPriceRange)
  }, [selectedPriceRange])

  const handleValueChange = (newValue: number[]) => {
    const validRange = newValue as [number, number]
    setValue(validRange)
    setSelectedPriceRange(validRange)
  }

  return (
    <div className="w-full space-y-4 p-4">
      <div className="flex justify-between text-xs font-medium">
        <span>€{value[0]}</span>
        <span>€{value[1]}</span>
      </div>

      <Slider
        value={value}
        onValueChange={handleValueChange}
        min={priceRange[0]}
        max={priceRange[1]}
        step={300}
        minStepsBetweenThumbs={1}
      />

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Min: €{priceRange[0]}</span>
        <span>Max: €{priceRange[1]}</span>
      </div>
    </div>
  )
}
