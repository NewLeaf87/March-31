var slideShow = {
    photoList : ['Mario', 'Luigi','Yoshi'],
    currentPhotoIndex: 0,
    nextPhoto: function()
{
if(this.currentPhotoIndex < this.photoList.length - 1){
    this.currentPhotoIndex++;
    console.log(this.photoList[this.currentPhotoIndex])
    console.log(this.currentPhotoIndex);
}
else if (this.currentPhotoIndex < this.photoList.length)
{
    return console.log('End of show folks!')
}

},
prevPhoto: function(){
    if(this.currentPhotoIndex > 0){
        this.currentPhotoIndex --;
        console.log(this.photoList[this.currentPhotoIndex])
    }
    else if(this.currentPhotoIndex + 1 > 0) {
        return console.log("Opening pic!");
    }
},
getCurrentPhoto: function () {
    console.log(this.photoList[this.currentPhotoIndex]);
}
}
slideShow.nextPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();
slideShow.prevPhoto();
slideShow.prevPhoto();
slideShow.prevPhoto();
slideShow.getCurrentPhoto();
