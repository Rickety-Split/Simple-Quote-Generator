const generateQuoteBtn = document.getElementById("generate-quote");
const copyQuoteBtn = document.getElementById("copy-quote");
const copiedSuccessfully = document.getElementById("copied-successfully");
const quoteBodyEl = document.getElementById("quoteBody");
const quoteAttribution = document.getElementById("quoteAttribution");
const quoteArray = [
  [`Qt 1`,`"Learn as if you will live forever, live like you will die tomorrow.”`,`— Mahatma Gandhi`],
  [`Qt 2`,`"Women are meant to be loved, not to be understood.”`, `— Oscar Wilde`],
  [`Qt 3`,`"I would rather spend one lifetime with you, than face all the ages of this world alone.”`, `— J.R.R. Tolkien`],
  [`Qt 4`,`“Success is getting what you want, happiness is wanting what you get.”`, `― W. P. Kinsella`],
  [`Qt 5`,`“Education is the most powerful weapon which you can use to change the world.`, `— Unknown`],
  [`Qt 6`,`“Life is like riding a bicycle. To keep your balance you must keep moving."`, `― Albert Einstein`],
  [`Qt 7`,`“I have decided to stick to love; hate is too great a burden to bear.”`, `― Martin Luther King Jr.`],
  [`Qt 8`,`“When you change your thoughts, remember to also change your world.”`, `― Nelson Mandela`],
  [`Qt 9`,`“If you don’t risk anything, you risk even more.”`, `— Erica Jong`],
  [`Qt 10`,`“The two most important days in your life are the day you’re born and the day you find out why. `, `— Unknown`],
];


generateQuoteBtn.addEventListener("click", function () {
    let randomTextID = Math.floor(Math.random() * (quoteArray.length - 1)) + 1;
  
    quoteBodyEl.textContent = quoteArray[randomTextID][1];
    quoteAttribution.textContent = quoteArray[randomTextID][2];

});

copyQuoteBtn.addEventListener("click", function(){
  let copiedText = quoteBodyEl.textContent;
  let copiedAtt = quoteAttribution.textContent;
  let combinedText = `${copiedText} ${copiedAtt}`
  
  navigator.clipboard.writeText(combinedText);
  copiedSuccessfully.textContent = "Copied Successfully!"
})

copyQuoteBtn.addEventListener("mouseout", function(){
  copiedSuccessfully.textContent = ""
})

