function getPhotos() {
  let photos = [];
  for (let itr = 0; itr < 1000; itr++) {
    photos.push({
      name: `image_${itr}.jpg`
    });
  }
  return photos;
}

function processingPhoto(photoIndex) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("processing photo index", photoIndex);
      resolve();
    }, 1000);
  });
}

function processingPhotoRecursive(photoIndex) {
  return new Promise((resolve) => {
    processingPhoto(photoIndex).then(() => {
      --photoIndex;
      if (photoIndex >= 0) {
        recursive(photoIndex).then(() => resolve());
      } else {
        resolve();
      }
    });
  });
}

let photos = getPhotos();
let lastPhotoIndex = photos.length - 1;
recursive(lastPhotoIndex);