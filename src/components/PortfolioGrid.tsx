'use client'

import { useState } from 'react'
import { seedProjects } from '@/data/seed'

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'fashion', 'fitness', 'streetwear', 'technology']

  const filteredProjects = selectedCategory === 'all'
    ? seedProjects
    : seedProjects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Selected</span> Work
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A curated collection of brand collaborations and creative projects showcasing diverse styles and approaches.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'border border-primary/30 text-primary/70 hover:border-primary hover:text-primary'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group card hover:transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative aspect-video mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-4xl">📸</div>
                    <p className="text-white/60">Project Image</p>
                  </div>
                </div>

                {/* Overlay with play button if has video */}
                {project.videoId && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Project badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                  {project.category}
                </div>

                {/* Date */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                  {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-3">{project.brand}</p>
                  <p className="text-white/70 leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary/70 text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Deliverables */}
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((deliverable, deliverableIndex) => (
                    <span
                      key={deliverableIndex}
                      className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-md"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="pt-4 border-t border-white/10">
                  <button className="text-primary hover:text-primary-light font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-300">
                    <span>{project.videoId ? 'Watch Campaign' : 'View Project'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-8">
            Want to see more? Check out my full video portfolio or let's discuss your next campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#videos" className="btn-primary">
              View Video Portfolio
            </a>
            <a href="#contact" className="btn-secondary">
              Start a Collaboration
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}