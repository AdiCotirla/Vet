import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import "../../Styling/Slider.css"
export default function Slider() {
    return (
        <>
            <Carousel className='main-slider' 
             swipeable={false}
             showThumbs={false}
             showStatus={false}
             autoPlay ={"stopOnHover"}
             infiniteLoop>
            <div className='image-container'>
                    <p className="legend">Boala Bowen (diskeratoză cu evoluție malignă) este o afecțiune precanceroasă cu evoluție cronică, frecventă la persoanele în vârstă, localizată pe piele sau pe mucoase, caracterizată clinic prin plăci eritematoase, scuamoase sau crustoase și, histologic, prin aspectul de carcinom intraepidermic, potențialul ei de malignizare fiind între 30 și 50%. </p>
                </div>
                <div className='image-container'>
                    <p className="legend">Cancerul cu celule bazale se dezvoltă încet și poate afecta țesutul din jurul acestuia, dar este puțin probabil să se răspândească în zone îndepărtate sau să ducă la deces.[4] De multe ori, acesta apare ca o excrescență nedureroasă ce poate luci, având mici vase de sânge ce o traversează sau poate apărea ca o excrescență cu ulcer.</p>
                </div>
                <div className='image-container'>
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
        </>
    )
}
