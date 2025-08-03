import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Props {
  onAdd: (activity: string, hours: number) => void
}

const TimeForm = ({ onAdd }: Props) => {
  const [activity, setActivity] = useState('')
  const [hours, setHours] = useState('')

  const handleAddActivity = () => {
    if (!activity.trim() || !hours.trim()) {
      return alert('Please fill in all fields')
    }

    onAdd(activity, Number(hours))
    setActivity('')
    setHours('')
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Activity (e.g. Coding)"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        className="border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
      />

      <Input
        placeholder="Hours Spent (e.g. 5)"
        value={hours}
        type="number"
        onChange={(e) => setHours(e.target.value)}
        className="border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
      />

      <Button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        onClick={handleAddActivity}
      >
        Add Activity
      </Button>
    </div>
  )
}

export default TimeForm
