import react,{useState,useEffect} from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from './Advicer.module.css';
import axios from "axios";
import img from "./patter-divider.svg"

const Advicer=()=>{


const [items,setItems]=useState([])
const [id,setId]=useState([])

const fetchItems = async()=>{
const res = await axios(`https://api.adviceslip.com/advice`);
const data=res.data.slip.advice;
const dataId=res.data.slip.id
setItems(data)
setId(dataId)
}

useEffect(()=>{
fetchItems()
},[])


return (
 <Card>
    <div className={classes.container}>
    <div className={classes.card}>
    <h1 className={classes['advice-id']} id="advice-id">{id}</h1>
    <p className={classes['advice-text']} id="advice">{items}</p>
  <img src={img}/>
  <Button onClick={fetchItems}/>
    </div>
</div>
</Card>
)
}
export default Advicer;