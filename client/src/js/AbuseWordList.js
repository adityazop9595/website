const badWords = [
  // English
  'fuck', 'shit', 'bastard', 'slut', 'asshole', 'dick', 'bitch', 'pussy', 'nigger', 'whore',

  // Hindi (Romanized)
  'madarchod', 'bhenchod', 'chutiya', 'lund', 'gaand', 'randi', 'chut', 'bhosdi', 'mc', 'bc',
  'tera baap', 'teri maa', 'tari maki', 'gaand mara', 'lodu', 'chod', 'behen ke lode',

  // Variants and partials
  'maderchod', 'bhosdike', 'gandu', 'loda', 'mcbc', 'motherchod', 'suar ke bachhe',

  // Obfuscated spellings (common bypass tricks)
  'm@derchod', 'b#enchod', 'chut!ya', 'b***h', 'f**k', 'a$$hole'
];


export default badWords;