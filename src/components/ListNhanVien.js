import React, { Component } from 'react'
import { connect } from 'react-redux';
import { listNhanViens, addNhanViens, editNhanViens, delNhanViens } from '../actions/nhanVienActions';
import AddNhanVien from './AddNhanVien';
import Modal from "react-responsive-modal";

export class ListNhanVien extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          open: false,
          nhanVienID:'',
          ten:'',
          sdt:'',
          email:'',
          diachi:''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.delNhanVien = this.delNhanVien.bind(this);
    }
    onOpenModal = (item) => {
      this.setState({
         open: true,
         nhanVienID:item.nhanVienID,
         ten:item.Ten,
         sdt:item.SoDienThoai,
         email:item.Email,
         diachi:item.DiaChi,
        });
    };
  
    onCloseModal = () => {
      this.setState({ open: false });
    };
  
    componentDidMount() {
        this.props.listNhanViens();
    }

    static getDerivedStateFromProps(nextProps, prevState){
        const { nhanVienReducer } = nextProps;
        return { data: nhanVienReducer };
    }

    onChangeValue(e) {
      let name = e.target.name;
      this.setState({
        [name]: e.target.value
      });
    }

    onSubmit(event) {
      event.preventDefault();
      const {nhanVienID, ten, sdt, email, diachi} = this.state;
      let item = JSON.stringify({
        "nhanVienID":nhanVienID,
        "Ten":ten,
        "SoDienThoai":sdt,
        "Email":email,
        "DiaChi":diachi
      });
      this.setState({ open: false });
      //let item = { newItemValue: this.state.item };
  
      this.props.editNhanViens(item);
      this.props.listNhanViens();
  
      //console.log('item', item);
      // this.setState({ 
      //   NhanVienID: '',
      //   ten:'',
      //   sdt:'',
      //   email:'',
      //   diachi:''
      // });
    }
    delNhanVien(item){
      //console.log('ssssss');
      let itemN = JSON.stringify({
        "nhanVienID":item.nhanVienID,
      });
      this.props.delNhanViens(itemN);
      this.props.listNhanViens();
    }

  render() {
    
    console.log('this.state', this.state);
    const { data, open, nhanVienID, ten, sdt,email, diachi } = this.state;
    return (
      
      <div id = "main">
        <Modal open={open} onClose={this.onCloseModal} center >
          <h2>Edit nhân viên</h2>
          <form className="form-horizontal" onSubmit={this.onSubmit} style={{width: '500px'}}>
            <div className="form-group">
              <label htmlFor="inputTen" className="col-sm-2 control-label">Tên</label>
              <div className="col-sm-10">
                <input type="text" style={{display: 'none'}} className="form-control" id="inputTen" name="nhanVienID" placeholder="Tên" value={nhanVienID} onChange={this.onChangeValue}/>
                <input type="text" className="form-control" id="inputTen" name="ten" placeholder="Tên" value={ten} onChange={this.onChangeValue}/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="inputSDT" className="col-sm-2 control-label">Số điện thoại</label>
              <div className="col-sm-10">
                <input type="number" className="form-control" id="inputSDT" name="sdt" placeholder="Số điện thoại" value={sdt} onChange={this.onChangeValue}/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="Email" value={email} onChange={this.onChangeValue}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputDiaChi" className="col-sm-2 control-label">	Địa chỉ</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputDiaChi" name="diachi" placeholder="Địa chỉ" value={diachi} onChange={this.onChangeValue}/>
              </div>
            </div>
            
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Cập nhật</button>
              </div>
            </div>
          </form>
        </Modal>
        <AddNhanVien/>
        <h3> danh sách nhân viên</h3>
        <table width="100%">
        <tbody>
          <tr>
            <th width="50">STT</th>
            <th>Tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>#</th>
          </tr>
          { data.map((item, index) => {
            return(
              <tr key={index}>
                <td>{index} -- {item.nhanVienID}</td>
                <td>{item.Ten}</td>
                <td>{item.SoDienThoai}</td>
                <td>{item.Email}</td>
                <td>{item.DiaChi}</td>
                <td>
                  <button onClick={()=>this.onOpenModal(item)}>edit</button>
                  <button onClick={()=>this.delNhanVien(item)} >del</button>
                </td>
              </tr>
            )
          }) }
          </tbody>
        </table>
      </div>
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
  { listNhanViens, addNhanViens, editNhanViens, delNhanViens }
)(ListNhanVien);