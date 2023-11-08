import { Carousel, Col, Row } from 'antd';
import Image1 from '../../assets/images/banner-img1.jpg';
import Image2 from '../../assets/images/banner-img2.jpg';
import Image3 from '../../assets/images/banner-img3.jpg';
import {
	PhoneOutlined,
	StarOutlined,
	ShoppingCartOutlined
} from '@ant-design/icons';

function AppHero(){
	return(
		<div className='heroBlock'>
			<Row  gutter={[24,24]}>
				{/* {Carousel} */}
				<Col xs={24} lg={18}>
				<Carousel autoplay>
					<div>
						<img src={Image1} alt="banner 1"/>
					</div>
					<div>
					<img src={Image2} alt="banner 1"/>
					</div>
					<div>
					<img src={Image3} alt="banner 1"/>
					</div>
					
    </Carousel>
				</Col>

				<Col xs={24} lg={6}>
			<div className='heroBlocks'>
				<div className='holder'>
					<div className='icon'>
					<i className="fa-solid fa-truck"><ShoppingCartOutlined /></i> 
					</div>
					<div className='content'>
						<h3>Free Shipping &amp; Return</h3>
						<p>Free shipping on orders over £20</p>
					</div>
				</div>
				<div className='holder'>
					<div className='icon'>
					<i className="fa-solid fa-sack-dollar"> <StarOutlined /></i> 
					</div>
					<div className='content'>
						<h3>Money Back Guarantee</h3>
						<p>100% money back guarantee</p>
					</div>
				</div>
				<div className='holder'>
					<div className='icon'>
					<i className="fa-solid fa-headset"> <PhoneOutlined /></i> 
					</div>
					<div className='content'>
						<h3>Online Support 24/7</h3>
						<p>Excepteur sint occaecat cupidatat</p>
					</div>
				</div>
			</div>
				</Col>
			</Row>
		</div>
	)
}
export default AppHero;