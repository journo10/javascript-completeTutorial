// Objects
let user = {
    username: "Cristiano",
    latsname: "Ronaldo",
    age: 38,
    team: "Galatasaray",
    address: {
        city: "İstanbul",
        district: "Beyoğlu",
    },
};

let result;

result = user.username;
result = user.latsname;
result = user.age;
result = user.team;
result = user.address.city;
result = user.address.district;

// console.log(result);

let users = [
    {
        id: 1,
        username: "Cristiano",
        latsname: "Ronaldo",
        age: 38,
        team: "Galatasaray",
        address: {
            city: "İstanbul",
            district: "Beyoğlu",
        },
    },

    {
        id: 2,
        username: "Cristiano 2",
        latsname: "Ronaldo 2",
        age: 37,
        team: "Galatasaray 2",
        address: {
            city: "İstanbul 2",
            district: "Beyoğlu 2",
        },
    },
];

let result1;

result1 = users[0].username;
result1 = users[0].latsname;
result1 = users[0].age;
result1 = users[0].team;
result1 = users[0].address.city;
result1 = users[0].address.district;

// console.log(result1);

let result2;

result2 = users[1].username;
result2 = users[1].latsname;
result2 = users[1].age;
result2 = users[1].team;
result2 = users[1].address.city;
result2 = users[1].address.district;

// console.log(result2);

// Objects : Uygulama

/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit

    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000
        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000
    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    
    satın alınan ürünler: 
        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000
    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye
*/

//1- Sipariş bilgilerini object içerisinde saklayınız.

let order1 = {
    order_id: 101,
    order_date: "31.12.2022",
    payment_method: "Credit Card",
    address: {
        city: "Kocaeli",
        district: "İzmit",
        neighbourhood: "Yahya kaptan mah.",
    },
    products: [
        {
            product_id: 5,
            product_name: "IPhone 13 Pro",
            product_url: "http://abc.com/iphone-13-pro",
            product_price: 22000,
        },
        {
            product_id: 6,
            product_name: "IPhone 13 Pro Max",
            product_url: "http://abc.com/iphone-13-pro-max",
            product_price: 25000,
        },
    ],
};

let order2 = {
    order_id: 102,
    order_date: "30.12.2022",
    payment_method: "Credit Card",
    address: {
        city: "Kocaeli",
        district: "İzmit",
        neighbourhood: "Yahya kaptan mah.",
    },
    products: [
        {
            product_id: 6,
            product_name: "IPhone 13 Pro Max",
            product_url: "http://abc.com/iphone-13-pro-max",
            product_price: 25000,
        },
    ],
};

//2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)

//total order1
let total_order1 =
    (order1.products[0].product_price + order1.products[1].product_price) * 1.18;

//total order2
let total_order2 = (order2.products[0].product_price) * 1.18;

console.log("Total Order 1", total_order1);
console.log("Total Order 2", total_order2);

//  3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

// total order
let total_order = total_order1 + total_order2;

console.log("Total Order", total_order);
