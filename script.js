var tanya = true
while( tanya ) {
// player
var p = prompt( 'Pilih : (GAJAH / SEMUT / ORANG') ;

// comp
//  membangkitkan random
var comp = Math.random () ;
if( comp < 0.34 ) {
comp = 'gajah' ;
} else if( comp >= 0.34 && comp < 0.67 ) {
    comp = 'semut' ;
} else {
    comp = 'orang' ;
}

var hasil = '' ;
//  rules
if( p == comp ) {
    hasil = 'SERI' ;
} else if( p == 'gajah' ) {
    if( comp == 'orang' ) {
        hasil = 'MENANG' ;
    } else {
        hasil = 'KALAH' ;
    }
} else if( p == 'orang' ) {
    if( comp == 'semut' ) {
        hasil = 'MENANG' ;
    } else {
        hasil = 'KALAH' ;
    }
} else if( p == 'semut' ) {
    if( comp == 'gajah' ) {
        hasil = 'MENANG' ;
    } else {
        hasil = 'KALAH' ;
    }
} else {
    hasil = 'Anda salah mengisi' ;
}

alert( 'Anda memilih : ' + p + ' dan Komputer memilih : ' + comp + ' maka hasilnya anda : ' + hasil + '.' ) ;
// hasil

tanya = confirm('Apakah ingin bermain lagi : ') ;
}

alert( 'TERIMA KASIH' ) ;