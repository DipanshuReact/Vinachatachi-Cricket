import React ,{useEffect} from "react";

export default function Cric() {
  const [data, setData] = React.useState(null);
   
  useEffect(() => {
    async function fetchData() {
      const url =
        "https://9xzfo.com/api/public/match-center/stats/4/32672912";
        

      const options = {
        method: "GET",
       
      };

      try {
        const response = await fetch(url, options);
        const final = await response.json();
          // console.log(final);
        setData(final);
        console.log(data);
        var b = data.result.stats.currentOver.length;
        // console.log(b);
        var currentOverBalls =data.result.stats.currentOver.balls;
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
      {data && ( 
        <div>
          <div className="container">
          <div class="card" style={{width:"100%"}}>
         <div class="card-body" style={{padding:"16px"}}>
         <p class="card-text">
         <div style={{display:"flex",flexDirection:"row",columnGap:"100px"}} className="conatiner">
          <p style={{float:"left",display:"flex",flexDirection:"row",justifyContent:"center",columnGap:"20px"}}>
            <div>
            <img width="30px" height="20px" src="https://www.cricbuzz.com/a/img/v1/25x18/i1/c172115/india.jpg" title="India" class="cb-img-rad-0"/>
            <br></br>
            <p>India</p>
            </div>
            <div>
              <p>{data.result.scorecard.awayTeam.batsmens.total.score}/{data.result.scorecard.awayTeam.batsmens.total.wickets}<br></br>({data.result.scorecard.awayTeam.batsmens.total.overs})</p>
            </div>
            </p>
            <p style={{float:"right",display:"flex",flexDirection:"row",justifyContent:"center",columnGap:"20px"}}>
            <div style={{textAlign:"center"}}>
            <p>{data.result.stats.currentOver.score}/{data.result.stats.currentOver.wickets}<br></br>({data.result.stats.battingTeam.overs}.{data.result.stats.battingTeam.balls})</p>
            </div>
            <div>
            <img width="30px" height="20px" src="https://www.cricbuzz.com/a/img/v1/25x18/i1/c172123/england.jpg" title="India" class="cb-img-rad-0"/>
            <br></br>
            <p>Eng</p>
            </div>
            </p>
         </div>
         <div style={{display:"flex",flexDirection:"row",columnGap:"60px"}}>
         <div style={{"float":"left"}}>
         <p>{data.result.stats.currentOver.batsNames[0]} : {data.result.stats.batsmen[0].batsmanRuns}({data.result.stats.batsmen[0].balls})<br></br><p>{data.result.stats.currentOver.batsNames[1]} : {data.result.stats.batsmen[1].batsmanRuns}({data.result.stats.batsmen[1].balls})</p></p>
        </div>
        <div style={{"float":"right"}}>
        <p>{data.result.stats.bowler.name}: {data.result.stats.bowler.bowlerRuns}/{data.result.stats.bowler.wickets}({data.result.stats.bowler.overs})</p>
        </div>
        </div>
        </p>
        </div>
       </div>
       </div>
       
       {/* current over */}
       <div className="container">
       <div className="card">
        <div className="card-body">
        
        <div style={{display:"flex",flexDirection:"column",columnGap:"10px"}}>
          <div>
        <div><p>Current over</p></div>
         <div><p>{data.result.stats.currentOver.bowlerName} to {data.result.stats.currentOver.batsNames[0]} and {data.result.stats.currentOver.batsNames[1]}</p></div>
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
            <p>Ov {data.result.stats.currentOver.overNumber}  |  {data.result.stats.currentOver.runs} runs  |  {data.result.stats.currentOver.score}-{data.result.stats.currentOver.wickets}</p> 
          </div>

          <div>
           <div><p>Last Over</p></div>
           <div><p>{data.result.stats.lastOver.bowlerName} to {data.result.stats.lastOver.batsNames[0]} and {data.result.stats.lastOver.batsNames[1]}</p></div>
        <div  style={{display:"flex",flexDirection:"row",columnGap:"10px",flexWrap:"wrap"}}>
        {
          data.result.stats.lastOver.balls.map((ball,i)=>{
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
         <div style={{padding:""}}><p>Ov {data.result.stats.lastOver.overNumber}  |  {data.result.stats.lastOver.runs} runs  |  {data.result.stats.lastOver.score}-{data.result.stats.lastOver.wickets}</p> </div>
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
  );
}
