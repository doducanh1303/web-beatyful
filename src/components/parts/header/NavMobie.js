import { Button,Modal } from "antd";
import React,{ useState} from 'react';
import { Link } from "react-router-dom";
import FormLogin from '../auth/FormLogin';
import FormRegister from '../auth/FormRegister';
function NavMobie() {
  const [isvisible, setIsVisible] = useState(false);
  const[visible,setVisible] = useState(false)
  const [onModalVisible,setonModalVisible] = useState(false)
const onCancel=() => {
  setIsVisible(false)
}

  return (

             <div className="menu-mobie">
              <ul>
                <li>
                  <Button type="text" className="" path="/">
                    TRANG CHỦ{" "}
                  </Button>
                </li>
                <li>
                  <Button type="text" className="">
                    <Link to="/vanibeauty/categoridetail">GIOI THIỆU </Link>
                  </Button>
                </li>
                <li>
                  <Button type="text" className="">
                    <Link to="/vanibeauty/contact">LIÊN HỆ </Link>
                  </Button>
                </li>
                <li>
                  <Button type="text" className="">
                    <Link to="/vanibeauty/news">TIN TỨC </Link>
                  </Button>
                </li>
                <li>
                  <Button type="text" className="">
                    <Link to="/vanibeauty/grocery">CỬA HÀNG</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    type="text"
                    className=""
                    onClick={() =>setIsVisible(true)}
                  >
                    ĐĂNG NHẬP
                  </Button>


                  <Modal
            centered
            visible={isvisible}
            onOk={() => setIsVisible(false)}
            onCancel={() => setIsVisible(false)}
            width={900}
            className="modal-login"
            setVisible={false}
          >
            <div className="form-login">
              <h3>ĐĂNG NHẬP</h3>

              <FormLogin />
              <Button type="text" className="forgost-password">
                Quên mật khẩu ?
              </Button>
            </div>
          </Modal>
                </li>
                <li>
                  <Button 
                  type="text" 
                  className=""
                  onClick={() =>setonModalVisible(true)}
                  >
                    ĐĂNG KÝ


                  </Button>

                  <Modal
            centered
            visible={onModalVisible}
            onOk={() => setIsVisible(false)}
            onCancel={() => setIsVisible(false)}
            width={900}
            className="modal-login"
            setVisible={false}
          >
            <div className="form-login">
              <h3>ĐĂNG KÝ</h3>

          <FormRegister/>
            </div>
          </Modal>
                </li>
              </ul>
            </div>
    
  )
}

export default NavMobie
