# Cara Running Server BE

1. buka jendela baru VS Code kemudian buka terminal
2. jalankan kode ini di terminal 
```git clone https://github.com/Razdan12/surat-be.git```
3. jalankan ```cd surat-be/```
4. jalankan ```npm i```
5. buka file ```.env```
6. pada ```DATABASE_URL="mysql://root:Razdan123!@localhost:3306/db-surat"``` ganti ```Razdan123!``` dengan password mysql anda, atau kosongkan jika tidak ada password contoh ```DATABASE_URL="mysql://root:@localhost:3306/db-surat"``` kemudian save
7. kemudian jalankan pada terminal ```npx prisma generate``` dan ```npx prisma db push```
8. jika sukses akan tergenerate database baru di mysql,
9. untuk mengisi initial value pada database jalankan ```npm run db:seed```
10. jika langkah diatas sukses semua jalankan proyek dengan ```npm start```
11. jika pada terminal muncil tulisan ```Server berjalan pada port 9090``` berarti server BE telah sukses di jalankan



# Testing Rest Api dengan Aplikasi Postman

1. jalankan aplikasi postman
2. import file ```surat.postman_collection.json``` 
3. jalankan auhtentikasi login dengan email ```admin@example.com``` password ```password123```