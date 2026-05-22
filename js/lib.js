

let products =
    JSON.parse(localStorage.getItem("products")) || [];



function saveData() {

    localStorage.setItem("products", JSON.stringify(products));

}



function addproduct(p) {

    const productList = document.getElementById("product-list");

    /* LINK */
    const link = document.createElement("a");
    link.setAttribute("href", "html/sanphamHome.html?id=" + p.id);
    link.setAttribute("class", "book-link");



    /* CARD */
    const card = document.createElement("div");
    card.setAttribute("class", "book-card");



    /* POSTER */
    const poster = document.createElement("div");
    poster.setAttribute("class", "poster");



    /* IMAGE */
    const img = document.createElement("img");
    img.setAttribute("src", p.img);

    /* BUTTON XÓA */
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Xóa";
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.onclick = function (e) {
        e.preventDefault();
        deleteProduct(p.id);
    };



    /* BUTTON SỬA */
    const editBtn = document.createElement("button");
    editBtn.innerText = "Sửa";
    editBtn.setAttribute("class", "edit-btn");
    editBtn.onclick = function (e) {
        e.preventDefault();
        editProduct(p.id);

    };


    /* BOX BUTTON */
    const btnBox = document.createElement("div");
    btnBox.setAttribute("class", "btn-box");
    btnBox.appendChild(editBtn);
    btnBox.appendChild(deleteBtn);


    /* GHÉP */
    poster.appendChild(img);
    card.appendChild(poster);
    card.appendChild(btnBox);
    link.appendChild(card);
    productList.appendChild(link);

}


/* =========================
   LOAD TOÀN BỘ
========================= */

function loadAllproducts() {

    const productList = document.getElementById("product-list");

    /* XÓA CŨ */
    productList.innerHTML = "";

    /* LOAD */
    for (let i = 0; i < products.length; i++) {

        addproduct(products[i]);

    }

}



/* =========================
   THÊM SÁCH
========================= */

function addNewProduct() {

    const name = document.getElementById("name").value;

    const price = document.getElementById("price").value;
    

    const desc = document.getElementById("desc").value;

    const fileInput = document.getElementById("img");

    const file = fileInput.files[0];


    if (name === "" || price === "" || !file) {

        alert("Vui lòng nhập đầy đủ!");

        return;

    }


    const reader = new FileReader();

    reader.onload = function (e) {

        const newProduct = {

            id: Date.now(),

            name: name,

            price: price,

            img: e.target.result,

            desc: desc

        };


        products.push(newProduct);


        /* SAVE */
        saveData();


        /* LOAD */
        loadAllproducts();


        /* RESET INPUT */
        document.getElementById("name").value = "";

        document.getElementById("price").value = "";

        document.getElementById("img").value = "";

        document.getElementById("desc").value = "";


        alert("Đã thêm sách!");

    };


    reader.readAsDataURL(file);

}



/* =========================
   XÓA
========================= */

function deleteProduct(id) {

    const index =
        products.findIndex(
            p => p.id === id
        );


    products.splice(index, 1);



    /* SAVE */
    saveData();


    /* LOAD */
    loadAllproducts();

}



/* =========================
   SỬA
========================= */

function editProduct(id) {

    const product = products.find(
        p => p.id === id
    );

    const newName = prompt("Tên mới:", product.name);

    const newPrice = prompt("Giá mới:", product.price);

    const newDesc = prompt("Mô tả mới:", product.desc);

    if (newName != null && newName != "") {

        product.name = newName;

    }



    if (newPrice != null && newPrice != "") {

        product.price = newPrice;

    }

    if (newDesc != null && newDesc != "") {

        product.desc = newDesc;

    }

    /* SAVE */
    saveData();



    /* LOAD */
    loadAllproducts();

}



/* =========================
   RESET DATABASE
========================= */

function resetDatabase() {

    localStorage.removeItem("products");

    location.reload();

}



/* =========================
   AUTO LOAD
========================= */

window.onload = function () {

    loadAllproducts();

};