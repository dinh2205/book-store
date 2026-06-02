
let defaultProducts = [
    {
        id: 1,

        name: "Đắc Nhân Tâm",

        price: "120000",

        badge: "Mới",

        img: "../assets/sach1.jpg",

        productLink: "chi-tiet.html",

        desc:
            "Đắc Nhân Tâm là cuốn sách nổi tiếng của Dale Carnegie giúp người đọc cải thiện kỹ năng giao tiếp và phát triển bản thân. Nội dung sách mang đến nhiều bài học thực tế về cách ứng xử, tạo thiện cảm và xây dựng các mối quan hệ tích cực trong cuộc sống. Với lối viết dễ hiểu cùng nhiều ví dụ gần gũi, cuốn sách giúp người đọc trở nên tự tin hơn trong giao tiếp và công việc.",

        custom: false
    },

    {
        id: 2,

        name: "Người Gác Kệ Sách",

        price: "95000",

        badge: "Mới",

        img: "../assets/sach2.jpg",

        productLink: "chi-tiet.html",

        desc:
            "Người Gác Kệ Sách là tác phẩm nhẹ nhàng và sâu lắng về hành trình chữa lành tâm hồn thông qua những cuốn sách và ký ức. Câu chuyện mang đến cảm giác bình yên, giúp người đọc thư giãn sau những áp lực cuộc sống. Với giọng văn gần gũi và giàu cảm xúc, cuốn sách truyền tải thông điệp về hy vọng, sự cảm thông và giá trị của những điều giản dị xung quanh chúng ta.",

        custom: false
    },

    {
        id: 3,

        name: "Tiệm Giặt Là Nửa Đêm",

        price: "110000",

        badge: "Mới",

        img: "../assets/sach3.jpg",

        productLink: "chi-tiet.html",

        desc:
            "Tiệm Giặt Là Nửa Đêm là tác phẩm chữa lành mang màu sắc huyền bí đầy cuốn hút. Câu chuyện diễn ra tại một tiệm giặt là đặc biệt chỉ mở cửa vào ban đêm, nơi những vị khách tìm đến để gột rửa nỗi buồn và ký ức. Với lối kể chuyện nhẹ nhàng, sâu sắc và giàu cảm xúc, cuốn sách giúp người đọc cảm nhận được sự đồng cảm và tìm thấy sự bình yên trong tâm hồn.",

        custom: false
    },

    {
        id: 4,

        name: "Tắt Đèn Nghe Chuyện Cố Ám",

        price: "88000",

        badge: "Mới",

        img: "../assets/sach4.jpg",

        productLink: "chi-tiet.html",

        desc:
            "Tắt Đèn Nghe Chuyện Cố Ám là tuyển tập truyện kinh dị hấp dẫn dành cho những ai yêu thích cảm giác hồi hộp và bí ẩn. Mỗi câu chuyện đều được xây dựng với bầu không khí căng thẳng và nhiều tình tiết bất ngờ khiến người đọc khó rời mắt. Cuốn sách không chỉ tạo cảm giác rùng rợn mà còn khai thác sâu tâm lý con người khi đối mặt với nỗi sợ hãi và những điều kỳ bí.",

        custom: false
    },

    {
        id: 5,

        name: "The Dead Zone",

        price: "120000",

        oldPrice: "150000",

        badge: "Giảm 20%",

        img: "../assets/sach5.jpg",

        productLink: "chi-tiet.html",

        desc:
            "The Dead Zone là tác phẩm nổi bật của Stephen King kết hợp giữa yếu tố kinh dị, tâm lý và khoa học viễn tưởng. Câu chuyện kể về một người đàn ông có khả năng nhìn thấy tương lai sau tai nạn nghiêm trọng. Cuốn sách mang đến bầu không khí hồi hộp, căng thẳng cùng nhiều tình tiết bất ngờ. Đây là lựa chọn phù hợp cho những ai yêu thích những câu chuyện bí ẩn và đầy kịch tính.",

        custom: false
    },

    {
        id: 6,

        name: "Đàn Ông Sao Hỏa Đàn Bà Sao Kim",

        price: "135000",

        oldPrice: "160000",

        badge: "Giảm 15%",

        img: "../assets/sach6.jpg",

        productLink: "chi-tiet.html",

        desc:
            "Đàn Ông Sao Hỏa Đàn Bà Sao Kim là cuốn sách tâm lý nổi tiếng giúp người đọc hiểu rõ hơn về sự khác biệt giữa nam giới và nữ giới trong suy nghĩ và cảm xúc. Tác giả mang đến nhiều lời khuyên hữu ích giúp cải thiện các mối quan hệ tình cảm và giao tiếp hằng ngày. Với cách viết dễ hiểu cùng ví dụ gần gũi, cuốn sách phù hợp cho những ai muốn xây dựng mối quan hệ bền vững hơn.",

        custom: false
    },

    {
        id: 7,

        name: "Không Diệt Không Sinh Đừng Sợ Hãi",

        price: "99000",

        oldPrice: "120000",
        
        badge: "Giảm 18%",

        img: "../assets/sach7.jpg",

        productLink: "chi-tiet.html",

        desc:
            "Không Diệt Không Sinh Đừng Sợ Hãi là tác phẩm nổi tiếng của Thiền sư Thích Nhất Hạnh mang đến những góc nhìn sâu sắc về sự sống và cái chết. Cuốn sách giúp người đọc học cách đối diện với nỗi sợ hãi, sự mất mát và tìm thấy sự bình an trong tâm hồn. Với giọng văn nhẹ nhàng và giàu triết lý, tác phẩm mang lại cảm giác thư thái và chữa lành cho người đọc.",

        custom: false
    },

    {
        id: 8,

        name: "Muôn Kiếp Nhân Sinh",

        price: "145000",

        oldPrice: "170000",

        badge: "Giảm 15%",

        img: "../assets/sach8.jpg",

        productLink: "chi-tiet.html",

        desc:
            "Muôn Kiếp Nhân Sinh là tác phẩm nổi tiếng của Nguyên Phong kể về những câu chuyện luân hồi và nhân quả đầy hấp dẫn. Cuốn sách mở ra góc nhìn mới về cuộc sống, số phận và sự liên kết giữa quá khứ với hiện tại. Không chỉ mang màu sắc tâm linh huyền bí, tác phẩm còn truyền tải nhiều bài học sâu sắc về đạo đức, lòng nhân ái và cách sống tích cực.",

        custom: false
    }
];


