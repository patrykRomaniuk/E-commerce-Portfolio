import React from 'react'
import Navbar from '../components/Navbar';
import '../css/Woman.css'
import Footer from '../components/Footer';
import Gender from '../components/Gender';
import { Link } from 'react-router-dom'
import Running from '../css/images/Running.jpg'
import GymWoman from '../css/images/GymWoman.jpg'
import Skirt from '../css/images/Skirt.jpeg'
import Leggins3 from '../css/images/Leggins3.jpg'
import WomHoodie from '../css/images/WomHoodie.jpg'
import Backpack3 from '../css/images/Backpack3.jpg'
import WomenTShirt from '../css/images/WomenTShirt.jpeg'

export default function Woman() {
    return (
        <div>
            <Navbar/>
            <div className="main-title">
                <span>KOUT WOMEN</span>
                <ul>
                    <li><Link to="/woman/leggins-women">Leggins</Link></li>
                    <li><Link to="/woman/t-shirt-women">T-Shirts</Link></li>
                    <li><Link to="/woman/skirts-women">Skirts</Link></li>
                </ul>
            </div>
            <Gender 
            img1={Running} 
            img2={GymWoman} 
            img3={Skirt} 
            img4={Leggins3}
            img5={WomHoodie}
            img6={Backpack3}
            img7={WomenTShirt}
            name1={"Running"}
            name2={"Gym"}
            name3={"Skirts"}
            name4={"Leggins"}
            name5={"Hoodies"}
            name6={"Backpacks"}
            name7={"T-shirts"}
            href1={"running-women"}
            href2={"gym-women"}
            href3={"skirts-women"}
            href4={"leggins-women"}
            href5={"woman-hoodie"}
            href6={"backpack-women"}
            href7={"t-shirt-women"}
            genderName={"woman"}
            />
            <Footer/>
        </div>
    )
}
