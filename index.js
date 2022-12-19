function userAlert () {
  const greetMsgLst = ["This button doesn't really do much. Thanks for clicking anyway. I hope your day is as beautiful as you are.", "Yesterday is history. Tomorrow is a mystery. Today is a present. Appreciate it!!!", "Go easy on yourself. You deserve a break.", "Live, Love, Learn, Laugh.", "It's never too late to say sorry."]
  const greetMsg = greetMsgLst[Math.floor(Math.random() * greetMsgLst.length)]
  alert(greetMsg)
}
