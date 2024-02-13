import { values, container, trash } from "./script.js";

export function removeAnimate(id) {
  let index = 0;
  let length = trash.length;
  values.forEach((item, i) => {
    if (item.id === id) {
      index = i;
    }
  });
  console.log(length);
  //   for (let i = length - (index+1); i <= length; i++) {
  //     console.log('hello')
  //   }
    container[index].style.opacity = "0";
  let i = index + 1;
  while (i < length) {
    container[i].style.transition = "all 0.5s ease"
    container[i].style.transform = "translateY(-50px)";
    
    
    i++;
  }
}
