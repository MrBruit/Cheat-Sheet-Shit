import type { QuestionAnswers } from "../types/type";

export const fullCategoryQuiz: QuestionAnswers[] = [
  // ------------------ JAVASCRIPT (8) ------------------
  {
    id: 1,
    definition: "Méthode qui transforme un tableau en une seule valeur.",
    correct: "reduce()",
    wrong: ["map()", "filter()", "compact()"]
  },
  {
    id: 2,
    definition: "Mot-clé permettant de déclarer une variable réassignable.",
    correct: "let",
    wrong: ["const", "var", "assign"]
  },
  {
    id: 3,
    definition: "Structure permettant d'exécuter du code en cas d'erreur.",
    correct: "try...catch",
    wrong: ["if...else", "switch", "throwOnly"]
  },
  {
    id: 4,
    definition: "Méthode qui retourne un entier aléatoire entre 0 et 1.",
    correct: "Math.random()",
    wrong: ["Math.rand()", "random()", "Number.random()"]
  },
  {
    id: 5,
    definition: "Type de données représentant l’absence volontaire de valeur.",
    correct: "null",
    wrong: ["undefined", "void", "empty"]
  },
  {
    id: 6,
    definition: "Méthode qui ajoute un élément à la fin d’un tableau.",
    correct: "push()",
    wrong: ["append()", "add()", "insert()"]
  },
  {
    id: 7,
    definition: "Mot-clé permettant de créer une promesse résolue.",
    correct: "Promise.resolve()",
    wrong: ["Promise.done()", "Promise.success()", "Promise.complete()"]
  },
  {
    id: 8,
    definition: "Méthode permettant de convertir un JSON en objet JS.",
    correct: "JSON.parse()",
    wrong: ["JSON.convert()", "parseJSON()", "JSON.toObject()"]
  },

  // ------------------ REACT (8) ------------------
  {
    id: 9,
    definition: "Hook permettant de gérer un état local.",
    correct: "useState",
    wrong: ["useEffect", "useMemo", "useRef"]
  },
  {
    id: 10,
    definition: "Hook exécuté après le rendu du composant.",
    correct: "useEffect",
    wrong: ["useState", "useCallback", "useLayout"]
  },
  {
    id: 11,
    definition: "Hook permettant de mémoriser une valeur calculée.",
    correct: "useMemo",
    wrong: ["useState", "useEffect", "useCache"]
  },
  {
    id: 12,
    definition: "Hook permettant de mémoriser une fonction.",
    correct: "useCallback",
    wrong: ["useMemo", "useFunction", "useEvent"]
  },
  {
    id: 13,
    definition: "Hook permettant d'accéder à un élément du DOM.",
    correct: "useRef",
    wrong: ["useDom", "useElement", "useNode"]
  },
  {
    id: 14,
    definition: "Méthode permettant de créer un contexte global.",
    correct: "createContext",
    wrong: ["makeContext", "useContextProvider", "globalContext"]
  },
  {
    id: 15,
    definition: "Composant utilisé pour définir les routes dans React Router.",
    correct: "<Routes>",
    wrong: ["<Switch>", "<Navigator>", "<Paths>"]
  },
  {
    id: 16,
    definition: "Prop permettant de passer des éléments enfants à un composant.",
    correct: "children",
    wrong: ["content", "slots", "inner"]
  },

  // ------------------ HTML/CSS (8) ------------------
  {
    id: 17,
    definition: "Balise HTML utilisée pour les titres principaux.",
    correct: "<h1>",
    wrong: ["<title>", "<header>", "<heading>"]
  },
  {
    id: 18,
    definition: "Propriété CSS permettant de changer la couleur du texte.",
    correct: "color",
    wrong: ["text-color", "font-color", "foreground"]
  },
  {
    id: 19,
    definition: "Balise HTML utilisée pour insérer une image.",
    correct: "<img>",
    wrong: ["<image>", "<pic>", "<media>"]
  },
  {
    id: 20,
    definition: "Propriété CSS permettant de centrer un élément en flexbox.",
    correct: "justify-content",
    wrong: ["align-items", "center-items", "flex-center"]
  },
  {
    id: 21,
    definition: "Balise HTML utilisée pour créer un lien.",
    correct: "<a>",
    wrong: ["<link>", "<href>", "<url>"]
  },
  {
    id: 22,
    definition: "Propriété CSS permettant de changer la taille du texte.",
    correct: "font-size",
    wrong: ["text-size", "size", "font-height"]
  },
  {
    id: 23,
    definition: "Balise HTML utilisée pour créer un formulaire.",
    correct: "<form>",
    wrong: ["<input>", "<fieldset>", "<submit>"]
  },
  {
    id: 24,
    definition: "Propriété CSS permettant d'arrondir les bords d’un élément.",
    correct: "border-radius",
    wrong: ["corner-radius", "round-border", "radius"]
  },

  // ------------------ SQL (8) ------------------
  {
    id: 25,
    definition: "Commande SQL pour sélectionner toutes les lignes d'une table.",
    correct: "SELECT * FROM table;",
    wrong: ["GET ALL table;", "SHOW table;", "FETCH table;"]
  },
  {
    id: 26,
    definition: "Commande SQL pour insérer une nouvelle ligne.",
    correct: "INSERT INTO",
    wrong: ["ADD INTO", "PUT INTO", "CREATE ROW"]
  },
  {
    id: 27,
    definition: "Clause permettant de filtrer les résultats.",
    correct: "WHERE",
    wrong: ["FILTER", "IF", "CONDITION"]
  },
  {
    id: 28,
    definition: "Commande SQL pour supprimer une table.",
    correct: "DROP TABLE",
    wrong: ["DELETE TABLE", "REMOVE TABLE", "CLEAR TABLE"]
  },
  {
    id: 29,
    definition: "Clause permettant de trier les résultats.",
    correct: "ORDER BY",
    wrong: ["SORT BY", "GROUP BY", "ALIGN BY"]
  },
  {
    id: 30,
    definition: "Commande SQL pour mettre à jour une ligne.",
    correct: "UPDATE",
    wrong: ["MODIFY", "CHANGE", "SET ROW"]
  },
  {
    id: 31,
    definition: "Clause permettant de regrouper des résultats.",
    correct: "GROUP BY",
    wrong: ["ORDER BY", "COLLECT BY", "MERGE BY"]
  },
  {
    id: 32,
    definition: "Mot-clé SQL pour éviter les doublons.",
    correct: "DISTINCT",
    wrong: ["UNIQUE", "ONLY", "SINGLE"]
  },

  // ------------------ ACRONYMES (8) ------------------
  {
    id: 33,
    definition: "Signification de l’acronyme HTML.",
    correct: "HyperText Markup Language",
    wrong: ["Hyper Transfer Markup Language", "HighText Machine Language", "Hyperlink Text Mode Language"]
  },
  {
    id: 34,
    definition: "Signification de l’acronyme CSS.",
    correct: "Cascading Style Sheets",
    wrong: ["Creative Style System", "Cascaded Sheet Styles", "Custom Style Syntax"]
  },
  {
    id: 35,
    definition: "Signification de l’acronyme SQL.",
    correct: "Structured Query Language",
    wrong: ["Sequential Query Logic", "System Query Language", "Structured Quick Language"]
  },
  {
    id: 36,
    definition: "Signification de l’acronyme API.",
    correct: "Application Programming Interface",
    wrong: ["Advanced Program Interaction", "Application Process Integration", "Automated Program Interface"]
  },
  {
    id: 37,
    definition: "Signification de l’acronyme JSON.",
    correct: "JavaScript Object Notation",
    wrong: ["Java Syntax Object Notation", "JavaScript Oriented Nodes", "JavaScript Object Network"]
  },
  {
    id: 38,
    definition: "Signification de l’acronyme URL.",
    correct: "Uniform Resource Locator",
    wrong: ["Universal Resource Link", "Unified Routing Locator", "Uniform Routing Link"]
  },
  {
    id: 39,
    definition: "Signification de l’acronyme DOM.",
    correct: "Document Object Model",
    wrong: ["Data Object Mapping", "Document Oriented Model", "Dynamic Object Model"]
  },
  {
    id: 40,
    definition: "Signification de l’acronyme HTTP.",
    correct: "HyperText Transfer Protocol",
    wrong: ["Hyperlink Transfer Process", "HighText Transmission Protocol", "Hyper Transfer Text Protocol"]
  }
];
