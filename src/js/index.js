//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function Contador(props) {
	return (
		<div className="contGrande">
			<div className="calendario">
				<img
					src="https://www.mcicon.com/wp-content/uploads/2021/01/Objects_Alarm_clock_1-copy-13-600x600.jpg"
					width="150"
					height="150"
				/>
			</div>
			<div className="seis">{props.digitoSeis % 10}</div>
			<div className="cinco">{props.digitoCinco % 10}</div>
			<div className="cuatro">{props.digitoCuatro % 10}</div>
			<div className="tres">{props.digitoTres % 10}</div>
			<div className="dos">{props.digitoDos % 10}</div>
			<div className="uno">{props.digitoUno % 10}</div>
		</div>
	);
}

Contador.propTypes = {
	digitoSeis: propTypes.number,
	digitoCinco: propTypes.number,
	digitoCuatro: propTypes.number,
	digitoTres: propTypes.number,
	digitoDos: propTypes.number,
	digitoUno: propTypes.number,
};

let cont = 0;
setInterval(function () {
	const seis = Math.floor(cont / 100000);
	const cinco = Math.floor(cont / 10000);
	const cuatro = Math.floor(cont / 1000);
	const tres = Math.floor(cont / 100);
	const dos = Math.floor(cont / 10);
	const uno = Math.floor(cont / 1);
	cont++;
	ReactDOM.render(
		<Contador
			digitoUno={uno}
			digitoDos={dos}
			digitoTres={tres}
			digitoCuatro={cuatro}
			digitoCinco={cinco}
			digitoSeis={seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);
