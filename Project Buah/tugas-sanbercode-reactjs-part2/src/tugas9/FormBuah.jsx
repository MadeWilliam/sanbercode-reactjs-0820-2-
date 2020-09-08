import React from 'react';

function FormBuah() {
	return (
		<div className="outer">
			<div className="container">
				<h1 className="textCentered">Form Pembelian Buah</h1>
				<div>
					<div className="headerOuter">
						<div className="headerInner">
							Nama Pelanggan
		                </div>
						< input className="inlineBlock" type="text" name="name" />
					</div>
					<div className="mainOuter">
						<div className="mainHeaderContainer">
							Daftar Item
		                </div>
						<div className="inlineBlock">
							<input type="checkbox" id="watermelon" name="fruit" value="watermelon" />
							<label htmlFor="watermelon">Semangka</label><br />
							<input type="checkbox" id="orange" name="fruit" value="orange" />
							<label htmlFor="orange">Jeruk</label><br />
							<input type="checkbox" id="pineapple" name="fruit" value="pineapple" />
							<label htmlFor="pineapple">Nanas</label><br />
							<input type="checkbox" id="zalacca" name="fruit" value="zalacca" />
							<label htmlFor="zalacca">Salak</label><br />
							<input type="checkbox" id="grape" name="fruit" value="grape" />
							<label htmlFor="grape">Anggur</label><br />
						</div>
					</div>
					<input type="submit" value="Kirim" className="submit"></input>
				</div>
			</div>
		</div>
	);
}

export default FormBuah;