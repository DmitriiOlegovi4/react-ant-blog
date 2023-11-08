import { Collapse } from 'antd';
const items = [
  {
    key: '1',
    label: 'Delivery and collection information',
    children: <p>{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam itaque distinctio voluptas rerum enim magni nesciunt vitae, repellendus dolorem?'}</p>,
  },
  {
    key: '2',
    label: 'What do I need to know about ordering online?',
    children: <p>{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam itaque distinctio voluptas rerum enim magni nesciunt vitae.'}</p>,
  },
  {
    key: '3',
    label: 'Returns and refunds',
    children: <p>{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam itaque distinctio voluptas.'}</p>,
  },
	{
    key: '4',
    label: 'Managing my account',
    children: <p>{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam itaque distinctio voluptas rerum enim magni nesciunt vitae'}</p>,
  },
	{
    key: '5',
    label: 'Technical issues',
    children: <p>{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam itaque distinctio volupt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam itaque distinctio voluptas rerum enim magni nesciunt vitae!'}</p>,
  },
	{
    key: '6',
    label: 'Terms and conditions',
    children: <p>{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam itaque distinctio voluptas rerum enim magni nesciunt vitae, repellendus dolorem?'}</p>,
  },
	{
    key: '7',
    label: 'Ratings and reviews',
    children: <p>{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam itaque distinctio voluptas rerum enim magni nesciunt vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio totam itaque distinctio voluptas rerum enim magni nesciunt vitae.'}</p>,
  },
];

function AppFaq(){
	const onChange = (key) => {
    console.log(key);
  };
	return(
		<div className='block faqPage'>
			<div className='container'>
				<h2>FAQ</h2>
				<Collapse items={items} defaultActiveKey={['1']} onChange={onChange} accordion />;
			</div>
		</div>
	)
}
export default AppFaq;
