import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import InterviewCard from '@/components/InterviewCard';
import { getCurrentUser } from '@/lib/actions/auth.action';
import { getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action';

const page = async () => {
  const user = await getCurrentUser();

  // Parallel request to generate both of them together
  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! })
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>

          <Button asChild className='cursor-pointer btn-primary max-sm:w-full'>
            <Link href="/interview">
              Generate an Interview <Sparkles />
            </Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt='banner-img'
          width={360}
          height={360}
          className='max-sm:hidden'
        />
      </section>

      {/* User's Interviews */}
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Generated Interviews</h2>

        <div className='interviews-section'>
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                {...interview}
                key={interview.id}
                userId={user?.id}
              />
            ))
          ) : (
            <p>You haven't generated any interviews yet</p>
          )}
        </div>
      </section>

      {/* Latest Interviews */}
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>

        <div className='interviews-section'>
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard
                {...interview}
                key={interview.id}
                userId={user?.id}
              />
            ))
          ) : (
            <p>There are no new interviews available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
