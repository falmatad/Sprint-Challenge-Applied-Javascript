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
    const tabsInfo = response.data.topics;

    tabsInfo.forEach(topic => {
        // console.log(Tabs(topic));
        tabsContainer.appendChild(Tabs(topic));
    })
  });


  const cardContainer = document.querySelector('.tabs');
function Tabs(topics) {
    // define new elements
    const
        topicsDiv = document.createElement('div'),
        topicTitle = document.createElement('span')

    // append
    topicsDiv.appendChild(topicTitle);


    // set class
    topicsDiv.classList.add('tabs');
    topicTitle.classList.add('tab');

    //   add content
    topicTitle.textContent = topics;

    // check for extra features

    // return
    return topicsDiv;
}