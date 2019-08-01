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

function multipleRecursiveProcess(lastPhotoIndex) {
  return new Promise((finish) => {
    var recursive = () => {
      return new Promise((resolve) => {
        --photoIndex;
        if (photoIndex >= 0) {
          processingPhoto(photoIndex).then(() => {
            recursive().then(() => resolve());
          });
        } else {
          resolve();
        }
      });
    };
    let photoIndex = lastPhotoIndex + 1;

    // We running 5 process on the same time
    Promise.all([
      recursive(),
      recursive(),
      recursive(),
      recursive(),
      recursive()
    ]).then(() => {
      console.log("processing finish!");
      finish();
    });
  });
}

let photos = getPhotos();
let lastPhotoIndex = photos.length - 1;

multipleRecursiveProcess(lastPhotoIndex);