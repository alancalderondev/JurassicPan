import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.2 }
  };

  const fadeInLeft = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.3 }
  };

  const fadeInRight = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.4 }
  };

  const scaleUp = {
    initial: { scale: 0.95 },
    animate: { scale: 1 },
    transition: { duration: 0.5, delay: 0.5 }
  };

  const fadeInBottom = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay: 0.6 }
  };

  return (
    <motion.footer 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-orange-100 text-bakery-secondary py-12 shadow-lg border-t border-bakery-primary"
    >
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* About Section */}
          <motion.div {...fadeInUp} className="space-y-4">
          <div className="flex items-center justify-center -ml-20 mr-10 -mt-6">
            <img src="https://media0.giphy.com/media/M3bYl3tej6HsTo26RO/200.gif" className="w-16 mr-2" />
            <h3 className="text-xl font-semibold text-bakery-primary">Jurassic Pan</h3>
          </div>

            <p className="text-sm">Los más sabrosos panes calidad-precio de la Ciudad.</p>
            <p className="text-sm">¡Que esperas por venir por el tuyo!!!</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInLeft} className="space-y-4">
            <h3 className="text-xl font-semibold text-bakery-primary">Visita también:</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-rose-500 hover:text-bakery-primary transition-colors duration-300">Nuestros Productos</a></li>
              <li><a href="/location" className="text-rose-500 hover:text-bakery-primary transition-colors duration-300">Ubicación</a></li>
              <li><a href="/store" className="text-rose-500 hover:text-bakery-primary transition-colors duration-300">Tienda</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInRight} className="space-y-4">
            <h3 className="text-xl font-semibold text-bakery-primary">Contáctanos</h3>
            <ul className="space-y-2">
              <li>Calle</li>
              <li>Continuacion calle</li>
              <li>Tel: +52 55-33-56-45-23 </li>
              <li>Email: alevane12@gmail.com</li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div {...scaleUp} className="space-y-4">
            <h3 className="text-xl font-semibold text-bakery-primary">Horarios</h3>
            <ul className="space-y-2">
              <li>Mon - Fri: 7:00 AM - 7:00 PM</li>
              <li>Saturday: 8:00 AM - 6:00 PM</li>
              <li>Sunday: 8:00 AM - 3:00 PM</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          {...fadeInBottom}
          className="border-t border-bakery-primary/20 mt-8 pt-8 text-center"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} JurassicPan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
