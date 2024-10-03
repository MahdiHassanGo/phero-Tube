// load categories 
const loadCategories = () => {
    console.log("loadCategories created");
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())  // Parse the response as JSON
    .then((data) => displayCategories(data.categories))  // Access the categories
    .catch((error) => console.log(error));
}

// time function 
function getTimeString(time) {
    const second = 1;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day; // Approximated to 30 days
    const year = 12 * month; // Approximated to 12 months (360 days)

    if (time >= year) {
        const years = Math.floor(time / year);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (time >= month) {
        const months = Math.floor(time / month);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (time >= day) {
        const days = Math.floor(time / day);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (time >= hour) {
        const hours = Math.floor(time / hour);
        const remainingMinutes = Math.floor((time % hour) / minute);
        return `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''} ago`;
    } else if (time >= minute) {
        const minutes = Math.floor(time / minute);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `${time} second${time > 1 ? 's' : ''} ago`;
    }
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
// display videos 
const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos');
    videos.forEach((video) => {
        console.log(video);

        const card = document.createElement('div');
        card.classList = 'card card-compact rounded-lg overflow-hidden'; // Added styles for card

        // Dynamically set video information in the card
        card.innerHTML = `
            <figure class="h-[200px] relative">
                <img src="${video.thumbnail}" alt="${video.title}" class="h-full w-full object-cover" />
              ${video.others.posted_date?.length==0 ? "": ` 
                <span class="absolute right-2 bottom-2 text-white bg-black bg-opacity-60 rounded px-2 py-1 text-sm">${getTimeString(video.others.posted_date)}</span> `
            }



            </figure>

            <div class="p-4 flex gap-2 items-center">
                <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt="Profile Picture" />
                
                <div class="flex-1">
                    <h2 class="font-bold text-base">${video.title}</h2>
                    <div class="flex items-center gap-1 text-gray-400 text-sm">
                        <p>${video.authors[0].profile_name}</p>
                        ${video.authors[0].verified ? 
                            `<img class="w-4 h-4" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="Verified">` : ""}
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
