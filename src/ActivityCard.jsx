import ellipsis from '../images/icon-ellipsis.svg'
const ActivityCard = ({ title, currentHours, previousHours, previousTimePeriod, color, icon }) => {
    return (
        <div className={`rounded-lg border-2 border-red-500 bg-${color} relative w-48`}>
            <img src={icon} alt="activity-icon" />
            <div className="rounded-lg w-full bg-[#1c1f4a] hover:bg-[#5847eb] hover:cursor-pointer absolute bottom-0 top-5 p-4">
                <div className="flex justify-between items-center">
                    <h4 className="mb-4">
                        {title}
                    </h4>
                    <img src={ellipsis} alt="ellipsis" />
                </div>
                <h1 className="text-4xl mb-4">
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