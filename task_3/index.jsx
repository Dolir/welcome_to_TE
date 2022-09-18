import { Fragment, memo } from "react"

const deepCompare = (obj, obj2) => {
  return JSON.stringify(obj) === JSON.stringify(obj2)
}

const MainComponent = ({
  user = { name: "unknown", age: null } // default value for `props.user`
}) => {
  return (
    <Fragment>
      <ChildComponent user={user} />
    </Fragment>
  )
}

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
  return (
    <div>
      user name: {name}, user age: {age}
    </div>
  )
}, deepCompare)
