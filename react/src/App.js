import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import TopMenu from './TopMenu'
import Card from './Card'

class App extends React.Component {
 
		state = {
			users : [],
			products : []

		}

		async componentDidMount(){

		const res = await fetch('http://200.123.152.229:3000/api/users');
		const respuesta = await  res.json();
		this.setState({users: respuesta})
		console.log(respuesta.count);

		const resb = await fetch('http://200.123.152.229:3000/api/products');
		const respuestaP = await  resb.json();
		this.setState({products: respuestaP})


		}


		render(){
		return 	<div id="wrapper">
		<Navbar /> 
		<div id="content-wrapper" className="d-flex flex-column">

			<div id="content">
        <TopMenu />


				<div className="container-fluid">

					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					<div className="row">
            <Card 
              title="Productos en la base de datos" 
              value= {this.state.products.count}  
              icon="fas fa-clipboard-list fa-2x text-gray-300" />

            <Card 
              title="facturacion" 
              value="$546.456" 
              icon="fas fa-dollar-sign fa-2x text-gray-300" />
						
            <Card 
              title="Cantidad de users" 
              value= {this.state.users.count} 
              icon="fas fa-user-check fa-2x text-gray-300" />
					</div>

					<div className="row">
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="images/product_dummy.svg" alt="image dummy" />
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>

						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Category 01
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Category 02
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Category 03
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Category 04
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Category 05
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Category 06
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2020</span>
					</div>
				</div>
			</footer>

		</div>

	</div>
			
			

		}		
}

export default App;
