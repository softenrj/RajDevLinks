import { motion, useScroll, useSpring } from 'framer-motion'

function ProgressBar() {
    const { scrollYProgress } = useScroll();
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
       <motion.div 
          className='fixed top-0 left-0 right-0 h-1 z-100 origin-left bg-linear-to-r from-pink-500 via-red-500 to-yellow-500'
          style={{ scaleX }}
       >
         <div className="absolute inset-0 bg-pink-500 blur-xs opacity-50" />
       </motion.div> 
    )
}

export default ProgressBar