let products = [];
let editId = null;



/*  SAVE LOCALSTORAGE */

function saveData() {

    localStorage.setItem("products", JSON.stringify(products));

}

/* Reload Data */

function reloadData() {

    saveData();

    loadAllproducts();

}


//====== GIỎ HÀNG==========//


function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}


function addToCart(productId) {
    let cart = getCart();

    // tìm sản phẩm
    const product = products.find(p => p.id === productId);

    if (!product) return;

    // kiểm tra đã có trong giỏ chưa
    const cartItem = cart.find(item => item.id === productId);

    // nếu có sản phẩm tăng số lượng
    if (cartItem) {

        cartItem.quantity++;

    }
    else {

        // chưa có thêm mới
        cart.push({

            id: product.id,

            name: product.name,

            price: Number(product.price),

            img: product.img,

            quantity: 1

        });

    }

    // lưu localstorage
    localStorage.setItem("cart",
        JSON.stringify(cart)
    );

}

function loadCart() {

    let cart = getCart();

    const cartList = document.getElementById("cart-list");

    if (!cartList) return;

    cartList.innerHTML = "";

    let Total = 0;

    for (let i = 0; i < cart.length; i++) {

        Total += cart[i].price * cart[i].quantity;

        //item
        const itemDiv = document.createElement("div");

        itemDiv.className = "cart-item";



        //image
        const img = document.createElement("img");
        img.src = cart[i].img;



        //INFO
        const infoDiv = document.createElement("div");



        //NAME
        const name = document.createElement("h4");

        name.innerText = cart[i].name;



        // QUANTITY BOX
        const quantityBox = document.createElement("div");
        quantityBox.className = "quantity-box";



        // MINUS BUTTON
        const minusBtn = document.createElement("button");

        minusBtn.innerText = "-";

        minusBtn.onclick = function () {

            decreaseQuantity(cart[i].id);

        };


        // QUANTITY
        const quantity = document.createElement("span");

        quantity.innerText = cart[i].quantity;


        // PLUS BUTTON
        const plusBtn = document.createElement("button");

        plusBtn.innerText = "+";

        plusBtn.onclick = function () {

            increaseQuantity(cart[i].id);

        };



        // PRICE
        const price = document.createElement("p");

        price.innerText = (cart[i].price * cart[i].quantity).toLocaleString("vi-VN") + " VND";

        const deleteBtn = document.createElement("button");

        deleteBtn.innerText = "Xóa";

        deleteBtn.className = "delete-cart-btn";

        deleteBtn.onclick = function () {

            removeCartItem(cart[i].id);

        };



        quantityBox.appendChild(minusBtn);

        quantityBox.appendChild(quantity);

        quantityBox.appendChild(plusBtn);

        infoDiv.appendChild(name);

        infoDiv.appendChild(quantityBox);

        infoDiv.appendChild(price);

        infoDiv.appendChild(deleteBtn);

        itemDiv.appendChild(img);

        itemDiv.appendChild(infoDiv);

        cartList.appendChild(itemDiv);

    }

    const Tong = document.getElementById("cart-Tong");

    if (Tong) {
        Tong.innerText = "Tổng tiền: " + Total.toLocaleString("vi-VN") + " VND";
    }

}


