import React from 'react'
import { BsFillArchiveFill, BsBagHeartFill, BsFillCalendar2RangeFill, BsFillBellFill, BsCurrencyDollar, BsArrowUp,BsFillFileTextFill,BsArrowDown }
  from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  }
  from 'recharts';

function Home() {

  const data = [
    {
      name: 'Jan',
      pv:5000

      
    },
    {
      name: 'feb',
    
      pv: 2400,
      amt: 2210,
    },
    {
      name: 'Mar',

      pv: 6500,
      amt: 2290,
    },
    {
      name: 'Apr',

      pv: 5700,
      amt: 2000,
    },
    {
      name: 'May',

      pv: 6200,
      amt: 2181,
    },
    {
      name: 'Jun',

      pv: 2000,
      amt: 2500,
    },
    {
      name: 'Aug',

      pv: 7600,
      amt: 2100,
    },
    {
      name: 'Sep',

      pv: 4800,
      amt: 3000
    },
    {
      name: 'Oct',

      pv: 3000,
      amt: 2210,
    },
    {
      name: 'Nov',

      pv: 4000,
      amt: 2000
    },
    {
      name: 'Dec',

      pv: 3500,
      amt: 2500
    },

  ];


  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>EARNINGS</h3>
            <BsCurrencyDollar className='card_icon' />
          </div>
          <h1>$ 198k</h1>
          <BsArrowUp className='card_icon'/>
          <h2>37.8% this Month</h2>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ORDERS</h3>
            <BsFillFileTextFill className='card_icon' />
          </div>
          <h1>$ 2.4K</h1>
          <BsArrowDown className='card_icon'/>
          <h2>2% this month</h2>
          
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>BALANCE</h3>
            <BsFillCalendar2RangeFill className='card_icon' />
          </div>
          <h1>$2.4K</h1>
          <BsArrowDown className='card_icon'/>
          <h2>2% this month</h2>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>TOTAL SALES</h3>
            <BsBagHeartFill className='card_icon' />
          </div>
          <h1>$ 89K</h1>
          <BsArrowUp className='card_icon'/>
          <h2>11% this Week</h2>

        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            
          </BarChart>
        </ResponsiveContainer>



      </div>
    </main>
  )
}

export default Home