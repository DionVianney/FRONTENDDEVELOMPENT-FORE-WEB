const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    // METODE ARRAY: Database toko
    const stores = [
        { name: "FORE COFFEE - SENOPATI", address: "Jl. Senopati No. 64, Jakarta Selatan", hours: "07:00 - 22:00", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400" },
        { name: "FORE COFFEE - GRAND INDONESIA", address: "East Mall, LG Floor, Jakarta Pusat", hours: "10:00 - 22:00", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" },
        { name: "FORE COFFEE - TUNJUNGAN PLAZA 6", address: "TP 6 Lantai 2, Surabaya", hours: "10:00 - 22:00", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400" },
        { name: "FORE COFFEE - PARIS VAN JAVA", address: "Resort Level, Bandung", hours: "10:00 - 22:00", image: "https://images.unsplash.com/photo-1501339819358-ee5f8b473c90?w=400" },
        { name: "FORE COFFEE - GANDARIA CITY", address: "UG Floor, Jakarta Selatan", hours: "10:00 - 22:00", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400" },
        { name: "FORE COFFEE - PAKUWON MALL", address: "Lantai LG, Surabaya", hours: "10:00 - 22:00", image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=400" }
    ];
    res.render('index', { stores: stores });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));