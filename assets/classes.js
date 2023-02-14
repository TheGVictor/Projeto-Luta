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
    constructor(fighter1, fighter2, fighter1el, fighter2el){
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1el = fighter1el
        this.fighter2el = fighter2el
    }

    start(){
        this.update()
    }

    update(){
        this.fighter1el.querySelector('.name').innerHTML = this.fighter1.name

        this.fighter2el.querySelector('.name').innerHTML = this.fighter2.name
    }

}