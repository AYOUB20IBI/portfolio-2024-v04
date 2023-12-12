import Sidebar from "../componenets/Sidebar/Sidebar";
import Main from "../componenets/main/Main";
import Navbar from "../componenets/navbar/Navbar";
import { useEffect } from "react";
import './layout.css'

export default function LayoutDashboard(){
    const handeltogell =()=>{
        const sideBar = document.querySelector('.sidebar');
        sideBar.classList.toggle('close');
    }
    const searchtogell=(e)=>{
        const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
        const searchForm = document.querySelector('.content nav form');
        if (window.innerWidth < 576) {
            e.preventDefault;
            searchForm.classList.toggle('show');
            if (searchForm.classList.contains('show')) {
                searchBtnIcon.classList.replace('bx-search', 'bx-x');
            } else {
                searchBtnIcon.classList.replace('bx-x', 'bx-search');
            }
        }
    }
    
    const darckmode =()=>{
        const toggler = document.getElementById('darkModeCheckbox');
        if (toggler.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }
    
    useEffect(()=>{
        const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
    
        sideLinks.forEach(item => {
            const li = item.parentElement;
            item.addEventListener('click', () => {
                sideLinks.forEach(i => {
                    i.parentElement.classList.remove('active');
                })
                li.classList.add('active');
            })
        });
    },[])
    return(
        <>
        <Sidebar/>
        <div className="content">
            <Navbar clicktogel={handeltogell} searchclick={searchtogell} darckmode={darckmode}/>
            <Main/>
        </div>
        </>
    )
}