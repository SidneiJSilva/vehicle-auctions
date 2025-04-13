import Image from 'next/image'
import carLogo from '@/assets/car_logo_small.png'
import Link from 'next/link'
import Separator from '@/components/layout/Separator'

import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <div className="mb-2 ">
      <div className="flex items-center pb-2 pt-2">
        <div className="w-24">
          <Link href="/">
            <Image src={carLogo} alt="Vehicle Auctions Logo" priority />
          </Link>
        </div>

        <Link href="/vehicle-list">
          <Button
            variant="link"
            className="cursor-pointer hover:text-teal-500 "
          >
            <span className="text-lg font-bold">Car list</span>
          </Button>
        </Link>
      </div>

      <Separator />
    </div>
  )
}