function increaseQuantity(id) {

    let cart = getCart();

    const item = cart.find(p => p.id === id);

    if (item) {

        item.quantity++;

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}


function decreaseQuantity(id) {

    let cart = getCart();

    const item = cart.find(p => p.id === id);

    // chỉ giảm khi > 1
    if (item && item.quantity > 1) {

        item.quantity--;

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}


function removeCartItem(id) {

    let cart = getCart();

    cart = cart.filter(p => p.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}


//==== KHỞI TẠO DỮ LIỆU====//


try {

    const data = JSON.parse(localStorage.getItem("products"));

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




//=== HIỂN THỊ 1 SẢN PHẨM==//



function addproduct(p, container) {

    const myDiv = document.createElement("div");
    myDiv.className = "product-item";

    //image

    const imgDiv = document.createElement("div");

    imgDiv.className = "product-image";

    const img = document.createElement("img");

    img.src = p.img;

    imgDiv.appendChild(img);

    //Badge
    if (p.badge) {

    const badge = document.createElement("span");

    badge.className = "badge";

    badge.innerText = p.badge;

    imgDiv.appendChild(badge);

}

    //Info 

    const infoDiv = document.createElement("div");

    infoDiv.className = "product-info";


    //name 

    const p1 = document.createElement("p");

    p1.className = "book-name";

    p1.innerText = p.name;


    //price 

    const p2 = document.createElement("p");

    p2.className = "book-price";

    p2.innerText = Number(p.price).toLocaleString("vi-VN") + " VND";


    //Link 

    const link = document.createElement("a");

    link.href = p.productLink + "?id=" + p.id;

    link.innerText = "Nhấn xem chi tiết";


    //BUTTON BOX

    const btnBox = document.createElement("div");

    btnBox.className = "btn-box";


    //edit 

    const editBtn = document.createElement("button");

    editBtn.innerText = "Sửa";

    editBtn.className = "edit-btn";

    editBtn.onclick = function (e) {

        e.preventDefault();

        editProduct(p.id);

    };


    //Delete

    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Xóa";

    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function (e) {

        e.preventDefault();

        deleteProduct(p.id);

    };


    btnBox.appendChild(editBtn);

    btnBox.appendChild(deleteBtn);


    infoDiv.appendChild(p1);

    if (p.oldPrice) {

        const oldPrice =
            document.createElement("p");

        oldPrice.className = "old-price";

        oldPrice.innerText =
            Number(p.oldPrice).toLocaleString("vi-VN")
            + " VND";

        infoDiv.appendChild(oldPrice);

    }

    infoDiv.appendChild(p2);

    infoDiv.appendChild(link);


    //thêm mới hiện nút

    if (p.custom === true) {

        infoDiv.appendChild(btnBox);

    }


    myDiv.appendChild(imgDiv);

    myDiv.appendChild(infoDiv);

    container.appendChild(myDiv);

}



//LOAD ALL

function loadAllproducts() {

    const productList = document.getElementById("product-list");
    const saleList = document.getElementById("sale-list");

    productList.innerHTML = "";
    saleList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        if (products[i].badge?.includes("Giảm")) {

            addproduct(products[i], saleList);

        } else {

            addproduct(products[i], productList);

        }

    }

}


//XÓA 

function deleteProduct(id) {

    const index = products.findIndex(
        p => p.id === id
    );

    if (index !== -1) {

        products.splice(index, 1);
        reloadData();

    }

}



//SỬA

function editProduct(id) {

    const product = products.find(
        p => p.id === id
    );

    editId = id;

    document.getElementById("name").value = product.name;

    document.getElementById("price").value = product.price;

    document.getElementById("desc").value = product.desc;

    document.getElementById("openAddsach").checked = true;

}



//THÊM và SỬA 

function saveProduct() {

    const name = document.getElementById("name").value;

    const price = document.getElementById("price").value;

    const desc = document.getElementById("desc").value;

    const file = document.getElementById("img").files[0];


    if (name === "" || price === "") {

        alert("Vui lòng nhập đầy đủ!");

        return;

    }


    //SỬA 

    if (editId !== null) {

        const product = products.find(p => p.id === editId);

        product.name = name;

        product.price = price;

        product.desc = desc;


        // nếu chọn ảnh mới

        if (file) {

            const reader = new FileReader();

            reader.onload = function (e) {

                product.img = e.target.result;


                reloadData();

            };

            reader.readAsDataURL(file);

        } else {

            reloadData();

        }

        resetForm();

        return;

    }


    // THÊM

    if (!file) {

        alert("Vui lòng chọn ảnh!");

        return;

    }

    const reader = new FileReader();

    reader.onload = function (e) {

        const newProduct = {

            id: Date.now(),

            name: name,

            price: price,

            img: e.target.result,

            productLink: "chi-tiet.html",

            desc: desc,

            custom: true

        };

        products.push(newProduct);

        reloadData();

        resetForm();

        alert("Đã thêm sách!");

    };

    reader.readAsDataURL(file);

}




//RESET FORM

function resetForm() {

    editId = null;

    document.getElementById("name").value = "";

    document.getElementById("price").value = "";

    document.getElementById("img").value = "";

    document.getElementById("desc").value = "";

    document.getElementById("openAddsach").checked = false;

}




//RESET DATABASE

function resetDatabase() {

    localStorage.removeItem("products");

    location.reload();

}




//AUTO LOAD
window.onload = function () {

    let data =
    JSON.parse(localStorage.getItem("products"));

    if (!data || data.length === 0) {

        products = [...defaultProducts];

        saveData();

    } else {

        products = data;

    }

    loadAllproducts();

    loadCart();
};