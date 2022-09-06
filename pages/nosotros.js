import React from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'

import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                    <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros' />

                    <div>
                        <p>Cras dolor elit, varius a ex at, dapibus lacinia nunc. Sed vitae quam vitae diam ultricies vulputate. Nam suscipit tincidunt aliquam. In elit magna, sollicitudin nec nisi non, porttitor cursus elit. Curabitur finibus magna ac mauris luctus placerat. Vestibulum bibendum lacinia pulvinar. Ut congue eros et urna consequat, in aliquet sem condimentum. Aliquam nec consequat justo. Proin vehicula faucibus aliquet. </p>

                        <p>Nulla vitae lorem eget urna fermentum varius quis vitae leo. Nunc cursus lorem feugiat, bibendum magna vitae, laoreet justo. Curabitur sit amet metus massa. Nam elementum dolor et turpis egestas dictum. Curabitur vestibulum, dui sit amet tempor convallis, neque felis gravida odio, ut condimentum metus ante non ex. In tempus orci vitae libero facilisis, at malesuada massa lacinia.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros