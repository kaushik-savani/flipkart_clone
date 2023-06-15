import product from './model/product-schema.js'
import {products} from './constant/data.js'

const Default = async()=> {
    try{
       await product.insertMany(products);
        console.log('data inserted successfiully');
    }catch(erorr){
        console.log('e');
    }

}

export default Default