var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const berita = [
    {
        judul:'Berita 1',
        isi:'isi berita 1'
    },
    {
        judul:'Berita 2',
        isi:'isi berita 2'
    },
];
res.render('index',{title: 'Halaman Home',berita,layout:'main'});
});

router.get('/prodi', function(req, res, next) {
  const prodi = [
    {
        namaprodi:'Sistem Informasi',
        fakultas:'FIKR',
        singkatan:'SI'
    },
    {
        namaprodi:'Informatika',
        fakultas:'FIKR',
        singkatan:'IF'
    },
    {
        namaprodi:'Teknik ELektro',
        fakultas:'FIKR',
        singkatan:'TE'
    },
    {
        namaprodi:'Manajemen Informatika',
        fakultas:'FIKR',
        singkatan:'MI'
    },
    {
        namaprodi:'Manajemen',
        fakultas:'FEB',
        singkatan:'MJ'
    },
    {
        namaprodi:'Akuntansi',
        fakultas:'FEB',
        singkatan:'AK'
    }
];
res.render('prodi',{title: 'Halaman Prodi',prodi,layout:'main'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact',{title:'Contact',layout:'main'});
});

router.get('/about', function(req, res, next) {
  res.render('about',{title:'About Us',layout:'main'});
});
module.exports = router;
