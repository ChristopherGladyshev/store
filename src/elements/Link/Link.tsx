import React from 'react'

interface Ilink {
  href?: string;
  classes?: string;
  children?: React.ReactNode | string;
}

const Link = ({ href, classes, children}: Ilink) => {
  return (
    <a className={classes} href={href}>{children}</a>
  )
}

export default Link
