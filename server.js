const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const app = express();
// Middlewares
app.use(cors()); // Autorise les requêtes cross-origin
app.use(express.json()); // Parse le JSON des requêtes
// Configuration de Multer pour les uploads
const upload = multer({ dest: 'uploads/' });
// Chemin vers le fichier de données
const EVENTS_FILE = path.join(__dirname, 'events.json');
// Lire les événements depuis le fichier JSON
function readEvents() {
if (!fs.existsSync(EVENTS_FILE)) {
fs.writeFileSync(EVENTS_FILE, JSON.stringify([], null, 2));
return [];
}
return JSON.parse(fs.readFileSync(EVENTS_FILE, 'utf8'));
}
// Écrire les événements dans le fichier JSON
function writeEvents(events) {
fs.writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2));
}


app.get('/events', (req, res) => {
res.json(readEvents());
});


app.post('/events', upload.fields([
{ name: 'affiche', maxCount: 1 },
{ name: 'fiche', maxCount: 1 }
]), (req, res) => {
console.log('Body:', req.body);
console.log('Files:', req.files);
const events = readEvents();
const newEvent = {
id: Date.now(), // ID unique basé sur le timestamp
titre: req.body.titre,
date: req.body.date,
lieu: req.body.lieu,
description: req.body.description,
adresse: req.body.adresse || '',
lat: req.body.lat || null,
lng: req.body.lng || null,
affiche: req.files?.affiche ? req.files.affiche[0].filename : null,
fiche: req.files?.fiche ? req.files.fiche[0].filename : null
};
events.push(newEvent);
writeEvents(events);
console.log('✅ Créé:', newEvent);
res.status(201).json(newEvent);
});

app.delete('/events/:id', (req, res) => {
const events = readEvents();
const filtered = events.filter(e => e.id != req.params.id);
writeEvents(filtered);
res.json({ message: 'Supprimé' });
});

app.listen(3000, () => console.log('✅ Serveur sur port 3000'));

