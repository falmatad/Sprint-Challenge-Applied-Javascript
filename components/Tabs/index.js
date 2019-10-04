// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    const tabsInfo = response.data.topics;

    tabsInfo.forEach(topic => {
        // console.log(Tabs(topic));
        tabsContainer.appendChild(Tabs(topic));
    })
  });

/* <div class="tabs">
<div class="topics">
    <span class="title">TRENDING TOPICS:</span>
</div>
</div> */

const tabsContainer = document.querySelector('.tabs');
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

  