import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { getRandomImage, updateImage } from '../../src/js/image-display';

describe('Image Display Module', () => {
  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body><img id="character-image" src="" /></body></html>');
    global.document = dom.window.document;
  });

  describe('getRandomImage', () => {
    it('should return a random image path from the character list', () => {
      const imagePath = getRandomImage();
      const expectedPattern = /\/assets\/images\/ch-\d{1,2}\.png/;
      expect(imagePath).toMatch(expectedPattern);
    });
  });

  describe('updateImage', () => {
    it('should update the src attribute of the given image element', () => {
      const imgElement = document.getElementById('character-image');
      const newImagePath = '/assets/images/ch-1.png';
      updateImage(imgElement, newImagePath);
      expect(imgElement.src).toContain(newImagePath);
    });
  });
});
