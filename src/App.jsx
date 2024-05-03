import { useEffect, useState } from 'react'
import './App.css'
import timeData from '../data.json'

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

  return (
    <div className='flex'>
      <h1>{timeFrame}</h1>
      <section className="border-2 border-gray-300 mr-4 bg-[#5847eb">
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
        <ul className='list-none'>
          <li><button onClick={() => changeTimeFrame('Daily')}>Daily</button></li>
          <li><button onClick={() => changeTimeFrame('Weekly')}>Weekly</button></li>
          <li><button onClick={() => changeTimeFrame('Monthly')}>Monthly</button></li>
        </ul>
      </section>

      <section className="border-2 border-gray-300 grid grid-cols-3 gap-4">

        <div className="rounded-md border-2 border-gray-800">
          <h4>
            Work
          </h4>

          <p>
            {data && (
              <>
              <h1>hii</h1>
                {data[0].timeframes[`${timeFrame.toLocaleLowerCase().current}`]}
              </>
            )}
          </p>
          <p>
            {previousTimePeriod} - 7hrs
          </p>

          {/* <p>
            32hrs
          </p>
          <p>
            {previousTimePeriod} - 36hrs
          </p>

          <p>
            103hrs
          </p>
          <p>
            {previousTimePeriod} - 128hrs
          </p> */}

        </div>

        <div className="rounded-md border-2 border-gray-800">
          <h4>
            Play
          </h4>
          <p>
            1hr
          </p>
          <p>
            {previousTimePeriod} - 2hrs
          </p>
          <p>
            10hrs
          </p>
          <p>
            {previousTimePeriod} - 8hrs
          </p>
          <p>
            23hrs
          </p>
          <p>
            {previousTimePeriod} - 29hrs
          </p>
        </div>

        <div className="rounded-md border-2 border-gray-800">
          <h4>
            Study
          </h4>
          <p>
            0hrs
          </p>
          <p>
            {previousTimePeriod} - 1hr
          </p>
          <p>
            4hrs
          </p>
          <p>
            {previousTimePeriod} - 7hrs
          </p>
          <p>
            13hrs
          </p>
          <p>
            {previousTimePeriod} - 19hrs
          </p>
        </div>

        <div className="rounded-md border-2 border-gray-800">
          <h4>
            Exercise
          </h4>
          <p>
            1hr
          </p>
          <p>
            {previousTimePeriod} - 1hr
          </p>
          <p>
            4hrs
          </p>
          <p>
            {previousTimePeriod} - 5hrs
          </p>
          <p>
            11hrs
          </p>
          <p>
            {previousTimePeriod} - 18hrs
          </p>
        </div>

        <div className="rounded-md border-2 border-gray-800">
          <h4>
            Social
          </h4>
          <p>
            1hr
          </p>
          <p>
            {previousTimePeriod} - 3hrs
          </p>
          <p>
            5hrs
          </p>
          <p>
            {previousTimePeriod} - 10hrs
          </p>
          <p>
            21hrs
          </p>
          <p>
            {previousTimePeriod} - 23hrs
          </p>
        </div>

        <div className="rounded-md border-2 border-gray-800">
          <h4>
            Self Care
          </h4>
          <p>
            0hrs
          </p>
          <p>
            {previousTimePeriod} - 1hr
          </p>
          <p>
            2hrs
          </p>
          <p>
            {previousTimePeriod} - 2hrs
          </p>
          <p>
            7hrs
          </p>
          <p>
            {previousTimePeriod} - 11hrs
          </p>
        </div>
      </section>




      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  )
}

export default App
