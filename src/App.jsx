import React, { useState, useRef, useEffect } from 'react';
import {
  Home,
  Search,
  Calendar,
  User,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Clock,
  LayoutGrid,
  UtensilsCrossed,
  X,
  Star,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Globale Ästhetik & Konstanten ---
const GOLD_GRADIENT = "linear-gradient(45deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)";
const NAVY_BG = "radial-gradient(circle at center, #000C1D 0%, #001B3D 100%)";
const GLASS_BG = "rgba(255, 255, 255, 0.06)";
const BURGUNDY = "#800020";
const LOGO_URL = "https://i.imgur.com/aRWz7jm.png";
const HOME_HERO_IMAGE = "https://i.imgur.com/qZaaOhU.png";

const MENU_DATA = {
  "SUPPEN": [
    { name: "1. Miso Suppe", price: "ab €6.00", desc: "Miso-Paste | Wakame-Algen | Frühlingszwiebeln (Basis €6.00, Tofu €6.50, Lachs €8.50, Tempura Garnelen €9.90)", img: "https://i.imgur.com/4yTLODi.png" },
    { name: "2. Ko’kos Suppe", price: "ab €6.50", desc: "Zitronengras | Chili | Limette | Kokosmilch (Tofu €6.50, Hähnchen €7.00, Garnelen €8.00)", img: "https://i.imgur.com/Cw3BcLE.png" },
    { name: "3. Seefood Suppe", price: "€9.50", desc: "In japanischer Art Suppe mit Meeresfrüchten", img: "https://i.imgur.com/JBZ7JIb.png" }
  ],
  "SALATE": [
    { name: "10. Crispy Ebi", price: "€14.90", desc: "Gebackene Garnelen | Wildkräutersalat | Passion-Mango Dressing", img: "https://i.imgur.com/ZckauuN.png" },
    { name: "11. Salmon Salat", price: "€16.90", desc: "Gegrillter Lachs | Wildkräutersalat | hausgemachtes Dressing", img: "https://i.imgur.com/R1xykwH.png" },
    { name: "12. Tuna Salat", price: "€16.90", desc: "Marinierter Thunfisch | Wildkräutersalat | hausgemachtes Dressing", img: "https://i.imgur.com/Y3iqP4Q.png" },
    { name: "13. Mango Salat", price: "ab €8.00", desc: "Mangostreifen | Gurke | Karotten | Viet Kräuter | Erdnuss mit Dressing (Tofu €8.00, Hähnchen €9.00, Garnele €10.50)", img: "https://i.imgur.com/N2K5Nzg.png" },
    { name: "14. Sommerrollen", price: "ab €7.00", desc: "Reispapier | Reisnudeln | Gemüse & Kräuter | Limette Chilli Dressing (Tofu €7.00, Hähnchen €7.50, Garnele €8.00)", img: "https://i.imgur.com/Rxk54zi.png" },
    { name: "17. Avocado - Salat", price: "€11.50", desc: "Avocado | Wildkräuter- und grüner Salat | Passion-Mango Dressing", img: "https://i.imgur.com/A0v5R87.png" },
    { name: "18. Wakame - Salat", price: "€6.00", desc: "Japanischer Algen Salat", img: "https://i.imgur.com/BQHN3YO.png" },
    { name: "19. Edamame", price: "€6.50", desc: "Sojabohnen mit Meersalz | Chilipulver", img: "https://i.imgur.com/ujnu30N.png" },
    { name: "20. Kimchi - Salat", price: "€6.50", desc: "Eingelegter scharfer Chinakohl | Porree", img: "https://i.imgur.com/VDIuWyL.png" }
  ],
  "KALTE VORSPEISEN": [
    { name: "Fischtatar", price: "ab €8.50", desc: "Roher Fisch | Avocado | Seealgen | japanische Gewürze (Lachs €8.50, Thunfisch €9.50)", img: "https://i.imgur.com/BlQGPMk.png" },
    { name: "Tataki", price: "ab €14.50", desc: "Kurz gebraten | Sesam-Mantel | Kräuter | Ponzu (Lachs €14.50, Thunfisch €15.50)", img: "https://i.imgur.com/H4m0g2R.png" },
    { name: "Carpaccio", price: "ab €12.00", desc: "Hausgemachte Ponzu-Soße | Kräuter (Lachs €12.00, Thunfisch €14.50, Rind €15.00, Hamachi €16.00)", img: "https://i.imgur.com/krOCkez.png" }
  ],
  "WARME VORSPEISEN": [
    { name: "Happy to share", price: "€20.00", desc: "Tapas für 2 Personen mit verschiedenen Vorspeisen-Variationen vom Küchenchef", img: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800" },
    { name: "Cha Gio", price: "€7.90", desc: "Frittierte Frühlingsrollen | Reispapier | Hackfleisch | Glasnudeln | Gemüse | Limette-Chili Dressing", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" },
    { name: "Chicki Karaage", price: "€8.00", desc: "Frittierte Hähnchenstücke | japanische Mangosoße", img: "https://images.unsplash.com/photo-1569058242253-92a9c71f9867?q=80&w=800" },
    { name: "Yakitori", price: "€8.50", desc: "Gegrillte Hähnchenspieße | Spezialsoße", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800" },
    { name: "Ho LO ABD", price: "€9.00", desc: "Knusprige Wantan-Teigtaschen | gehacktes Fleisch | Meeresfrüchte", img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800" },
    { name: "Yaki Gyoza", price: "ab €7.00", desc: "Japanische Teigtaschen (Gemüse €7, Hähnchen €7.80, Rindfleisch €8.30)", img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800" },
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
  "TASTE OF VIETNAM": [
    { name: "90. Pho like Pho", price: "ab €13.50", desc: "Reisbandnudelsuppe | Kraftbrühe | Kräuter (Tofu €13.50, Hähnchen €14.90, Rind €15.80)", img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800" },
    { name: "91. Bun Bo Nam Bo", price: "€17.60", desc: "Reisnudeln | sautiertes Rindfleisch | Blattsalat & Kräuter | Limette Chili Dressing | Erdnüsse", img: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?q=80&w=800" },
    { name: "92. Bun Dau", price: "€16.80", desc: "Reisnudeln | frittierter Tofu | Blattsalat | Kräuter | Limette Chili Dressing", img: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=800" },
    { name: "93. Bun Ga", price: "€17.30", desc: "Reisnudeln | gegrilltes Hähnchen | Blattsalat | Kräuter | Limette Chili Dressing", img: "https://images.unsplash.com/photo-1580476262716-6b369316b872?q=80&w=800" },
    { name: "94. La Vong", price: "€19.50", desc: "Reisnudeln | marinierter Lachs | Blattsalat | Kräuter | Limette Chili Dressing", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800" }
  ],
  "STARTERS": [
    { name: "Thunfisch Tatar", price: "€9.50", desc: "Frisch zubereitetes Thunfischtatar mit Avocado", img: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=800" },
    { name: "Lachs Tataki", price: "€14.50", desc: "Kurz angebraten mit Ponzu-Sauce", img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?q=80&w=800" },
    { name: "Carpaccio Hamachi", price: "€16.00", desc: "Gelbschwanzmakrele mit Trüffel-Yuzu", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800" }
  ],
  "MAINS": [
    { name: "Duck Fly", price: "€17.50", desc: "Knusprige Ente auf Wok-Gemüse", img: "https://images.unsplash.com/photo-1512058560366-cd24295984c7?q=80&w=800" }
  ],
  "GRILLPLATTE & SIDES": [
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
    { name: "260. Delight Roll", price: "ab €15.00", desc: "Gurke | Avocado | Frischkäse | Shiso | Trüffelöl | Kresse (Lachs Tatar €15.00, Thunfisch Tartar €16.50)", img: "https://images.unsplash.com/photo-1626804475297-411dbe64fc38?q=80&w=800" },
    { name: "261. Volcano Roll", price: "ab €15.00", desc: "Avocado | Frischkäse | Mango | Garnelen (flambierter Lachs €15.00, flambierter Thunfisch €16.00)", img: "https://images.unsplash.com/photo-1559058789-672da06263d8?q=80&w=800" },
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

// --- Komponenten ---

const Logo = () => (
  <div className="flex flex-col items-center pt-2 w-full z-20">
    <div className="relative w-44 h-14 flex items-center justify-center overflow-hidden">
      <img
        src={LOGO_URL}
        alt="TAO Logo"
        className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_16px_rgba(191,149,63,0.5)]"
        style={{ filter: 'brightness(1.1) contrast(1.2)' }}
      />
    </div>
    <p className="text-[13px] tracking-[0.4em] text-white/80 uppercase mt-2 font-light text-center">
      Sushi • Asian Cuisine • Bar
    </p>
  </div>
);

const BottomDock = ({ activeTab, setActiveTab }) => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-md h-16 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-between px-4 z-50 shadow-2xl">
    <button onClick={() => setActiveTab('home')} className="relative p-2 rounded-full outline-none">
      <Home size={22} className={activeTab === 'home' ? "text-white" : "text-white/30 transition-colors"} />
      {activeTab === 'home' && <motion.div layoutId="dock-glow" className="absolute inset-0 rounded-full blur-md bg-[#800020]/60 -z-10" />}
    </button>

    <button onClick={() => setActiveTab('menu')} className="relative p-2 rounded-full outline-none">
      <UtensilsCrossed size={22} className={activeTab === 'menu' ? "text-white" : "text-white/30 transition-colors"} />
      {activeTab === 'menu' && <motion.div layoutId="dock-glow" className="absolute inset-0 rounded-full blur-md bg-[#800020]/60 -z-10" />}
    </button>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setActiveTab('booking')}
      className="h-16 w-16 rounded-full -mt-12 flex items-center justify-center border-[5px] border-[#000C1D] shadow-[0_10px_30px_rgba(191,149,63,0.5)] z-50"
      style={{ background: GOLD_GRADIENT }}
    >
      <span className="text-[11px] font-black text-black tracking-tighter uppercase">Book</span>
    </motion.button>

    <button onClick={() => setActiveTab('search')} className="relative p-2 rounded-full outline-none">
      <Search size={22} className={activeTab === 'search' ? "text-white" : "text-white/30 transition-colors"} />
      {activeTab === 'search' && <motion.div layoutId="dock-glow" className="absolute inset-0 rounded-full blur-md bg-[#800020]/60 -z-10" />}
    </button>

    <button onClick={() => setActiveTab('info')} className="relative p-2 rounded-full outline-none group">
      <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
        <img
          src={LOGO_URL}
          alt="TAO Mini"
          className={`w-full h-full object-contain transition-all filter grayscale brightness-200 ${activeTab === 'info' ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}
        />
      </div>
    </button>
  </div>
);

// --- Bildschirme ---

const ScreenHome = ({ setActiveTab }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="h-full flex flex-col"
  >
    <Logo />
    <div className="flex-1 w-full h-[65vh] relative mt-1 overflow-hidden border-b border-white/5 mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-b-[50px]">
      <motion.div
        animate={{ scale: [1.05, 1.12, 1.05], x: [0, -5, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${HOME_HERO_IMAGE}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000C1D] via-transparent to-[#000C1D]/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#000C1D]/40 via-transparent to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-8 text-center pointer-events-none">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.85] mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]"
            style={{ background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'contrast(1.3)' }}>
            EXPERIENCE<br />TAO
          </h2>
          <div className="w-24 h-[1px] bg-[#FBF5B7]/40 mb-4" />
          <p className="text-white/80 text-[12px] tracking-[0.45em] font-light uppercase mb-8">
            Grand Opening 10.11.2025 • Rastatt
          </p>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('menu')}
            className="pointer-events-auto px-10 py-4 border border-[#BF953F] rounded-full backdrop-blur-md bg-white/5 shadow-2xl transition-all"
          >
            <span className="text-white text-[12px] font-bold tracking-[0.5em] uppercase">
              Menü entdecken
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const ScreenMenu = () => {
  const [activeCategory, setActiveCategory] = useState("SALATE");
  const categories = Object.keys(MENU_DATA);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="h-full flex flex-col overflow-hidden"
      style={{ paddingTop: 'env(safe-area-inset-top, 60px)' }}
    >
      <Logo />

      {/* Kategoriefilter-Leiste */}
      <div className="px-6 mt-6 mb-8 z-10 backdrop-blur-md sticky top-0">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full border text-[11px] font-bold tracking-[0.3em] transition-all uppercase ${activeCategory === cat
                ? 'border-[#BF953F] bg-white/10 text-white shadow-[0_0_15px_rgba(191,149,63,0.3)]'
                : 'border-white/10 text-white/30 bg-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Kinetischer Karten-Slider */}
      <div
        ref={scrollRef}
        className="flex-1 px-4 overflow-x-auto no-scrollbar flex items-center gap-6 pb-32 snap-x snap-mandatory"
      >
        <AnimatePresence mode="popLayout">
          {MENU_DATA[activeCategory].map((item, idx) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -50 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="min-w-[85vw] md:min-w-[400px] h-[55vh] relative rounded-[40px] overflow-hidden border border-white/20 shadow-2xl backdrop-blur-xl snap-center"
              style={{ background: GLASS_BG }}
            >
              <div className="h-[60%] w-full overflow-hidden relative">
                <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="bg-[#800020]/80 p-2 rounded-full backdrop-blur-md"><Flame size={14} className="text-white" /></div>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between h-[40%]">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-2xl font-black italic tracking-tighter uppercase leading-none" style={{ color: '#FBF5B7' }}>{item.name}</h4>
                    <span className="text-sm font-bold tracking-widest text-[#BF953F]">{item.price}</span>
                  </div>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <Star size={10} className="text-[#BF953F] fill-[#BF953F]" />
                    <Star size={10} className="text-[#BF953F] fill-[#BF953F]" />
                    <Star size={10} className="text-[#BF953F] fill-[#BF953F]" />
                    <Star size={10} className="text-[#BF953F] fill-[#BF953F]" />
                    <Star size={10} className="text-[#BF953F] fill-[#BF953F]" />
                  </div>
                  <button className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40 flex items-center gap-2">
                    Bestellen <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ScreenInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="h-full flex flex-col items-center justify-start pt-[env(safe-area-inset-top,20px)] overflow-y-auto pb-32 no-scrollbar"
  >
    <Logo />
    <div className="w-full max-w-md px-6 mt-4 space-y-6">
      {/* Map */}
      <div className="w-full h-64 rounded-[30px] overflow-hidden border border-white/10 shadow-2xl relative">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=Kaiserstra%C3%9Fe%2041,%2076437%20Rastatt&t=&z=15&ie=UTF8&iwloc=&output=embed"
          style={{ filter: 'grayscale(100%) invert(90%)' }}
          title="Google Map"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[30px]" />
      </div>

      {/* Details */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 text-center space-y-6 shadow-xl">
        <div>
          <p className="text-[#BF953F] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Adresse</p>
          <p className="text-white text-sm font-light leading-relaxed">Kaiserstraße 41<br />76437 Rastatt</p>
        </div>
        <div>
          <p className="text-[#BF953F] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Telefon</p>
          <a href="tel:072229848477" className="text-white text-sm font-light hover:text-[#BF953F] transition-colors">07222 9848477</a>
        </div>
        <div>
          <p className="text-[#BF953F] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Öffnungszeiten</p>
          <p className="text-white text-sm font-light">Mo - So: 11:00 – 22:30</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const ScreenBooking = () => {
  const [selected, setSelected] = useState(null);
  const tables = [
    { id: 1, pos: [60, 40], type: 'booth' },
    { id: 2, pos: [30, 80], occupied: true },
    { id: 3, pos: [100, 110], type: 'booth' },
    { id: 4, pos: [140, 60], type: 'table' },
    { id: 5, pos: [180, 100], occupied: true },
    { id: 6, pos: [210, 30], type: 'booth' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col overflow-hidden"
    >
      <Logo />

      <div className="px-8 mt-4 max-w-2xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white font-bold text-xl tracking-tight">Reservierung</h3>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40"><MapPin size={14} /></div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-md">
            <p className="text-white/40 text-[9px] uppercase tracking-widest mb-1">Datum</p>
            <p className="text-white text-xs font-bold">Heute, 20:30</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-md">
            <p className="text-white/40 text-[9px] uppercase tracking-widest mb-1">Personen</p>
            <p className="text-white text-xs font-bold">2 Personen</p>
          </div>
        </div>
      </div>

      <motion.div
        className="flex-1 bg-white/5 backdrop-blur-3xl border-t border-white/10 rounded-t-[50px] relative overflow-hidden"
        initial={{ y: 200 }} animate={{ y: 0 }}
      >
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent, ${BURGUNDY}, transparent)` }} />
        <div className="p-8 max-w-2xl mx-auto w-full">
          <h3 className="text-[10px] font-black tracking-[0.4em] mb-10 text-center opacity-70" style={{ color: '#FBF5B7' }}>ZONE WÄHLEN</h3>

          <div className="relative h-64 perspective-[1200px] flex items-center justify-center">
            <div className="w-full h-full relative" style={{ transform: 'rotateX(55deg) rotateZ(-25deg)' }}>
              <div className="absolute inset-0 border border-white/10 grid grid-cols-6 grid-rows-6 opacity-20">
                {Array(36).fill(0).map((_, i) => <div key={i} className="border-[0.5px] border-white/5" />)}
              </div>

              {tables.map((table) => (
                <motion.div
                  key={table.id}
                  onClick={() => !table.occupied && setSelected(table.id)}
                  style={{
                    left: table.pos[0], top: table.pos[1],
                    backgroundColor: table.occupied ? '#001B3D' : (selected === table.id ? '#FBF5B7' : 'rgba(251, 245, 183, 0.15)'),
                  }}
                  animate={!table.occupied && selected !== table.id ? { scale: [1, 1.1, 1], boxShadow: ['0 0 0px #BF953F', '0 0 15px rgba(191,149,63,0.4)', '0 0 0px #BF953F'] } : {}}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className={`absolute w-10 h-10 rounded-xl cursor-pointer flex items-center justify-center border transition-colors ${table.occupied ? 'border-white/5' : 'border-[#FBF5B7]/30'}`}
                >
                  {selected === table.id && (
                    <motion.div layoutId="ripple-active" className="absolute inset-[-4px] rounded-2xl border-2 border-[#FBF5B7]" />
                  )}
                  <UtensilsCrossed size={14} className={table.occupied ? "text-white/5" : (selected === table.id ? "text-black" : "text-white/40")} />
                </motion.div>
              ))}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-48 bg-[#800020]/20 blur-2xl rounded-full" />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between items-center px-4">
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono">
                Auswahl: <span className="text-white font-bold ml-1">{selected ? `Tisch #${selected}` : '--'}</span>
              </span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono">Lounge Bereich</span>
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={!selected}
              className={`w-full py-5 rounded-2xl text-[12px] font-black tracking-[0.3em] uppercase shadow-2xl transition-all duration-500 ${selected ? 'text-white translate-y-0 opacity-100' : 'text-white/20 translate-y-2 opacity-50'}`}
              style={{ backgroundColor: selected ? BURGUNDY : 'rgba(255,255,255,0.05)' }}
            >
              Platz Bestätigen
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- App Wrapper ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="fixed inset-0 w-screen h-[100dvh] overflow-hidden" style={{ background: NAVY_BG }}>

      {/* Intensive Hintergrund-Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[70%] h-[70%] bg-[#000C1D] rounded-full blur-[140px] opacity-[0.2]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[60%] h-[60%] bg-[#800020] rounded-full blur-[180px] opacity-[0.2]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <ScreenHome key="home" setActiveTab={setActiveTab} />}
          {activeTab === 'menu' && <ScreenMenu key="menu" />}
          {activeTab === 'booking' && <ScreenBooking key="booking" />}
          {activeTab === 'info' && <ScreenInfo key="info" />}
          {activeTab === 'search' && <ScreenMenu key="search" />}
        </AnimatePresence>

        <BottomDock activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* iOS Style Indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/10 rounded-full z-[60] pointer-events-none" />
    </div>
  );
}
