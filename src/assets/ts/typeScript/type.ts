import consoleType from '../common'

const typeFn = () => {
  // 字符串
  const user:string = '张飞'
  let str:string = `他的名字是${user}`;
  consoleType(str)

  // 元组
  let tuple = ['元组', 12];
  consoleType(tuple[0])
  consoleType(tuple[1])

  // 枚举
  enum Color {Red = 2, Green, Blue}
  let c:Color = Color.Green;
  consoleType(c)

  // any类型
  let any:any = '1231'
  consoleType(any)

  // volid
  let volid: void = undefined;
  consoleType(volid)
}

export default typeFn