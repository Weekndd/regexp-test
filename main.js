const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
the sentece is 'no pain no gain'
abbcccdddd
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
동해물과_ 백두산이 마르고 닳도록
`

const regexp = /fox/gi
const h = "             hello  world   Hi ! "
//console.log(regexp.test(str))
//console.log(str.replace(regexp,'AAA'))
//console.log(str)

console.log(str.match(/the/gi)) //--> regexp변수없이 바로 쓸 수 있음
console.log(
  str.match(/(?<=@).{1,}/g)
  ) 
 