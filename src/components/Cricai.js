import React, { useEffect } from "react";

export default function Cricai() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = "https://9xzfo.com/api/public/match-center/stats/4/32788076";

      const options = {
        method: "GET",
      };

      try {
        const response = await fetch(url, options);
        const final = await response.json();
        // console.log(final);
        setData(final);
        // console.log(data);
        var b = data.result.stats.currentOver.length;
        // console.log(b);
        var currentOverBalls = data.result.stats.currentOver.balls;
        // console.log(currentOverBalls);
        // console.log(data.result.scorecard.awayTeam.batsmens.total.score)
      } catch (error) {
        // console.error(error);
      }
    }
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <>
      <div>
        <br></br>
        {data && (

          
<div className="container">
<div className="card">
   <div className="card-body">

      <div style={{display:"flex",justifyContent:"center",float:"left"}}>
        <p style={{fontSize:"14px"}}>Home Team :</p>
        </div> 
        <br></br><br></br>
       
      <div style={{display:"flex",justifyContent:"center"}}>
          
          <div style={{display:"flex",flexDirection:"row",columnGap:"50px"}}>
              
              <div style={{display:"flex",flexDirection:"column"}}>
                  
                  <div style={{lineHeight:"100%"}}>
                   <p style={{textAlign:"center"}}><img width="45px" height="35px" style={{}} src="https://imgs.search.brave.com/4QNLnyGpJQvd8WKLs7YvaapdmmYUsV8f2yW6bwShLaY/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NC80MS9GbGFnX29m/X0luZGlhLnN2Zy81/MTJweC1GbGFnX29m/X0luZGlhLnN2Zy5w/bmc" title="India" class="cb-img-rad-0"/><br></br>
                   <p style={{textAlign:"center",fontSize:"13px",lineHeight:"200%"}}>{data.result.scorecard.homeTeam.name}</p></p>
                  </div>
                  <div>
                    
                  </div>

              </div>

              <div style={{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"20px"}}>
                 
                 <div style={{display:"inline-block",textAlign:"center",lineHeight:""}}>
                    {/* <p><h2>{data.result.scorecard.awayTeam.batsmens.total.score}/{data.result.scorecard.awayTeam.batsmens.total.wickets}</h2><b>({data.result.scorecard.awayTeam.batsmens.total.overs})</b></p> */}
                    {
                  data.result.stats.currentInning === 1 && data.result.scorecard.homeTeam.isBattingTeam === true ? <p style={{lineHeight:"50%"}}><h2>{data.result.stats.currentOver.score}/{data.result.stats.currentOver.wickets}</h2><p style={{fontSize:"15px"}}>({data.result.stats.battingTeam.overs}.{data.result.stats.battingTeam.balls})</p></p>: null
                 }
                 {
                  data.result.stats.currentInning === 1 && data.result.scorecard.homeTeam.isBattingTeam === false ? <p style={{lineHeight:"50%"}}>Yet To Bat</p> : null
                 }
                 {
                  data.result.stats.currentInning === 2 && data.result.scorecard.homeTeam.isBattingTeam === true ? <p style={{lineHeight:"50%"}}><h2>{data.result.stats.currentOver.score}/{data.result.stats.currentOver.wickets}</h2><p style={{fontSize:"15px"}}>({data.result.stats.battingTeam.overs}.{data.result.stats.battingTeam.balls})</p></p>: null
                 }
                 {
                  data.result.stats.currentInning === 2 && data.result.scorecard.homeTeam.isBattingTeam === false ? <p style={{opacity:"70%",lineHeight:"50%"}} ><h2>{data.result.scorecard.homeTeam.batsmens.total.score}/{data.result.scorecard.homeTeam.batsmens.total.wickets===null?data.result.scorecard.homeTeam.fallOfWickets.length:data.result.scorecard.homeTeam.batsmens.total.wickets}</h2><p style={{fontSize:"15px"}}>({data.result.scorecard.homeTeam.batsmens.total.overs})</p></p>: null
                 }
                 </div>
                 

              </div>
              <div><p></p></div> 

          </div>
          
          
      </div>
      {/* <div style={{textAlign:"center"}}><p><b>Target : {data.result.stats.battingTeam.target}</b> </p></div>   */}
      <div style={{textAlign:"center",lineHeight:"65%"}}>
      {
         data.result.stats.status === "Completed"?null: data.result.stats.currentInning === 2 && data.result.scorecard.homeTeam.isBattingTeam === true ? <>
        <div><br></br><p>{data.result.stats.battingTeam.name} needs {data.result.stats.battingTeam.requiredRuns} runs in {data.result.stats.remainingBalls} balls</p></div>
        <div style={{textAlign:"center"}}><p><b> CRR : {data.result.stats.battingTeam.runRate} | RR : {data.result.stats.battingTeam.requiredRunRate}</b></p></div>  
        </> : null
      }
      {/* {
        data.result.stats.currentInning === 2 && data.result.scorecard.homeTeam.isBattingTeam === false ? <div style={{textAlign:"center"}}><br></br><p><b>Target : {data.result.stats.battingTeam.target}</b> </p></div> : null
      } */}
      </div>

       <br></br>

      <div style={{display:"flex",justifyContent:"center",float:"left"}}>
        <p style={{fontSize:"14px",textAlign:"center"}}>Away Team :</p>
        </div> 
        <br></br><br></br>
       
      <div style={{display:"flex",justifyContent:"center"}}>
          
          <div style={{display:"flex",flexDirection:"row",columnGap:"50px"}}>
              
              <div style={{display:"flex",flexDirection:"column"}}>
                  
                  <div>
                   <p style={{justifyContent:"center",textAlign:"center"}}><img width="40px" height="30px" src="https://imgs.search.brave.com/0FSJDNXnyS4tOFWcl7R55Qp98juRS6nKPjPjkOCknN8/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzNlL0Zs/YWdfb2ZfTmV3X1pl/YWxhbmQuc3ZnLzUx/MnB4LUZsYWdfb2Zf/TmV3X1plYWxhbmQu/c3ZnLnBuZw" title="India" class="cb-img-rad-0"/><br></br>
                   <p style={{textAlign:"center",fontSize:"13px",lineHeight:"200%"}}>{data.result.scorecard.awayTeam.name}</p></p>
                  </div>
                  <div>
                    
                  </div>

              </div>

              <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                 
                 <div style={{display:"inline-block",justifyContent:"center",textAlign:"center",paddingBottom:"25px"}}>
                 {/* <p><h2>{data.result.stats.currentOver.score}/{data.result.stats.currentOver.wickets}</h2><b>({data.result.stats.battingTeam.overs}.{data.result.stats.battingTeam.balls})</b></p> */}
                 {
                  data.result.stats.currentInning === 1 && data.result.scorecard.awayTeam.isBattingTeam === true ? <p style={{lineHeight:"50%"}}><h2>{data.result.scorecard.homeTeam.batsmens.total.score}/{data.result.scorecard.homeTeam.batsmens.total.wickets}</h2><p style={{fontSize:"15px"}}>({data.result.scorecard.homeTeam.batsmens.total.overs})</p></p>: null
                 }
                 {
                  data.result.stats.currentInning === 1 && data.result.scorecard.awayTeam.isBattingTeam === false ? <p style={{lineHeight:"50%"}}>Yet To Bat</p> : null
                 }
                 {
                  data.result.stats.currentInning === 2 && data.result.scorecard.awayTeam.isBattingTeam === true ? <p style={{lineHeight:"50%"}}><h2>{data.result.stats.currentOver.score}/{data.result.stats.currentOver.wickets}</h2><p style={{fontSize:"15px",lineHeight:""}}>({data.result.stats.battingTeam.overs}.{data.result.stats.battingTeam.balls})</p></p>: null
                 }
                 {
                  data.result.stats.currentInning === 2 && data.result.scorecard.awayTeam.isBattingTeam === false ? <p style={{opacity:"70%",lineHeight:"50%"}} ><h2>{data.result.scorecard.homeTeam.batsmens.total.score}/{data.result.scorecard.awayTeam.batsmens.total.wickets===null?data.result.scorecard.awayTeam.fallOfWickets.length:data.result.scorecard.homeTeam.batsmens.total.wickets}</h2><p style={{fontSize:"15px"}}>({data.result.scorecard.homeTeam.batsmens.total.overs})</p></p>: null
                 }
                 </div>
                 

              </div>

              <div></div>
          </div>
          
      </div>
      
      <div style={{textAlign:"center",lineHeight:"50%",fontSize:"15px"}}>
      { 
        data.result.stats.status === "Completed"?<b style={{textAlign:"center",lineHeight:"200%"}}>{data.result.stats.commentary}</b> : data.result.stats.currentInning === 2 && data.result.scorecard.awayTeam.isBattingTeam === true ? <>
        <div><br></br><br></br><p>{data.result.stats.battingTeam.name} needs {data.result.stats.battingTeam.requiredRuns} runs in {data.result.stats.remainingBalls} balls</p></div>
        <div style={{textAlign:"center"}}><p><b> CRR : {data.result.stats.battingTeam.runRate} | RR : {data.result.stats.battingTeam.requiredRunRate}</b></p></div>  
        </> : null
      }
      {/* {
        data.result.stats.currentInning === 2 && data.result.scorecard.awayTeam.isBattingTeam === false ? <div style={{textAlign:"center"}}><br></br><p><b>Target : {data.result.stats.battingTeam.target}</b> </p></div> : null
      } */}
      
       </div>
   

   <div style={{marginTop:"30px"}}>
   <hr  class="hr" />
   </div>
  {/* <div style={{"float":"left",marginTop:"5px"}}>
    <p style={{fontSize:"14px"}}>Batting :</p>
    </div> */}
    <div>
    <table class="table table-sm">
  <thead>
      <tr>
        <th scope="col">Batting</th>
        <th scope="col">Runs</th>
        <th scope="col">4's</th>
        <th scope="col">6's</th>
        <th scope="col">SR</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td>{data.result.stats.batsmen[0].name}</td>
        <td>{data.result.stats.batsmen[0].batsmanRuns}({data.result.stats.batsmen[0].balls})</td>
        <td>{data.result.stats.batsmen[0].fours}</td>
        <td>{data.result.stats.batsmen[0].sixes}</td>
        <td>{data.result.stats.batsmen[0].strikeRate}</td>
      </tr>
      <tr>
       
          <td>{data.result.stats.batsmen[1].name}</td>
          <td>{data.result.stats.batsmen[1].batsmanRuns}({data.result.stats.batsmen[1].balls})</td>
          <td>{data.result.stats.batsmen[1].fours}</td>
          <td>{data.result.stats.batsmen[1].sixes}</td>
          <td>{data.result.stats.batsmen[1].strikeRate}</td>
      </tr>
      
    </tbody>
</table>
    </div>

    {/* <div style={{display:"flex",flexDirection:"row",justifyContent:"",columnGap:"50px",lineHeight:"50%",paddingTop:"0px",paddingBottom:"10px",float:"left"}}>

    <div style={{float:"left"}}>
    <p style={{fontSize:"14px",wordWrap:"break-word"}}><h6>{data.result.stats.batsmen[0].isOnStrike===true?"*":null}{data.result.stats.currentOver.batsNames[0]} : </h6>{data.result.stats.batsmen[0].batsmanRuns}({data.result.stats.batsmen[0].balls})<br></br></p>
    </div>

    <div style={{float:"right"}}>
    <p style={{fontSize:"14px",wordWrap:"break-word"}}><h6>{data.result.stats.batsmen[1].isOnStrike===true?"*":null}{data.result.stats.currentOver.batsNames[1]} :</h6> {data.result.stats.batsmen[1].batsmanRuns}({data.result.stats.batsmen[1].balls})</p>
      </div>

  </div> */}

  {/* <hr class="hr" /> */}
{/* <div style={{"float":"left",lineHeight:"50%"}}>
    
 <p><p style={{fontSize:"14px"}}>Bowler :</p> <b>{data.result.stats.bowler.name} : </b> {data.result.stats.bowler.bowlerRuns}/{data.result.stats.bowler.wickets}  ({data.result.stats.bowler.overs})</p>
  
   
  </div> */}
   <table class="table table-sm" style={{width:"100%"}}>
  <thead>
      <tr>
        <th scope="col">Bowling</th>
        <th scope="col">&nbsp;</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td>{data.result.stats.bowler.name}</td>
        <td><p>{data.result.stats.bowler.bowlerRuns}/{data.result.stats.bowler.wickets}&nbsp;&nbsp;({data.result.stats.bowler.overs})</p></td>
        
      </tr>
     
      
    </tbody>
</table>
   {/* <br></br> */}

   </div>
</div>



<div style={{marginTop:"4px"}}>

  <div>
  <div className="card">
  <div className="card-body">

       <div style={{display:"flex",flexDirection:"column",columnGap:"10px"}}>
          <div>
             <div><b>Commentary : {data.result.stats.commentary} </b></div><br></br>
             <div><p style={{fontSize:"14px"}}>Current over :</p></div>
             <div><p><b>{data.result.stats.currentOver.bowlerName}</b> to <b>{data.result.stats.currentOver.batsNames[0]}</b> and <b>{data.result.stats.currentOver.batsNames[1]}</b></p></div>
                 <div  style={{display:"flex",flexDirection:"row",columnGap:"10px",flexWrap:"wrap"}}>

                    {

                        data.result.stats.currentOver.balls.map((ball,i)=>{
// console.log(i)
// console.log(ball)
                           return(
                                  <div key={i}>
                                    <p style={{backgroundColor:"red",color:"white",paddingLeft:"10px",paddingRight:"10px",textAlign:"center",borderRadius:"80px",fontSize:"18px"}}>{ball.value}</p>
       
                                      </div> 
                                  )
                         })

                    }

                  
                 
                  </div>
                 <div style={{padding:""}}>
                      <p><b>Ov {data.result.stats.currentOver.overNumber}  |  {data.result.stats.currentOver.runs} runs  |  {data.result.stats.currentOver.score}-{data.result.stats.currentOver.wickets}</b></p> 
                 </div>
              </div>   
              <hr class="hr" />
          <div>
           <div><p style={{fontSize:"14px"}}>Last Over :</p></div>
                <div><p><b>{data.result.stats.lastOver.bowlerName}</b> to <b>{data.result.stats.lastOver.batsNames[0]}</b> and <b>{data.result.stats.lastOver.batsNames[1]}</b></p></div>
                  <div  style={{display:"flex",flexDirection:"row",columnGap:"10px",flexWrap:"wrap"}}>
                         {
                           data.result.stats.lastOver.balls.map((ball,i)=>{

                                 return(
                                        <div key={i}>
                                           <p style={{backgroundColor:"red",color:"white",paddingLeft:"10px",paddingRight:"10px",textAlign:"center",borderRadius:"80px",fontSize:"18px"}}>{ball.value}</p>
       
                                        </div> 
                                        )
                            })

                          }
                   </div>

                <div style={{padding:""}}><p><b>Ov {data.result.stats.lastOver.overNumber}  |  {data.result.stats.lastOver.runs} runs  |  {data.result.stats.lastOver.score}-{data.result.stats.lastOver.wickets}</b></p> </div>
           </div>



        </div>
     </div>
    </div>
    </div>

</div>


</div>















)}
</div>
</>
)
}