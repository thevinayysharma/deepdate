const app = express();

app.post('/location', (req, res) => {
  const { userId, latitude, longitude } = req.body;
  database.ref(`locations/${userId}`).set({ latitude, longitude });
  res.send('Location saved successfully');
});

app.get('/locations', (req, res) => {
  database.ref('locations').once('value', (snapshot) => {
    const locations = snapshot.val();
    res.json(locations);
  });
});