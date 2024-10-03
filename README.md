<p align="center">
<img src="Logo.png"  />
</p>
<p align="center" style="font-size: 24px;">
  PH Tube is a web-based video streaming application where users can browse and watch videos sorted by categories such as music, comedy, and tutorials.
</p>

<hr/>
<p align="center" style="font-size: 34px; font-weight:bold">
 REST API
</p>

<p style=" font-weight:bold">
 GET: Categories 
</p>

Endpoint: [https://openapi.programming-hero.com/api/phero-tube/categories](https://openapi.programming-hero.com/api/phero-tube/categories) <br/>

<hr/>
<p style=" font-weight:bold">
 GET: Videos 
</p>

Endpoint: [https://openapi.programming-hero.com/api/phero-tube/videos](https://openapi.programming-hero.com/api/phero-tube/videos) <br/>

<hr/>
<p style=" font-weight:bold">
 GET: Video based on Catagory  [ params ]
</p>
Endpoint : https://openapi.programming-hero.com/api/phero-tube/category/categoryId

Example: [https://openapi.programming-hero.com/api/phero-tube/category/1001](https://openapi.programming-hero.com/api/phero-tube/category/1001) <br/>

<hr/>

<p style=" font-weight:bold">
 GET: Video based on Title  [ Query ]
</p>
Endpoint : https://openapi.programming-hero.com/api/phero-tube/videos?title=videoTitle

Example: [https://openapi.programming-hero.com/api/phero-tube/videos?title=shape](https://openapi.programming-hero.com/api/phero-tube/videos?title=shape) <br/>

<hr/>
<p style=" font-weight:bold">
 GET: Video Details by video_id  [ Query ]
</p>
Endpoint : https://openapi.programming-hero.com/api/phero-tube/video/video_id

Example: [https://openapi.programming-hero.com/api/phero-tube/video/aaac](https://openapi.programming-hero.com/api/phero-tube/video/aaac) <br/>

<hr/>


### Created Dynamic Category Section

- Loaded all the Catagory Button From API and Show them in a centered position
- on click on a certain button, Load specific Catagory Data
- Integrated active button functionality for better UX

### Created Dynamic Video Sections

- Loaded all the videos from API
- used the Card Layout mentioned in Design part
- Showed Video Duration (if have)
- Showed Verified badge (if Verified)
- on click Showed Video Details with Author info in a modal
- Showed No Video Icon if specific category have no videos


### Search Functionality

- Integrated search functionality
- on click Search button showed Videos from all videos and de-activate active button on category


<hr/>

<p align="center" style="font-size: 34px; font-weight:bold">
 Design Idea's
</p>
Basic Layout
<img src="design/Frame 1.png">
<hr/>
Error Layout

<img src="design/Frame 3.png">

<hr/>
