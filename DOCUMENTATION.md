# 1. Az alkalmazás célja

Az alkalmazás egy fürdő eddig papíron vezetett napi üzemviteli naplójának modernizált változata. Célja, hogy a különböző jogosultságokkal rendelkező felhasználók - belépést követően - a jogosultságuknak megfelelő adatokat rögzíthessék, kezelhessék.

# 2. Az alkalmazás telepítése

- Klónozni kell az adott [GitHub](https://github.com/rhetesi/spa-daily-report) repository tartalmát a célgépre.
- Telepíteni kell az alkalmazás függőségeit az `npm i` paranccsal.
- Ha további fejlesztések szükségesek, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.

# 3. Az alkalmazás konfigurálása

A frontend/src/app/service/config.service.ts és a backend/src/index.js állományban be kell állítani az API végpont elérési útvonalát:

http://localhost:3000

# 4. Az alkalmazás indítása

A megadott Docker container indítása és inicializálása.

El kell indítani a Docker Desktop alkalmazást.
A backend mappába belépve a terminálban ki kell adni az
npm run dev
parancsot.
(A frontend mappában a terminálban az
npm start
paranccsal indítható a frontend.)

A belépéshez egy érvényes e-mail-cím és jelszó szükséges.

Egy érvényes példa:

- E-mail: te@gmail.com
- Jelszó: testelek

# 5. A végpontok dokumentációja

[Swagger](http://localhost:3000/api-docs/)

`http://localhost:3000/api-docs/`

# 6. Linkek

[A User Stoy (felhasználói és adminisztrátori szerepkör) itt érhető el.](https://github.com/rhetesi/spa-daily-report/blob/main/README.md)
