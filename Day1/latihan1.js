/* alert("Selamat datang!");
var nama = prompt('Masukkan nama kamu : ');
document.writeln('Selamat belajar kak, ' + nama + '!' + '<br>' + '<br>'); */


var angka1 = 22;
var angka2 = 10;
document.write('Bilangan 1 : ' + angka1 + '<br>')
document.write('Bilangan 2 : ' + angka2 + '<br>' + '<br>')
document.write('OPERASI ARITMATIKA' + '<br>' + '<br>')
document.write('Hasil Penjumlahan : ' + (angka1 + angka2) + '<br>');
document.write('Hasil Pengurangan : ' + (angka1 - angka2) + '<br>');
document.write('Hasil Perkalian : ' + (angka1 * angka2) + '<br>');
document.write('Hasil Pembagian : ' + (angka1 / angka2) + '<br>');
document.write('Hasil Sisa Bagi : ' + (angka1 % angka2) + '<br>' + '<br>');

document.write('OPERASI PERBANDINGAN' + '<br>' + '<br>')
document.write('Bilangan 1 > Bilangan 2 : ' + (angka1 > angka2) + '<br>');
document.write('Bilangan 1 < Bilangan 2 : ' + (angka1 < angka2) + '</br>');
document.write('Bilangan 1 <= Bilangan 2 : ' + (angka1 <= angka2) + '</br>');
document.write('Bilangan 1 >= Bilangan 2 : ' + (angka1 >= angka2) + '</br>' +'<br>');

document.write('OPERASI LOGIKA' + '<br>' + '<br>')
var kkm = 75
var nilai = 80

document.write('KKM : ' + kkm + '<br>');
document.write('Nilai Siswa : ' + nilai + '<br>');
document.write('Status Kelulusan : ' + ((nilai > kkm)? 'Lulus' : 'Tidak Lulus'));
