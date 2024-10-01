var agora = new Date()
var diaSem = agora.getDay()

// console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Doming')
        break // break é necessario em switch
    case 1:
        console.log('Segunda')
        break // break é necessario em switch
    case 2:
        console.log('Terça')
        break // break é necessario em switch
    case 3:
        console.log('Quarta')
        break // break é necessario em switch
    case 4:
        console.log('Quinta')
        break // break é necessario em switch
    case 5:
        console.log('Sexta')
        break // break é necessario em switch
    case 6:
        console.log('Sabado')
        break // break é necessario em switch
}