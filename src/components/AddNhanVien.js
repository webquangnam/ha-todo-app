import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNhanViens } from '../actions/nhanVienActions';


export class AddNhanVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ten:'',
      sdt:'',
      email:'',
      diachi:''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTen = this.onChangeTen.bind(this);
    this.onChangeSDT = this.onChangeSDT.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDiaChi = this.onChangeDiaChi.bind(this);
  }

  onChangeTen(e) {
    this.setState({ ten: e.target.value });
  }
  onChangeSDT(e) {
    this.setState({ sdt: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeDiaChi(e) {
    this.setState({ diachi: e.target.value });
  }

  

  onSubmit(event) {
    event.preventDefault();
    const {ten, sdt, email, diachi} = this.state;
    let item = JSON.stringify({
      "Ten":ten,
      "SoDienThoai":sdt,
      "Email":email,
      "DiaChi":diachi
    });
    //let item = { newItemValue: this.state.item };

    this.props.addNhanViens(item);
    console.log('item', item);
    //this.setState({ itemValue: '' });
  }
  

  render() {
    //const {ten, sdt, email, diachi} = this.state;
    //console.log('ten', this.state.ten);
    return (
        <form className="form-horizontal" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="inputTen" className="col-sm-2 control-label">Tên</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputTen" placeholder="Tên" onChange={this.onChangeTen}/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputSDT" className="col-sm-2 control-label">Số điện thoại</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="inputSDT" placeholder="Tên" onChange={this.onChangeSDT}/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" onChange={this.onChangeEmail}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputDiaChi" className="col-sm-2 control-label">	Địa chỉ</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputDiaChi" placeholder="Địa chỉ" onChange={this.onChangeDiaChi}/>
          </div>
        </div>
        
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Thêm nhân viên</button>
          </div>
        </div>
      </form>
      
    )
  }
}


const mapStateFromProps=state=>{
  console.log('state', state);
  const {nhanVienReducer}=state;
  return {nhanVienReducer}
}
export default connect(
mapStateFromProps,
{ addNhanViens }
)(AddNhanVien);

