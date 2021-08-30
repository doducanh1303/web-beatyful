import { BackTop } from 'antd';
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
}
function ScrollToTop() {
 return(
  <BackTop>
  <div style={style}>
  <i className="fa fa-arrow-up" aria-hidden="true"></i>
  </div>
</BackTop>
 )
}

export default ScrollToTop;
