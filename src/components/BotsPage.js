import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const botsAPI = "http://localhost:8002/bots"

  const [bots, setBots] = useState([])
  useEffect((() => (
    fetch(botsAPI)
      .then(resp => resp.json())
      .then(data => setBots(data))
  )), [])

  function handleInArmy(id) {
    setBots(bots.map(bot => {
      if (!bot.inArmy && bot.id === id) { return { ...bot, inArmy: true } }
    else {return bot}})) 
  }


  return (
    <div>
      <YourBotArmy bots={bots} />
      <BotCollection bots={bots} onInArmy={handleInArmy} />
    </div>
  )
}

export default BotsPage;