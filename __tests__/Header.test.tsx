import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Header from '@/app/components/Header'

describe('Header Component', () => {
  beforeEach(() => {
    window.scrollY = 0
  })

  test('renders header with logo', () => {
    render(<Header />)
    const logo = screen.getByText(/Azizbek/)
    expect(logo).toBeInTheDocument()
  })

  test('renders navigation links on desktop', () => {
    render(<Header />)
    expect(screen.getByText('HOME')).toBeInTheDocument()
    expect(screen.getByText('ABOUT')).toBeInTheDocument()
    expect(screen.getByText('SKILLS')).toBeInTheDocument()
    expect(screen.getByText('PROJECTS')).toBeInTheDocument()
  })

  test('renders contact in navigation', () => {
    render(<Header />)
    expect(screen.getByText('CONTACT')).toBeInTheDocument()
  })

  test('navigation links have correct href attributes', () => {
    render(<Header />)
    const homeLink = screen.getByRole('link', { name: /HOME/i })
    expect(homeLink).toHaveAttribute('href', '#home')
  })

  test('contact link has correct href', () => {
    render(<Header />)
    const contactLink = screen.getByRole('link', { name: /CONTACT/i })
    expect(contactLink).toHaveAttribute('href', '#contact')
  })

  test('logo is clickable and links to home', () => {
    render(<Header />)
    const links = screen.getAllByRole('link')
    const logoLink = links.find(link => link.getAttribute('href') === '#home')
    expect(logoLink).toBeInTheDocument()
  })

  test('renders all main navigation items', () => {
    render(<Header />)
    const navItems = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT']
    navItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  test('navigation links are accessible', () => {
    render(<Header />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  test('all navigation links are enabled', () => {
    render(<Header />)
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).not.toHaveAttribute('disabled')
    })
  })
})
