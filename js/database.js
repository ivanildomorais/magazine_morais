
let databaseRef = firebase.database();




function writeNewUser(userID, name, email, photoURL, emailVerified){
  databaseRef.ref('users/' + userID).set({
    username:name,
    email:email,
    photo: photoURL,
    emailVerified: emailVerified
  }).then( e => {
    window.location.href ='index.html';
  });
}


function createNewProduct(provider,photo, header, description,large_description,category,stars, price){
  
  let newProductKey = databaseRef.ref().child('products').push().key;

  let productData = {
    provider:provider,
    photo:photo,
    title:header,
    decription:description,
    large_description: large_description,
    category:category,
    stars:stars,
    price:price
  }

  let updates = {}
  updates['/products/' + newProductKey] = productData;
  updates['/comments/' + newProductKey] = {};

  databaseRef.ref().update(updates);
}


function buildProduct(productObj, root){
  let col = document.createElement('div');
  col.classList.add('col-sm-3');


  let link = document.createElement('a');
  link.href = 'product.html?id=' + productObj.key;
  link.style = 'text-decoration:none;';



  let panel = document.createElement('div');
  panel.classList.add('product');

  let thumbnail = document.createElement('div');
  thumbnail.classList.add('thumbnail');
  thumbnail.classList.add('shopItem');
  thumbnail.title = productObj.val().title;



  let img = document.createElement('img');
  img.src = productObj.val().photo;
  img.style.width='100%';
  



  let caption = document.createElement('div');
  caption.classList.add('caption');

  let header = document.createElement('h4');
  let headerNode = document.createTextNode(productObj.val().title);
  header.style = `
    height:40px;
    overflow:hidden;
    color:blue;
  `;
  header.appendChild(headerNode);

 

  let price = document.createElement('h4');
  price.classList.add('text-center');
  let priceNode = document.createTextNode('$' + productObj.val().price);
  price.appendChild(priceNode);



  caption.appendChild(header);
  
  caption.appendChild(price);
  

  thumbnail.appendChild(img);
  thumbnail.appendChild(caption);

  panel.appendChild(thumbnail);

  link.appendChild(panel);

  col.appendChild(link);
  root.appendChild(col);

}


function createRow(root,isReturnable){
  let row = document.createElement('div');
  row.classList.add('row');
    row.classList.add('text-center');
  root?.appendChild(row);


  if(isReturnable == true){
    return row;
  }

  if (!firebase.apps.length) {
    // Se não foi, inicializa
    firebase.initializeApp(firebaseConfig);
  } else {
    // Se já foi inicializado, usa a instância existente
    firebase.app(); // Obtém a instância do Firebase já existente
  }
}





