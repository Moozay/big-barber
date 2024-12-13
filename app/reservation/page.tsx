'use client'

import { createClient } from '@/utils/supabase/client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SubmitButton } from '@/components/submit-button'
import Link from 'next/link'

export default function Reservation() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const supabase = createClient()

  const getMinBookingTime = () => {
    const now = new Date()
    now.setHours(now.getHours() + 2, 0, 0, 0) // Add 2 hours to current time
    return now.toISOString().slice(0, 16)
  }

  const getMaxBookingTime = () => {
    const now = new Date()
    now.setDate(now.getDate() + 30) // Allow booking up to 30 days in the future
    return now.toISOString().slice(0, 16)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const appointmentData = {
      email: formData.get('email')?.toString() || '',
      name: formData.get('name')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      service: formData.get('service')?.toString() || '',
      time: formData.get('time')?.toString() || '',
      notes: formData.get('notes')?.toString() || '',
    }

    const { error } = await supabase.from('appointments').insert([appointmentData])

    setLoading(false)
  }

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center mb-4">Book Appointment</h1>
        <p className="text-sm text-center text-gray-600">
          Already have a reservation?{' '}
          <Link className="text-primary font-medium underline" href="/">
            Confirm here
          </Link>
        </p>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>

        {/* Name */}
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            type="text"
            placeholder="John Doe"
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>

        {/* Phone Number */}
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            name="phone"
            type="tel"
            placeholder="123-456-7890"
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>

        {/* Service Selection */}
        <div>
          <Label htmlFor="service">Service</Label>
          <select
            name="service"
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          >
            <option value="">Select a service</option>
            <option value="haircut">Haircut</option>
            <option value="shave">Shave</option>
            <option value="haircut-and-shave">Haircut & Shave</option>
            <option value="beard-trim">Beard Trim</option>
          </select>
        </div>

        {/* Date and Time */}
        <div>
          <Label htmlFor="time">Date & Time</Label>
          <Input
            name="time"
            type="datetime-local"
            min={getMinBookingTime()}
            max={getMaxBookingTime()}
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <textarea
            name="notes"
            rows={4}
            placeholder="Any specific requests or preferences"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          ></textarea>
        </div>

        {/* Submit Button */}
        <SubmitButton type="submit" pendingText="Booking...">
          Book Appointment
        </SubmitButton>

        {/* Message */}
        {message && (
          <p className={`text-center ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  )
}
