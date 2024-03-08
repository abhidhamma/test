/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/yWNn01Luj4o
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Select() {
  return (
    <Card>
      <CardHeader className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2'>
        <CardTitle className='text-2xl'>Korea All-Inclusive Package</CardTitle>
        <CardDescription className='text-base text-gray-500 dark:text-gray-400'>
          Package includes round-trip airfare, accommodation, and guided tours to popular
          attractions in Korea.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2'>
        <div className='text-4xl font-semibold'>₩99,000</div>
        <div className='text-sm text-gray-500 dark:text-gray-400'>Price per person</div>
        <Button size='lg'>Book now</Button>
      </CardContent>
    </Card>
  )
}
