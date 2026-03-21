'use client'

import { useId, useState } from 'react'
import type { MainMenuItem } from '@/data/main-menu'
import { MainMenuNavigation } from './MainMenuNavigation'
export interface MainMenuProps {
  items: MainMenuItem[]
}

export default function MainMenu({ items }: MainMenuProps) {
  const id = useId()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        aria-label="Toggle overlay menu"
        aria-expanded={isOpen}
        aria-controls={id}
        type="button"
        className="md:hidden cursor-pointer hover:bg-gray-100 rounded-md p-2 w-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        🍔
      </button>
      <MainMenuNavigation items={items} />
    </div>
  )
}
