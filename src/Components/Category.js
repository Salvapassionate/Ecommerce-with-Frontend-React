import React,{useState} from 'react'
import Categories from './Categories'; 
import '../index.css';
const Category = () => {
  // Declarar el estado de los datos de la categoría y establecer el estado inicial en la matriz de Categorías
const [data,setData]=useState(Categories);
// Definir una función para filtrar los datos según el tipo de categoría
const filterResult=(catItem)=>{
  const result=Categories.filter((curData)=>{
    return curData.tipo===catItem;
    });
    // Establecer los datos filtrados como el nuevo estado
    setData(result);
    
}
// Definir funciones para guardar y cargar datos desde el almacenamiento local
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
const loadFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return [];
};
// Declarar el estado del carrito de compras y cargar desde el almacenamiento local
const [carrito, setCarrito] = useState(loadFromLocalStorage('carrito'));
// Definir una función para agregar un artículo al carrito de compras
const agregarAlCarrito = (item) => {
	const nuevoCarrito = [...carrito, item];
    setCarrito(nuevoCarrito);
    // Guardar el carrito actualizado en el almacenamiento local
    saveToLocalStorage('carrito', nuevoCarrito);
  };

  
  return (
    <>
	<div className="container">
    	<nav className="nav-main">
    		<h2 className="text—white">TechnoShop</h2>
    		<ul className="nav-menu">
    			<li> 
    			<a href="/">Inicío</a>
    			</li>
    		</ul>
    		<ul className="nav—menu-right">
    			<li>
				<a href="/">
              		<img src="../image/carrito.png" alt="Carrito de compras" className="icono-carrito" />
              		Carrito ({carrito.length})
            	</a>
				
    			</li>
    		</ul>
    	</nav>
   	 </div>

    <div className="container-fluid mx-2">
<div className="row mt-5 mx-2">

<div className="col-md-3">
   {/* Botón para filtrar productos por la categoría selecionada usando filtros con tipo de categoria*/}
<button  className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Laptops')}>
  <div className="columnas-boton">
    <img className="imagen-boton" src="../image/laptops.png" alt="Laptops" />
    <span>Laptops</span>  
  </div>
</button>
<button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Celulares')}>
  <div className="columnas-boton">
    <img className="imagen-boton" src="../image/celulares.png" alt="Celulares" />
    <span>Celulares</span>  
  </div>
</button>
<button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('TV')}>
  <div className="columnas-boton">
    <img className="imagen-boton" src="../image/tv.png" alt="TV" />
    <span>TV</span>  
  </div>
</button>
<button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Audifonos')}>
  <div className="columnas-boton">
    <img className="imagen-boton" src="../image/audifonos.png" alt="Audifonos" />
    <span>Audifonos</span>  
  </div>
</button>
<button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Minicomponentes')}>
  <div className="columnas-boton">
    <img className="imagen-boton" src="../image/minicomponentes.png" alt="Minicomponentes" />
    <span>Minicomponentes</span>  
  </div>
</button>
<button className="btn btn-warning w-100 mb-4" onClick={()=>setData(Categories)}>All</button>
</div>

  <div className="col-md-9">
    <div className="row">
      {/* Mapea los datos y muestra cada elemento */}
    {data.map((values)=>{
        const {id,nombre,descripcion,precio,cantidad,imagenes}=values;
        return(
          <>
          <div className="col-md-4 mb-4" key={id}>
        <div className="card">
          <img src={imagenes} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p>Precio: {precio}</p> 
            <p className="card-text">
            {descripcion}
            </p>
            <p>Cantidad: {cantidad}</p> 
            <button className="btn btn-primary" onClick={() => agregarAlCarrito(values)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
          </>
        )
    })}
      
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Category