import React, {useState} from "react";

const name = ["juan", "pablo", "pedro", "judas"]

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0)
	const [nombre, setNombre] = useState("name")

	// let counter = 0

	const increment = () => {
		console.log(counter)
		setCounter(counter+1)
		// counter = counter + 1
	}
	function changeName (){
		let randomNombre = Math.floor(Math.random()* name.length)
		setNombre(name[randomNombre])
	}


	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div>
						<h1>Counter</h1>
						<h2>{counter}</h2>
						<button
							className="btn btn-secondary"
							onClick={() => increment()}>
							sumar
						</button>
						<h1>hla pa {nombre}</h1>
						<button
							className="btn btn-secondary"
							onClick={() => changeName()}>
							sumar
						</button>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Home;