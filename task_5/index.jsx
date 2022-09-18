import { useState } from "react"

const Block = ({ mouseEnterCallback, children }) => {
  const [isActive, setActive] = useState(false)

  const mouseEnterHandler = () => {
    setActive(true)
    mouseEnterCallback()
  }
  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  )
}

export const Block1 = ({ mouseEnterCallback, imgSrc, imgAlt }) => {
  return (
    <Block mouseEnterCallback={mouseEnterCallback}>
      <img src={imgSrc} alt={imgAlt} />
    </Block>
  )
}

export const Block2 = ({ mouseEnterCallback, content }) => {
  return (
    <Block mouseEnterCallback={mouseEnterCallback}>
      <p>{content}</p>
    </Block>
  )
}

export const Block3 = ({ mouseEnterCallback, userData }) => {
  return (
    <Block mouseEnterCallback={mouseEnterCallback}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </Block>
  )
}
