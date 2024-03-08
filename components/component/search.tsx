/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/2kVpkWYblRh
 */
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { CardContent, Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export function Search() {
  return (
    <div className='bg-gray-50 dark:bg-gray-950'>
      <div className='py-6 md:py-12 lg:py-16'>
        <div className='container px-4 md:px-6 flex flex-col items-center gap-4'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none'>
              Fly to Korea
            </h1>
            <p className='mx-auto max-w-[600px] text-gray-500 dark:text-gray-400'>
              Book the best flights from Southeast Asia to Korea. Enter your travel dates to get
              started.
            </p>
          </div>
          <Card className='w-full max-w-sm p-0'>
            <CardContent className='p-4 md:p-6 flex flex-col gap-4'>
              <div className='grid gap-1'>
                <Label className='text-sm' htmlFor='from'>
                  From
                </Label>
                <Input id='from' placeholder='Enter city or airport' />
              </div>
              <div className='grid gap-1'>
                <Label className='text-sm' htmlFor='to'>
                  To
                </Label>
                <Input id='to' placeholder='Enter city or airport' />
              </div>
              <div className='grid gap-1'>
                <Label className='text-sm' htmlFor='depart'>
                  Departing
                </Label>
                <Input id='depart' type='date' value='2024-07-01' />
              </div>
              <div className='grid gap-1'>
                <Label className='text-sm' htmlFor='return'>
                  Returning
                </Label>
                <Input id='return' type='date' value='2024-07-08' />
              </div>
              <div className='grid gap-1'>
                <Label className='text-sm' htmlFor='class'>
                  Class
                </Label>
                <Select id='class'>
                  <SelectValue placeholder='Select class' />
                  <SelectTrigger className='w-full'>
                    <SelectValue />
                    {/* <ChevronDownIcon className='ml-auto w-4 h-4' /> */}
                  </SelectTrigger>
                  <SelectContent className='w-full top-10'>
                    <SelectItem value='economy'>Economy</SelectItem>
                    <SelectItem value='premium'>Premium Economy</SelectItem>
                    <SelectItem value='business'>Business</SelectItem>
                    <SelectItem value='first'>First Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Link href={'/login'}>
                <Button className='self-end w-full' size='lg'>
                  Search
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='container grid gap-8 px-4 md:px-6 py-8 md:py-12'>
        <div className='grid gap-2'>
          <h2 className='text-2xl font-semibold tracking-tighter'>Available flights</h2>
          <p className='text-gray-500 dark:text-gray-400'>
            Showing the best flights from Southeast Asia to Korea for your selected dates.
          </p>
        </div>
        <Card>
          <CardContent className='p-4 md:p-6 grid gap-4'>
            <div className='flex items-center gap-4'>
              <div className='grid gap-1.5'>
                <div className='font-semibold'>Flight 123</div>
                <div className='text-xs text-gray-500 dark:text-gray-400'>2h 30m · Direct</div>
              </div>
              <div className='ml-auto font-semibold text-right'>
                99,000 won
                <div className='text-xs text-gray-500 dark:text-gray-400'>
                  Includes taxes & fees
                </div>
              </div>
            </div>
            <Separator />
            <div className='flex items-center gap-4'>
              <div className='grid gap-1.5'>
                <div className='font-semibold'>KE 123</div>
                <div className='text-xs text-gray-500 dark:text-gray-400'>Korean Air · Economy</div>
              </div>
              <div className='ml-auto font-semibold text-right'>
                99,000 won
                <div className='text-xs text-gray-500 dark:text-gray-400'>
                  Includes taxes & fees
                </div>
              </div>
            </div>
            <Separator />
            <div className='flex items-center gap-4'>
              <div className='grid gap-1.5'>
                <div className='font-semibold'>OZ 123</div>
                <div className='text-xs text-gray-500 dark:text-gray-400'>
                  Asiana Airlines · Economy
                </div>
              </div>
              <div className='ml-auto font-semibold text-right'>
                99,000 won
                <div className='text-xs text-gray-500 dark:text-gray-400'>
                  Includes taxes & fees
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    // <svg
    //   {...props}
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="2"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    // >
    //   <path d="m6 9 6 6 6-6" />
    // </svg>
    <></>
  )
}
