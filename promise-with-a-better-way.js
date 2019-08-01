function loadingPhoto() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 1000);
  });
}

function resizePhoto() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 200);
  });
}

function addText() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 200);
  });
}

function addFilter() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 200);
  });
}

function addLocation() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 200);
  });
}

function savePhoto() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 500);
  });
}

// Promise chain with a better way
loadingPhoto().then(() => {
  return resizePhoto();
}).then(() => {
  return addText();
}).then(() => {
  return addFilter();
}).then(() => {
  return addLocation();
}).then(() => {
  savePhoto()
}).then(() => {
  console.log("Photo saved");
});