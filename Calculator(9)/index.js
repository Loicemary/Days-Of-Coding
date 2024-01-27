let ratioWidth = document.getElementById("ratio-width");
let ratioheight = document.getElementById("ratio-height");
let Width = document.getElementById("width");
let height = document.getElementById("height");

let calculateWidth = ()=>{
    let aspectRatio = ratioWidth.value / ratioheight.value;
    Width.value = parseFloat((height.value * aspectRatio).toFixed
    (2));
};

let calculateHeight = ()=>{
    let aspectRatio = ratioWidth.value / ratioheight.value;
    height.value = parseFloat((Width.value * aspectRatio).toFixed
    (2));
};

height.addEventListener("input", calculateWidth);
Width.addEventListener("input", calculateHeight);
ratioheight.addEventListener("input", calculateWidth);
ratioWidth.addEventListener("input", calculateHeight);