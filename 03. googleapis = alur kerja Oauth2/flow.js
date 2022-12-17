// googleapis

/*

kali ini kita langsung saja mengimplementasikan bagaimana cara kerja atau alur dari 
Oauth2, kalian bisa lihat gambar disamping ya


1. siapkan route 
    nah kita perlu menyiapkan route untuk menuju ke halaman login google
    nanti routenya kita bisa tulis 
    /auth/google

2. Oauth provider google
    nah ketika route /auth/google diakses maka user akan diredirect ke halaman
    login google
    
    dan akan mengembalikan informasi dari user pada profilenya
    dan informasi tersebut dapat kita tangkap pada bagian 
    route /auth/google/callback

    maka kita mendapatkan user detail dari google

3. masukan informasi kedalam database
    setelah itu kita masukkan informasi yang kita dapatkan kedalam 
    database kita

4. membuat cookie 
    nah kita buat cookienya dengan menggunakan json web token
    
5. simpan cookie didalam browser storage cookie
    setelah membuat cookie kita harus simpan cookie tersebut
    kedalam browser


6. kirim cookie setiap request
    setelah kita menyimpan cookie dibrowser maka kita akan diredirect ke
    halaman dashboard

    ketika kita diredirect sebenarnya browser itu mengirimkan request beserta
    cookie yang kita simpan tadi untuk menandakan bahwa user tersebut telah
    login

7. authorization
    nah ini nanti kita akan tambahkan ya ketika user belum login maka
    user tidak boleh masuk kehalaman dashboard 

    jadi user bisa masuk helaman home dan login
    tapi ketika sudah login user hanya boleh masuk helahaman dasboard
    ketika user masuk kehalaman home dan login maka 

    user akan langsung diredirect kehalaman dashboard


jadi itu yang akan kita lakukan disesi berikutnya


*/