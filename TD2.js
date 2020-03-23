// Crée la collection "sport" et insère deux documents pour les tests
db.sport.insertMany([
    { physical: true, country: 'USA', ballSize: 40 },
    { physical: false, country: 'France', ballSize: 5 }
]);

// Ajoute le champ title "Basket" et requiredTeams "true" pour le document ayant pour country "USA"
db.sport.updateOne({ country: 'USA' }, { $set: { title: 'Basket', requiredTeams: true } }, { upsert: true });

// Ajoute le champ title "Golf" et requiredTeams "false" pour le document ayant pour country "France"
db.sport.updateOne({ country: 'France' }, { $set: { title: 'Golf', requiredTeams: false } }, { upsert: true });

// Ajoute un champ "minPlayers" à "5" pour tous les documents ayant "requiredTeams" à "true"
db.sport.updateMany({ requiredTeams: true }, { $set: { minPlayers: 5 } }, { upsert: true });

// Ajoute 10 à la valeur de "minPlayers" pour les champs ayant "requiredTeams" à "true"
db.sport.updateMany({ requiredTeams: true }, { $inc: { minPlayers: 10 } });

// Ajoute un champ tableau "team" pour tous les documents
db.sport.updateMany({}, { $set: { team: [] } }, { upsert: true });

// Ajoute un champ "name" "John" et un champ "number" 8 dans le tableau "team" pour tous les documents ayant "requiredTeams" à true
db.sport.updateMany({ requiredTeams: true }, { $push: { team: { name: 'John', number: 8 } } });

// Ajout un champ "titulary" true pour tous les éléments du tableau "team" de chaque document
db.sport.updateMany({}, { $set: { 'team.$[].titulary': true } });
