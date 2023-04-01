import React from 'react'

function Stats() {
  return (
    <div>
        <div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Attendence</div>
    <div className="stat-value">45%</div>
    <div className="stat-desc">Average </div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    <div >
        <h1 className="text-2xl py-6 pb-4" > Subject wise Attendence </h1>

        <div className="radial-progress mx-3" style={{"--value":45}}>45%</div>
        <div className="radial-progress mx-3" style={{"--value":50}}>50%</div>
        <div className="radial-progress mx-3" style={{"--value":60}}>60%</div>
        <div className="radial-progress mx-3" style={{"--value":73}}>73%</div>
        <div className="radial-progress mx-3 " style={{"--value":47}}>47%</div>
    </div>
    </div> 
  )
}

export default Stats