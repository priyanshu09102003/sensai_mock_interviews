import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import InterviewCard from '@/components/InterviewCard';


const page = () => {
  return (
   <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>

          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>


          <Button asChild className='cursor-pointer btn-primary max-sm:w-full'>
                <Link href="/interview">Generate an Interview <Sparkles /></Link> 
          </Button>
      </div>

      <Image src="/robot.png" alt='banner-img' width={360} height={360} className='max-sm:hidden' />

    </section>

    <section className='flex flex-col gap-6 mt-8'>

      <h2>Your Generated Interviews</h2>

      <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))

          }  

          {/* <p>You haven't generated any interviews yet</p> */}
      </div>

    </section>

    <section className='flex flex-col gap-6 mt-8'>

      <h2>Take an Interview</h2>

      <div className='interviews-section'>
            {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))

          } 
      </div>

    </section>
   </>
  )
}

export default page
