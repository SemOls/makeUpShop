const Home =()=>{
    return(
        <div>
            <div className="header">
                <h1> Makeup </h1>
            </div>

            <div className="descripsion">
    <p className="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Quisquam cum illum soluta reprehenderit earum totam reiciendis natus non officiis doloremque ex,  
    quae iste, eos doloribus.</p>
</div>
       
<div className="header-grid">
		<div className="photo">
            <img src="https://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png" alt="Brushes"/>
            <img src="https://makeup-api.herokuapp.com/assets/single-pot-4ce398e7d8c527ef248ace7a783cc52fd583375a25a7dcdb7b16f7a0958ccb17.png" alt="Lips"/>
         </div>
		
        <div className="photo photo-lips">
        <img src="https://makeup-api.herokuapp.com/assets/lips-c35ec4a3350ec779c6bf6a785981ad9ef2e21bd9fe26a2be1c766d56edb2e11f.png" alt="Nail polish"/>
        </div>

		<div className="photo">
            <img src="https://makeup-api.herokuapp.com/assets/nail-polish-4c7ee1a5f7a5cbaff9757c3bcfa4f6e89d7a6f2ffc49d267e04e010ba94cfd7c.png" alt="Single pot"/>
            <img src="https://makeup-api.herokuapp.com/assets/eyeshadow-18fa4bed267bec6a67506150d9574259d0dcc67700e69de4ba720d9afe8204a2.png" alt="Eyeshadow"/>
            </div>

	
	</div>

            
        </div>
    )
}
export default Home