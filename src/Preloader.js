import Phaser from 'phaser';

export class Preloader extends Phaser.Scene
{
    constructor()
    {
        super({
            key: 'Preloader'
        });
    }

    preload ()
    {
        this.load.setPath("assets/");

        this.load.image("volume-icon", "ui/volume-icon.png");
        this.load.image("volume-icon_off", "ui/volume-icon_off.png");

        this.load.audio("theme-song", "audio/fat-caps-audionatix.mp3");
        this.load.audio("whoosh", "audio/whoosh.mp3");
        this.load.audio("card-flip", "audio/card-flip.mp3");
        this.load.audio("card-match", "audio/card-match.mp3");
        this.load.audio("card-mismatch", "audio/card-mismatch.mp3");
        this.load.audio("card-slide", "audio/card-slide.mp3");
        this.load.audio("victory", "audio/victory.mp3");
        this.load.image("background");
        this.load.image("card-back", "cards/card-back.png");
        this.load.image("card-0", "cards/card-0.jpg");
        this.load.image("card-1", "cards/card-1.jpg");
        this.load.image("card-2", "cards/card-2.jpg");
        this.load.image("card-3", "cards/card-3.jpg");
        this.load.image("card-4", "cards/card-4.jpg");
        this.load.image("card-5", "cards/card-5.jpg");

        this.load.image("heart", "ui/heart.png");

    }

    create ()
    {
        this.scene.start("Play");
    }
}
