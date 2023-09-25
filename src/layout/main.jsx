import React from 'react';
import Header from '@/components/global/header';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const MainLayout = ({ children }) => {
  const router = useRouter()

  const pageTransitionVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  return (
    <>
      <Header />
      <div className='py-3 px-6 md:px-20 mx-auto my-0'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={`main-body-${router.asPath}`}
            variants={pageTransitionVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MainLayout;
