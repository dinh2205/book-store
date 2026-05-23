let products =
    JSON.parse(localStorage.getItem("products")) || [

        {
            id: 1,
            name: "Đắc Nhân Tâm",
            price: "120000",
            img: "../assets/sach1.jpg",
            productLink: "sanpham.html",
            desc: "Sách nổi tiếng của Dale Carnegie"
        },

        {
            id: 2,
            name: "Người Gác Kệ Sách",
            price: "95000",
            img: "../assets/sach2.jpg",
            productLink: "sanpham.html",
            desc: "Câu chuyện chữa lành"
        }

    ];

/* =========================
   SAVE LOCALSTORAGE
========================= */

function saveData() {

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

}


/* =========================
   HIỂN THỊ 1 SẢN PHẨM
========================= */

function addproduct(p) {

    const productList =
        document.getElementById("product-list");



    /* CARD */
    const myDiv =
        document.createElement("div");

    myDiv.setAttribute(
        "class",
        "product-item"
    );



    /* IMAGE */
    const imgDiv =
        document.createElement("div");

    imgDiv.setAttribute(
        "class",
        "product-image"
    );

    const img =
        document.createElement("img");

    img.setAttribute("src", p.img);

    imgDiv.appendChild(img);



    /* INFO */
    const infoDiv =
        document.createElement("div");

    infoDiv.setAttribute(
        "class",
        "product-info"
    );



    /* TÊN */
    const p1 =
        document.createElement("p");

    p1.setAttribute(
        "class",
        "book-name"
    );

    p1.innerText = p.name;



    /* GIÁ */
    const p2 =
        document.createElement("p");

    p2.setAttribute(
        "class",
        "book-price"
    );

    p2.innerText =
        Number(p.price).toLocaleString("vi-VN")
        + " VND";



    /* LINK CHI TIẾT */
    const link =
        document.createElement("a");

    link.setAttribute(
        "href",
        p.productLink + "?id=" + p.id
    );

    link.innerText =
        "Nhấn xem chi tiết";



    /* BUTTON SỬA */
    const editBtn =
        document.createElement("button");

    editBtn.innerText = "Sửa";

    editBtn.setAttribute(
        "class",
        "edit-btn"
    );

    editBtn.onclick = function (e) {

        e.preventDefault();

        editProduct(p.id);

    };



    /* BUTTON XÓA */
    const deleteBtn =
        document.createElement("button");

    deleteBtn.innerText = "Xóa";

    deleteBtn.setAttribute(
        "class",
        "delete-btn"
    );

    deleteBtn.onclick = function (e) {

        e.preventDefault();

        deleteProduct(p.id);

    };



    /* BOX BUTTON */
    const btnBox =
        document.createElement("div");

    btnBox.setAttribute(
        "class",
        "btn-box"
    );

    btnBox.appendChild(editBtn);

    btnBox.appendChild(deleteBtn);



    /* GẮN */
    infoDiv.appendChild(p1);

    infoDiv.appendChild(p2);

    infoDiv.appendChild(link);

    infoDiv.appendChild(btnBox);



    myDiv.appendChild(imgDiv);

    myDiv.appendChild(infoDiv);



    productList.appendChild(myDiv);

}



/* =========================
   LOAD TOÀN BỘ
========================= */

function loadAllproducts() {

    const productList =
        document.getElementById("product-list");

    productList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        addproduct(products[i]);

    }

}



/* =========================
   THÊM SÁCH
========================= */

function addNewProduct() {

    const name =
        document.getElementById("name").value;

    const price =
        document.getElementById("price").value;

    const desc =
        document.getElementById("desc").value;

    const fileInput =
        document.getElementById("img");

    const file =
        fileInput.files[0];



    if (name === "" || price === "" || !file) {

        alert("Vui lòng nhập đầy đủ!");

        return;

    }



    const reader =
        new FileReader();

    reader.onload = function (e) {

        const newProduct = {

            id: Date.now(),

            name: name,

            price: price,

            img: e.target.result,

            productLink: "sanpham.html",

            desc: desc

        };



        products.push(newProduct);



        saveData();

        loadAllproducts();



        /* RESET */
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



    saveData();

    loadAllproducts();

}



/* =========================
   SỬA
========================= */

function editProduct(id) {

    const product =
        products.find(
            p => p.id === id
        );



    const newName =
        prompt("Tên mới:", product.name);

    const newPrice =
        prompt("Giá mới:", product.price);

    const newDesc =
        prompt("Mô tả mới:", product.desc);



    if (newName !== null && newName !== "") {

        product.name = newName;

    }



    if (newPrice !== null && newPrice !== "") {

        product.price = newPrice;

    }



    if (newDesc !== null && newDesc !== "") {

        product.desc = newDesc;

    }



    saveData();

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