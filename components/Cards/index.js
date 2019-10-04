// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    const bootstrapArry = response.data.articles.bootstrap;
    const javascriptArry = response.data.articles.javascript;
    const jqueryArry = response.data.articles.jquery;
    const nodeArry =response.data.articles.node;
    const technologyArry= response.data.articles.technology;
    
    console.log(javascriptArry);
    bootstrapArry.forEach(element => {
        artclContainer.appendChild(createFeed(element.headline, element.authorPhoto, element.authorName));
    });
    javascriptArry.forEach(element => {
        artclContainer.appendChild(createFeed(element.headline, element.authorPhoto, element.authorName));
    });
    jqueryArry.forEach(element => {
        artclContainer.appendChild(createFeed(element.headline, element.authorPhoto, element.authorName));
    });
    nodeArry.forEach(element => {
        artclContainer.appendChild(createFeed(element.headline, element.authorPhoto, element.authorName));
    });
    technologyArry.forEach(element => {
        artclContainer.appendChild(createFeed(element.headline, element.authorPhoto, element.authorName));
    });
});


/* <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div> */

  const artclContainer = document.querySelector('.cards-container');
// our re-usable component function
function createFeed(headline, authorPhoto, authorName)  {
    // define new elements
    const artclCard = document.createElement("div");
    const author = document.createElement("div");
    const artclHeadline = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const byAuthorName = document.createElement("span");
    
    // append
    
    artclCard.appendChild(artclHeadline);
    artclCard.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(byAuthorName);
  
    
    // set class
    
    artclCard.classList.add("card");
    artclHeadline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    
    
  //   add content
    artclHeadline.textContent = headline;
    img.src = authorPhoto;
    byAuthorName.textContent  = authorName;

    return artclCard;
  }