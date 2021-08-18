# 1. Az alkalmazás célja

Az alkalmazás egy fürdő eddig papíron vezetett napi üzemviteli naplójának modernizált változata. Célja, hogy a különböző jogosultságokkal rendelkező felhasználók - belépést követően - a jogosultságuknak megfelelő adatokat rögzíthessék, kezelhessék.

# 2. Az alkalmazás telepítése

- Klónozni kell az adott GitHub repository tartalmát a célgépre.
- Telepíteni kell az alkalmazás függőségeit az `npm i` paranccsal.
- Ha további fejlesztések szükségesek, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.

# 3. Az alkalmazás konfigurálása

A _base.service.ts_ állományban be kell állítani az API végpont elérési útvonalát.

# 4. Az alkalmazás indítása

A megadott Docker container indítása és inicializálása.

A belépéshez egy érvényes e-mail-cím és jelszó szükséges.

Egy érvényes példa:

E-mail: te@gmail.com
Jelszó: testelek

# 5. A végpontok dokumentációja

swagger

# 6. Linkek

[A User Stoy (felhasználói és adminisztrátori szerepkör) itt érhető el.](https://github.com/rhetesi/spa-daily-report/blob/main/README.md)
