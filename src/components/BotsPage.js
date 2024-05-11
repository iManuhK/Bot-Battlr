import React,{useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [botArmy, setBotArmy] = useState([])

  //fetch data only once with empty dependancy array
  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then(res=>res.json())
    .then(data=>setBots(data))
  },[])

//add bot non-destructively if it doesnt already exist
  function addBot(thisBot) {
    if(!botArmy.includes(thisBot)) {
      setBotArmy([...botArmy,thisBot])
  }
  }

  function deleteBot(thisBot){
    const remainingBotsArray= botArmy.filter(bot=>bot.id!==thisBot.id)
    setBotArmy(remainingBotsArray)
  }
  function releaseBot(thisBot) {
    const remainingBotsArray= botArmy.filter(bot=>bot.id!==thisBot.id)
    setBotArmy(remainingBotsArray)
  }
  return (
    <div>
      <YourBotArmy bots={botArmy} dischargeBot={deleteBot} deEnlistBot = {releaseBot} />
      <BotCollection bots={bots} enlistBot={addBot} />
    </div>
  )
}

export default BotsPage;
