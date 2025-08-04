class Tranportation{
    constructor(type, capacity, policeNumber, range, merk){
        this.type=type
        this.capacity=capacity
        this.policeNumber=policeNumber
        this.range=range
        this.merk=merk
    }
}
class Taxi extends Tranportation{
    constructor(type, capacity, policeNumber, range, merk, rate){
        super(type, capacity, policeNumber, range, merk,)
        this.rate=rate
    }
    tarifTaxi(){
        console.log(this.rate*this.range)
    }
    show(){
        return 'type : ' + this.type + ',' + 'capacity : ' + this.capacity + ',';
        // console.log(this.type+this.capacity)
    }
}
class Bus extends Tranportation{
    constructor(type, capacity, policeNumber, range, merk, route){
        super(type, capacity, policeNumber, range, merk)
        this.route=route
    }
}
const taxi = new Taxi('Sedan', '4',)
// taxi.show()
document.getElementById("demo").innerHTML = taxi.show()

