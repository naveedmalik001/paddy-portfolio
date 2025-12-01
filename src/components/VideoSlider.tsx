'use client'

import { useState, useEffect } from 'react'
import VideoModal from './VideoModal'
import { seedVideos } from '@/data/seed'

export default function VideoSlider() {
  const [videos, setVideos] = useState(seedVideos)
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState(videos[0])
  const [autoplay, setAutoplay] = useState(false)

  useEffect(() => {
    if (autoplay && videos.length > 1) {
      const interval = setInterval(() => {
        const currentIndex = videos.findIndex(v => v.id === selectedVideo.id)
        const nextIndex = (currentIndex + 1) % videos.length
        setSelectedVideo(videos[nextIndex])
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [autoplay, selectedVideo, videos])

  const handleVideoClick = (video: typeof videos[0]) => {
    setCurrentVideo(video.youtubeId)
    setSelectedVideo(video)
    setAutoplay(false) // Stop autoplay when user clicks
  }

  const closeModal = () => {
    setCurrentVideo(null)
  }

  const nextVideo = () => {
    const currentIndex = videos.findIndex(v => v.id === selectedVideo.id)
    const nextIndex = (currentIndex + 1) % videos.length
    setSelectedVideo(videos[nextIndex])
  }

  const prevVideo = () => {
    const currentIndex = videos.findIndex(v => v.id === selectedVideo.id)
    const prevIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1
    setSelectedVideo(videos[prevIndex])
  }

  return (
    <section id="videos" className="section-padding bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Video</span> Portfolio
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A dynamic showcase of brand campaigns and creative video content.
          </p>
        </div>

        {/* Main Video Display */}
        <div className="mb-8">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Thumbnail/Preview */}
            <div className="relative w-full h-full">
              <img
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => handleVideoClick(selectedVideo)}
                  className="w-20 h-20 bg-primary/90 hover:bg-primary text-white rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Play video"
                >
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                <p className="text-white/80 mb-3">{selectedVideo.caption}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedVideo.deliverables.map((deliverable, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full backdrop-blur-sm"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevVideo}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Previous video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextVideo}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Next video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="mb-8">
          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">More Videos</h3>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2 text-white/60 text-sm">
                <input
                  type="checkbox"
                  checked={autoplay}
                  onChange={(e) => setAutoplay(e.target.checked)}
                  className="w-4 h-4 text-primary bg-white/20 border-white/30 rounded focus:ring-primary"
                />
                <span>Autoplay</span>
              </label>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => handleVideoClick(video)}
                className={`relative aspect-video rounded-lg overflow-hidden transform transition-all duration-300 ${
                  selectedVideo.id === video.id
                    ? 'ring-2 ring-primary scale-105'
                    : 'hover:scale-105'
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Video Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h4 className="text-white font-medium text-sm line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-white/60 text-xs mt-1">{video.date}</p>
                </div>

                {/* Active Indicator */}
                {selectedVideo.id === video.id && (
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Interested in creating compelling video content for your brand? Let's discuss your campaign goals and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Start a Video Campaign
            </a>
            <a href="#media-kit" className="btn-secondary">
              Download Media Kit
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!currentVideo}
        onClose={closeModal}
        videoId={currentVideo || ''}
        title={selectedVideo.title}
      />
    </section>
  )
}