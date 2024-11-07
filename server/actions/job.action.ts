'use server';
import type { AddJobSchema } from '@/schema';
import { auth } from '../auth';
import { prisma } from '../db';

export async function getJobs() {
  return await prisma.job.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function createJob(data: AddJobSchema) {
  const session = await auth();
  return await prisma.job.create({
    data: { ...data, userId: session?.user?.id! },
  });
}
