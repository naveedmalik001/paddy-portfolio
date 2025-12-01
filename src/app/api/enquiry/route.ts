import { NextResponse } from 'next/server'
import { EnquiryForm } from '@/data/seed'

export async function POST(request: Request) {
  try {
    // Simulate API delay (400ms as specified in requirements)
    await new Promise(resolve => setTimeout(resolve, 400))

    const body: EnquiryForm = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'brand', 'email', 'collabType', 'budget', 'launchDate']
    const missingFields = requiredFields.filter(field => !body[field as keyof EnquiryForm]?.trim())

    if (missingFields.length > 0) {
      return NextResponse.json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid email format'
      }, { status: 400 })
    }

    // Generate a ticket ID (in real app, this would be from your backend)
    const ticketId = `ENQ-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`

    // In a real application, you would:
    // 1. Save the enquiry to your database
    // 2. Send confirmation email to the client
    // 3. Send notification email to yourself/team
    // 4. Integrate with your CRM or project management tool

    console.log('📧 New enquiry received:', {
      ticketId,
      name: body.name,
      brand: body.brand,
      email: body.email,
      collabType: body.collabType,
      budget: body.budget,
      launchDate: body.launchDate,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      ticketId,
      message: 'Enquiry submitted successfully. We will contact you within 24-48 hours.'
    })

  } catch (error) {
    console.error('Error processing enquiry:', error)
    return NextResponse.json({
      success: false,
      message: 'Internal server error'
    }, { status: 500 })
  }
}

export async function GET() {
  // For admin/staff to view enquiries (in a real app, this would be protected)
  return NextResponse.json({
    success: false,
    message: 'Not authorized to view enquiries'
  }, { status: 403 })
}