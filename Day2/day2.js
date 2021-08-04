/* var namaVariabel = '1234';
document.write(typeof(namaVariabel) + '<br>');
var namaVariabel = true;
document.write(typeof(namaVariabel) + '<br>');
namaVariabel = true;
document.write(typeof(namaVariabel)) + '<br>';

var namaPengunjung = prompt('Silakan masukkan nama kamu : ', "Dojober Setia");
document.write('<br>' + 'Hai ' + namaPengunjung + ', Selamat datang di Dojobox!');

var konfirmasi = confirm('Mau tetap disini kan?');
var hasil = (konfirmasi==true) ? "Iya dong" : "Gak deh";
document.write('<br>' + hasil); */

/*var angka = parseInt(prompt("Masukkan angka yang akan di test: "));

if (angka > 10) {
    document.write("Angka yang dimasukkan besar dari 10");
} else {
    document.write("Nilai yang dimasukkan kurang dari 10");
}*/

/*var nama = prompt("Masukkan nama: ");

if (nama=='mala') {
    document.write("Seorang mentor");
} else {
    document.write("Nama yang dimasukkan bukan mala");
}*/

/* var angka = prompt("Masukkan angka : ");

if(angka % 2 == 0) {
    document.write(angka + " merupakan bilangan genap")
} else if(angka % 2 == 1) {
    document.write(angka + " merupakan bilangan ganjil")
} else {
    document.write(angka + " bukan merupakan bilangan")
} */

/*var angkaKepuasan = prompt('Masukkan angka kepuasan kamu : ', '0 - 5');

switch(angkaKepuasan) {
    case '0':
        document.write("Saya sangat kecewa")
        break
    case '1':
        document.write("Saya kecewa")
        break
    case '2':
        document.write("Saya tidak puas")
        break
    case '3':
        document.write("Saya cukup puas");
        break
    case '4':
        document.write("Saya puas")
        break
    case '5':
        document.write("Saya sangat puas")
        break
    default:
        document.write("Tolong masukkan range angka yang sesuai!")
}*/

var nilaiSiswa = parseInt(prompt("Masukkan nilai kamu : ", '0 - 100'));

switch(true) {
    case nilaiSiswa >= 90:
        document.write("Kamu mendapatkan Grade A")
        break
    case nilaiSiswa >= 80:
        document.write("Kamu mendapatkan Grade B")
        break
    case nilaiSiswa >= 70:
        document.write("Kamu mendapatkan Grade C")
        break
    case nilaiSiswa >= 60:
        document.write("Kamu mendapatkan Grade D")
        break
    default:
        document.write("Kamu mendapatkan Grade E")
}