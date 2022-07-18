<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Danijel Adrinek">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>

    <!-- Arrows For Navigating The Site -->
    <div class="arrow inactive" id="left-arrow">
        &xlarr;
    </div>
    <div class="arrow" id="right-arrow">
        &xrarr;
    </div>

    <!-- Space between first and second section -->
    <div id="background">
    </div>

    <!-- First section -->
    <div id="section0">
        <!-- Opening Titles -->
        <div id="animated-title-parent">
            <h1 style="--order: 0">Wellcome</h1>
            <h1 style="--order: 1">Thank You For <br>Being Here!</h1>
        </div>

        <!-- Closing Svg and Paths -->
        <div class="container" id="js-container" style="--order: 2">
            <div class="content" id="js-content" style="--order: 2">
                <div class="curved upper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="rgb(218,165,32)" fill-opacity="1" d="M0,160L30,176C60,192,120,224,180,240C240,256,300,256,360,218.7C420,181,480,107,540,106.7C600,107,660,181,720,213.3C780,245,840,235,900,213.3C960,192,1020,160,1080,170.7C1140,181,1200,235,1260,240C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                </div>
                <div class="curved lower">
                    <h1>About me:</h1>
                    <p>
                    Hi, my name is Danijel Adrinek, I spend most of my free time learning how to become better at programming, hacking, robotics, Artificial Neural Networks and Machine Learning.
                    On this site you will be able to see some of the projects I am working on as well as how they came to be.
                    I know all of this seems like a lot to be working on, but I consider myself to be a fast learner so I manage to find the time to work on all of them.
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="black" fill-opacity="1" d="M0,160L30,176C60,192,120,224,180,240C240,256,300,256,360,218.7C420,181,480,107,540,106.7C600,107,660,181,720,213.3C780,245,840,235,900,213.3C960,192,1020,160,1080,170.7C1140,181,1200,235,1260,240C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- Second section -->
    <div id="section1">
        <!-- The div over the image or video on second section that contains options -->
        <div id="selector">
            <div class="options">
                <div class="option active" id="hacking-button">Hacking</div>
                <div class="option" id="web-development-button">Web Development</div>
                <div class="option" id="robotics-button">Robotics</div>
                <div class="option" id="machine-learning-button">Machine Learning</div>
                <div class="option" id="coding-button">Coding</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(218,165,32)" fill-opacity="0.83" d="M0,192L40,186.7C80,181,160,171,240,154.7C320,139,400,117,480,90.7C560,64,640,32,720,42.7C800,53,880,107,960,133.3C1040,160,1120,160,1200,149.3C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
        <!-- If you're viewing this section from a wide screen it will display a video, and if you're viewing it from phone it will display an image -->
        <video id="background-video" autoplay loop muted src="assets/videos/ethical_hacking.mp4"></video>
        <img src="assets/images/metasploit.png" id="mobile_background" class="active">
    </div>

    <!-- Third section -->
    <div id="section2">

        <!-- Card to hover or click to display contents -->
        <div class="card">
            <div class="circle"></div>
            <div class="card-content">
                <h2>Danijel Adrinek</h2>
                <p>I enjoy learning new ways to solve problems and being presented with challenges. I made this website using nothing but vanilla javascript because I got very used to jQuery helping me out and I wanted to learn something new by doing. I also learned a lot of cool CSS tricks along the way and I hope my journey to a new job will be fun, exciting, and challenging.</p>
                <button href="#" class="btn" id="contact-me-btn">Contact Me</button>
            </div>
            <img src="./assets/images/My_Image.jpg" alt="my_image">
        </div>
        
    </div>

    <!-- TODO set up new scripts -->
    <script src="./index.js"></script>
</body>
</html>