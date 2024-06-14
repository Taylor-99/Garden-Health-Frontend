<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <div>
    <a href="https://github.com/Taylor-99/Garden-Health-Frontend">
<!--       <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
    </a>
    <p> Frontend </p>
  </div>
  <div>
    <a href="https://github.com/Taylor-99/Garden-Health-Backend">
<!--       <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
    </a>
    <p> Backend </p>
  </div>

<h3 align="center">Garden Health</h3>

  <p align="center">
    Cultivate your garden and well-being simultaneously, embrace nature's healing power and grow a healthier, happier you.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img width="1171" alt="Screenshot 2024-06-13 at 4 49 32 PM" src="https://github.com/Taylor-99/Garden-Health-Frontend/assets/86860002/924a370a-fa48-4fae-b34b-23995f8a2eb4">


Welcome to the Gardening and Health app! This innovative platform allows you to log your mood and gardening activities while tracking the growth of your garden. Connect with a vibrant community to share resources, tips, and achievements. Enhance your well-being through nature and join others on a journey toward a healthier, happier lifestyle. 


<a href="https://www.figma.com/design/PyMyRVS2BGFIKQM1stDFtW/Project-4?node-id=0-1&t=oacFaTZdc9L8KHB3-1"> Figma Layout of Project </a>
<a href="https://lucid.app/lucidchart/1fedf014-5070-4afe-8381-780f03254c06/edit?viewport_loc=-563%2C-767%2C2243%2C1399%2C0_0&invitationId=inv_a1811ced-f8c2-449e-96fa-817f0dfad689"> ERD for Project </a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Next.Js
* React
* Node.js
* Javascript
* HTML
* Tailwind
* CSS
* Express
* MongoDB

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at <a href="https://openweathermap.org/api" > Open Weather </a> and <a href="https://trefle.io/"> Trefle </a>
2. Clone the repos
   ```sh
   git clone https://github.com/Taylor-99/Garden-Health-Frontend
   ```
   for the frontend and
   ```sh
   git clone https://github.com/Taylor-99/Garden-Health-Backend
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js` in the Backend
   ```js
   const MONGODBURI = 'ENTER YOUR API'
   const SECRET = 'ENTER YOUR API'
   const Weather_API = 'ENTER YOUR API' (open weather)
   const Plant_API = 'ENTER YOUR API' (Trefle)
   const ACCESS_ID = 'ENTER YOUR API' (aws)
   const ACCESS_KEY = 'ENTER YOUR API' (aws)
   const REGION = 'aws region'
   const BUCKET_NAME = 'aws bucket name'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The Gardening Health app is designed to promote mental well-being through the therapeutic practice of gardening and being active outdoors. Users can log their mood and activities, track garden growth, and engage with a supportive community. Regularly engaging with gardening can reduce stress, anxiety, and depression. Interaction with like-minded individuals provides encouragement, advice, and a sense of belonging. Monitoring mood and gardening progress fosters a sense of accomplishment and self-awareness. Users can share gardening tips, resources, and achievements, enriching the community with collective knowledge.

_For more examples, please refer to the [NIH Documentation](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6334070/)
[Mayo Clinic Documentation](https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/dig-into-the-benefits-of-gardening)
[NIH Documentation](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7558991/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Dashboard
    - [ ] Check weather
    - [ ] Complete challenges
    - [ ] Reminders
- [ ] Plant Journal
    - [ ] Upload plants in garden
    - [ ] Update plants
    - [ ] View other plants from a Library
        - [ ] Search for more about a plant
- [ ] Wellness Journal
    - [ ] Log mood and Journal
    - [ ] Log Activities
- [ ] Social
    - [ ] Create a post to share
    - [ ] Like and comment on others posts
- [ ] Profile
    - [ ] View Profile

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Taylor Young - [LinkedIn](www.linkedin.com/in/taylor-e-young) - Taylor.e.young99@gmail.com

Project Link: [Frontend](https://github.com/Taylor-99/Garden-Health-Frontend)
[Backend](https://github.com/Taylor-99/Garden-Health-Backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Chat GPT
* MDN web docs
* W3Schools
* Freecodecamp
* <a href="// https://www.youtube.com/watch?v=jwp4U6v-3h4
"> This Youtube video </a>
* Billie and Chris

<p align="right">(<a href="#readme-top">back to top</a>)</p>
