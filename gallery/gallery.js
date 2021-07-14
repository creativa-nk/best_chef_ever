const images = document.querySelectorAll('.img'); /* todas la imagenes que tengan classe img */
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');

images.forEach(image =>{
    image.addEventListener('click',() => {
       addImage(image.getAttribute('src'),/*  image.getAttribute('alt') */);
      
      })
})


const addImage = (srcImage, altImage)=>{
  containerImage.classList.toggle('move');
  imageContainer.classList.toggle('show');   /* toggle agrega o quita la clase .move */
  imageContainer.src = srcImage;
}

containerImage.addEventListener('click',() =>{ /* cuando cerramos el container */
  containerImage.classList.toggle('move'); 
  imageContainer.classList.toggle('show');
})
