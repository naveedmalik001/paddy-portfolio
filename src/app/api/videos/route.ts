import { NextResponse } from 'next/server'
import { seedVideos } from '@/data/seed'

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))

  // In a real application, this would fetch from a database
  // For now, we return the seed data
  return NextResponse.json({
    success: true,
    data: seedVideos,
    total: seedVideos.length
  })
}

export async function POST() {
  // For future implementation of video uploads
  return NextResponse.json({
    success: false,
    message: 'Video upload not implemented yet'
  }, { status: 501 })
}