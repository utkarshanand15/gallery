import WSPGallery from './components/WSPGallery';
import './App.css';

function App() {

  const galleryImages = [
    
    {
      img:"https://i.postimg.cc/8cP9rc6w/PXL-20230126-071424521.jpg"
    },
    {
      img:"https://i.postimg.cc/26XRnF8K/IMG20220630133809.jpg"
    },
    {
      img:"https://i.postimg.cc/Gm10Ppdd/IMG20220809140748.jpg"
    },
    {
      img:"https://i.postimg.cc/2Sds0fSv/IMG20220809142651.jpg"
    },
   
    {
      img: "https://i.postimg.cc/MTGJcrxB/IMG20220809142833.jpg"
    },
    {
      img: "https://i.postimg.cc/d0qzXShf/IMG20220809143506.jpg"
    },
    {
      img: "https://i.postimg.cc/s2wtR9Sg/IMG20220809143557.jpg"
    },
    {
      img: "https://i.postimg.cc/65C6xgQ6/IMG20220809145310.jpg"
    },
    {
      img: "https://i.postimg.cc/mDS3n8Fm/IMG20220925120509.jpg"
    },
    {
      img:"https://i.postimg.cc/YCkrrR46/IMG20220925125805.jpg"
    },
    {
      img:"https://i.postimg.cc/qMDPYGsB/IMG20221211140042.jpg"
    },
    {
      img:"https://i.postimg.cc/qq4rJMqk/IMG20221212133827.jpg"
    },
   
    {
      img: "https://i.postimg.cc/QtV56hhd/IMG20230101132846.jpg"
    },
    {
      img: "https://i.postimg.cc/SRkq1mzz/IMG20230101133158.jpg"
    },
    {
      img: "https://i.postimg.cc/CMBjwYXV/IMG20230101145955.jpg"
    },
    {
      img: "https://i.postimg.cc/yxjKw2Fp/IMG20230101150146.jpg"
    },
    {
      img: "https://i.postimg.cc/BZV4Fsjn/IMG-20220925-125440-Bokeh.jpg"
    },
    {
      img:"https://i.postimg.cc/5yYcgYXN/IMG-20221024-125221.jpg"
    },
    {
      img:"https://i.postimg.cc/JnTmPCKK/IMG-20221024-234318-495.webp"
    },
    {
      img:"https://i.postimg.cc/SKhyKrJL/IMG-20221024-234318-537.webp"
    },
   
    {
      img: "https://i.postimg.cc/Y0Z7BN5W/IMG-20221024-234318-553.webp"
    },
    {
      img: "https://i.postimg.cc/TPJT5DDz/IMG-20221024-234318-742.webp"
    },
    {
      img: "https://i.postimg.cc/MpySgQdn/IMG-20221116-154739.jpg"
    },
    {
      img: "https://i.postimg.cc/tR2wZzmd/Picsart-22-08-07-19-04-53-100.jpg"
    },
    {
      img: "https://i.postimg.cc/fbm6G6s7/PXL-20230126-064102525.jpg"
    },
    {
      img:"https://i.postimg.cc/fbm6G6s7/PXL-20230126-064102525.jpg"
    },
    {
      img:"https://i.postimg.cc/hGWY1pmX/PXL-20230126-070917146-PORTRAIT.jpg"
    },
    {
      img:"https://i.postimg.cc/28g9C220/PXL-20230126-070952547-MP.jpg"
    },
   
    {
      img: "https://i.postimg.cc/wMfP5z5z/PXL-20230126-071445475.jpg"
    },
    {
      img: "https://i.postimg.cc/tCcwYXCt/PXL-20230126-071454884.jpg"
    },
    {
      img: "https://i.postimg.cc/Xv5bVrfC/Snapchat-1107475584.jpg"
    },
    {
      img: "https://i.postimg.cc/Dw8hMjm5/Snapchat-112343773.jpg"
    },
    
    
  ]

  return (
    <div className="App">
      <br />
      <div>
      <nav id="menu">
       
       
        <div class="navbar">
          <strong><a href="galleryutkarsh.netlify.app">Gallery</a></strong>
          <a href="https://utkarshanand15.github.io/utkarshanand/">Home</a>
          <a href="https://utkarshanand15.github.io/utkarshanand/about.html">About Me</a>
          <a href="https://utkarshanand15.github.io/utkarshanand/about.html">My work</a>
				
			
        </div>
		</nav>
        <br/>
      
        
      </div>
      
      
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />

      <br /><br />
      <div>
      <footer id="footer">
			<div class="inner">
				<ul class="copyright">
					<li>&copy; All rights reserved</li>
					<li>Design by:<a href='https://utkarshanand15.github.io/utkarshanand/'> Utkarsh Anand</a></li>
				</ul>
			</div>
		</footer>

	</div>
      </div>
    
  );
  
  
}

export default App;
