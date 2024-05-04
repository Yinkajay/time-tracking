import { useEffect, useState } from 'react'
import './App.css'
import timeData from '../data.json'
import avatar from '../images/image-jeremy.png'
import ActivityCard from './ActivityCard'

import work from '../images/icon-work.svg'
import play from '../images/icon-play.svg'
import study from '../images/icon-study.svg'
import exercise from '../images/icon-exercise.svg'
import social from '../images/icon-social.svg'
import selfcare from '../images/icon-self-care.svg'

function App() {
  const [data, setData] = useState(null)
  const [timeFrame, setTimeFrame] = useState('Daily')
  const [previousTimePeriod, setPreviousTimePeriod] = useState('Yesterday')


  useEffect(() => {
    setData(timeData)
    console.log(data)
  }, [data])

  const changeTimeFrame = (val) => {
    console.log(val)
    setTimeFrame(val)
    if (val !== previousTimePeriod) {
      if (val === 'Daily') {
        setPreviousTimePeriod('Yesterday');
      } else if (val === 'Weekly') {
        setPreviousTimePeriod('Last Week');
      } else if (val === 'Monthly') {
        setPreviousTimePeriod('Last Month');
      }
    }
  }
  // {{ timeframe === 'Daily' ? 'active bg-indigo-500 text-white' : '' }}
  const icons = [work, play, study, exercise, social, selfcare]

  return (
    data == null ? (
      <h1>Loading...</h1>
    ) : (
      <div className='flex'>
        <section className=" mr-4 bg-[#1c1f4a] rounded-full w-48">
          <div className="bg-[#5847eb] rounded-md p-4">
            <img src={avatar} alt="avatar" className='rounded-full w-14 border-2 border-white' />
            <p className='text-sm'>Report for</p>
            <h1 className='text-3xl mb-12'>Jeremy Robson</h1>
          </div>
          <ul className='list-none bg-[#1c1f4a] p-4 rounded-md'>
            <li className={`${timeFrame === 'Daily' ? 'text-white' : 'text-[#bdc1ff]'} my-3 `} ><button onClick={() => changeTimeFrame('Daily')}>Daily</button></li>
            <li className={`${timeFrame === 'Weekly' ? 'text-white' : 'text-[#bdc1ff]'} my-3`}><button onClick={() => changeTimeFrame('Weekly')}>Weekly</button></li>
            <li className={`${timeFrame === 'Monthly' ? 'text-white' : 'text-[#bdc1ff]'} my-3`}><button onClick={() => changeTimeFrame('Monthly')}>Monthly</button></li>
          </ul>
        </section>

        <section className="border-2 border-gray-300 grid grid-cols-3 gap-4">

          {data.map((Activity, index) => (
            <ActivityCard key={Activity.title} title={Activity.title} currentHours={Activity.timeframes[`${timeFrame.toLocaleLowerCase()}`].current} previousHours={Activity.timeframes[`${timeFrame.toLocaleLowerCase()}`].previous} previousTimePeriod={previousTimePeriod} color={Activity.color} icon={icons[index]} />
          ))}
        </section>




        {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
      </div>
    )

  )
}

export default App
