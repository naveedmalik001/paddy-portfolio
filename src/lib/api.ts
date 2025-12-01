// API utilities for the portfolio application

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || ''

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  total?: number
}

// Videos API
export async function fetchVideos(): Promise<ApiResponse<Video[]>> {
  try {
    const response = await fetch(`${API_BASE}/api/videos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache: 'no-store' for real-time data or keep default for better performance
      cache: 'force-cache', // Cache for 5 minutes
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch videos: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching videos:', error)
    throw error
  }
}

// Enquiry API
export async function submitEnquiry(enquiryData: EnquiryForm): Promise<ApiResponse<{ ticketId: string }>> {
  try {
    const response = await fetch(`${API_BASE}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enquiryData),
      // No caching for POST requests
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `Failed to submit enquiry: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error submitting enquiry:', error)
    throw error
  }
}

// Analytics helpers (client-side)
export class Analytics {
  // Track form submissions
  static trackFormSubmit(formName: string, success: boolean, ticketId?: string) {
    console.log('📊 Analytics - Form Submit:', {
      form: formName,
      success,
      ticketId,
      timestamp: new Date().toISOString()
    })

    // In a real app, you would send this to your analytics service
    // Example: gtag('event', 'form_submit', { form_name: formName, success })
  }

  // Track video interactions
  static trackVideoInteraction(videoId: string, action: 'play' | 'pause' | 'complete') {
    console.log('📊 Analytics - Video Interaction:', {
      videoId,
      action,
      timestamp: new Date().toISOString()
    })

    // In a real app: gtag('event', 'video_interaction', { video_id: videoId, action })
  }

  // Track CTA clicks
  static trackCTAClick(ctaName: string, location: string) {
    console.log('📊 Analytics - CTA Click:', {
      cta: ctaName,
      location,
      timestamp: new Date().toISOString()
    })

    // In a real app: gtag('event', 'cta_click', { cta_name: ctaName, location })
  }

  // Track page views (if you have multiple pages)
  static trackPageView(pageName: string) {
    console.log('📊 Analytics - Page View:', {
      page: pageName,
      timestamp: new Date().toISOString()
    })

    // In a real app: gtag('config', 'GA_MEASUREMENT_ID', { page_path: pageName })
  }
}

// Email notification utilities (for future implementation)
export class EmailService {
  // In a real app, this would connect to your email service
  static async sendEnquiryConfirmation(email: string, ticketId: string) {
    console.log('📧 Sending confirmation email to:', email, 'Ticket:', ticketId)

    // Implementation would depend on your email service:
    // - SendGrid
    // - AWS SES
    // - Mailgun
    // - Resend
    // etc.
  }

  static async notifyTeam(enquiryData: EnquiryForm, ticketId: string) {
    console.log('📧 Notifying team about new enquiry:', {
      ticketId,
      name: enquiryData.name,
      brand: enquiryData.brand,
      timestamp: new Date().toISOString()
    })

    // Send notification to your team email/Slack/Discord
  }
}

// Validation utilities
export class Validation {
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  static isValidUrl(url: string): boolean {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  static sanitizeInput(input: string): string {
    return input.trim().replace(/[<>]/g, '')
  }
}

// Error handling utilities
export class ErrorHandler {
  static handleApiError(error: any): string {
    if (error instanceof Error) {
      return error.message
    }
    if (typeof error === 'string') {
      return error
    }
    return 'An unexpected error occurred'
  }

  static logError(error: any, context?: string) {
    console.error('💥 Error:', {
      error,
      context,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server'
    })

    // In a real app, you would send this to your error tracking service:
    // - Sentry
    // - LogRocket
    // - Bugsnag
    // etc.
  }
}

// Type imports (these should match your seed.ts types)
import type { Video, EnquiryForm } from '@/data/seed'