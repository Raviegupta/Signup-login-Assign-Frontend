import './CSS/Home.css'
import AddProduct from '../Components/AddProduct/AddProduct'
import ListProduct from '../Components/ListProduct/ListProduct'


const Home = () => {
  return (
    <div className='home'>
        <AddProduct />
        <ListProduct />
    </div>
  )
}

export default Home