import React, { Component } from 'react'

export class AddNhanVien extends Component {
  render() {
    return (
        <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="inputTen" className="col-sm-2 control-label">Tên</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputTen" placeholder="Tên" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputSDT" className="col-sm-2 control-label">Số điện thoại</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="inputSDT" placeholder="Tên" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputDiaChi" className="col-sm-2 control-label">	Địa chỉ</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputDiaChi" placeholder="Địa chỉ" />
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

export default AddNhanVien
