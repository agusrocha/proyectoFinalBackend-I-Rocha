
import mongoose from 'mongoose';
import Product from './dao/models/productsModel.js';
import { config } from './config/config.js';

const MONGO_URI = config.MONGO_URL;

const products = [
    { 'code': 'P001', 'title': 'Kempa nº1', 'description': '150grm', 'price': 50.000, 'category': 'Mini', 'stock': 45, 'status': true, 'thumbnail': 'img1.jpg' },
    { 'code': 'P002', 'title': 'Select nº1', 'description': '150grm', 'price': 45.000, 'category': 'Mini', 'stock': 5, 'status': true, 'thumbnail': 'img2.jpg' },
    { 'code': 'P003', 'title': 'Chi nº1', 'description': '150grm', 'price': 55.000, 'category': 'Mini', 'stock': 27, 'status': true, 'thumbnail': 'img3.jpg' },
    { 'code': 'P004', 'title': 'Kempa nº2', 'description': '200grm', 'price': 80.000, 'category': 'Cadetes', 'stock': 8, 'status': true, 'thumbnail': 'img4.jpg' },
    { 'code': 'P005', 'title': 'Select nº2', 'description': '200grm', 'price': 82.000, 'category': 'Cadetes', 'stock': 10, 'status': true, 'thumbnail': 'img5.jpg' },
    { 'code': 'P006', 'title': 'Chi nº2', 'description': '200grm', 'price': 79.000, 'category': 'Cadetes', 'stock': 2, 'status': true, 'thumbnail': 'img6.jpg' },
    { 'code': 'P007', 'title': 'Kempa nº3', 'description': '300grm', 'price': 101.000, 'category': 'Mayores', 'stock': 34, 'status': true, 'thumbnail': 'img7.jpg' },
    { 'code': 'P008', 'title': 'Select nº3', 'description': '300grm', 'price': 100.500, 'category': 'Mayores', 'stock': 15, 'status': true, 'thumbnail': 'img8.jpg' },
    { 'code': 'P009', 'title': 'Chi nº3', 'description': '300grm', 'price': 103.000, 'category': 'Mayores', 'stock': 49, 'status': true, 'thumbnail': 'img9.jpg' },
    { 'code': 'P010', 'title': 'Silbato DRB', 'description': 'Metal', 'price': 5.000, 'category': 'Arbitro', 'stock': 26, 'status': true, 'thumbnail': 'img10.jpg' },
    { 'code': 'P011', 'title': 'Silbato REX', 'description': 'Plastico', 'price': 3.000, 'category': 'Arbitro', 'stock': 20, 'status': true, 'thumbnail': 'img11.jpg' },
    { 'code': 'P012', 'title': 'Silbato HUMMEL', 'description': 'Doble bolita', 'price': 2.000, 'category': 'Arbitro', 'stock': 21, 'status': true, 'thumbnail': 'img12.jpg' },
    { 'code': 'P013', 'title': 'Red 2x3 MAX', 'description': 'Sintetico', 'price': 130.000, 'category': 'Arco Handball', 'stock': 11, 'status': true, 'thumbnail': 'img13.jpg' },
    { 'code': 'P014', 'title': 'Red 2x3 FRS', 'description': 'Plastico', 'price': 125.000, 'category': 'Arco Handball', 'stock': 36, 'status': true, 'thumbnail': 'img14.jpg' },
    { 'code': 'P015', 'title': 'Red 2x3 LAM', 'description': 'Sintetico', 'price': 135.000, 'category': 'Arco Handball', 'stock': 34, 'status': true, 'thumbnail': 'img15.jpg' },
    { 'code': 'P016', 'title': 'Pega SICA', 'description': 'Invierno', 'price': 28.000, 'category': 'Pegatina', 'stock': 15, 'status': true, 'thumbnail': 'img16.jpg' },
    { 'code': 'P017', 'title': 'Pega HUMMEL', 'description': 'Verano-Invierno', 'price': 35.000, 'category': 'Pegatina', 'stock': 42, 'status': true, 'thumbnail': 'img17.jpg' },
    { 'code': 'P018', 'title': 'Pega CIMA', 'description': 'Invierno', 'price': 20.000, 'category': 'Pegatina', 'stock': 39, 'status': true, 'thumbnail': 'img18.jpg' },
    { 'code': 'P019', 'title': 'Zapatilla Select', 'description': 'Handball indoor', 'price': 180.000, 'category': 'Zapatilla', 'stock': 14, 'status': true, 'thumbnail': 'img19.jpg' },
    { 'code': 'P020', 'title': 'Zapatilla Hummel', 'description': 'Handball indoor', 'price': 150.000, 'category': 'Zapatilla', 'stock': 18, 'status': true, 'thumbnail': 'img20.jpg' },
    { 'code': 'P021', 'title': 'Zapatilla Nike', 'description': 'Handball indoor', 'price': 190.000, 'category': 'Zapatilla', 'stock': 19, 'status': true, 'thumbnail': 'img21.jpg' },
    { 'code': 'P022', 'title': 'Short Hummel S', 'description': 'Algodon', 'price': 30.000, 'category': 'Ropa deportiva', 'stock': 4, 'status': true, 'thumbnail': 'img22.jpg' },
    { 'code': 'P023', 'title': 'Short Hummel M', 'description': 'Lycra', 'price':20.000, 'category': 'Ropa deportiva', 'stock': 7, 'status': true, 'thumbnail': 'img23.jpg' },
    { 'code': 'P024', 'title': 'Short Hummel L', 'description': 'Seda', 'price': 15.000, 'category': 'Ropa deportiva', 'stock': 1, 'status': true, 'thumbnail': 'img24.jpg' },
    { 'code': 'P025', 'title': 'Short Hummel XL', 'description': 'Algodon', 'price': 25.000, 'category': 'Ropa deportiva', 'stock': 15, 'status': true, 'thumbnail': 'img25.jpg' },
    { 'code': 'P026', 'title': 'Top Adidas S', 'description': 'Algodon', 'price': 75.000, 'category': 'Ropa deportiva', 'stock': 28, 'status': true, 'thumbnail': 'img26.jpg' },
    { 'code': 'P027', 'title': 'Top Nike S', 'description': 'Algodon', 'price': 35.900, 'category': 'Ropa deportiva', 'stock': 42, 'status': true, 'thumbnail': 'img27.jpg' },
    { 'code': 'P028', 'title': 'Top Adidas M', 'description': 'Algodon y lycra', 'price': 58.000, 'category': 'Ropa deportiva', 'stock': 39, 'status': true, 'thumbnail': 'img28.jpg' },
    { 'code': 'P029', 'title': 'Top Nike M', 'description': 'Algodon y lycra', 'price': 54.600, 'category': 'Ropa deportiva', 'stock': 1, 'status': true, 'thumbnail': 'img29.jpg' },
    { 'code': 'P030', 'title': 'Top Nike L', 'description': 'Algodon y lycra', 'price': 55.000, 'category': 'Ropa deportiva', 'stock': 37, 'status': true, 'thumbnail': 'img30.jpg' },
    
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI);

        await Product.deleteMany({});
        console.log('Collection eliminada!');

        await Product.insertMany(products);
        console.log('Products agregados!');

        mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

seedDatabase();
