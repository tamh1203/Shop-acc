import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, } from "formik";
import { useState } from 'react';
import MyFeild from './MyField';
import * as Yup from 'yup'

const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Vui lòng điền tên"),
  email: Yup.string()
    .required("Vui lòng điền Email")
    .matches(REGEX.email, "Không đúng định dạng email"),
  phone: Yup.number()
    .required("Vui lòng điền số điện thoại"),
  address: Yup.string()
    .required("Vui lòng điền địa chỉ cụ thể ")
})

const Info = () => {
  const [form, setForm] = useState({ username: "", email: "", phone: "", address: "", })

  function onSubmit(value, { resetForm }) {
    console.log(value)
    toast.success("Đặt hàng thành công")
    resetForm()
  }
  return <>
    <Formik initialValues={form}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}>
      <Form>
        <h3 className='mt-5 d-flex justify-content-center'>Thông tin khách hàng</h3>
        <div className='col'>
          <MyFeild name="username" label="Username" className="form-control" />
          <MyFeild name="email" label="Email" className="form-control" />
          <MyFeild name="phone" label="Phone Number" className="form-control" />
          <MyFeild name="address" label="Address" className="form-control" />
          <button type='submit' className="btn btn-success">Đặt Hàng</button>
        </div>
      </Form>
    </Formik>
    <ToastContainer />
  </>
}

export default Info