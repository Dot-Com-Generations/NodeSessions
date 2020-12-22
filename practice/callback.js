// const add = (a, b, callback) => {
//     setTimeout(() => {
//         return callback(a + b)
//     }, 3000)
// }
// console.log('STart')


// add(1, 4, (sum) => {
//     console.log(sum)
// })

// console.log('Stop')

const weather = (query, callback) => {
    setTimeout(() => {
        const data = {
            temp: '23',
            location: query
        }
        callback(data)
    }, 2000)
}



weather('Bangalore', (data) => {
    console.log(data)
})