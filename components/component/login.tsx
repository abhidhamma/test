import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <div className='bg-gray-50 dark:bg-gray-950'>
        <div className='py-6 lg:py-12'>
          <div className='max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-4 lg:gap-8'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight'>Explore Korea for 99,000 won</h1>
              <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 md:mx-auto'>
                Your one-stop service for a seamless journey to Korea from Southeast Asia. Let us
                take care of your visa, flights, and accommodations, so you can focus on making
                unforgettable memories.
              </p>
            </div>
            <div className='grid gap-4 sm:gap-8 w-full max-w-sm sm:max-w-none'>
              <form className='grid gap-4'>
                <div className='grid gap-1.5'>
                  <Label className='text-sm' htmlFor='name'>
                    Full name
                  </Label>
                  <Input id='name' placeholder='Enter your full name' required />
                </div>
                <div className='grid gap-1.5'>
                  <Label className='text-sm' htmlFor='email'>
                    Email
                  </Label>
                  <Input id='email' placeholder='Enter your email' required type='email' />
                </div>
                <div className='grid gap-1.5'>
                  <Label className='text-sm' htmlFor='phone'>
                    Phone number
                  </Label>
                  <Input id='phone' placeholder='Enter your phone number' required type='tel' />
                </div>
                <Link href={'/select'}>
                  <Button className='w-full' size='sm' type='submit'>
                    Get started
                  </Button>
                </Link>
              </form>
              <div className='flex flex-col gap-2'>
                <Button size='sm' variant='outline'>
                  <ChromeIcon className='w-4 h-4' />
                  Sign up with Google{'\n                            '}
                </Button>
                <Button size='sm' variant='outline'>
                  <FacebookIcon className='w-4 h-4' />
                  Sign up with Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 dark:bg-gray-800'>
        <div className='max-w-6xl mx-auto grid gap-6 px-4 md:grid-cols-2 md:gap-10 lg:px-6'>
          <div className='flex flex-col justify-center gap-4'>
            <div className='grid gap-2'>
              <h2 className='text-3xl font-semibold tracking-tight'>Lets make it happen</h2>
              <p className='text-gray-500 dark:text-gray-400'>
                Your journey to Korea starts here. Fill in your details and well take care of the
                rest.
              </p>
            </div>
            <div className='grid gap-4'>
              <div className='grid gap-1.5'>
                <Label className='text-sm' htmlFor='name'>
                  Full name
                </Label>
                <Input id='name' placeholder='Enter your full name' required />
              </div>
              <div className='grid gap-1.5'>
                <Label className='text-sm' htmlFor='email'>
                  Email
                </Label>
                <Input id='email' placeholder='Enter your email' required type='email' />
              </div>
              <div className='grid gap-1.5'>
                <Label className='text-sm' htmlFor='phone'>
                  Phone number
                </Label>
                <Input id='phone' placeholder='Enter your phone number' required type='tel' />
              </div>
              <div className='grid gap-1.5'>
                <Label className='text-sm' htmlFor='message'>
                  Additional information
                </Label>
                <Textarea id='message' placeholder='Enter your message' required />
              </div>
              {/* <Button size='sm'>Submit</Button> */}
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <img
              alt='Korea'
              className='aspect-video overflow-hidden rounded-xl object-cover object-center'
              height={400}
              src='/placeholder.svg'
              width={500}
            />
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto grid gap-6 px-4 lg:gap-10 lg:px-6'>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <h2 className='text-3xl font-semibold tracking-tight'>Your journey to Korea</h2>
            <p className='text-gray-500 dark:text-gray-400'>
              Your adventure awaits! Weve curated a list of must-visit attractions and local
              experiences to make your trip to Korea unforgettable.
            </p>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <Card className='flex flex-col gap-4'>
              <CardHeader className='flex flex-col gap-1'>
                <CardTitle className='text-base'>Gyeongbokgung Palace Ticket</CardTitle>
                <CardDescription className='text-sm'>
                  Discover the beauty of Koreas history with a visit to Gyeongbokgung Palace.
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-2'>
                <div className='text-2xl font-semibold'>₩10,000</div>
                <Button size='sm'>Add to itinerary</Button>
              </CardContent>
            </Card>
            <Card className='flex flex-col gap-4'>
              <CardHeader className='flex flex-col gap-1'>
                <CardTitle className='text-base'>Han River Cruise Experience</CardTitle>
                <CardDescription className='text-sm'>
                  Enjoy a scenic cruise along the Han River and take in stunning views of Seoul.
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-2'>
                <div className='text-2xl font-semibold'>₩25,000</div>
                <Button size='sm'>Add to itinerary</Button>
              </CardContent>
            </Card>
            <Card className='flex flex-col gap-4'>
              <CardHeader className='flex flex-col gap-1'>
                <CardTitle className='text-base'>Street Food Tour in Myeongdong</CardTitle>
                <CardDescription className='text-sm'>
                  Indulge in a culinary adventure with a guided tour of Myeongdongs best street food
                  stalls.
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-2'>
                <div className='text-2xl font-semibold'>₩20,000</div>
                <Button size='sm'>Add to itinerary</Button>
              </CardContent>
            </Card>
            <Card className='flex flex-col gap-4'>
              <CardHeader className='flex flex-col gap-1'>
                <CardTitle className='text-base'>
                  DMZ Tour: Journey to the Korean Demilitarized Zone
                </CardTitle>
                <CardDescription className='text-sm'>
                  Explore the historic DMZ and learn about the divided Korean peninsulas history.
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-2'>
                <div className='text-2xl font-semibold'>₩50,000</div>
                <Button size='sm'>Add to itinerary</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <h2 className='text-3xl font-semibold tracking-tight'>Terms & Conditions</h2>
          </div>
          <div className='prose'>
            <ul>
              <li>Package price is per person and based on double occupancy.</li>
              <li>
                Single occupancy is available at an additional cost. Please contact us for more
                information.
              </li>
              <li>
                Package includes round-trip economy class airfare from select airports in Southeast
                Asia to Incheon International Airport.
              </li>
              <li>Accommodations are based on a 3-night stay in a 4-star hotel in Seoul.</li>
              <li>Additional nights and hotel upgrades are available for an additional fee.</li>
              <li>
                Itinerary is subject to availability and changes based on flight schedules and other
                factors.
              </li>
              <li>
                Visa assistance is available for Southeast Asian passport holders. Additional fees
                may apply.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='10' />
      <circle cx='12' cy='12' r='4' />
      <line x1='21.17' x2='12' y1='8' y2='8' />
      <line x1='3.95' x2='8.54' y1='6.06' y2='14' />
      <line x1='10.88' x2='15.46' y1='21.94' y2='14' />
    </svg>
  )
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
  )
}
