import React from 'react';
import './App.css';

function App() {
  return ( 
    <div class="outer">
		    <div class="container">
		        <h1 class="textCentered">Form Pembelian Buah</h1>
		        <div>
		            <div class="headerOuter">
		                <div class="headerInner">
		                    Nama Pelanggan
		                </div>
		                < input class="inlineBlock" type="text" name="name" />
		            </div>
		            <div class="mainOuter">
		                <div class="mainHeaderContainer">
		                    Daftar Item
		                </div>
		                <div class="inlineBlock">
		                    <input type="checkbox" id="semangka" name="gender" value="semangka"/>
		                    <label for="semangka">Semangka</label><br/>
		                    <input type="checkbox" id="jeruk" name="gender" value="jeruk"/>
		                    <label for="jeruk">Jeruk</label><br/>
		                    <input type="checkbox" id="nanas" name="gender" value="nanas"/>
		                    <label for="nanas">Nanas</label><br/>
		                    <input type="checkbox" id="salak" name="gender" value="salak"/>
		                    <label for="salak">Salak</label><br/>
		                    <input type="checkbox" id="anggur" name="gender" value="anggur"/>
		                    <label for="anggur">Anggur</label><br/>
		                </div>
		            </div>
		            <input type="submit" value="Kirim" class="submit"></input>
		        </div>
		    </div>
		</div>
  );
}

export default App;