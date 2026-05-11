import React from 'react'
import { render, screen } from '@testing-library/react'
import Skills from '@/app/components/Skills'

describe('Skills Component', () => {
  test('renders skills section with correct id', () => {
    render(<Skills />)
    const section = screen.getByRole('region')
    expect(section).toHaveAttribute('id', 'skills')
  })

  test('has proper background styling', () => {
    render(<Skills />)
    const section = screen.getByRole('region')
    expect(section.className).toContain('bg-black')
  })

  test('section is accessible', () => {
    render(<Skills />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  test('has proper text color', () => {
    render(<Skills />)
    const section = screen.getByRole('region')
    expect(section.className).toContain('text-white')
  })

  test('renders with proper padding', () => {
    render(<Skills />)
    const section = screen.getByRole('region')
    expect(section.className).toContain('py-')
  })

  test('contains overflow hidden', () => {
    render(<Skills />)
    const section = screen.getByRole('region')
    expect(section.className).toContain('overflow-hidden')
  })

  test('has heading elements', () => {
    render(<Skills />)
    const headings = screen.getAllByRole('heading')
    expect(headings.length).toBeGreaterThan(0)
  })

  test('is relative positioned', () => {
    render(<Skills />)
    const section = screen.getByRole('region')
    expect(section.className).toContain('relative')
  })

  test('component renders without errors', () => {
    const { container } = render(<Skills />)
    expect(container.firstChild).toBeInTheDocument()
  })

  test('renders frontend technologies', () => {
    render(<Skills />)
    expect(screen.getByText(/React/i)).toBeInTheDocument()
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument()
    expect(screen.getByText(/Next.js/i)).toBeInTheDocument()
  })

  test('renders backend technologies', () => {
    render(<Skills />)
    expect(screen.getByText(/Node.js/i)).toBeInTheDocument()
    expect(screen.getByText(/Python/i)).toBeInTheDocument()
    expect(screen.getByText(/PostgreSQL/i)).toBeInTheDocument()
    expect(screen.getByText(/Docker/i)).toBeInTheDocument()
  })

  test('renders security technologies', () => {
    render(<Skills />)
    expect(screen.getByText(/Kali Linux/i)).toBeInTheDocument()
    expect(screen.getByText(/Linux/i)).toBeInTheDocument()
    expect(screen.getByText(/Nginx/i)).toBeInTheDocument()
  })

  test('renders branch categories', () => {
    render(<Skills />)
    expect(screen.getByText(/Styling & UI/i)).toBeInTheDocument()
    expect(screen.getByText(/Logic & Frameworks/i)).toBeInTheDocument()
    expect(screen.getByText(/Database & DevOps/i)).toBeInTheDocument()
  })

  test('renders Tailwind CSS', () => {
    render(<Skills />)
    expect(screen.getByText(/Tailwind/i)).toBeInTheDocument()
  })

  test('renders Prisma ORM', () => {
    render(<Skills />)
    expect(screen.getByText(/Prisma/i)).toBeInTheDocument()
  })

  test('all technology elements are present', () => {
    render(<Skills />)
    const allText = screen.getByText(/FullStack_Map/i).parentElement?.textContent || ''
    expect(allText.length).toBeGreaterThan(100)
  })
})

