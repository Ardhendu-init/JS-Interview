function progressBar(progress) {
  const bar = document.querySelector(".progress");
  bar.style.width = `${progress}%`;
}
progressBar(50);
// let p = 0;
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   if (p === 100) {
//     btn.disabled = true;
//   } else {
//     p += 10;
//     progressBar(p);
//   }
// });
