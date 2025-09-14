const characterImages = [
  '/assets/images/ch-1.png',
  '/assets/images/ch-2.png',
  '/assets/images/ch-3.png',
  '/assets/images/ch-4.png',
  '/assets/images/ch-5.png',
  '/assets/images/ch-6.png',
  '/assets/images/ch-7.png',
  '/assets/images/ch-8.png',
  '/assets/images/ch-9.png',
  '/assets/images/ch-10.png',
  '/assets/images/ch-11.png',
  '/assets/images/ch-12.png',
];

export function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * characterImages.length);
  return characterImages[randomIndex];
}

export function updateImage(imgElement, newSrc) {
  if (imgElement) {
    imgElement.src = newSrc;
  }
}
