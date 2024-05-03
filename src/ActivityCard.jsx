
const ActivityCard = ({ title, currentHours, previousHours, previousTimePeriod, color }) => {
    return (
        <div className={`rounded-md border-2 p-4 border-gray-800 bg-[#${color}]`}>
            <div className="bg-[#1c1f4a]">
                <h4>
                    {title}
                </h4>
                <h1>
                    {currentHours}hrs
                </h1>
                <p>
                   {previousTimePeriod} - {previousHours}hrs
                </p>
            </div>
        </div>
    )
}

export default ActivityCard

{/* <div className="rounded-md border-2 border-gray-800 bg-[#ff8c66]">
<div className="bg-[#1c1f4a]">
  <h4>
    Work
  </h4>
  <h1>
    {data[0].timeframes[`${timeFrame.toLocaleLowerCase()}`].current}hrs
  </h1>
  <p>
    {previousTimePeriod} -                 {data[0].timeframes[`${timeFrame.toLocaleLowerCase()}`].previous}hrshrs
  </p>
</div>
</div> */}