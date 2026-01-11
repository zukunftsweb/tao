// --- Globale Ästhetik & Konstanten ---
export const NAVY_BG = "radial-gradient(circle at center, #00050B 0%, #000C1D 100%)";
export const GOLD_GRADIENT = "linear-gradient(45deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)";
export const GLASS_BG = "rgba(255, 255, 255, 0.06)";
export const BURGUNDY = "#800020";
export const LOGO_URL = "https://i.imgur.com/aRWz7jm.png";
export const HOME_HERO_IMAGE = "https://i.imgur.com/qZaaOhU.png";

export const MENU_DATA = {
    "SUPPEN": [
        {
            name: "1. Miso Suppe",
            price: "ab €6.00",
            desc: "Miso-Paste | Wakame-Algen | Frühlingszwiebeln",
            img: "https://i.imgur.com/4yTLODi.png",
            variations: [
                { name: "Basis", price: "€6.00" },
                { name: "Tofu", price: "€6.50" },
                { name: "Lachs", price: "€8.50" },
                { name: "Tempura Garnelen", price: "€9.90" }
            ]
        },
        {
            name: "2. Ko’kos Suppe",
            price: "ab €6.50",
            desc: "Zitronengras | Chili | Limette | Kokosmilch",
            img: "https://i.imgur.com/Cw3BcLE.png",
            variations: [
                { name: "Tofu", price: "€6.50" },
                { name: "Hähnchen", price: "€7.00" },
                { name: "Garnelen", price: "€8.00" }
            ]
        },
        { name: "3. Seefood Suppe", price: "€9.50", desc: "In japanischer Art Suppe mit Meeresfrüchten", img: "https://i.imgur.com/JBZ7JIb.png" }
    ],
    "SALATE": [
        { name: "10. Crispy Ebi", price: "€14.90", desc: "Gebackene Garnelen | Wildkräutersalat | Passion-Mango Dressing", img: "https://i.imgur.com/ZckauuN.png" },
        { name: "11. Salmon Salat", price: "€16.90", desc: "Gegrillter Lachs | Wildkräutersalat | hausgemachtes Dressing", img: "https://i.imgur.com/R1xykwH.png" },
        { name: "12. Tuna Salat", price: "€16.90", desc: "Marinierter Thunfisch | Wildkräutersalat | hausgemachtes Dressing", img: "https://i.imgur.com/Y3iqP4Q.png" },
        {
            name: "13. Mango Salat",
            price: "ab €8.00",
            desc: "Mangostreifen | Gurke | Karotten | Viet Kräuter | Erdnuss mit Dressing",
            img: "https://i.imgur.com/N2K5Nzg.png",
            variations: [
                { name: "Tofu", price: "€8.00" },
                { name: "Hähnchen", price: "€9.00" },
                { name: "Garnele", price: "€10.50" }
            ]
        },
        {
            name: "14. Sommerrollen",
            price: "ab €7.00",
            desc: "Reispapier | Reisnudeln | Gemüse & Kräuter | Limette Chilli Dressing",
            img: "https://i.imgur.com/Rxk54zi.png",
            variations: [
                { name: "Tofu", price: "€7.00" },
                { name: "Hähnchen", price: "€7.50" },
                { name: "Garnele", price: "€8.00" }
            ]
        },
        { name: "17. Avocado - Salat", price: "€11.50", desc: "Avocado | Wildkräuter- und grüner Salat | Passion-Mango Dressing", img: "https://i.imgur.com/A0v5R87.png" },
        { name: "18. Wakame - Salat", price: "€6.00", desc: "Japanischer Algen Salat", img: "https://i.imgur.com/BQHN3YO.png" },
        { name: "19. Edamame", price: "€6.50", desc: "Sojabohnen mit Meersalz | Chilipulver", img: "https://i.imgur.com/ujnu30N.png" },
        { name: "20. Kimchi - Salat", price: "€6.50", desc: "Eingelegter scharfer Chinakohl | Porree", img: "https://i.imgur.com/VDIuWyL.png" }
    ],
    "KALTE VORSPEISEN": [
        {
            name: "Fischtatar",
            price: "ab €8.50",
            desc: "Roher Fisch | Avocado | Seealgen | japanische Gewürze",
            img: "https://i.imgur.com/BlQGPMk.png",
            variations: [
                { name: "Lachs", price: "€8.50" },
                { name: "Thunfisch", price: "€9.50" }
            ]
        },
        {
            name: "Tataki",
            price: "ab €14.50",
            desc: "Kurz gebraten | Sesam-Mantel | Kräuter | Ponzu",
            img: "https://i.imgur.com/H4m0g2R.png",
            variations: [
                { name: "Lachs", price: "€14.50" },
                { name: "Thunfisch", price: "€15.50" }
            ]
        },
        {
            name: "Carpaccio",
            price: "ab €12.00",
            desc: "Hausgemachte Ponzu-Soße | Kräuter",
            img: "https://i.imgur.com/krOCkez.png",
            variations: [
                { name: "Lachs", price: "€12.00" },
                { name: "Thunfisch", price: "€14.50" },
                { name: "Rind", price: "€15.00" },
                { name: "Hamachi", price: "€16.00" }
            ]
        }
    ],
    "WARME VORSPEISEN": [
        {
            name: "Happy to share",
            price: "€20.00",
            desc: "Tapas für 2 Personen mit verschiedenen Vorspeisen-Variationen vom Küchenchef",
            img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800"
        },
        { name: "Cha Gio", price: "€7.90", desc: "Frittierte Frühlingsrollen | Reispapier | Hackfleisch | Glasnudeln | Gemüse | Limette-Chili Dressing", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" },
        { name: "Chicki Karaage", price: "€8.00", desc: "Frittierte Hähnchenstücke | japanische Mangosoße", img: "https://images.unsplash.com/photo-1569058242253-92a9c71f9867?q=80&w=800" },
        { name: "Yakitori", price: "€8.50", desc: "Gegrillte Hähnchenspieße | Spezialsoße", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800" },
        { name: "Ho LO ABD", price: "€9.00", desc: "Knusprige Wantan-Teigtaschen | gehacktes Fleisch | Meeresfrüchte", img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800" },
        {
            name: "Yaki Gyoza",
            price: "ab €7.00",
            desc: "Japanische Teigtaschen",
            img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800",
            variations: [
                { name: "Gemüse", price: "€7.00" },
                { name: "Hähnchen", price: "€7.80" },
                { name: "Rindfleisch", price: "€8.30" }
            ]
        },
        { name: "Scallop", price: "€12.50", desc: "Jakobsmuscheln | Butterschmalz & Yuzu-Soße", img: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?q=80&w=800" },
        { name: "Tom Chien Com Xanh", price: "€9.00", desc: "Riesengarnelen im knusprigen grünen Jungreismantel", img: "https://images.unsplash.com/photo-1559058789-672da06263d8?q=80&w=800" },
        { name: "Mix & Match Tempura", price: "€11.50", desc: "Garnelen | Saisongemüse japanische Art", img: "https://images.unsplash.com/photo-1581264498371-d893f64c6778?q=80&w=800" },
        { name: "Aubergine-Miso", price: "€8.00", desc: "Karamellisiert | gegrillte Aubergine | Kräuter", img: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?q=80&w=800" }
    ],
    "DIMSUM": [
        { name: "Ha Kao", price: "€8.00", desc: "Gedämpfte Teigtaschen | Garnelen & Gemüsefüllung", img: "https://i.imgur.com/t2I3LEe.png" },
        { name: "Xiu Mai", price: "€8.30", desc: "Gedämpfte Teigbeutel | herzhaftes gehacktes Fleisch | Garnelen Füllung", img: "https://i.imgur.com/dgl219a.png" },
        { name: "Bao Bao", price: "€9.50", desc: "Gedämpfter Bao | Fleisch und Gemüsefüllung", img: "https://i.imgur.com/zZV4hKW.png" },
        { name: "Dimsum Mix", price: "€16.50", desc: "Gemischte Dimsum Ha Kao | Xiu Mai | Bao Bao", img: "https://i.imgur.com/IKcEtYd.png" }
    ],
    "VEGETARISCHE GERICHTE": [
        { name: "70. Tofu Curry 🌱", price: "€14.80", desc: "Tofu | Currysoße | Gemüse | Jasminreis", img: "https://i.imgur.com/SN7XPH6.png" },
        { name: "71. Curry Tofu Katsu 🌱", price: "€15.50", desc: "Jap. Tofu in Panko-Teig | japanische Currysauce | Gemüse | Jasminreis", img: "https://i.imgur.com/gdHwm1t.png" },
        { name: "72. Tofu Nuss 🌱", price: "€14.90", desc: "Tofu | hausgemachte Erdnuss-Kokos Soße | Gemüse | Jasminreis", img: "https://i.imgur.com/3KF40rO.png" },
        { name: "73. Tofu Bibimbap 🌱", price: "€15.50", desc: "Gebratener Tofu | Spiegelei | Chilipaste | buntes Gemüse | Jasminreis", img: "https://i.imgur.com/14HXl1b.png" },
        { name: "74. Tofu Teriyaki 🌱", price: "€14.90", desc: "Tofu | Teriyaki Soße | Gemüse | Jasminreis", img: "https://i.imgur.com/delYG14.png" },
        { name: "75. Tofu Stir Fried Udon 🌱", price: "€16.20", desc: "Im Wok gebratene japanische Udon-Nudeln mit Saisongemüse", img: "https://i.imgur.com/kp6exzM.png" }
    ],
    "GRILLGERICHTE": [
        { name: "80. Curry Lachs", price: "€21.50", desc: "Gegrilltes Lachsfilet | Currysoße | Gemüse | Jasminreis", img: "https://i.imgur.com/Tx16hWU.png" },
        { name: "81. Salmon Teriyaki", price: "€21.90", desc: "Gegrillter Lachs | Teriyaki-Orangen-Soße | Saisongemüse | Süßkartoffelpüree", img: "https://i.imgur.com/Rwc9BGh.png" },
        { name: "82. Tuna Teriyaki", price: "€23.80", desc: "Thunfisch, medium gegrillt | Teriyaki-Orangen-Soße | Saisongemüse | Süßkartoffelpüree", img: "https://i.imgur.com/rTIEWpS.png" },
        { name: "83. Ozean Curry", price: "€21.50", desc: "Gegrillte Riesengarnelen | Tintenfisch | Muscheln | Currysoße | Gemüse | Jasminreis", img: "https://i.imgur.com/nVOTnP0.png" },
        { name: "84. Oktopus", price: "€20.90", desc: "Gegrillter Oktopus | Teriyaki-Orangen-Soße | grüner Spargel | Cherrytomaten | Kartoffelpüree", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800" },
        { name: "85. Rib-Eye-Steak", price: "€23.50", desc: "Rib-Eye-Steak | Pilz-Soße | grüner Spargel | Cherrytomaten | Süßkartoffel-Pommes", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800" },
        { name: "86. Barbarie-Ente", price: "€22.80", desc: "Gegrillte Barbarie-Ente | Teriyaki-Beeren-Soße | Shiitake-Pilze | Pak Choi | Kartoffelpüree", img: "https://i.imgur.com/OxkMZGD.png" }
    ],
    "VIETNAMESISCHE SPEZIALITÄTEN": [
        {
            name: "90. Pho like Pho",
            price: "ab €13.50",
            desc: "Reisbandnudelsuppe | Kraftbrühe | Kräuter",
            img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800",
            variations: [
                { name: "Tofu", price: "€13.50" },
                { name: "Hähnchen", price: "€14.90" },
                { name: "Rind", price: "€15.80" }
            ]
        },
        { name: "91. Bun Bo Nam Bo", price: "€17.60", desc: "Reisnudeln | sautiertes Rindfleisch | Blattsalat & Kräuter | Limette Chili Dressing | Erdnüsse", img: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?q=80&w=800" },
        { name: "92. Bun Dau", price: "€16.80", desc: "Reisnudeln | frittierter Tofu | Blattsalat | Kräuter | Limette Chili Dressing", img: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=800" },
        { name: "93. Bun Ga", price: "€17.30", desc: "Reisnudeln | gegrilltes Hähnchen | Blattsalat | Kräuter | Limette Chili Dressing", img: "https://images.unsplash.com/photo-1580476262716-6b369316b872?q=80&w=800" },
        { name: "94. La Vong", price: "€19.50", desc: "Reisnudeln | marinierter Lachs | Blattsalat | Kräuter | Limette Chili Dressing", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800" }
    ],
    "SIGNATURE VORSPEISEN": [
        { name: "Thunfisch Tatar", price: "€9.50", desc: "Frisch zubereitetes Thunfischtatar mit Avocado", img: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=800" },
        { name: "Lachs Tataki", price: "€14.50", desc: "Kurz angebraten mit Ponzu-Sauce", img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?q=80&w=800" },
        { name: "Carpaccio Hamachi", price: "€16.00", desc: "Gelbschwanzmakrele mit Trüffel-Yuzu", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800" }
    ],
    "HAUPTSPEISEN": [
        { name: "Duck Fly", price: "€17.50", desc: "Knusprige Ente auf Wok-Gemüse", img: "https://images.unsplash.com/photo-1512058560366-cd24295984c7?q=80&w=800" }
    ],
    "GRILLPLATTEN & BEILAGEN": [
        { name: "100. Grillplatte Singles", price: "€29.50", desc: "Chef Empfehlung | Fleisch, Fisch, Meeresfrüchte | Spezialsoße | verschiedene Beilagen", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" },
        { name: "Grillplatte Double", price: "€58.50", desc: "Chef Empfehlung für 2 | Fleisch, Fisch, Meeresfrüchte | Spezialsoße | verschiedene Beilagen", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800" },
        { name: "Gedämpfter Duftreis", price: "€3.00", desc: "(Steamed jasmine rice)", img: "https://images.unsplash.com/photo-1516684732162-798858485f12?q=80&w=800" },
        { name: "Frittierte Süßkartoffeln", price: "€5.00", desc: "(Fried sweet potatoes)", img: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800" },
        { name: "Süßkartoffelpüree", price: "€6.00", desc: "(Sweet potato puree)", img: "https://images.unsplash.com/photo-1619860860774-142862b25212?q=80&w=800" },
        { name: "Salat", price: "€5.00", desc: "Frischer Beilagensalat", img: "https://images.unsplash.com/photo-1550411294-b3b1bd5fce1b?q=80&w=800" },
        { name: "Extra Fleisch", price: "€8.00", desc: "Wahlweise Rind, Hähnchen oder Ente", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=800" }
    ],
    "NIGIRI & MAKI": [
        { name: "210. Sake Nigiri", price: "€7.00", desc: "2 Stk. | Lachs", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd43ea?q=80&w=800" },
        { name: "211. Maguro Nigiri", price: "€8.00", desc: "2 Stk. | Thunfisch", img: "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=800" },
        { name: "212. Hamachi Nigiri", price: "€8.00", desc: "2 Stk. | Gelbschwanz", img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?q=80&w=800" },
        { name: "213. Unagi Nigiri", price: "€7.00", desc: "2 Stk. | Süßwasseraal", img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800" },
        { name: "214. Hotate Nigiri", price: "€8.00", desc: "2 Stk. | flambierte Jakobsmuschel", img: "https://images.unsplash.com/photo-1615887023516-9dc7726e632d?q=80&w=800" },
        { name: "215. Ebi Nigiri", price: "€7.00", desc: "2 Stk. | Garnelen", img: "https://images.unsplash.com/photo-1559058789-672da06263d8?q=80&w=800" },
        { name: "220. Lachs Maki", price: "€7.00", desc: "6 Stk. | Lachs", img: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800" },
        { name: "221. Thunfisch Maki", price: "€8.00", desc: "6 Stk. | Thunfisch", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800" },
        { name: "222. Ebi Maki", price: "€7.00", desc: "6 Stk. | Garnele", img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800" },
        { name: "223. Lachs-Avocado Maki", price: "€7.00", desc: "6 Stk. | Lachs | Avocado", img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=800" },
        { name: "224. Gurke Maki", price: "€6.00", desc: "6 Stk. | Gurke", img: "https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=800" },
        { name: "225. Avocado Maki", price: "€6.50", desc: "6 Stk. | Avocado", img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=800" },
        { name: "226. Mango Maki", price: "€6.50", desc: "6 Stk. | Mango", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800" },
        { name: "227. Sake Onigiri", price: "€7.50", desc: "2 Stk. Reisbällchen | gekochter Lachs", img: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800" }
    ],
    "INSIDE OUT ROLLS": [
        { name: "250. Sake I.O.", price: "€12.80", desc: "8 Stk. | Lachs | Shiso | Avocado | Tobiko", img: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800" },
        { name: "251. Tuna I.O.", price: "€13.90", desc: "8 Stk. | Thunfisch | Shiso | Avocado | Tobiko", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800" },
        { name: "252. Sake Shake I.O.", price: "€12.90", desc: "8 Stk. | Lachs | Frischkäse | Gurke | Sesam", img: "https://images.unsplash.com/photo-1635526910429-04348350095e?q=80&w=800" },
        { name: "253. Ebi Tempura I.O.", price: "€13.50", desc: "8 Stk. | Knusprige Riesengarnelen | Avocado | Gurke | Tobiko", img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800" },
        { name: "254. Chicken I.O.", price: "€12.50", desc: "8 Stk. | Hähnchen | Frischkäse | Avocado | Mango", img: "https://images.unsplash.com/photo-1626804475297-411dbe64fc38?q=80&w=800" },
        { name: "255. Karo I.O. 🌱", price: "€9.50", desc: "8 Stk. | Baby Karotten | Avocado | Gurke | Rucola | Sesam", img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?q=80&w=800" },
        { name: "256. Pumpkin I.O. 🌱", price: "€9.70", desc: "8 Stk. | Kürbis | Gurke | Rettich | Avocado", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800" },
        { name: "257. Aspa I.O. 🌱", price: "€10.50", desc: "8 Stk. | Grüner Spargel | Gurken | Avocado", img: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=800" }
    ],
    "SPECIAL ROLLS": [
        {
            name: "260. Delight Roll",
            price: "ab €15.00",
            desc: "Gurke | Avocado | Frischkäse | Shiso | Trüffelöl | Kresse",
            img: "https://images.unsplash.com/photo-1626804475297-411dbe64fc38?q=80&w=800",
            variations: [
                { name: "Lachs Tatar", price: "€15.00" },
                { name: "Thunfisch Tartar", price: "€16.50" }
            ]
        },
        {
            name: "261. Volcano Roll",
            price: "ab €15.00",
            desc: "Avocado | Frischkäse | Mango | Garnelen",
            img: "https://images.unsplash.com/photo-1559058789-672da06263d8?q=80&w=800",
            variations: [
                { name: "flambierter Lachs", price: "€15.00" },
                { name: "flambierter Thunfisch", price: "€16.00" }
            ]
        },
        { name: "262. Sendai Roll", price: "€17.00", desc: "Süßwasseraal | Avocado | knusprige Riesengarnelen", img: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800" },
        { name: "263. Veggie Paradise 🌱", price: "€14.00", desc: "Avocado | Mango | Gurke | Sesam | knuspriger Spargel", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" },
        { name: "264. Aomori Roll", price: "€15.00", desc: "flambiertes Rind | Avocado | Mango | Gurke | Riesengarnelen", img: "https://images.unsplash.com/photo-1606850246029-dd00bd5d0e29?q=80&w=800" },
        { name: "265. Prawn Tower", price: "€18.00", desc: "Chef-Special Roll – Lachstatar | knusprige Garnelen", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800" },
        { name: "266. Dynasty Roll", price: "€16.00", desc: "Bio Schottischer Lachs | Frischkäse | Gurke | Avocado ummantelt", img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?q=80&w=800" }
    ],
    "TEMPURA ROLLS": [
        { name: "230. Big Rolls Lachs", price: "€13.50", desc: "6 Stk. | Tempura frittiert | Lachs", img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800" },
        { name: "231. Big Rolls Garnelen", price: "€14.50", desc: "6 Stk. | Tempura frittiert | Garnelen", img: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?q=80&w=800" },
        { name: "232. Big Rolls Chicken", price: "€13.00", desc: "6 Stk. | Tempura frittiert | Hähnchen", img: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=800" },
        { name: "233. Big Rolls Spargel", price: "€12.00", desc: "6 Stk. | Tempura frittiert | Spargel", img: "https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=800" },
        { name: "240. Sake Mini Roll", price: "€10.00", desc: "Mini Roll | Tempura Lachs", img: "https://images.unsplash.com/photo-1541696490-8744a571f84d?q=80&w=800" },
        { name: "241. Avo Mini Roll", price: "€9.00", desc: "Mini Roll | Tempura Avocado", img: "https://images.unsplash.com/photo-1562158074-d67b2cb52586?q=80&w=800" }
    ],
    "SUSHI SETS": [
        { name: "270. Machi Menü", price: "€18.00", desc: "6 Stk. Sake Maki | 6 Stk. Maguro Maki | 6 Stk. Avo Maki", img: "https://images.unsplash.com/photo-1607301406259-dfb1a414427c?q=80&w=800" },
        { name: "271. Hakodate Veggie 🌱", price: "€17.90", desc: "12 Stk. Maki | 8 Stk. I.O. Rolls (Vegetarisch)", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800" },
        { name: "272. Kyoto Menü", price: "€24.50", desc: "3 Stk. Nigiri | 6 Stk. Maki | 6 Stk. Tempura Big Roll", img: "https://images.unsplash.com/photo-1559410545-028955139097?q=80&w=800" },
        { name: "273. Kagoshima Menü", price: "€24.90", desc: "3 Stk. Nigiri | 6 Stk. Maki | 8 Stk. I.O. Rolls", img: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800" },
        { name: "274. Nagasaki Menü", price: "€60.00", desc: "Für 2 Personen", img: "https://images.unsplash.com/photo-1562158147-f8d683a20794?q=80&w=800" },
        { name: "275. Omakase", price: "€50.00 p.P.", desc: "Recommendation | Vorspeise, Sushi, Hauptgang, Dessert", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd43ea?q=80&w=800" }
    ],
    "DESSERTS": [
        { name: "Crème Brûlée", price: "€9.00", desc: "Limette-Zitronengras | Beeren Sorbet", img: "https://images.unsplash.com/photo-1470333732907-0516ca8d08fe?q=80&w=800" },
        { name: "Mochi", price: "€7.50", desc: "Kugeln Mochi | Vanillesoße | frische Früchte", img: "https://images.unsplash.com/photo-1582760993180-630bb9930190?q=80&w=800" },
        { name: "Sorbet", price: "€7.00", desc: "Drei Sorten Sorbet Eis", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800" }
    ]
};
