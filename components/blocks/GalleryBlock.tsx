'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import Container from '@/components/layout/Container'
import Modal from '@/components/layout/Modal'
import Section from '@/components/layout/Section'
import MediaImage from '@/components/media/MediaImage'
import type { PageBlock } from '@/lib/contentful/models/page'

export default function GalleryBlock({
  block,
}: {
  block: Extract<PageBlock, { type: 'gallery' }>
}) {
  const id = useId()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Section id={`gallery-${block.id}`} className="py-16">
      <Container className="flex flex-col gap-6">
        <header className="flex flex-col gap-1">
          {block.title ? (
            <h2 className="text-3xl font-bold">{block.title}</h2>
          ) : null}
          {block.description ? (
            <p className="text-gray-600">{block.description}</p>
          ) : null}
        </header>

        {block.images.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {block.images.map(img => (
              <Link
                onClick={e => {
                  e.preventDefault()
                  setIsOpen(true)
                }}
                aria-controls={id}
                aria-expanded={isOpen}
                aria-haspopup="dialog"
                href={img.src}
                key={img.src}
              >
                <MediaImage
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="rounded-lg"
                />
              </Link>
            ))}
          </div>
        ) : null}

        <Modal
          title="Gallery"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          id={id}
        >
          {block.images.map(img => (
            <MediaImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          ))}
        </Modal>
      </Container>
    </Section>
  )
}
