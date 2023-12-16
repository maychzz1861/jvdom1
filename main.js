// main.js
const numberElement = document.querySelector('.number');
const incButton = document.querySelector('.btn-inc');
const decButton = document.querySelector('.btn-dec');
const clrButton = document.querySelector('.btn-clr');

let count = 0;

incButton.addEventListener('click', () => {
  count++;
  if (count < 0) { // ตรวจสอบว่าค่าตัวเลขไม่ต่ำกว่า 0
    count = 0; // ให้เป็น 0 ถ้าค่าต่ำกว่า 0
  }
  numberElement.textContent = count;
});

decButton.addEventListener('click', () => {
  count--;
  if (count < 0) { // ตรวจสอบว่าค่าตัวเลขไม่ต่ำกว่า 0
    count = 0; // ให้เป็น 0 ถ้าค่าต่ำกว่า 0
  }
  numberElement.textContent = count;
});

clrButton.addEventListener('click', () => {
  count = 0;
  numberElement.textContent = count;
});
