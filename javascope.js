var slideShow = {
    photoList: ['Mario', 'Luigi', 'Yoshi', 'DK'],

    currentPhotoIndex: 0,

    nextPhoto: function () {

        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex])
            console.log(this.currentPhotoIndex);
        }
        else if (this.currentPhotoIndex < this.photoList.length) {
            this.pause()
            return console.log('End of show folks!')
            
        }

    },

    prevPhoto: function () {

        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex])
        }
        else if (this.currentPhotoIndex + 1 > 0) {
            return console.log("Opening pic!");
        }
    },

    getCurrentPhoto: function () {

        console.log(this.photoList[this.currentPhotoIndex]);
        console.log(this.currentPhotoIndex);
    },
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    },

    playInterval: null,

    play: function() {
        var self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 8000);
    },
    pause: function() {
        clearInterval(this.playInterval);
    }
};



slideShow.play();