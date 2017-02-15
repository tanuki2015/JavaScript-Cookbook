// 记录流逝的时间
const firstDate = new Date();
// do something...
const lastDate = new Date();
const differ = firstDate - lastDate;

// 测试，太快了，都一样
console.log(`front event time is ${new Date()}`);

window.onload = () => {
  console.log(`onload time is ${new Date()}`);
};

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log(`readyState time is ${new Date()}`);
  }
};

console.log(`end event time is ${new Date()}`);

// 这个还行，228毫秒
const finishTime = new Date();
for (let i = 0, count = 0; i < 10000000; i++) {
  count += i;
}
console.log(`count finished ${new Date() - finishTime}`);
