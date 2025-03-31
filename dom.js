export const createTextBox = (type, content, parent, classes = []) => {
    const el = document.createElement(type);
    classes.forEach((c) => el.classList.add(c))
    const text = document.createTextNode(content);
    el.appendChild(text);
    parent.appendChild(el);
    
};
const gallows = document.getElementById('gallows')
console.log(gallows)


export const updateHang = (imageNum) => {
    let src=`./assets/img/h-${imageNum}.jpg` 
    gallows.setAttribute("src", src)
    //update gallows box with above src


}
