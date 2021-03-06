// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)
// 2. Compare the two versions, think about the big differences, and see which one
// you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
// in the dev tools Network tab

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', function () {
      imgContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', function () {
      reject(new Error('Image not found!'));
    });
  });
};

const loadNPause = async function () {
  try {
    // load image 1
    let image = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    image.style.display = 'none';

    // load image 2
    image = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    image.style.display = 'none';
  } catch (error) {
    error => console.error(error);
  }
};

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array
// 5. Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-
// 3.jpg']. To test, turn off the 'loadNPause' function

const loadAll = async function (imgArr) {
  try {
    const imgs = await imgArr.map(async image => await createImage(image));
    const imageElements = await Promise.all(imgs);
    console.log(imageElements);

    // looping to add a css class (.parallel)
    imageElements.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    error => console.error(error);
  }
};
