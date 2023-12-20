function open_f_s(){
    let f=document.getElementById("f_table");
    if(f.style.display == "none"){
        f.style.display = "flex";
    }else{
        f.style.display = "none";
    }
}
function open_f_s1(){
    let f=document.getElementById("f_table1");
    if(f.style.display == "none"){
        f.style.display = "flex";
    }else{
        f.style.display = "none";
    }
}
function open_f_s2(){
    let f=document.getElementById("f_table2");
    if(f.style.display == "none"){
        f.style.display = "flex";
    }else{
        f.style.display = "none";
    }
}
function FirstComplete(){
    let values=document.getElementById("first_solver").value;
    let [a,b] = values.split(" ").map(Number);
    let r=0;
    let n=1;
    while(a>b**n){
        r+= Math.floor(a/b**n);
        n+=1
    }
    document.getElementById("result").innerHTML = `Result: ${r}`;
}
function Plus(){
    let values = document.getElementById("second_solver").value;
    let [a,b] = values.split(" ").map(Number);
    document.getElementById("res").innerHTML = `${a} + ${b} = ${a+b}`;
}
function Minus(){
    let values = document.getElementById("second_solver").value;
    let [a,b] = values.split(" ").map(Number);
    document.getElementById("res").innerHTML = `${a} - ${b} = ${a-b}`;
}
function Kp(){
    let values = document.getElementById("second_solver").value;
    let [a,b] = values.split(" ").map(Number);
    document.getElementById("res").innerHTML = `${a} * ${b} = ${a*b}`;
}
function Bs(){
    let values = document.getElementById("second_solver").value;
    let [a,b] = values.split(" ").map(Number);
    document.getElementById("res").innerHTML = `${a} / ${b} = ${a/b}`;
}
function Parabola(){
    let values=document.getElementById("third_solver").value;
    let point = document.getElementById("pointer");
    
    let [a,b,c] = values.split(" ").map(Number);
    
    let x=-(b/(2*a));
    let d=b*b- (4*a*c);
    let y=-(d/(4*a));


    document.getElementById("res_p").innerHTML = `Result: X0= ${x}, Y0= ${y}`;
    point.style.translate = x*10+"px";
    if(y<0){
        point.style.marginTop = -y*10+"px";
    }else{
        point.style.marginTop = y*10+"px";
    }
}
