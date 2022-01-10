import React from 'react'

interface IImage {
  src?: string;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
  attrs?: {

  };
}

const Image = ({ src, alt, width, height, className }: IImage) => {
  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  )
}

export default Image
