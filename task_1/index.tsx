import React, { Component, memo, PureComponent } from "react"

type IUser = {
  name: string
  age: number
}

type IProps = {
  user: IUser
}

//Можно более обширный deepCompare сделать или из того же лодаш взять,
//но думаю для данного кейса сойдет
const deepCompare = (obj, obj2) => {
  return JSON.stringify(obj) === JSON.stringify(obj2)
}

// functional component
const FirstComponent = memo(({ name, age }: IUser) => {
  console.log("FirstComponent has been updated")

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  )
}, deepCompare)

// functional component
const SecondComponent = memo(({ user: { name, age } }: IProps) => {
  console.log("SecondComponent has been updated")

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  )
}, deepCompare)

// class component
class ThirdComponent extends PureComponent<IUser> {
  render() {
    console.log("ThirdComponent has been updated")

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    )
  }
}

// class component
class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(prev, next) {
    return deepCompare(prev, next)
  }
  render() {
    console.log("FourthComponent has been updated")

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    )
  }
}
