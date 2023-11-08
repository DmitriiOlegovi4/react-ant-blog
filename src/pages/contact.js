import { Button, Checkbox, Form, Input,Select} from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 90 }}>
        <Option value="86">+4</Option>
        <Option value="87">+380</Option>
				<Option value="87">+39</Option>
				<Option value="87">+47</Option>
      </Select>
    </Form.Item>
  );
function AppContact(){
	
	return(
		<div className='block contactPage'>
			<div className='container'>
				<h2>Contact</h2>
					<Form
				name="basic"
				layout='vertical'
				size='large'
				style={{
					maxWidth: 600,
				}}
				initialValues={{
					remember: true,
				}}
				
				autoComplete="off"
			>
				<Form.Item
					label="Fullname"
					name="fullname"
					rules={[
						{
							required: true,
							message: 'Please input your Fullname!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							type: 'email',
							required: true,
							message: 'Please input your email',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

				<Form.Item
					name="remember"
					valuePropName="checked"
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, message: 'Please input your message!' }]}
      >
        <TextArea rows={4} placeholder="Your message" maxLength={6} />
      </Form.Item>
				
				
				
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
			</div>
	</div>
	)
}
export default AppContact;