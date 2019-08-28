import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import '../css/Woman.css'
import Footer from '../components/Footer';
import Gender from '../components/Gender';
import GymMan from '../css/images/GymMan.jpg'
import Basketball from '../css/images/Basketball.jpeg'
import MenJacket from '../css/images/MenJacket.jpeg'
import Socerss from '../css/images/Socerss.jpeg'
import ManTShirt from '../css/images/ManTShirt.jpeg'
import ManHoodie from '../css/images/ManHoodie.jpeg'
import Backpack from '../css/images/Backpack.jpeg'

export default function Man() {
    return (
        <div>
        <Navbar/>
        <div className="main-title">
            <span>KOUT MAN</span>
            <ul>
                <li><Link to={`/man/soccer-man`}>Soccer</Link></li>
                <li><Link to={`/man/t-shirt-man`}>T-Shirts</Link></li>
                <li><Link to={`/man/basketball-man`}>Basketball</Link></li>
            </ul>
        </div>
        <Gender 
        genderName={"man"}
        img1={GymMan} 
        img2={Basketball} 
        img3={MenJacket} 
        img4={Socerss}
        img5={ManTShirt}
        img6={ManHoodie}
        img7={Backpack}
        name1={"Gym"}
        name2={"Basketball"}
        name3={"Jackets"}
        name4={"Soccer"}
        name5={"T-Shirts"}
        name6={"Hoodies"}
        name7={"Backpacks"}
        href1={"man-gym"}
        href2={"basketball-man"}
        href3={"jacket-man"}
        href4={"soccer-man"}
        href5={"t-shirt-man"}
        href6={"hoodie-man"}
        href7={"backpack-man"}
        />
        <Footer/>
    </div>
    )
}
