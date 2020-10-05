import React, {Component} from 'react'
import { connect } from 'react-redux'
import firebase, { database } from "firebase";
import Lib from '../static/address_lib';
import Account from '../components/Account';


import Router from 'next/router';


class AddressShow extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  constructor(props) {
    super(props);
    if (this.props.login == false){
      Router.push('/address');
    }
    this.state = {
      last:-1,
      input:'',
      email:Router.query.email,
      address:null,
      message:Router.query.email + 'のデータ'
    }
    this.logined = this.logined.bind(this);
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  // login,logout処理
  logined(){
    console.log('logined');
  }
  logouted(){
    Router.push('/address');
  }


  // アドレスデータの検索
  getAddress(email){
    // databaseの取得
    let db = firebase.database();
    // 選択したアカウントのcheck項目の参照を得る
    let ref0 = db.ref('address/'
      + Lib.encodeEmail(this.props.email)
      + '/' + Lib.encodeEmail(email) + '/check');

    // checkの値をfalseに設定
    ref0.set(false);

    // ログインしているアカウントの項目の参照を得る
    let ref = db.ref('address/'
      + Lib.encodeEmail(this.props.email));

    let self = this;

    // equalToで指定したアカウントのデータを取り出す
    ref.orderByKey()
      .equalTo(Lib.encodeEmail(email))
      .on('value', (snapshot)=>{
        for(let i in snapshot.val()){
          let d = Lib.deepcopy(snapshot.val()[i]);
          self.setState({
            address:d
          });
          break;
        }
      });
  }


  // フィールド入力
  doChange(e){
    this.setState({
      input:e.target.value
    });
  }


  // メッセージ送信処理
  doAction(){
    // 自身のアカウントと送信先のアカウントを用意
    let from = Lib.encodeEmail(this.props.email);
    let to = Lib.encodeEmail(this.state.email);

    // databaseの取得
    let db = firebase.database();
    // 現在のタイムスタンプを用意
    let d = new Date().getTime();
    // 自アカウントの相手アカウント内にあるmessageのタイムスタンプをキーとする参照を用意し、値を設定
    let ref = db.ref('address/' + from + '/' + to + '/messages/' + d);
    ref.set('to: ' + this.state.input);

    // 相手アカウントの自アカウント内にあるmessageのタイムスタンプをキーとする参照を用意し、値を設定
    let ref2 = db.ref('address/' + to + '/' + from + '/messages/' + d);
    ref2.set('from: ' + this.state.input);

    // 相手アカウントの自アカウント内にあるcheckの値をtrueに設定
    let ref3 = db.ref('address/' + to + '/' + from + '/check/');
    ref3.set(true);
    this.setState({ input:''})
  }


  // レンダリング
  render(){
    if (this.state.address == null){
      this.getAddress(Router.query.email);
    }
    let items = [];
    if (this.state.address != null){
      for(let n in this.state.address.messages){
        items.unshift(<li key={n}>
          {this.state.address.messages[n]}
        </li>);
      }
    }
    return (
      <div>
        <Account onLogined={this.logined}
          onLogouted={this.logouted} />
        <p>{this.state.message}</p>
        <hr/>
        {/* 取り出した値をステートに保管 */}
        {this.state.address != null
        ?
        <table>
          <tbody>
            <tr>
              <th>NAME</th>
              <td>{this.state.address.name}</td>
            </tr>
            <tr>
              <th>MAIL</th>
              <td>{this.state.email}</td>
            </tr>
            <tr>
              <th>TEL</th>
              <td>{this.state.address.tel}</td>
            </tr>
            <tr>
              <th>MEMO</th>
              <td>{this.state.address.memo}</td>
            </tr>
          </tbody>
        </table>
        :
        <p>no-address</p>
        }
        <hr />
        <fieldset>
          <p>Message:</p>
          <input type="text" size="40"
            value={this.state.input}
            onChange={this.doChange} />
          <button onClick={this.doAction}>send</button>
        </fieldset>
        {this.state.address != null &&
          this.state.address.messages != null
        ?
        <div>
        <p>※{this.state.address.name}さんとのメッセージ</p>
        <ul>{items}</ul>
        </div>
        :
        <p>※メッセージはありません。</p>
        }
      </div>
    );
  }


}
AddressShow = connect((state)=> state)(AddressShow);
export default AddressShow;