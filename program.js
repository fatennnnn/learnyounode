// console.log(process.argv)
const process=require('process')
let sum=0
for(let i=2;i<process.argv.length;i++)

    sum+=(+process.argv[i])
    // sum=sum+Number(process.argv[i])

console.log(sum)


