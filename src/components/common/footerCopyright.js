import payment from '../../assets/images/payment.png'
import{BackTop} from 'antd'

function CopyRight (){
	return(
		<div className="footerCopyright">
			<div className="container">

				<div className="copyright">
				2023 Created by ProductShop
				</div>
				<div className="toTop">
					<img src={payment} alt="payment"/>
				</div>
			</div>
			<BackTop/>
		</div>
	)
}
export default CopyRight;