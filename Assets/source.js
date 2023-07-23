document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
    const message = `hallo saya mau beli ${product_name} - ${product_price}`
    const whatsapp =`https://wa.me/6287852692092?text=${message}`
    open(whatsapp, "_blank")
}

function chat() {
    const message =`halo min saya mau tanya nih `
    const whatsapp = `https://wa.me/6287852692092?text=${message}`
    open(whatsapp, "_blank")
}
