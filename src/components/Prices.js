import React from 'react'
import servicesData from '../data/servicesData'
import '../styles/prices.css'

const Prices = () => {

   

    const renderedServices = servicesData.map((service,index) => {
        let color

        if(index % 2 === 0){
            color = '#EEEEEE'
        }else{
            color = '#F3F3F3'
        }
        return (
            <tr style={{backgroundColor: color}}><p>{service.name}</p><p>{service.price}</p></tr>
        ) 
    })
    return ( 
        <div className="prices">
            <h1>Cennik</h1>
            <table>
                <td>
                    {renderedServices}
                </td>
            </table>
        </div>
     );
}
 
export default Prices;