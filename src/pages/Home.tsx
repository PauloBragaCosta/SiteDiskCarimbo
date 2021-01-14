import React from "react";



import Topbar from '../components/Topbar';
import Rodape from '../components/rodape';
import Whats from "../components/whats";
import Insta from "../components/insta";

//import '../styles/components/home.css';

export default function home() {
	return (
	<>
	<Topbar/>
	<Whats/>
    <Insta/>
	<Rodape/>
	</>
	
    )
}