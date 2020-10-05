class Lib{
  static deepcopy(val){
    return JSON.parse(JSON.stringify(val));
  }

  // メールをエンコードする
  static encodeEmail(val){
    return val.split(".").join("*");
  }
  // メールをデコードする
  static decodeEmail(val){
    return val.split("*").join(".");
  }
}


export default Lib;


// staticはLibクラスから直接実行できる（オブジェクトを作らなくて良い）というもの
// Firebaseでは   . # $ [ ]   が使えない


 