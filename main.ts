namespace SpriteKind {
    export const Pierre = SpriteKind.create()
    export const Shyguy = SpriteKind.create()
    export const Fishingrod = SpriteKind.create()
    export const Animal = SpriteKind.create()
    export const Fish = SpriteKind.create()
    export const Reel = SpriteKind.create()
    export const FakeFish = SpriteKind.create()
    export const Caughtfish = SpriteKind.create()
    export const Camera = SpriteKind.create()
}
/**
 * Each sprite will provide a certain number of points. Adjust the points to suit your animal!
 */
function HatchFish (num: number) {
    Fish2 = sprites.create(img`
        . . . . . . c c . . . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . . . c b b c . . . . . . 
        c . . . . . c b b b c . . . . . 
        c c . . . c b b b b b c c . . . 
        c b c . c b b b b b b b b c . . 
        c b b c b b b b c b b f f b c . 
        c b b b b b b c c b b f f b b c 
        c b b b b b c c c b b b b b b c 
        c b b c b b b c c b b b b b c . 
        c b c . c b b b c b b b b c . . 
        c c . . . c b b b b b c c . . . 
        c . . . . . c b b b c . . . . . 
        . . . . . . c b b c . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . . . c c . . . . . . . . 
        `, SpriteKind.Fish)
    Fish2.setFlag(SpriteFlag.Invisible, true)
    Fish2.setFlag(SpriteFlag.Ghost, true)
    sprites.setDataNumber(Fish2, "Points", 4)
    for (let index = 0; index < num; index++) {
        RandomFish = sprites.allOfKind(SpriteKind.FakeFish)[randint(0, sprites.allOfKind(SpriteKind.FakeFish).length - 1)]
        newfish = sprites.create(RandomFish.image.clone(), SpriteKind.Fish)
        sprites.setDataNumber(newfish, "Points", sprites.readDataNumber(RandomFish, "Points"))
        if (Math.percentChance(50)) {
            tiles.placeOnRandomTile(newfish, myTiles.tile5)
            newfish.vx = randint(1, 30)
        } else {
            tiles.placeOnRandomTile(newfish, myTiles.tile3)
            newfish.vx = 0 - randint(1, 30)
            newfish.image.flipX()
        }
        newfish.setFlag(SpriteFlag.BounceOnWall, true)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Lure = sprites.create(img`
        . . . 8 . . . 
        . . 8 6 8 . . 
        . . 6 8 8 . . 
        . . 6 8 8 . . 
        . . 8 8 8 . . 
        . . 2 4 4 . . 
        . . 2 4 4 . . 
        f . 2 2 4 . f 
        f f 2 4 4 f f 
        f . . 4 . . f 
        f . . 4 . . f 
        . f . f . f . 
        . . f f f . . 
        `, SpriteKind.Fishingrod)
    Lure.setVelocity(0, 15)
    scene.cameraFollowSprite(Lure)
    controller.moveSprite(Lure, 100, 0)
})
scene.onHitWall(SpriteKind.Fish, function (sprite, location) {
    sprite.image.flipX()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Lure, 0, 0)
    Lure.vy = -100
    Lure.setKind(SpriteKind.Reel)
})
function Controls () {
    controller.moveSprite(Lure, 100, 0)
}
function Setup () {
    Pierre2 = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ccccccccccccccccccccccccccccc...
        dddddddddddddddddddddddddddddd..
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeee..
        .........7ceee.......cceee......
        .........7ceee.......cceee......
        .........7ceee.......7ceee......
        .........c77ee.......7ceee......
        .........cc77e.......77eee......
        .........cce77.......c7eee......
        .........ccee7.......c7eee......
        .........ccee7.......c77ee......
        .........ccee7.......cc7ee......
        .........ccee7.......cc77e......
        .........cce77.......cce7e......
        .........cce7e.......cce7e......
        .........cc7ee.......cce7e......
        .........c77ee.......cce7e......
        .........c7eee.......cce7e......
        .........c7eee.......cce77......
        .........77eee.......ccee7......
        .........7ceee.......cce77......
        .........7ceee.......c777e......
        .........77eee.......7ceee......
        .........c77ee.......7ceee......
        .........cc7ee.......777ee......
        .........cc7ee.......cc77e......
        .........cc7ee.......cce7e......
        .........cc7ee.......cce7e......
        .........cc77e.......cce77......
        .........cce7e.......ccee7......
        .........cce7e.......cce77......
        .........cc7ee.......cc77e......
        .........cc7ee.......c77ee......
        .........c7eee.......c7eee......
        .........77eee.......c7eee......
        .........7ceee.......c7eee......
        .........77eee.......c7eee......
        .........c7eee.......c7eee......
        .........c77ee.......cc77e......
        .........cc7ee.......cce7e......
        .........cc77e.......cce77......
        .........cce7e.......ccee7......
        .........cce7e.......ccee7......
        .........cce7e.......ccee7......
        .........cce77.......cce7e......
        .........ccee7.......cce7e......
        .........cce77.......cce77......
        .........cce7e.......ccee7......
        `, SpriteKind.Pierre)
    Rod = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f . . . f . . . . . 
        . . . . . f . . . . . f . . . . 
        . . . . f . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . f . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Fishingrod)
    Lure = sprites.create(img`
        . . . 8 . . . 
        . . 8 6 8 . . 
        . . 6 8 8 . . 
        . . 6 8 8 . . 
        . . 8 8 8 . . 
        . . 2 4 4 . . 
        . . 2 4 4 . . 
        f . 2 2 4 . f 
        f f 2 4 4 f f 
        f . . 4 . . f 
        f . . 4 . . f 
        . f . f . f . 
        . . f f f . . 
        `, SpriteKind.Fishingrod)
    Pierre2.z = -1
    Pierre2.z = -1
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555555555666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555555555666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555555555666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555555555666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555555555666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555555555666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555555555666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555555555666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666665555555555555555555555555555555555555556666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666665555555555555555555555555555555555555556666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555555555555555555555555555555555555566666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555555555555555555555555555555555555566666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666665555555555555555555555555555555556666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555555555555555555555555555555566666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666665555555555555555555555555556666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555555555555555555555555566666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666665555555555555555555556666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555555555555566666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbb666666666666666bbbbbbbbbbbb6666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666bbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    tiles.setTilemap(tilemap`level`)
    Dude = sprites.create(img`
        . . f f f f f f f f f f . . . . 
        . f 2 2 2 2 2 f 1 1 1 1 f . . . 
        f 2 2 2 2 2 f 1 1 1 1 1 f . . . 
        . f 2 2 2 f 1 1 1 1 1 1 1 f . . 
        . . f 2 2 f 1 1 f f 1 f f 1 f . 
        . . . f 5 f 1 1 f f 1 f f 1 f . 
        . . . f 5 f 1 1 f f 1 f f 1 f . 
        . . . f 2 f 1 1 1 1 1 1 1 1 f . 
        . . . f 2 2 f 1 1 1 1 1 1 f . . 
        . . f f f 2 2 f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 2 2 f . . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f f f f f f f f f f f f . . 
        . . f 6 6 1 1 f f 6 6 1 1 f . . 
        . . f 8 8 8 6 f f 8 8 8 6 f . . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Shyguy)
    tiles.placeOnTile(Pierre2, tiles.getTileLocation(0, 4))
    Dude.top = Pierre2.top - 2
    Dude.right = Pierre2.right - 2
    Rod.top = Dude.top - 0
    Rod.right = Dude.right - -13
    Lure.setVelocity(0, 15)
    scene.cameraFollowSprite(Lure)
}
scene.onOverlapTile(SpriteKind.Reel, myTiles.transparency16, function (sprite, location) {
    story.queueStoryPart(function () {
        sprite.setKind(SpriteKind.Reel)
        story.queueStoryPart(function () {
            pause(100)
        })
        sprite.destroy()
        ReelIn = true
        sprite.vy = 0
        for (let value of sprites.allOfKind(SpriteKind.Caughtfish)) {
            story.queueStoryPart(function () {
                story.spriteMoveToLocation(value, 80, 50, 60)
                value.say("" + sprites.readDataNumber(value, "Points"))
            })
            story.queueStoryPart(function () {
                value.destroy(effects.fire, 1000)
                info.changeScoreBy(sprites.readDataNumber(value, "Points"))
                pause(1000)
            })
        }
    })
})
/**
 * Lets practice modifying code! 
 * 
 * Jump in and edit these sprites of fish!
 */
