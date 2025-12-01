'use client'

import { useEffect, useRef } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
  title: string
}

export default function VideoModal({ isOpen, onClose, videoId, title }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className="bg-surface rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-xl font-semibold text-white truncate mr-4">{title}</h3>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
            aria-label="Close video modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Container */}
        <div className="aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Video Info */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-white/60 text-sm">Now playing</p>
              <p className="text-white font-medium">{title}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
                className="btn-primary text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}