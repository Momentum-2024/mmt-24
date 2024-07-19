import React from 'react'

function EventDetails() {
  return (
    <>
        <div className='text-3xl font-bold'>Event Name</div>
          <div className=' text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo corporis earum inventore dolorum vel, est natus nemo dolore praesentium veniam consequatur aperiam mollitia impedit dolores quae blanditiis magni illum tempora eius culpa! Temporibus velit non necessitatibus, laborum id deleniti sapiente reprehenderit iusto nesciunt nulla explicabo earum, neque iste. Consequuntur fugiat sed ullam laboriosam harum nam cumque perspiciatis illo labore molestias cum nihil voluptatem quos quaerat dignissimos est magni, iste voluptates omnis animi. Fuga, cum!
          </div>
          <div className='space-y-2'>
            <div className='text-xl font-semibold'>Date: 3rd November, 2024</div>
            <div className='text-xl font-semibold'>Time: 12:00 PM</div>
            <div className='text-sm'>Prize: Rs. 1000</div>
            <div className='text-sm'>Entry Fees: Rs. 100</div>
            <div className='text-sm'>Team Size: 1 - 5 persons</div>
            <div className='text-sm'>Mode: Offline</div>
            <div className='text-sm'>Venue: RN 117</div>
          </div>
          <div className='space-y-2'>
            <div className='text-xl'>Rules</div>
            <div className=' text-sm'>
                <ul className='ml-5 ' style={
                {
                    "list-style-type":"disc"
                }
                } >
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
                <li>Rule 4</li>
                </ul>
            </div>
        </div> 
    </>
  )
}

export default EventDetails
