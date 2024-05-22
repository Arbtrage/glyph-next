import dynamic from 'next/dynamic';
import React from 'react';
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
import hello from "../../app/lib/animations/hello.json"

const HelloAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hello,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={650} width={650} />
    </div>
  );
};


export default HelloAnimation