let quotes = [
  {
  quote: 'If you want to achieve greatness stop asking for permission.',
  author: 'Anonymous'
},
{
  quote: 'Things work out best for those who make the best of how things work out.',
  author: 'John Wooden' },
{
  quote: 'If you are not willing to risk the usual you will have to settle for the ordinary.',
  author: 'Jim Rohn' },
{
  quote: 'All our dreams can come true if we have the courage to pursue them.',
  author: 'Walt Disney' },
{
  quote: 'Success is walking from failure to failure with no loss of enthusiasm.',
  author: 'Winston Churchill' }
]

// 1. "" --
// 2. "" --
// 3. "To live a creative life, we must lose our fear of being wrong." --Anonymous
// 4. "If you are not willing to risk the usual you will have to settle for the ordinary." --Jim Rohn
// 5. "Trust because you are willing to accept the risk, not because it's safe or certain." --Anonymous
// 6. "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the
// brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea
// alone. This is the way to success." --Swami Vivekananda
// 7. "All our dreams can come true if we have the courage to pursue them." --Walt Disney
// 8. "Good things come to people who wait, but better things come to those who go out and get them." --
// Anonymous
// 9. "If you do what you always did, you will get what you always got." --Anonymous
// 10. "Success is walking from failure to failure with no loss of enthusiasm." --Winston Churchill
// 11. "Just when the caterpillar thought the world was ending, he turned into a butterfly." --Proverb
// 12. "Successful entrepreneurs are givers and not takers of positive energy." --Anonymous
// 13. "Whenever you see a successful person you only see the public glories, never the private sacrifices to
// reach them." --Vaibhav Shah
// 14. "Opportunities don't happen, you create them." --Chris Grosser
// 15. "Try not to become a person of success, but rather try to become a person of value." --Albert
// Einstein
// 16. "Great minds discuss ideas; average minds discuss events; small minds discuss people." --Eleanor
// Roosevelt
// 17. "I have not failed. I've just found 10,000 ways that won't work." --Thomas A. Edison
// 18. "If you don't value your time, neither will others. Stop giving away your time and talents--start
// charging for it." --Kim Garst
// 19. "A successful man is one who can lay a firm foundation with the bricks others have thrown at him." -
// -David Brinkley
// 20. "No one can make you feel inferior without your consent." Eleanor Roosevelt
let singleQuote = document.querySelector('.quote')
let Qauthor = document.querySelector('.author-name')
let btn = document.querySelector('.btn')



const generateQuotes = (quotes)=> {
  var randomNumber = Math.floor(Math.random() * quotes.length)
  randomQuote = quotes[randomNumber]
  singleQuote.innerHTML = randomQuote.quote
  Qauthor.innerHTML = randomQuote.author
}

btn.addEventListener('click', ()=>{
  generateQuotes(quotes)
})

document.body.onload = generateQuotes(quotes)