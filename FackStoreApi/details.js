const getProduct=async()=>{
    const params=new URLSearchParams(window.location.search);
    const id=params.get('id');
   const {data} =  await axios.get(`https://dummyjson.com/products/${id}`);
   return data;
}

const displayProduct =async ()=>{
    const data= await getProduct();

    const images=data.images.map((img)=>{
        return`
        <img src='${img}' width:40px  height:40px />
        
        `; 
    }).join(' ');
    console.log(images);


    const result = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.price}</p>
    `;
    
    console.log(result);
    document.querySelector(".products").innerHTML=result;
}


displayProduct();