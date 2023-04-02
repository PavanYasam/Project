var b=document.querySelector("*");
console.log(b);
var c=document.querySelectorAll("*");
console.log(c);
var d=document.body;
console.log(d);
var e=document.title;
console.log(e);
var g=document.title="free";
console.log(g);
var f=document.doctype;
console.log(f);
var g=document;
let a=document.links;
console.log(a);
// let x=document.images
// console.log(x);
let l=document.links;
console.log(l);
for(let i=0;i<l.length;i++)
{   
    console.log(l);
    l[i].style.backgroundColor="grey";
    l[i].style.color="black";
    l[i].style.borderRadius="8px";
    l[i].style.border="2px solid"
    l[i].style.height="30px";
    l[i].style.width="200px";

}
/**********/
var y=document.images;
console.log(y);
for(var j=0;j<y.length;j++)
{   console.log(y);
    y[j].style.height="100px";
    y[j].style.width="100px";
    y[j].style.borderRadius="50px";
    y[j].style.display="flex";
    y[j].style.alignItems="center";
    y[j].style.justifyContent="center";
    y[j].style.flexDirection="row";
}

