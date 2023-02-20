class Character {

    _life = 1
    maxLife = 1
    attack = 0
    defense = 0


    constructor(name){
        this.name = name
    }

    get life() {
        return this._life
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife
    }

}

class Knight extends Character {

    constructor(name) {
        super(name)
        this.life = 100
        this.maxLife = this.life
        this.attack = 10
        this.defense = 8
    }
}

class Sorcerer extends Character {

    constructor(name) {
        super(name)
        this.life = 80
        this.maxLife = this.life
        this.attack = 15
        this.defense = 3
    }

}

class littleMonster extends Character {

    constructor() {

        super('Little Monster')
        this.life = 40
        this.maxLife = this.life
        this.attack = 4
        this.defense = 4
    }
}

class bigMonster extends Character {

    constructor() {

        super('Big Monster')
        this.life = 120
        this.maxLife = this.life
        this.attack = 16
        this.defense = 6 
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1el, fighter2el, logObject){
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1el = fighter1el
        this.fighter2el = fighter2el
        this.log = logObject
    }

    start(){
        this.update()

        this.fighter1el.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))

        this.fighter2el.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))

    }

    update(){
        this.fighter1el.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`
        let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1el.querySelector('.bar').style.width = `${f1pct}%`

        this.fighter2el.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`
        let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2el.querySelector('.bar').style.width = `${f2pct}%`
    }

    doAttack(attacking, attacked){
        
        if(attacking.life <= 0 || attacked.life <= 0){
            this.log.addMessage('Atacando cachorro morto')
        }

        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)

        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}`)
            
        } else {
            this.log.addMessage(`${attacked.name} conseguiu defender`)
        }

        this.update()

    }
}

class Log {

    list = []

    constructor(listEl) {
        this.listEl = listEl
    }

    addMessage(msg) {
        this.list.push(msg)
        this.render()
    }

    render() {
        this.listEl.innerHTML = ''

        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }

}