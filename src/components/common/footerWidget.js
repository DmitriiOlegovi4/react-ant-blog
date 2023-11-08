import { Avatar, List } from 'antd';
import {Row, Col, Tag} from 'antd';



const featured = [
  {
    image: require('../../assets/images/img-footer1.jpg'),
    title: 'Kelloggs Crunchy Nut Hazelnut',
    cost: '£2.50',
    link: 'https://www.google.com/'
  },
  {
    image: require('../../assets/images/img-footer2.jpg'),
    title: 'Branston Baked Beans in a Rich',
    cost: '£3.50',
    link: 'https://www.google.com/'
  },
  {
    image: require('../../assets/images/img-footer3.jpg'),
    title: 'Breeze Toilet Tissue Soft White 24 Roll',
    cost: '£2.50',
    link: 'https://www.google.com/'
  },
];
const data = [
  ' Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


function FooterWidget(){
	return(
		<div className='footerWidget'>
			<div className='container'>
				<Row gutter ={[24,24]}>
					<Col sm={12} md={6}>
						<h3>Featured</h3>
								<List 
									itemLayout="horizontal"
									dataSource={featured}
									renderItem={(item, index) => (
										<List.Item>
											<List.Item.Meta
												avatar={<Avatar src={item.image} />}
												title={<a href={item.link}>{item.title}</a>}
												description={item.cost}
											/>
										</List.Item>
									)}
							/>
					</Col>
					<Col sm={12} md={6}>
					<h3>Top rated</h3>
								<List
									itemLayout="horizontal"
									dataSource={featured}
									renderItem={(item, index) => (
										<List.Item>
											<List.Item.Meta
												avatar={<Avatar src={item.image} />}
												title={<a href={item.link}>{item.title}</a>}
												description={item.cost}
											/>
										</List.Item>
									)}
							/>
					</Col>
					<Col sm={12} md={6}>
						<h3>Tags</h3>
						<div className='tags'>
						<Tag bordered={false} color="blue">
							  <a href="https://github.com/ant-design/ant-design/issues/1862">Frozen</a>
								</Tag>
              <Tag bordered={false} color="blue">
                <a href="https://github.com/ant-design/ant-design/issues/1862">Kitchen</a>
              </Tag>
              <Tag closable bordered={false} color="blue">
							<a href="https://github.com/ant-design/ant-design/issues/1862">Drinks</a>
              </Tag>
              <Tag closable bordered={false} color="blue">
							<a href="https://github.com/ant-design/ant-design/issues/1862">Beer &amp; Wine</a>
              </Tag>
              <Tag bordered={false} color="blue">
							<a href="https://github.com/ant-design/ant-design/issues/1862">Chocolates</a>
              </Tag>
						</div>
					</Col>
					<Col sm={12} md={6}>
						<h3>Recent Post</h3>
					<List
							size="small"
							className='recentPost'
							dataSource={data}
							renderItem={(item) => <List.Item>{item}</List.Item>}
						/>
					</Col>
				</Row>
			</div>
		</div>
	)
}
export default FooterWidget;