let char = new Knight('Gabriel Sancinetti')
let monster = new littleMonster()


const stage = new Stage(
    char,
    monster,
    document.querySelector('#char')
    , document.querySelector('#monster')
    )

    stage.start()