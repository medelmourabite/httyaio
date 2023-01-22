import { useEffect, useState } from 'react';
import * as styles from './index.module.css';

const CHAR_CODES = ['_', '_', '-', '+', ';', '/', '!', '$', '%', '#'];

const getCharFromCode = (code) =>
  CHAR_CODES[Math.floor(((CHAR_CODES.length - 1) * code) / 250)];

const getGrayScale = (r, g, b) => 0.2989 * r + 0.587 * g + 0.114 * b;

function AIFace({ url, width = 40, height = 40 }) {
  const [charArray, setCharArray] = useState([[]]);

  useEffect(() => {
    const img = new Image();
    img.src = url;

    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixelArray = imageData.data;

      var newCharArray = [[]];
      let index = 0;
      for (let i = 0; i < canvas.width; i++) {
        newCharArray[i] = [];
        for (let j = 0; j < canvas.height; j++) {
          let red = pixelArray[index];
          let green = pixelArray[index + 1];
          let blue = pixelArray[index + 2];

          const pixel = getGrayScale(red, green, blue);
          newCharArray[i].push(pixel);

          index += 4;
        }
      }

      setCharArray(newCharArray);
    };
  }, []);

  const onFileUplaoded = () => {
    let input = document.getElementById('input-file');
    let file = input.files[0];

    let reader = new FileReader();
    reader.onload = function (event) {
      let img = new Image();
      img.src = event.target.result;
      img.onload = function () {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixelArray = imageData.data;

        var newCharArray = [[]];

        let index = 0;
        for (let i = 0; i < canvas.width; i++) {
          newCharArray[i] = [];
          for (let j = 0; j < canvas.height; j++) {
            let red = pixelArray[index];
            let green = pixelArray[index + 1];
            let blue = pixelArray[index + 2];

            const pixel = 0.2989 * red + 0.587 * green + 0.114 * blue;
            newCharArray[i].push(pixel);

            index += 4;
          }
        }
        setCharArray(newCharArray);
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <div className={styles.face}>
        {charArray.map((row, index) => (
          <div key={index}>
            {row.map((code) => getCharFromCode(code)).join('')}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIFace;
