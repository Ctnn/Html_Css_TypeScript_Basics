// @ts-ignore
a = asdasf;
//Yukarıdaki ignore sayesinde sonraki satırı görmüyoruz.
//Klasik String
//let myname="yiğit";
//Değiştirelemez
//const ahmet="yes";
//Değişken Tanımlama
var myname = 'asdas';
function change() {
    myname = "qwe";
    myname = 123;
}
function check() {
    // === Tip kontrolüdür
    if (typeof myname === 'string') {
        //String için olan bütün değişkenleri alır myname. ile gözükür
    }
    if (typeof myname == 'number') {
        //Number için olan bütün değişkenleri alır myname. ile gözükür
    }
}
//Interface oluşturma
//OBJE OLUŞTURMA
var Person = {
    isim: "Yiğit",
    soyad: "Çetinkaya",
    bilmem: 'bilmem'
};
//Array açma
var dizi = ['asdas', 21, true]; // const dizi = [] as string[]
dizi.push(12);
console.log(dizi[0]);
