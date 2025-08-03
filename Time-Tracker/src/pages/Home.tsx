import TimeForm from '@/components/TimeForm'
import TimeChart from '@/components/TimeChart'
import { useState } from 'react'

const Home = () => {
  const [data, setData] = useState<{ activity: string; hours: number }[]>([])

  const handleAdd = (activity: string, hours: number) => {
    setData((prev) => [...prev, { activity, hours }])
  }

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="bg-white max-w-4xl w-full p-8 rounded-2xl shadow-lg border-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Time Tracker ⌚
          </h1>
          <TimeForm onAdd={handleAdd} />
        </div>
        <div className="flex items-center justify-center">
          {data.length > 0 ? (
            <TimeChart data={data} />
          ) : (
            <p className="text-gray-500 text-center">
              No data yet. Add some activities.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
