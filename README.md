# User story - Spa daily report
## Fürdő üzemnapló - vizsgaremek

### A program célja

Jogszabályi kötelezettség a fürdőkben üzemnaplót vezetni (azonban a formájára, hogy papír alapon vagy elektronikusan vezetett-e) nincs megkötés.
A XXI. században vannak olyan indokok (főleg későbbi statisztikai kimutatások készítése, vezetők bármikor ránézhetnek), melyek az elektronikusan vezetett üzemnapló mellett szólnak.

Az üzemnaplóban kötelezően rögzíthető, de akár eltérő helyről származó, vagy eltérő felhasználók által rögzítendőek az alábbiak (entitások):

1.) napi vendéglétszám (bővebb statisztikához, akár később elektronikusan érkező, akár 1/4 órás felbontásban) és napi wellness vendéglétszám;

2.) napi időjárási adatok (víz és levegő hőfok [number], valamint az időjárás általános szöveges leírása);

3.) napi terápia/wellness kezelés adatok (az alkalmazás továbbfejlesztésével különféle statisztikai kimutatásokat lehet a wellness kezelésekről készíteni, de ez a statisztikai rész jelen vizsgaremek keretében csak az adatok nyilvántartására és egyszerű lekérdezésére korlátozódik);

4.) napi események (a fürdő üzemelése alatt előforduló napi rendkívüli események, időpont szerint rögzített szöveges leírása), amennyiben az adott napon nem kerül esemény rögzítésre, úgy az üzemnaplóba automatikusan bekerül a "Rendkívüli esemény nem történt." bejegyzés, időpont megjelölése nélkül;

5.) Felhasználók, felhasználói csoportok kezelése (adminisztrátor: jogosult a különféle jogosultsággal rendelkező felhasználókat kezelni; bejegyzésre jogosult felhasználók: ki melyik mely részeihez férhet hozzá az adatbázishoz, van teljes hozzáférésű felhasználó [fürdővezető, műszakvezetők], s részleges hozzáféréssel rendelkezők [diszpécserek, információsok] -> az alkalmazás továbbfejlesztése során a számszerűsíthető adatok más rendszerekből, API (SOAP, REST alapokon) hívásokon keresztül automatikusan bekerülhetnek, jelenleg azonban kézi rögzítésre van lehetőség);

Kiegészítésként 6. entitásként medencék vízkezelési (napi több mérés és/vagy leolvasás) kell rögzíteni fürdőkben.

Jelen vizsgaremek egy valóban működő fürdőnél fiktív adatokat tartalmaz a napi eseményekről. Emiatt került az entitásoknál szétválasztásra a 2. és 3. pont, a két vendéglétszám eltérő statisztikai bemutatása szükséges.




## Felhasználói szerepkör

### I. Főoldal

#### 1. felhasználói történet
A felhasználó az oldal böngészőben történő megnyitásakor az üzemviteli napló (továbbiakban: üzemnapló) főoldalára kerül, ahol megtekintheti az utolsó rögzített nap fő statisztikai adatait (vendéglétszá, kezelések összesített száma, időjárási adatok)

#### Elfogadási kritérium
> Az oldal legyen mobilbarát, áttekinthető, figyelemfelkeltő.

#### 2. felhasználói történet
Az oldalon a felhasználónak lehetősége lesz regisztrációra és belépésre. A regisztráció után az adminisztrátorok által jóváhagyott jogosultsági szint szerint oldalak megtekintésére, adatok rögzítésére, szerkesztésére.

#### Elfogadási kritérium
> A regisztráció egy mobilbarát űrlap kitöltésével lehetséges. Az adatok legyenek ellenőrizve, hogy megfelelő adatot irt-e be a felhasználó.
