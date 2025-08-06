class TrafficLight{
    constructor(){
        this.color = ["Red","Yellow","Green"]
        this.currentIndex = 0
    }
    run(){
        while(this.currentIndex< 5){
            console.log(this.color[this.currentIndex -1])
            this.currentIndex = (this.currentIndex) % (this.color.length)
            this.currentIndex++
        }
    }
}
const deploy = new TrafficLight()
deploy.run()