class Fruit{
    constructor(name, weight, color){
        this.name = name
        this.weight = weight
        this.color = color
    }
}

class Drupes extends Fruit{
    constructor(name, weight, color, weightSeed){
        super(name, weight, color)
        this.weightSeed = weightSeed
    }
}

class Berries extends Fruit{
    constructor(name, weight, color, totalSeed){
        super(name, weight, color)
        this.totalSeed = totalSeed
    }
}   

class Pomes extends Berries{
    constructor(name, weight, color, totalSeed){
        super(name, weight, color, totalSeed)
    }
}

class Hesperidia extends Fruit{
    constructor(name, weight, color, skinThickness){
        super(name, weight, color)
        this.skinThickness = skinThickness
    }
}

class WaterMelon extends Hesperidia{
    constructor(name, weight, color, skinThickness, fleshColor){
        super(name, weight, color, skinThickness)
        this.fleshColor = fleshColor
    }
}

class Legumes extends Fruit{
    constructor(name, weight, color, seedInPolong){
        super(name, weight, color)
        this.seedInPolong = seedInPolong
    }
}



const plums = new Drupes("Plums", "100", "Red", "55")
const grapes = new Berries("Grapes","6", "Purple", "2")
const pomes = new Pomes("Apple","200", "Red", "7")
const hesperidia = new Hesperidia("WaterMelon", "1000", "Green", "1,5")
const wMRed = new WaterMelon("WaterMelon", "1000", "Green", "1,5","Red")
const legumes = new Legumes("Peanut", "0,4", "Coklat", "2")

console.log(`Name :${plums.name}, Weight :${plums.weight}gr, Color :${plums.color}, Weight PerSeed :${plums.weightSeed}gr`)
console.log(`Name :${grapes.name}, Weight :${grapes.weight}gr, Color :${grapes.color}, Total Seed :${grapes.totalSeed}`)
console.log(`Name :${pomes.name}, Weight :${pomes.weight}gr, Color :${pomes.color}, Total Seed :${pomes.totalSeed}`)
console.log(`Name :${hesperidia.name}, Weight :${hesperidia.weight}gr, Color :${hesperidia.color}, Skin Thickness :${hesperidia.skinThickness} cm`)
console.log(`Name :${wMRed.name}, Weight :${wMRed.weight}gr, Color :${wMRed.color}, Skin Thickness :${wMRed.skinThickness} cm, Flesh Color: ${wMRed.fleshColor}`)
console.log(`Name :${legumes.name}, Weight :${legumes.weight}gr, Color :${legumes.color}, Total Seed Per Polong :${legumes.seedInPolong}`)