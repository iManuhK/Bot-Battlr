import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, enlistBot, enlistDeenistBot}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map(bot=>{
          return (<BotCard key = {bot.id} bot = {bot} 
            deEnlistBot={enlistBot}/>)
        })}
      </div>
    </div>
  );
}

export default BotCollection;
