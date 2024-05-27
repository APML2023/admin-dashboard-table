// Modal.js

import React from "react";
import { FaWindowClose } from "react-icons/fa";
import MultiFilter from "../features/MultiFilter";

const Modal = ({ isOpen, onClose, children, setFilter, colums, rawData, filter }) => {
	if (!isOpen) return null;

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				margin:0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		> 
			<div
				style={{
					background: "white",
					height: "fit-content",
					width: "100%",
					margin: "auto",
					padding: "2%",
					border: "2px solid #000",
					borderRadius: "10px",
                    overflow:"scroll",
					boxShadow: "2px solid black",
					display:" flex"
				}}
				>
				<div className="">
		
							<MultiFilter filter={filter} setFilter={setFilter} colums={colums} data={rawData} />
				</div>
				<div style={{width:"100%"}}>
				<div style={{color:"#684F31",width:"100%", display: "flex", justifyContent: "flex-end"}}>
					<h1 onClick={onClose} ><FaWindowClose size={30}/></h1>
				</div>
				{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
