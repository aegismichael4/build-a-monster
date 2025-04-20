class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.eyeLeftX = this.bodyX - 35;
        this.eyeRightX = this.bodyX + 35;
        this.eyeY = this.bodyY - 35;

        this.legLeftX = this.bodyX - 60;
        this.legRightX = this.bodyX + 60;
        this.legY = this.bodyX + 190;

        this.armLeftX = this.bodyX - 100;
        this.armRightX = this.bodyX + 100;
        this.armUpperY = this.bodyY - 30;
        this.armLowerY = this.bodyY + 30;

        this.mouthY = this.bodyY + 5;

        this.earLeftX = this.bodyX - 40;
        this.earRightX = this.bodyX + 40;
        this.earY = this.bodyY - 110;

        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        //body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");
        
        //eyes
        my.sprite.eyeRight = this.add.sprite(this.eyeRightX, this.eyeY, "monsterParts", "eye_closed_feminine.png");
        my.sprite.eyeLeft = this.add.sprite(this.eyeLeftX, this.eyeY, "monsterParts", "eye_closed_feminine.png");
        my.sprite.eyeLeft.flipX = true;
        my.sprite.eyeCenter = this.add.sprite(this.bodyX, this.eyeY - 25, "monsterParts", "eye_yellow.png");
        my.sprite.eyeCenter.scale = 0.5;

        //legs
        my.sprite.legLeft = this.add.sprite(this.legLeftX, this.legY, "monsterParts", "leg_greenC.png");
        my.sprite.legLeft.flipX = true;
        my.sprite.legRight = this.add.sprite(this.legRightX, this.legY, "monsterParts", "leg_greenC.png");

        //arms
        my.sprite.leftUpperArm  = this.add.sprite(this.armLeftX, this.armUpperY, "monsterParts", "arm_greenE.png");
        my.sprite.leftUpperArm.flipX = true;
        my.sprite.leftUpperArm.scale = 0.5;
        my.sprite.leftUpperArm.rotation = 1.2;
        my.sprite.leftLowerArm  = this.add.sprite(this.armLeftX, this.armLowerY, "monsterParts", "arm_greenE.png");
        my.sprite.leftLowerArm.flipX = true;
        my.sprite.leftLowerArm.scale = 0.75;
        my.sprite.leftLowerArm.rotation = 0.9;
        my.sprite.rightUpperArm  = this.add.sprite(this.armRightX, this.armUpperY, "monsterParts", "arm_greenE.png");
        my.sprite.rightUpperArm.scale = 0.5;
        my.sprite.rightUpperArm.rotation = -1.2;
        my.sprite.rightLowerArm  = this.add.sprite(this.armRightX, this.armLowerY, "monsterParts", "arm_greenE.png");
        my.sprite.rightLowerArm.scale = 0.75;
        my.sprite.rightLowerArm.rotation = -0.9;

        //mouth
        my.sprite.smile = this.add.sprite(this.bodyX, this.mouthY, "monsterParts", "mouthH.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.mouthY, "monsterParts", "mouthF.png");
        my.sprite.fangs.visible = false;

        //ears
        my.sprite.earLeft  = this.add.sprite(this.earLeftX, this.earY, "monsterParts", "detail_green_ear.png");
        my.sprite.earLeft.flipX = true;
        my.sprite.earLeft.scale = 2;
        my.sprite.earLeft.rotation = .5;
        my.sprite.earRight = this.add.sprite(this.earRightX, this.earY, "monsterParts", "detail_green_ear.png");
        my.sprite.earRight.scale = 2;
        my.sprite.earRight.rotation = -.5;


        //key objects
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // smile event
        this.sKey.on('down', (key, event) => {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        });

        // fangs event
        this.fKey.on('down', (key, event) => {
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
        });

        console.log(typeof(my.sprite));
    
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        // a key
        if (this.aKey.isDown) {
            for(let s in my.sprite) {
                my.sprite[s].x -= 1;
            }
        }

         // d key
         if (this.dKey.isDown) {
            for(let s in my.sprite) {
                my.sprite[s].x += 1;
            }
        }
       
    }

}