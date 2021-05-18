main()

function main(){
  let name = 'Mike'
  name = 'John'

  console.log(name) //=> John//再代入は可能
  
  {
    let name = 'John'
    console.log(name)// 再宣言するとエラーになります。
  }
  
  test();
  
  var obj = {}
  obj.test = test
  obj.test()
}

function test() {
    console.log(this)
}
