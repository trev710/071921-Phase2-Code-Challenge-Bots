import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({bots, onInArmy}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => <BotCard key={bot.id} bot={bot} onInArmy={onInArmy}/>)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;