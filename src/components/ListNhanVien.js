import React, { Component } from 'react'
import { connect } from 'react-redux';
import { listNhanViens } from '../actions/nhanVienActions';
import AddNhanVien from './AddNhanVien';

export class ListNhanVien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.props.listNhanViens();
    }

    static getDerivedStateFromProps(nextProps, prevState){
        const { nhanVienReducer } = nextProps;
        return { data: nhanVienReducer };
    }
 
  render() {
    
    console.log('this.state', this.state);
    const { data } = this.state;

    return (
      <div id = "main">
        <AddNhanVien/>
        <h3> danh sách nhân viên</h3>
        <table>
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
                <td>{index}</td>
                <td>{item.Ten}</td>
                <td>{item.SoDienThoai}</td>
                <td>{item.Email}</td>
                <td>{item.DiaChi}</td>
                <td><button type="button" className="close">X</button></td>
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
  { listNhanViens }
)(ListNhanVien);