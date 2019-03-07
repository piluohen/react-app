import consoleType from '../common'

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

const classFn = () => {
  // 字符串
  const user:string = '张飞'
  let str:string = `他的名字是${user}`;
  consoleType(str)

  let greeter = new Greeter('1231');
  consoleType(greeter.greet())
}

export default classFn