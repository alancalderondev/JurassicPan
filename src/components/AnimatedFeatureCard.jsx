import { motion } from 'framer-motion';

export function AnimatedFeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 // Stagger effect
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="text-center p-6 bg-white rounded-lg shadow-lg"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: index * 0.1 + 0.3
        }}
        className="text-4xl mb-4"
      >
        {feature.icon}
      </motion.div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.4 }}
        className="font-display text-xl mb-2"
      >
        {feature.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.5 }}
        className="text-gray-600"
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
}