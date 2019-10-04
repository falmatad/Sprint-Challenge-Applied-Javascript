// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    const bootstrapItem = response.articles.bootstrap;
    const javascript = response.articles.javascript;
    const jquery = response.articles.jquery;
    const node = response.articles.node;
    const technology = response.articles.technology;
    
    console.log(bootstrapItem);
    
    // bootstrap.forEach(element => {
    //     articleFeed.appendChild(createFeed(element.headline, element.date, element.firstParagraph, element.secondParagraph, element.thirdParagraph))
    //   })
    
    // javascript.forEach(element => {
    //     articleFeed.appendChild(createFeed(element.title, element.date, element.firstParagraph, element.secondParagraph, element.thirdParagraph))
    //     })

    // jquery.forEach(element => {
    //     articleFeed.appendChild(createFeed(element.title, element.date, element.firstParagraph, element.secondParagraph, element.thirdParagraph))
    //     })

    // node.forEach(element => {
    //     articleFeed.appendChild(createFeed(element.title, element.date, element.firstParagraph, element.secondParagraph, element.thirdParagraph))
    //     })

    // technology.forEach(element => {
    //     articleFeed.appendChild(createFeed(element.title, element.date, element.firstParagraph, element.secondParagraph, element.thirdParagraph))
    //     })
  });


  const cardContainer = document.querySelector('.tabs');
// our re-usable component function
function createFeed(title, date, firstParagraph, secondParagraph, thirdParagraph, )  {
    // define new elements
    const article = document.createElement("div");
    const artcTitle = document.createElement("h2");
    const artcDate = document.createElement("p");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const expandBtn = document.createElement("span");
    
    // append
    
    article.appendChild(artcTitle);
    article.appendChild(artcDate);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(expandBtn);
  
    
    // set class
    
    article.classList.add("article");
    artcTitle.classList.add("title");
    artcDate.classList.add("date");
    p1.classList.add("p1");
    p2.classList.add("p2");
    p3.classList.add("p3");
    expandBtn.classList.add("expandButton");
    
    
  //   add content
    artcTitle.textContent = title;
    artcDate.textContent = date;
    p1.textContent = firstParagraph;
    p2.textContent = secondParagraph;
    p3.textContent = thirdParagraph;
    expandBtn.textContent  = 'Expand';

  // set up expand button
    expandBtn.addEventListener("click", () => {
        console.log('buttonClicked');
        article.classList.toggle('article-open');
      })
    return article;
  }