import './App.css'

function App() {


  return (
    <main className='App'>
      <section className='app_name'>
        <img src="/logo.jpg" alt="" />
        <h1>
          Aquí Es!PE
        </h1>
      </section>

      <section className='header_box'>
        <h1 className='title'>
          ¿Cansado de recorrer todo Lima y no encontrar estacionamiento?
        </h1>
        <hr />
        <p>
          ¡Despreocúpate! Nosotros te ayudaremos, nuestra app incluye:
        </p>
        <ul className='list'>
          <li><i className='bx bx-car'></i>Disponibiliad de estacionamiento en tiempo real</li>
          <li><i className='bx bx-car'></i>Es 100% libre de costo</li>
          <li><i className='bx bx-car'></i>Te damos recomendaciones personalizadas</li>
          <li><i className='bx bx-car'></i>Hay retroalimentación de los usuarios</li>
          <li><i className='bx bx-car'></i>Identificamos los patrones de los días más concurridos</li>
        </ul>
        <p>
          Contamos con un sistema avanzado que se apoya en la tecnología bigdata <br /> para identificar los patrones de comportamiento y brindar las mejores <br /> recomendaciones personalizadas. Además te brindamos infromación <br /> en tiempo real para que estés preparado antes de salir a cualquier lugar
        </p>
      </section>

      <section className='box'>
        <form className='container' action="">
          <div className='box_1'>
            <h3>Nombres y apellidos</h3>
          <input type="text" placeholder="Escribe aquí" />
          </div>
          <div className='box_1'>
            <h3>Correo Electrónico</h3>
          <input type="text" placeholder='Escribe tu correo aquí' />
          </div>
          <div>
           <button className='button'>Registrarse</button> 
          </div>
        </form>
        
      </section>


    </main>
  )
}

export default App
