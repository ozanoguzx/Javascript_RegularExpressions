//Regular Expression (RegEx) karakter şablonlarını/desenlerini tanımlamakta kullanılan bir nesnedir.
//RegExp() yapıcı metodu ile kullanılabilir.


//Genelde girilen bir metinsel değerin belli bir karakterizasyona/şablona uyup uymadığı kontrolünde ve arama işlemlerinde kullanılır.

//Bazı karakterler regex işlemlerinde oldukça popülerdir.
// [...] => Köşeli parantezler içerisindeki herhangi bir karakter anlamına gelir. Karakter aralığı belirtmede kullanılır.
// [^..] => 'Not/Değil' anlamındadır ve içerisinde geçmeyen karakter anlamına gelir.
// [0-9] 0'dan 9'a kadar olan rakamlara işaret eder.
// [a-z] ve [A-Z] alfabedeki karakterlere işaret eder. İkisi bir arada ise [a-Z] kullanabiliriz.
// + işareti bir veya birden fazla
// * işareti 0 veya daha fazla
// ? işareti maksimum 1 adet
// {x,y} bir karakterden arka arkaya x veya y tane. Örnek => {2,3}
// $ işareti en son karakteri tanımlamada
// ^ işareti ilk karakteri tanımlamada kullanılır.

//Genel Kullanım:
// '/şablon/düzenleyici' şeklindedir.
//Modifier(Düzenleyiciler)
// g => global match => ilk eşleşmede durmaz hepsine bakar.
// i => case-sensitive eşleştirme içindir.(Büyük-Küçük Harf Duyarlı)
// m => Birden çok satırda eşleşmeye bakar.

//Örnek : 
//var desen = /bilgeadam/i;
//Üstteki ifadede 'bilgeadam' deseni tanımlar, '/bilgeadam/i' ise regular expression'ı tanımlar. 'i' karakteri ise case-sensitive oldugunu gösteren modifier olacaktır.



//ÖRNEKLER


//Cümle içerisinde bilge kelimesi geçiyorsa true, yoksa false döner.
function WordFinder(sentence) {
    var pattern = /bilge/;
    var result = pattern.test(sentence);
    return result;
}

function ValidateSentence(word, sentence) {
    //RegExp() sayesinde dinamik desenler yaratabiliriz.
    var pattern = new RegExp(word);
    var result = pattern.test(sentence);
    return result;
}


//Parametreden gelen isim alttaki desene uyuyorsa true, yoksa false döner.
function UserNameValidator(username) {
    var pattern = /^[a-z0-9_-]{3,16}$/;
    //İlk olarak metnin başlangıcı amaçlı ^ kullanılır. arkasından (a-z) aralığında küçük harf, bir sayı (0-9) veya kısa çizgi (-) , sonrasında {3,16} ile bu karakterlerden min 3 adet bulunması ve 16'dan fazla bulunmamasını sağladık. String bitişi içinde $ işareti kullanılır.    
    var result = pattern.test(username);
    return result;
}

