import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Info = () => {

  return <>
    <div className="d-flex justify-content-center">
      <div className='col-5'>
        <form className="form-control" style={{ width: "500px", height: "800px", backgroundColor: "gray" }}>
          <h3 className="mt-5 mb-5" style={{ color: "red" }}>THÔNG TIN NGƯỜI MUA HÀNG</h3>
          <div className="form-control">
            <div className="form-control col-md-6 col-xs-12">
              <div className="form-control" style={{ width: "400px" }}>
                FullName :
                <input className="form-control" type="text" />
                <span className="bar"></span>
              </div>
              <div className="form-control" style={{ width: "400px" }}>
                Phone Number:
                <input className="form-control" type="text" />
                <span className="bar"></span>
              </div>
              <div className="form-control" style={{ width: "400px" }}>
                Email:
                <input className="form-control" type="text" />
                <span className="bar"></span>
              </div>
              <div className="form-control" style={{ width: "400px" }}>
                Address:
                <textarea className="form-control" type="text" />
                <span className="bar"></span>
              </div>
              <div className="form-control" style={{ width: "400px" }}>
                NOTES:
                <textarea className="form-control" type="text" />

              </div>
            </div>
          </div>
          <div className="mt-3" style={{ width: "200px" }}>
            <NavLink to="/" onClick={() => {
              toast.success("Order Success")
            }} className="btn btn-primary" type="submit">
              Place an Order</NavLink>
          </div>
          <ToastContainer />
        </form >
      </div>
      <div className='col-5'>
        <img src='/assets/img/products/banphimcolagi12.jpg' />
      </div>
    </div>
  </>
}

export default Info