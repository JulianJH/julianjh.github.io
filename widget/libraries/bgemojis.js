const emojiTable = { 
    "BGEMO STAR": "★",
    "BGEMO SMILINGFACE": "☺",
    "BGEMO GRADUATION": "🎓",
    "BGEMO PARTYPOPPER": "🎉",
    "BGEMO LOOKUP": "👆",
    "BGEMO LOOKDOWN": "👇",
    "BGEMO LOOKLEFT": "👈",
    "BGEMO LOOKRIGHT": "👉",
    "BGEMO WAVINGHANDSIGN": "👋",
    "BGEMO THUMBSUP": "👍",
    "BGEMO THUMBSDOWN": "👎",
    "BGEMO CLAPPING": "👏",
    "BGEMO BIGSMILE": "😁",
    "BGEMO WINKINGFACE": "😉",
    "BGEMO LOOKUSER": "😊",
    "BGEMO SUGGESTIVE": "😏",
    "BGEMO CONFUSED": "😕",
    "BGEMO FLIRTY": "😘",
    "BGEMO ANGRY": "😠",
    "BGEMO CRYINGFACE": "😢",
    "BGEMO DISAPPOINTED": "😥",
    "BGEMO SURPRISE": "😮",
    "BGEMO BORED": "😴",
    "BGEMO BGCHAT": "💬",
    "BGEMO TELEPHONE": "🕾",
    "BGEMO EMAIL": "📧",
    "BGEMO EXCLAMATIONMARK": "❗",
    "BGEMO BABY": "👶",
    "BGEMO TANGERINE": "🍊",
    "BGEMO GLASSOFMILK": "🥛",
    "BGEMO MEAT": "🥩",
    "BGEMO CEREALS": "🥣",
    "BGEMO CUPWITHSTRAW": "🥤",
    "BGEMO AMBULANCE": "🚑",
    "BGEMO MOBILEPHONE": "📱",
    "BGEMO TELEVISION": "📺",
    "BGEMO RUNNER": "🏃",
    "BGEMO POLICEOFFICER": "👮",
    "BGEMO CAR": "🚘",
    "BGEMO RECYCLEDPAPERSYMBOL": "♽",
    "BGEMO FLEXEDBICEP": "💪",
    "BGEMO BUS": "🚌",
    "BGEMO CONSTRUCTIONWORKER": "👷",
    "BGEMO PILEOFBOOKS": "📚",
    "BGEMO TREE": "🌳",
    "BGEMO ALARMCLOCK": "⏰",
    "BGEMO HOUSEWITHGARDEN": "🏡",
    "BGEMO SCHOOL": "🏫",
    "BGEMO SUNBEHINDCLOUD": "⛅",
    "BGEMO MOSQUITO": "🦟",
    "BGEMO SUNFLOWER": "🌻",
    "BGEMO ARTISTPALETTE": "🎨",
    "BGEMO DEPARTMENTSTORE": "🏬",
    "BGEMO HOTEL": "🏨",
    "BGEMO BANK": "🏦",
    "BGEMO HOSPITAL": "🏥",
    "BGEMO MEMO": "📝",
    "BGEMO DOG": "🐕",
    "BGEMO CAT": "🐈",
    "BGEMO KISSINGFACEWITHSMILINGEYES": "😙",
    "BGEMO CREDITCARD": "💳",
    "BGEMO PERSONALCOMPUTER": "💻",
    "BGEMO DOCUMENT": "🗎",
    "BGEMO RAISEDHAND": "✋",
    "BGEMO UPSIDEDOWNFACE": "🙃",
    "BGEMO PAPERCLIP": "📎",
    "BGEMO SCORPION": "🦂",
    "BGEMO GRADUATIONCAP": "🎓",
    "BGEMO ONCOMINGAUTOMOBILE": "🚘",
    "BGEMO CHILD": "🧒",
    "BGEMO TEAROFFCALENDAR": "📆",
    "BGEMO EYES": "👀",
    "BGEMO SAD": "🙁",
    "BGEMO PERFORMINGARTS": "🎭",
    "BGEMO SAINT": "😇",
    "BGEMO TRICOLON": "⁝",
  }; 

function replaceEmotionsWithEmoji(text) { 
  if (text === null || text === undefined) { 
    return ""; 
  } 

  const regex = new RegExp(Object.keys(emojiTable).join("|"), "g"); 
  return text.replace(regex, (match) => emojiTable[match]); 

} 
