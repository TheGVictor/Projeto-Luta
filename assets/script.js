let log = new Log(document.querySelector('.log'))

let char = new Knight('Gabriel Sancinetti')
let monster = new littleMonster()


const stage = new Stage(
    char,
    monster,
    document.querySelector('#char')
    , document.querySelector('#monster'),
    log
    )

    stage.start()