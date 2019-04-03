import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNhanViens, listNhanViens } from '../actions/nhanVienActions';


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
    this.onChangeValue = this.onChangeValue.bind(this);
  }



  onChangeValue(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
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
    this.props.listNhanViens();

    //console.log('item', item);
    this.setState({ 
      ten:'',
      sdt:'',
      email:'',
      diachi:''
    });
  }
  

  render() {
    //const {ten, sdt, email, diachi} = this.state;
    console.log('this.props', this.props);
    return (
        <form className="form-horizontal" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="inputTen" className="col-sm-2 control-label">Tên</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputTen" name="ten" placeholder="Tên" onChange={this.onChangeValue}/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputSDT" className="col-sm-2 control-label">Số điện thoại</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="inputSDT" name="sdt" placeholder="Số điện thoại" onChange={this.onChangeValue}/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="Email" onChange={this.onChangeValue}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputDiaChi" className="col-sm-2 control-label">	Địa chỉ</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputDiaChi" name="diachi" placeholder="Địa chỉ" onChange={this.onChangeValue}/>
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
{ addNhanViens, listNhanViens }
)(AddNhanVien);

