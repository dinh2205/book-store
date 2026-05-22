const products = [

    {
        id: 1,
        name: "Đắc Nhân Tâm",
        price: "120000",
        img: "../assets/sach1.jpg",
        productLink: "sanpham.html",
        desc: "Cuốn sách nổi tiếng của Dale Carnegie giúp cải thiện kỹ năng giao tiếp, ứng xử và xây dựng các mối quan hệ trong cuộc sống."
    },

    {
        id: 2,
        name: "Người Gác Kệ Sách",
        price: "95000",
        img: "../assets/sach2.jpg",
        productLink: "sanpham.html",
        desc: "Một câu chuyện nhẹ nhàng và sâu lắng về tình yêu dành cho sách cùng những góc khuất trong tâm hồn con người."
    },

    {
        id: 3,
        name: "Tiệm Giặt Là Nửa Đêm",
        price: "110000",
        img: "../assets/sach3.jpg",
        productLink: "sanpham.html",
        desc: "Tác phẩm chữa lành mang màu sắc huyền bí, kể về những con người tìm thấy sự đồng cảm trong đêm tối."
    },

    {
        id: 4,
        name: "Tắt Đèn Nghe Chuyện Cố Ám",
        price: "88000",
        img: "../assets/sach4.jpg",
        productLink: "sanpham.html",
        desc: "Tuyển tập truyện kinh dị hấp dẫn với bầu không khí rùng rợn và nhiều tình tiết bất ngờ."
    },

    {
        id: 5,
        name: "The Dead Zone",
        price: "150000",
        img: "../assets/sach5.jpg",
        productLink: "sanpham.html",
        desc: "Tiểu thuyết kinh dị nổi tiếng của Stephen King với nội dung ly kỳ và đầy ám ảnh."
    },

    {
        id: 6,
        name: "Đàn Ông Sao Hỏa Đàn Bà Sao Kim",
        price: "135000",
        img: "../assets/sach6.jpg",
        productLink: "sanpham.html",
        desc: "Cuốn sách tâm lý giúp thấu hiểu sự khác biệt giữa nam và nữ trong tình yêu và cuộc sống."
    },

    {
        id: 7,
        name: "Không Diệt Không Sinh Đừng Sợ Hãi",
        price: "99000",
        img: "../assets/sach7.jpg",
        productLink: "sanpham.html",
        desc: "Tác phẩm nổi tiếng của Thiền sư Thích Nhất Hạnh giúp con người tìm thấy sự bình an nội tâm."
    },

    {
        id: 8,
        name: "Muôn Kiếp Nhân Sinh",
        price: "145000",
        img: "../assets/sach8.jpg",
        productLink: "sanpham.html",
        desc: "Cuốn sách nổi tiếng của Nguyên Phong bàn về luật nhân quả, luân hồi và giá trị cuộc sống."
    }

];

function addproduct(p) {

    const productList = document.getElementById("product-list");

    // ===== KHUNG SẢN PHẨM =====
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item");



    // ===== IMAGE =====
    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "product-image");
    const img = document.createElement("img");
    img.setAttribute("src", p.img);
    imgDiv.appendChild(img);



    // ===== INFO =====
    const infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "product-info");


    // ===== TÊN =====
    const p1 = document.createElement("p");
    p1.innerText = p.name;

    // ===== GIÁ =====
    const p2 = document.createElement("p");
    p2.innerText = Number(p.price).toLocaleString("vi-VN") + " VND";

    // ===== MÔ TẢ =====
    const p3 = document.createElement("p");
    p3.innerText = p.desc;

    // ===== LINK CHI TIẾT =====
    const link = document.createElement("a");

    link.setAttribute( "href", p.productLink + "?id=" + p.id);

    link.innerText = "Nhấn xem chi tiết";

    // ===== GẮN VÀO INFO =====
    infoDiv.appendChild(p1);
    infoDiv.appendChild(p2);
    infoDiv.appendChild(link);

    // ===== GẮN VÀO PRODUCT =====
    myDiv.appendChild(imgDiv);
    myDiv.appendChild(infoDiv);

    // ===== HIỂN THỊ =====
    productList.appendChild(myDiv);

}

// ================= LOAD TOÀN BỘ SẢN PHẨM =================
function loadAllproducts() {

    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        addproduct(products[i]);

    }

}

window.onload = function () {

    const productList =
        document.getElementById("product-list");

    if (productList) {

        loadAllproducts();

    }

}
