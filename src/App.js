import React from 'react';
import './App.css';
import { Layout,} from 'antd';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import AppHeader from './components/common/header';
import AppAbout from './pages/about';
import AppContact from './pages/contact';
import AppFaq from './pages/faq';
import AppHome from './pages/home';
import AppShop from './pages/shop';
import FooterWidget from './components/common/footerWidget';
import CopyRight from './components/common/footerCopyright';


const { Header, Footer, Content } = Layout;



function App() {
  return (
		<div className ="App">
			<Layout>
				<Router>
					<Header><AppHeader/></Header>
				<Content>
					<Routes>
						<Route path ='/about' element={<AppAbout/>}/>
						<Route path ='/contact' element={<AppContact/>}/>
						<Route path ='/FAQ' element={<AppFaq/>}/>
						<Route path ='/home' element={<AppHome/>}/>
						<Route path ='/shop' element={<AppShop/>}/>
					</Routes>
				</Content>
				
				</Router>
				
				<Footer>
					<FooterWidget/>
					<CopyRight/>
				</Footer>
    </Layout>
		</div>
  );
}

export default App;
