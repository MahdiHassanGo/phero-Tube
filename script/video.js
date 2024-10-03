// load categories 
const loadCategories = () => {
    console.log("loadCategories created");
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())  // Parse the response as JSON
    .then((data) => displayCategories(data.categories))  // Access the categories
    .catch((error) => console.log(error));
}

// load Videos 
const loadVideos = () => {
    console.log("loadVideos created");
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())  // Parse the response as JSON
    .then((data) => displayVideos(data.videos))  // Access the videos
    .catch((error) => console.log(error));
}

// display videos 
const displayVideos = (videos) => {

    const videosContainer = document.getElementById('videos');
    videos.forEach((video) => {
        console.log(video);

        const card = document.createElement('div');
        card.classList = 'card card-compact';

        // Dynamically set video information in the card
        card.innerHTML = `
            <figure class="h-[200px]">
                <img src="${video.thumbnail}" alt="${video.title} class="h-full w-full object-cover" />
            </figure>
            <div class="px-0 py-2 flex gap-2 ">
                <div>
                <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
                </div>
                    
                </div>
                <div>
                <h2 class="font-bold">${video.title}</h2>
                </div>
                    
                </div>
                <div class="flex  items-center gap-2">
                <p class="text-gray-400">${video.authors[0].profile_name}</p>
                <img class="w-5 " src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png">
                </div>
                    
                </div>
            </div>
        `;
        
        videosContainer.append(card);
    });
}

// display categories 
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories');
    categories.forEach((item) => {
        console.log(item);

        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;  // Assuming 'category' is a property of each category
        
        // Add button to categories 
        categoriesContainer.append(button);
    });
}

loadCategories();
loadVideos();  // Call this to load and display videos