/**
 * Research various animals that live in the ocean and try and add some variety to our fishing game!
 */
function OGFish () {
    Fish2 = sprites.create(img`
        . . . . . . c c . . . . . . . . 
        . . . . . . c 3 c . . . . . . . 
        . . . . . . c 3 3 c . . . . . . 
        c . . . . . c 3 3 3 c . . . . . 
        c c . . . c 3 3 3 3 3 c c . . . 
        c 3 c . c 3 3 3 3 3 3 3 3 c . . 
        c 3 3 c 3 3 3 3 c 3 3 f f 3 c . 
        c 3 3 3 3 3 3 c c 3 3 f f 3 3 c 
        c 3 3 3 3 3 c c c 3 3 3 3 3 3 c 
        c 3 3 c 3 3 3 c c 3 3 3 3 3 c . 
        c 3 c . c 3 3 3 c 3 3 3 3 c . . 
        c c . . . c 3 3 3 3 3 c c . . . 
        c . . . . . c 3 3 3 c . . . . . 
        . . . . . . c 3 3 c . . . . . . 
        . . . . . . c 3 c . . . . . . . 
        . . . . . . c c . . . . . . . . 
        `, SpriteKind.FakeFish)
    sprites.setDataNumber(Fish2, "Points", 1)
    Fish2 = sprites.create(img`
        . . . . . . c c . . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . . . c 5 5 c . . . . . . 
        c . . . . . c 5 5 5 c . . . . . 
        c c . . . c 5 5 5 5 5 c c . . . 
        c 5 c . c 5 5 5 5 5 5 5 5 c . . 
        c 5 5 c 5 5 5 5 c 5 5 f f 5 c . 
        c 5 5 5 5 5 5 c c 5 5 f f 5 5 c 
        c 5 5 5 5 5 c c c 5 5 5 5 5 5 c 
        c 5 5 c 5 5 5 c c 5 5 5 5 5 c . 
        c 5 c . c 5 5 5 c 5 5 5 5 c . . 
        c c . . . c 5 5 5 5 5 c c . . . 
        c . . . . . c 5 5 5 c . . . . . 
        . . . . . . c 5 5 c . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . . . c c . . . . . . . . 
        `, SpriteKind.FakeFish)
    sprites.setDataNumber(Fish2, "Points", 2)
    Fish2 = sprites.create(img`
        . . . . . . c c . . . . . . . . 
        . . . . . . c 2 c . . . . . . . 
        . . . . . . c 2 2 c . . . . . . 
        c . . . . . c 2 2 2 c . . . . . 
        c c . . . c 2 2 2 2 2 c c . . . 
        c 2 c . c 2 2 2 2 2 2 2 2 c . . 
        c 2 2 c 2 2 2 2 c 2 2 f f 2 c . 
        c 2 2 2 2 2 2 c c 2 2 f f 2 2 c 
        c 2 2 2 2 2 c c c 2 2 2 2 2 2 c 
        c 2 2 c 2 2 2 c c 2 2 2 2 2 c . 
        c 2 c . c 2 2 2 c 2 2 2 2 c . . 
        c c . . . c 2 2 2 2 2 c c . . . 
        c . . . . . c 2 2 2 c . . . . . 
        . . . . . . c 2 2 c . . . . . . 
        . . . . . . c 2 c . . . . . . . 
        . . . . . . c c . . . . . . . . 
        `, SpriteKind.FakeFish)
    sprites.setDataNumber(Fish2, "Points", 3)
    Fish2 = sprites.create(img`
        . . . . . . c c . . . . . . . . 
        . . . . . . c 7 c . . . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        c . . . . . c 7 7 7 c . . . . . 
        c c . . . c 7 7 7 7 7 c c . . . 
        c 7 c . c 7 7 7 7 7 7 7 7 c . . 
        c 7 7 c 7 7 7 7 c 7 7 f f 7 c . 
        c 7 7 7 7 7 7 c c 7 7 f f 7 7 c 
        c 7 7 7 7 7 c c c 7 7 7 7 7 7 c 
        c 7 7 c 7 7 7 c c 7 7 7 7 7 c . 
        c 7 c . c 7 7 7 c 7 7 7 7 c . . 
        c c . . . c 7 7 7 7 7 c c . . . 
        c . . . . . c 7 7 7 c . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        . . . . . . c 7 c . . . . . . . 
        . . . . . . c c . . . . . . . . 
        `, SpriteKind.FakeFish)
    sprites.setDataNumber(Fish2, "Points", 4)
    Fish2 = sprites.create(img`
        . . . . . . c c . . . . . . . . 
        . . . . . . c 4 c . . . . . . . 
        . . . . . . c 4 4 c . . . . . . 
        c . . . . . c 4 4 4 c . . . . . 
        c c . . . c 4 4 4 4 4 c c . . . 
        c 4 c . c 4 4 4 4 4 4 4 4 c . . 
        c 4 4 c 4 4 4 4 c 4 4 f f 4 c . 
        c 4 4 4 4 4 4 c c 4 4 f f 4 4 c 
        c 4 4 4 4 4 c c c 4 4 4 4 4 4 c 
        c 4 4 c 4 4 4 c c 4 4 4 4 4 c . 
        c 4 c . c 4 4 4 c 4 4 4 4 c . . 
        c c . . . c 4 4 4 4 4 c c . . . 
        c . . . . . c 4 4 4 c . . . . . 
        . . . . . . c 4 4 c . . . . . . 
        . . . . . . c 4 c . . . . . . . 
        . . . . . . c c . . . . . . . . 
        `, SpriteKind.FakeFish)
    sprites.setDataNumber(Fish2, "Points", 5)
    for (let value2 of sprites.allOfKind(SpriteKind.FakeFish)) {
        value2.setFlag(SpriteFlag.Invisible, true)
        value2.setFlag(SpriteFlag.Ghost, true)
    }
}
sprites.onOverlap(SpriteKind.Reel, SpriteKind.Fish, function (sprite, otherSprite) {
    otherSprite.follow(sprite)
    otherSprite.setKind(SpriteKind.Caughtfish)
})
let ReelIn = false
let Dude: Sprite = null
let Rod: Sprite = null
let Pierre2: Sprite = null
let Lure: Sprite = null
let newfish: Sprite = null
let RandomFish: Sprite = null
let Fish2: Sprite = null
OGFish()
Setup()
Controls()
HatchFish(30)
