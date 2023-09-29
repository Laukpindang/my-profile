import React from 'react';
import { useRouter } from 'next/router';

import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';

const MainLayout = ({ children }) => {
  const router = useRouter()

  const pageTransitionVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <motion.main
          key={`main-body-${router.asPath}`}
          variants={pageTransitionVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <div className='py-3 px-6 mt-4 mb-8 md:px-16 lg:px-20 mx-auto'>
            {children}
          </div>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MainLayout;
