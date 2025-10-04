import React from 'react';
function Products() {
    return (
        <div className='Product-section'>
            <img
                className='Product-img'
                src={require('../images/product-xiaomi.png')}
                alt='Picture of Xiaomi'/>
            <div className='Product-info'>
                <p className='Product-title'>Xiaomi Redmi Note 10</p>
                <p className='Product-price'>$1299</p>
                <p className='Product-description'>El Xiaomi Redmi Note 10 es un smartphone de gama media que destaca por su pantalla AMOLED de 6,43 pulgadas con resolución Full HD+, ofreciendo colores vivos y buen contraste. Está equipado con un procesador Snapdragon 678, acompañado de opciones de 4 o 6 GB de RAM y almacenamiento interno de 64 o 128 GB, ampliable mediante microSD. En cuanto a cámaras, cuenta con una configuración trasera cuádruple liderada por un sensor principal de 48 MP, junto a lentes ultra gran angular, macro y de profundidad, además de una cámara frontal de 13 MP para selfies. Su batería de 5000 mAh proporciona una duración sólida y es compatible con carga rápida de 33W, lo que facilita recargas rápidas. El diseño es moderno y compacto, con un cuerpo que combina vidrio en el frontal y plástico en la parte trasera, y cuenta con certificación IP53 que ofrece resistencia limitada al agua y polvo. Funciona con Android 11 bajo la capa MIUI de Xiaomi. Aunque no soporta redes 5G y tiene una tasa de refresco estándar de 60 Hz, el Redmi Note 10 ofrece un equilibrio atractivo entre rendimiento, autonomía y calidad de pantalla para usuarios que buscan un equipo confiable sin pagar un precio elevado.</p>
            </div>

        </div>
    );
}
export default Products;