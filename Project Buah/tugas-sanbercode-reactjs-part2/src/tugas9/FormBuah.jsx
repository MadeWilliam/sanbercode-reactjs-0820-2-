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
		                    <input type="checkbox" id="semangka" name="gender" value="semangka"/>
		                    <label htmlFor="semangka">Semangka</label><br/>
		                    <input type="checkbox" id="jeruk" name="gender" value="jeruk"/>
		                    <label htmlFor="jeruk">Jeruk</label><br/>
		                    <input type="checkbox" id="nanas" name="gender" value="nanas"/>
		                    <label htmlFor="nanas">Nanas</label><br/>
		                    <input type="checkbox" id="salak" name="gender" value="salak"/>
		                    <label htmlFor="salak">Salak</label><br/>
		                    <input type="checkbox" id="anggur" name="gender" value="anggur"/>
		                    <label htmlFor="anggur">Anggur</label><br/>
		                </div>
		            </div>
		            <input type="submit" value="Kirim" className="submit"></input>
		        </div>
		    </div>
		</div>
  );
}

export default FormBuah;