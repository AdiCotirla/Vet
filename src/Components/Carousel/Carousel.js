import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import "../../Styling/Slider.css"
export default function Slider() {
    return (
        <>
            <Carousel className='main-slider' 
             swipeable={true}
             showThumbs={false}
             showStatus={false}
             autoPlay ={"stopOnHover"}
             infiniteLoop>
            <div className='image-container'>
                    <p className="legend">Boala Bowen (diskeratoză cu evoluție malignă) este o afecțiune precanceroasă cu evoluție cronică, frecventă la persoanele în vârstă, localizată pe piele sau pe mucoase, caracterizată clinic prin plăci eritematoase, scuamoase sau crustoase și, histologic, prin aspectul de carcinom intraepidermic, potențialul ei de malignizare fiind între 30 și 50%. A fost descrisă de dermatologul american John T. Bowen în 1912, studiul bolii a fost aprofundat de dermatologii francezi J. Darier et L. Queyrat în 1914, caracterul ei precanceros fiind subliniat încă de la început. La 25% din cazuri este însoțită de un cancer intern care este depistat, în medie, după 5 ani de la apariția bolii.</p>
                </div>
                <div className='image-container'>
                    <p className="legend">Cancerul cu celule bazale se dezvoltă încet și poate afecta țesutul din jurul acestuia, dar este puțin probabil să se răspândească în zone îndepărtate sau să ducă la deces.[4] De multe ori, acesta apare ca o excrescență nedureroasă ce poate luci, având mici vase de sânge ce o traversează sau poate apărea ca o excrescență cu ulcer.[3] Cancerul cu celule scuamoase este mai probabil să se răspândească.[4] De obicei, apare sub forma unui nodul dur cu o suprafață solzoasă dar, de asemenea, ar putea forma un ulcer.[6] Melanoamele sunt cele mai agresive. Semnele includ un/o aluniță ce și-a modificat mărimea, forma, culoarea, are margini neregulate, are mai multe culori, este însoțită de o senzație de mâncărime sau sângerează.[7]</p>
                </div>
                <div className='image-container'>
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
        </>
    )
}
