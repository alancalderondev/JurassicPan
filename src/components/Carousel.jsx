import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    title: "Bienvenido a Jurassic Home",
    description: "Vendedores de pan donde el pan es lo más sabroso del día",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80",
    link: "/"
  },
  {
    title: "Realiza un pedido con nosotros",
    description: "Panes para una ocasión especial, para ti que mereces lo mejor",
    image: "https://www.elglobo.com.mx/cdn/shop/files/Pan_muerto_conejito_turin_1000x.jpg?v=1693506759",
    link: "/orders"
  },
  {
    title: "Nuestros Productos",
    description: "Pan fresco del día, supersabroso y lo mejor de lo mejor solo para ti",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80",
    link: "/products"
  },
  {
    title: "Visita nuestra Panadería.",
    description: "Los mejores precios de la Ciudad y el mejor pan que podrás probar... ¡Ven ahora!!!",
    image: "https://i0.wp.com/holanews.com/wp-content/uploads/2022/07/rss-efed448be1d7207e9d60b48cbd3657acbfcf3c537bbw.jpg?fit=1920%2C1347&ssl=1",
    link: "/location"
  }
];

export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      className="h-[calc(100vh-4rem)]" // Adjusted height to account for header
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white p-4"
              >
                <h2 className="font-display text-5xl mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.description}</p>
                <a
                  href={slide.link}
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}