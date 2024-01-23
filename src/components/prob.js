import React from 'react'

export default function prob() {
  return (
    <div>
      <div className="container">
  <div className="row">
    <div className="col-md-6">
      <h3>Current Match Situation</h3>
      <table className="table table-striped table-bordered">
        <tr>
          <td>Batting Team</td>
          <td>India</td>
        </tr>
        <tr>
          <td>Bowling Team</td>
          <td>Australia</td>
        </tr>
        <tr>
          <td>Score</td>
          <td>200/5</td>
        </tr>
        <tr>
          <td>Overs</td>
          <td>40/50</td>
        </tr>
        <tr>
          <td>Target</td>
          <td>300</td>
        </tr>
      </table>
    </div>
    <div className="col-md-6">
      <h3>Win Probability of Chasing Team</h3>
      <p className="text-center text-success">India has a 60% chance of winning</p>
      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-success" style="width: 60%">60%</div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
