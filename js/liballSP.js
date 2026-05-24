/* =========================
   DATABASE MẶC ĐỊNH
========================= */

let defaultProducts = [

    {
        id: 1,
        name: "Đắc Nhân Tâm",
        price: "120000",
        img: "../assets/sach1.jpg",
        productLink: "sanpham.html",
        desc: "Cuốn sách nổi tiếng của Dale Carnegie giúp cải thiện kỹ năng giao tiếp.",
        custom: false
    },

    {
        id: 2,
        name: "Người Gác Kệ Sách",
        price: "95000",
        img: "../assets/sach2.jpg",
        productLink: "sanpham.html",
        desc: "Một câu chuyện nhẹ nhàng và sâu lắng.",
        custom: false
    },

    {
        id: 3,
        name: "Tiệm Giặt Là Nửa Đêm",
        price: "110000",
        img: "../assets/sach3.jpg",
        productLink: "sanpham.html",
        desc: "Tác phẩm chữa lành mang màu sắc huyền bí.",
        custom: false
    },

    {
        id: 4,
        name: "Tắt Đèn Nghe Chuyện Cố Ám",
        price: "88000",
        img: "../assets/sach4.jpg",
        productLink: "sanpham.html",
        desc: "Tuyển tập truyện kinh dị hấp dẫn.",
        custom: false
    },

    {
        id: 5,
        name: "The Dead Zone",
        price: "150000",
        img: "../assets/sach5.jpg",
        productLink: "sanpham.html",
        desc: "Tiểu thuyết kinh dị nổi tiếng.",
        custom: false
    },

    {
        id: 6,
        name: "Đàn Ông Sao Hỏa Đàn Bà Sao Kim",
        price: "135000",
        img: "../assets/sach6.jpg",
        productLink: "sanpham.html",
        desc: "Cuốn sách tâm lý nổi tiếng.",
        custom: false
    },

    {
        id: 7,
        name: "Không Diệt Không Sinh Đừng Sợ Hãi",
        price: "99000",
        img: "../assets/sach7.jpg",
        productLink: "sanpham.html",
        desc: "Tác phẩm của Thiền sư Thích Nhất Hạnh.",
        custom: false
    },

    {
        id: 8,
        name: "Muôn Kiếp Nhân Sinh",
        price: "145000",
        img: "../assets/sach8.jpg",
        productLink: "sanpham.html",
        desc: "Cuốn sách nổi tiếng của Nguyên Phong.",
        custom: false
    }

];


/* =========================
   LOAD DATABASE
========================= */

let products = [];

let editId = null;

try {

    const data =
        JSON.parse(
            localStorage.getItem("products")
        );

    if (Array.isArray(data)) {

        products = data;

    } else {

        products = defaultProducts;

        saveData();
    }

}
catch {

    products = defaultProducts;

    saveData();
}


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


    const myDiv =
        document.createElement("div");

    myDiv.className =
        "product-item";


    /* IMAGE */

    const imgDiv =
        document.createElement("div");

    imgDiv.className =
        "product-image";

    const img =
        document.createElement("img");

    img.src = p.img;

    imgDiv.appendChild(img);


    /* INFO */

    const infoDiv =
        document.createElement("div");

    infoDiv.className =
        "product-info";


    /* NAME */

    const p1 =
        document.createElement("p");

    p1.className =
        "book-name";

    p1.innerText = p.name;


    /* PRICE */

    const p2 =
        document.createElement("p");

    p2.className =
        "book-price";

    p2.innerText =
        Number(p.price)
            .toLocaleString("vi-VN")
        + " VND";


    /* LINK */

    const link =
        document.createElement("a");

    link.href =
        p.productLink + "?id=" + p.id;

    link.innerText =
        "Nhấn xem chi tiết";


    /* BUTTON BOX */

    const btnBox =
        document.createElement("div");

    btnBox.className =
        "btn-box";


    /* EDIT */

    const editBtn =
        document.createElement("button");

    editBtn.innerText =
        "Sửa";

    editBtn.className =
        "edit-btn";

    editBtn.onclick = function (e) {

        e.preventDefault();

        editProduct(p.id);

    };


    /* DELETE */

    const deleteBtn =
        document.createElement("button");

    deleteBtn.innerText =
        "Xóa";

    deleteBtn.className =
        "delete-btn";

    deleteBtn.onclick = function (e) {

        e.preventDefault();

        deleteProduct(p.id);

    };


    btnBox.appendChild(editBtn);

    btnBox.appendChild(deleteBtn);


    infoDiv.appendChild(p1);

    infoDiv.appendChild(p2);

    infoDiv.appendChild(link);


    /* chỉ sách custom mới hiện nút */

    if (p.custom === true) {

        infoDiv.appendChild(btnBox);

    }


    myDiv.appendChild(imgDiv);

    myDiv.appendChild(infoDiv);

    productList.appendChild(myDiv);

}


/* =========================
   LOAD ALL
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
   XÓA
========================= */

function deleteProduct(id) {

    const index =
        products.findIndex(
            p => p.id === id
        );

    if (index !== -1) {

        products.splice(index, 1);

        saveData();

        loadAllproducts();

    }

}


/* =========================
   SỬA
========================= */

function editProduct(id) {

    const product =
        products.find(
            p => p.id === id
        );

    editId = id;

    document.getElementById("name").value =
        product.name;

    document.getElementById("price").value =
        product.price;

    document.getElementById("desc").value =
        product.desc;

    document.getElementById("openAddsach").checked = true;

}


/* =========================
   THÊM / SỬA
========================= */

function saveProduct() {

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


    /* ===== VALIDATE ===== */

    if (name === "" || price === "") {

        alert("Vui lòng nhập đầy đủ!");

        return;

    }


    /* =====================
       SỬA
    ===================== */

    if (editId !== null) {

        const product =
            products.find(
                p => p.id === editId
            );

        product.name = name;

        product.price = price;

        product.desc = desc;


        /* nếu chọn ảnh mới */

        if (file) {

            const reader =
                new FileReader();

            reader.onload = function (e) {

                product.img = e.target.result;

                saveData();

                loadAllproducts();

            };

            reader.readAsDataURL(file);

        } else {

            saveData();

            loadAllproducts();

        }


        resetForm();

        return;

    }


    /* =====================
       THÊM
    ===================== */

    if (!file) {

        alert("Vui lòng chọn ảnh!");

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

            desc: desc,

            custom: true

        };

        products.push(newProduct);

        saveData();

        loadAllproducts();

        resetForm();

        alert("Đã thêm sách!");

    };

    reader.readAsDataURL(file);

}


/* =========================
   RESET FORM
========================= */

function resetForm() {

    editId = null;

    document.getElementById("name").value = "";

    document.getElementById("price").value = "";

    document.getElementById("img").value = "";

    document.getElementById("desc").value = "";

    document.getElementById("openAddsach").checked = false;

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

    if (!localStorage.getItem("products")) {

        products = defaultProducts;

        saveData();

    }

    loadAllproducts();

};