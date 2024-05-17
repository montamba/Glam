
//exit
function exx(){
    var mn = document.getElementById("show");
    mn.classList.toggle("showtog")
    mn.innerText = "";
}


// to show selected div
function tap(what){
    var show = document.getElementById("show");

    var pict = what.querySelector(".ig > img").src;
    var nam = what.querySelector(".txttx > h3").innerText;
    var prs = what.querySelector(".prays").cloneNode(true);
    var dcpt = what.querySelector("div > div:nth-child(2) > p").innerText;
    var rating = what.querySelector("div > div:nth-child(3)").cloneNode(true);
    var seccode = what.querySelector("div > div:first-child > p").cloneNode(true);

    rating.className = "";

    show.classList.toggle("showtog");

    //creating exit 
    var cbut = document.createElement("button");
    var xsign = document.createElement("i");
    cbut.className = "exit";
    cbut.setAttribute("onclick", "exx()");
    xsign.className = "fas fa-times";
    cbut.appendChild(xsign);

    //container
    var cdv1 = document.createElement("div");
    cdv1.className = "fimg";

    //child img of cdv1
    var img1 = document.createElement("img");
    img1.src = pict;

    //child div ov cdv1
    var ccdv1 = document.createElement("div");

    //child button1 and 2 of child div

    var butt1 = document.createElement("button");
    var butt2 = document.createElement("button");
    var i1 = document.createElement("i");
    var i2 = document.createElement("i");
    var hre = document.createElement("a");
    i1.className = "fas fa-shopping-bag";
    i2.className = "fas fa-shopping-cart";
    
    butt2.appendChild(i2);
    butt1.append(" BUY");
    hre.href = "buy.html";
    hre.appendChild(butt1);
    butt2.append(" CART");
    butt1.append(i1);
    butt1.setAttribute("onclick", "butt()");
    butt2.setAttribute("onclick", "addcart(this)");
    ccdv1.append(hre,butt2);
    

    cdv1.append(img1, ccdv1);

    var ftxt = document.createElement("div");
    ftxt.className = "ftxt";

    var p1 = document.createElement("p");
    p1.className = "nm";
    p1.innerText = nam;

    prs.className = "prc";
    

    var brr = document.createElement("br");

    var pha = document.createElement("p");
    pha.innerText = dcpt;

    ftxt.append(p1, prs, rating, brr, pha, seccode);


    show.append(cbut, cdv1, ftxt);
}

function butt(){
}


//creating cart container
function addcart(){
    var hhh = document.getElementById("cart");
    var item = document.getElementById("show");
    var nname = item.querySelector(".ftxt > p:first-child").innerText;
    var pprice = item.querySelector(".ftxt > div > h4:nth-child(2)").innerText;
    var iimag = item.querySelector(".fimg > img").src;
    var seecode = item.querySelector(".ftxt > p:nth-child(6)").innerText;
    
    var same = hhh.querySelector("."+seecode);

    if(!same){
        var mmconta = document.createElement("div");
        mmconta.classList.add("mconta", seecode);

        var nconta = document.createElement("div");
        nconta.className = "conta";

        var ggal = document.createElement("div");
        ggal.className = "gal";

        var immg = document.createElement("img");
        immg.src = iimag;

        var rev1 = document.createElement("div");
        rev1.className = "rev";

        var pp1 = document.createElement("p");
        pp1.innerText = nname;

        var pp2 = document.createElement("p");
        pp2.className = "dprice";
        pp2.innerText = pprice;

        var pp3 = document.createElement("p");
        pp3.classList.add("orig","unseen");
        pp3.innerText = pprice;


        rev1.append(pp1, pp2, pp3)

        var rev2 = document.createElement("div");
        rev2.className = "rev";

        var p1p = document.createElement("p");
        p1p.innerText = "quantity";

        var p2p = document.createElement("p");
        p2p.className = "quan";
        p2p.innerText = "1";

        rev2.append(p1p,p2p);

        var diiv = document.createElement("div");
        diiv.className = "bttoon";

        var buut1 = document.createElement("button");
        buut1.setAttribute("onclick","mamamo(this)");
        buut1.innerText = "+";

        var buut2 = document.createElement("button");
        buut2.setAttribute("onclick","mamam(this)");
        buut2.innerText = "-";

        diiv.append(buut1, buut2);

        var ht = document.createElement("a");
        ht.href = "buy.html";

        
        var bbutt = document.createElement("button");
        bbutt.className = "byy";
        bbutt.innerText = "BUY";

        ht.appendChild(bbutt);


        ggal.appendChild(immg);

        nconta.append(ggal, rev1, rev2, diiv, ht);
        mmconta.appendChild(nconta);
        hhh.appendChild(mmconta);
    }else{
        alert("Its already in the cart");
    }

    
    
}

//this is for filter 
function chg(cat){
    var first = document.getElementById("apap");
    var second = first.querySelector(cat);

    first.insertBefore(second, first.firstChild);
}

//to show hidden cart div
function ttp(){
    var toog = document.querySelector(".cat");
    toog.classList.toggle("cart");
}


//adding quantity and price
function mamamo(p){
    var ew = p.parentNode.parentNode;
    var we = ew.querySelector(".quan").innerText;
    var wowowin = ew.querySelector(".dprice").innerText;
    var ok = ew.querySelector(".orig").innerText;

    ew.querySelector(".dprice").innerText = (parseInt(wowowin) + parseInt(ok)).toString();


    var add = parseInt(we) + 1;

    ew.querySelector(".quan").innerText = add.toString();
}

//decreasing quantity and price
function mamam(p){
    var ew = p.parentNode.parentNode;
    var we = ew.querySelector(".quan").innerText;
    var wew = ew.querySelector(".dprice").innerText;
    var wewe = ew.querySelector(".orig").innerText;

    
    var add = parseInt(we);

    if(add > 1){
        ew.querySelector(".dprice").innerText = (parseInt(wew) - parseInt(wewe)).toString();
        ew.querySelector(".quan").innerText = add - 1;
    }else{
        var cart = document.getElementById("cart");
        cart.removeChild(ew.parentNode);
    }

}