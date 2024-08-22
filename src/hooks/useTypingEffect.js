// hooks/useTypingEffect.js
import { useState, useEffect } from 'react';

function useTypingEffect(words, typeSpeed, backSpeed, backDelay) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting ? 1 : -1;

      setText(current => currentWord.substring(0, current.length - shouldDelete));

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), backDelay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      }

      const speed = isDeleting ? backSpeed : typeSpeed;
      setTimeout(type, speed);
    };

    type();
  }, [words, typeSpeed, backSpeed, backDelay, wordIndex, isDeleting, text]);

  return text;
}

export default useTypingEffect;