sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Pizza.setPosition(Math.randomRange(10, 120), Math.randomRange(10, 120))
    info.startCountdown(10)
})
let Pizza: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . f f f f f f f . . . c c f f f . . . . . . . . . .
    . . . . . . . . . . f b b b b b b b f f c b b b b f . . . . . . . . . .
    . . . . . . . . . . f b b 1 1 1 b b b b b f f b f . . . . . . . . . . .
    . . . . . . . . . . f b 1 1 1 1 1 f f b b b b f f . . . . . . . . . . .
    . . . . . . . . . . f 1 c c c c 1 f f b b b b b c f f . . . . . . . . .
    . . . . . . . . . . f f c 1 c 1 c 1 b b c b c b c c c f . . . . . . . .
    . . . . . . . . . . . f c c 3 3 3 1 b b b c b c b c c c f . . c c c c c
    . . . . . . . . . . . . c 3 3 3 c 1 b b b c b c b c c c c f c d d b b c
    . . . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c d d b c c .
    . . . . . . . . . . . . c 3 3 3 c 1 1 b b b b b c c c c c c b b c c . .
    . . . . . . . . . . . c c 3 3 1 c 1 1 b b b b c c c c c c f b c c f . .
    . . . . . . . . . . . c c 1 3 c 1 1 c b b b c c c c c b b c f c c f . .
    . . . . . . . . . . . c 1 1 1 1 1 1 c b b b f d d d d d c . f b b c f .
    . . . . . . . . . . . . c c 1 1 1 1 f b d b b f d d d c . . . f b b f .
    . . . . . . . . . . . . . . c c c f f f b d b b f c c . . . . . f b b f
    . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . f f f
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
Pizza = sprites.create(img`
    . . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . .
    . . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . .
    . . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . .
    . . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . .
    . . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . .
    . . . . . . . . . . . . 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . .
    . . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . .
    . . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . .
    . . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . .
    . . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . .
    . . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e . .
    . . . . . . . . b 5 5 d d d 6 6 5 5 5 5 b b 4 b 4 4 4 4 4 e e .
    . . . . . . . b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b 4 4 4 4 4 e b
    . . . . . . . 4 3 2 2 2 5 5 8 8 5 5 5 5 5 d 4 e e b 4 4 b 4 e e
    . . . . . . b 4 2 2 3 3 2 d d d 5 5 5 2 2 2 d 4 e e b b b 4 b e
    . . . . . . b e 2 2 2 3 2 e d 5 5 5 2 2 3 3 2 d b 4 e b b b b e
    . . . . . b d e 2 2 2 2 2 e 5 5 5 e 2 2 2 3 2 e d d 4 b b b b e
    . . . . . b 5 2 e 2 2 2 e 3 5 5 5 e 2 2 2 2 2 e d d d 4 e b e e
    . . . . b d 5 5 2 e e e 3 5 5 5 5 2 e 2 2 2 e 3 5 5 5 4 4 e e e
    . . . . 6 6 5 d d 5 5 5 5 5 5 5 5 5 2 e e e 3 5 5 d d 4 d e e e
    . . . 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e
    . . . 4 8 8 5 2 2 2 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 e e e
    . . b 4 5 5 2 2 3 3 2 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d e e e .
    . . 4 d 5 2 2 2 2 3 2 e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 e e e . .
    . b d d 5 e 2 2 2 2 2 e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . .
    . b 5 5 d 2 e 2 2 2 e 3 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . .
    b d 5 d d d 2 e e e 3 d 4 4 4 5 5 5 d d 4 e . . . . . . . . . .
    b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . .
    4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . .
    4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . .
    4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . .
    4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
