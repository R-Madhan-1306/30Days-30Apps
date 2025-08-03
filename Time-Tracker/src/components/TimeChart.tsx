import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Props {
  data: { activity: string; hours: number }[]
}

const TimeChart = ({ data }: Props) => {
  if (!data.length) {
    return (
      <div className="text-gray-500 text-center">
        No data to display.
      </div>
    )
  }

  const chartData = {
    labels: data.map((item) => item.activity),
    datasets: [
      {
        label: 'Hours Spent',
        data: data.map((item) => item.hours),
        backgroundColor: [
          '#f87171', 
          '#60a5fa', 
          '#facc15', 
          '#34d399', 
          '#a78bfa', 
          '#fb923c',
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) =>
            `${tooltipItem.label}: ${tooltipItem.raw} hour(s)`,
        },
      },
    },
  }

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-transparent">
      <Pie data={chartData} options={options} />
    </div>
  )
}

export default TimeChart
