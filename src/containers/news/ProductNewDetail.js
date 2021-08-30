import { Col, Layout, Row } from "antd";
import React,{ useEffect} from "react";
import ch1 from "../../assets/images/2-1.jpg";
import Footer from "../../components/parts/footer/Footer";
import AppHeader from "../../components/parts/header/AppHeader";
import MenuNews from "../news/MenuNews";
import { useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {fetchNew} from "../../redux/news/action"
import "../news/ProductNewDetail.css";
import {get} from "lodash"
const { Content } = Layout;
function ProductNewDetail() {
  const dispatch =useDispatch();
  const params=useParams();
  
  const news= useSelector(state=>state.news) ;
  const contentproduct=get(news,"list.result.data",{});
  console.log(contentproduct);
  useEffect(() => {
   dispatch(fetchNew({id: params.id}))
     
  }, [])
  return (
    <Layout>
      <AppHeader />
      <Content>
        <div className="wraper">
          <h3 className="news">Tin tức</h3>
          <Row>
            <Col xl={6}>
              <MenuNews />
            </Col>
            <Col xl={18}>
              <div className="news-content">
                <p>TIN TỨC</p>
                <h3>{contentproduct.title}</h3>
                <div className="is-divider"></div>
                <img src={contentproduct.image} />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dapibus, massa non viverra consequat, tellus ligula
                  scelerisque nisi, at viverra erat risus ut orci. Morbi odio
                  lacus, pellentesque ut tincidunt et, hendrerit sed nisi.
                  Aliquam ac urna nisi. Pellentesque interdum libero id lectus
                  venenatis sagittis. Nam ac gravida turpis. Aliquam diam lacus,
                  rhoncus id eleifend in, ornare nec nunc. Curabitur eu ligula
                  mauris. Nam eleifend ligula purus, nec facilisis mi commodo
                  blandit. Pellentesque feugiat eros orci, ut rhoncus dolor
                  vulputate sed. Donec nisi arcu, pulvinar ut sem in, eleifend
                  fermentum sapien. Donec tempus eu ligula sed blandit. Vivamus
                  vel enim ac quam iaculis rutrum. Sed nisi massa, ultrices sed
                  pretium et, varius et massa. Maecenas maximus ligula ante, at
                  vulputate arcu consectetur quis. Duis interdum, eros a
                  malesuada elementum, enim nulla volutpat magna, sit amet
                  tincidunt odio sapien in nibh. Vestibulum volutpat sapien
                  ligula, sit amet tincidunt orci luctus quis. Pellentesque sed
                  egestas nisi. In vel magna tempor, vestibulum augue quis,
                  suscipit risus. Pellentesque pellentesque aliquet viverra.
                  Aenean vestibulum est pellentesque tristique fringilla. Mauris
                  consequat, nisi aliquam pretium mollis, elit magna commodo
                  orci, in ornare leo ex in arcu. Etiam dictum diam purus, eu
                  sodales sapien consequat ut.
                </p>
                <img src={contentproduct.image} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dapibus, massa non viverra consequat, tellus ligula
                  scelerisque nisi, at viverra erat risus ut orci. Morbi odio
                  lacus, pellentesque ut tincidunt et, hendrerit sed nisi.
                  Aliquam ac urna nisi. Pellentesque interdum libero id lectus
                  venenatis sagittis. Nam ac gravida turpis. Aliquam diam lacus,
                  rhoncus id eleifend in, ornare nec nunc. Curabitur eu ligula
                  mauris. Nam eleifend ligula purus, nec facilisis mi commodo
                  blandit. Pellentesque feugiat eros orci, ut rhoncus dolor
                  vulputate sed. Donec nisi arcu, pulvinar ut sem in, eleifend
                  fermentum sapien. Donec tempus eu ligula sed blandit. Vivamus
                  vel enim ac quam iaculis rutrum. Sed nisi massa, ultrices sed
                  pretium et, varius et massa. Maecenas maximus ligula ante, at
                  vulputate arcu consectetur quis. Duis interdum, eros a
                  malesuada elementum, enim nulla volutpat magna, sit amet
                  tincidunt odio sapien in nibh. Vestibulum volutpat sapien
                  ligula, sit amet tincidunt orci luctus quis. Pellentesque sed
                  egestas nisi. In vel magna tempor, vestibulum augue quis,
                  suscipit risus. Pellentesque pellentesque aliquet viverra.
                  Aenean vestibulum est pellentesque tristique fringilla. Mauris
                  consequat, nisi aliquam pretium mollis, elit magna commodo
                  orci, in ornare leo ex in arcu. Etiam dictum diam purus, eu
                  sodales sapien consequat ut.
                </p>

                <div className="btn-fb"></div>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default ProductNewDetail;
