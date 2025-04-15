import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

import { Vehicle } from '@/interfaces/vehicle.interface'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import PriceRangeSlider from '@/components/filters/PriceRangeSlider'

import { useFilters } from '@/hooks/useFilters'
import useVehicleStore from '@/store/vehicle.store'

export default function Filters() {
  const {
    selectedMake,
    selectedModel,
    selectedPage,
    setSelectedMake,
    setSelectedModel,
    setSelectedPage,
    itemsPerPage,
    setItemsPerPage,
    itemsPerPageOptions,
    resetFilters,
    showOnlyFavorites,
    setShowOnlyFavorites,
    setSortOption
  } = useVehicleStore()

  const { uniqueMakes, uniqueModels, totalPages } = useFilters()

  const getVisiblePages = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = []

    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (selectedPage <= 3) {
      pages.push(1, 2, 3, 4, 5, 'ellipsis', totalPages)
    } else if (selectedPage >= totalPages - 2) {
      pages.push(
        1,
        'ellipsis',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      )
    } else {
      pages.push(
        1,
        'ellipsis',
        selectedPage - 1,
        selectedPage,
        selectedPage + 1,
        'ellipsis',
        totalPages
      )
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  const sortOptions = [
    { value: 'clear', label: 'No sorting' },
    { value: 'make-asc', label: 'Make ↑' },
    { value: 'make-desc', label: 'Make ↓' },
    { value: 'startingBid-asc', label: 'Starting Bid ↑' },
    { value: 'startingBid-desc', label: 'Starting Bid ↓' },
    { value: 'mileage-asc', label: 'Mileage ↑' },
    { value: 'mileage-desc', label: 'Mileage ↓' },
    { value: 'auctionDateTime-asc', label: 'Auction Date ↑' },
    { value: 'auctionDateTime-desc', label: 'Auction Date ↓' }
  ]

  const handleSortChange = (value: string) => {
    if (value === 'clear') {
      setSortOption(null)
    } else {
      const [field, direction] = value.split('-') as [
        keyof Vehicle,
        'asc' | 'desc'
      ]
      setSortOption({ field, direction })
    }
    setSelectedPage(1)
  }

  return (
    <div className="border rounded">
      <div className="grid grid-cols-4">
        <div className="border-r p-2 space-y-2 col-span-3">
          <h2 className="font-semibold text-sm">Filter by</h2>

          <div className="flex gap-2 items-center justify-between">
            <Select
              value={selectedMake ?? undefined}
              onValueChange={(value) => setSelectedMake(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={5}>
                {uniqueMakes.map((make) => (
                  <SelectItem key={make} value={make}>
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedModel ?? undefined}
              onValueChange={(value) => setSelectedModel(value)}
              disabled={!selectedMake}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Model" />
              </SelectTrigger>

              <SelectContent position="popper" sideOffset={5}>
                {uniqueModels.map((model) => (
                  <SelectItem key={model} value={model}>
                    {model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Checkbox
                id="fav-only"
                className="cursor-pointer"
                checked={showOnlyFavorites}
                onCheckedChange={(checked) => {
                  setShowOnlyFavorites(!!checked)
                  setSelectedPage(1)
                }}
              />

              <label htmlFor="fav-only" className="text-sm">
                Favorites
              </label>
            </div>

            <Button
              variant="destructive"
              size="sm"
              onClick={resetFilters}
              className="text-xs cursor-pointer"
            >
              Clean filters
            </Button>
          </div>

          <PriceRangeSlider />
        </div>

        <div className="p-2">
          <h2 className="font-semibold text-sm pb-2">Sort by</h2>

          <Select onValueChange={handleSortChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>

            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex border-t p-2 justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="font-semibold text-sm">Page size</h2>

          <Select
            value={itemsPerPage ?? undefined}
            onValueChange={(value) => setItemsPerPage(value)}
          >
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder="Model" />
            </SelectTrigger>

            <SelectContent position="popper">
              {itemsPerPageOptions.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="cursor-pointer"
                  onClick={() => setSelectedPage(Math.max(1, selectedPage - 1))}
                />
              </PaginationItem>

              {visiblePages.map((page, idx) =>
                page === 'ellipsis' ? (
                  <PaginationItem key={`ellipsis-${idx}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={page}>
                    <PaginationLink
                      className="cursor-pointer"
                      isActive={page === selectedPage}
                      onClick={() => setSelectedPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  className="cursor-pointer"
                  onClick={() =>
                    setSelectedPage(Math.min(totalPages, selectedPage + 1))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
