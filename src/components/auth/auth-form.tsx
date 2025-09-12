"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RegisterForm } from './register-form';
import { LoginForm } from './login-form';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [direction, setDirection] = useState(1);

  const handleToggle = () => {
    setDirection(isLogin ? -1 : 1);
    setIsLogin(!isLogin);
  };

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 180 : -180,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <div className="relative w-full h-[600px] perspective-1000">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={isLogin ? 'login' : 'register'}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full backface-hidden"
        >
          {isLogin ? (
            <LoginForm onToggle={handleToggle} />
          ) : (
            <RegisterForm onToggle={handleToggle} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
