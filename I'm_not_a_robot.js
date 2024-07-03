function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

i1 = 1;

function looping() {
    path = "/html/body/ul/li[" + i1 + "]";
    e = getElementByXpath(path);
    if (i1==1) {
        encode_e = e.innerHTML.substring(11);
    }
    else {
        encode_e = e.innerHTML.substring(20,e.innerHTML.length-7);
    }
    decode_e = atob(encode_e);
    f = decode_e.substring(4);
    response = eval(f);
    ws.send(response);
    i1 += 1;
}

// This maybe don't work. If that you have to paste looping function manualy 50 times)))
for (let i=1;i<51;i++) {
    setTimeout(looping, 2000);
}
