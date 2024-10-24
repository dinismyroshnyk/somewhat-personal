const messages = [
    "Rome wasn't built in a day, and neither is this website!",
    "Our hamsters are running as fast as they can to build this page...",
    "Plot twist: the website is actually loading, we're just really slow!",
    "404: Patience not found. Please try again later.",
    "Breaking news: Developer still figuring out how HTML works!",
    "Currently training our AI to write better 'under construction' messages...",
    "Warning: This page contains high levels of potential!",
    "Grab a coffee, we're still coding...",
    "Fun fact: This page is like modern art - still a work in progress!",
    "Loading creativity... Please stand by.",
    "Loading... If this takes too long, maybe try turning it off and on again!",
    "Excuse the mess, we're still figuring out where the cables go.",
    "Our developers are on a coffee break... Please hold!",
    "Still coding... Maybe this page will be done before the next millennium!",
    "If websites could nap, ours would be dreaming of launch day.",
    "This page is under construction. Hard hats required!",
    "We're testing the limits of patience and web development. Hold tight!",
    "Hang in there, we're just untangling the last few lines of code.",
    "Patience is a virtue. Our website will be too... once it's finished!",
    "Warning: Developer at work. Proceed with caution!",
    "We promise, this page is worth the wait... probably.",
    "Coding in progress: Watch out for falling bits and bytes!",
    "Pro tip: Refreshing won't speed up construction!",
    "Warning: This page contains high levels of procrastination!",
    "We're currently experiencing a delay due to excessive caffeine intake...",
    "Our website is being rebuilt, brick by brick... of code!",
    "404: Page not found. Please try again after we finish laughing at our own jokes!",
    "Breaking news: Developer still figuring out how CSS works!",
    "Loading... If this takes too long, maybe try turning off your computer and coming back tomorrow!",
    "Loading... Ah, never mind...",
    "Our developers are on a coffee break... and possibly a nap!",
    "Still coding... Maybe this page will be done before the next century!",
    "We promise, this page is worth the wait... probably after a few more cups of coffee!",
    "Our website is still under construction. We're just trying to figure out how many hamsters it takes to power a server.",
    "We're working on a new feature: a 'panic button' that teleports you to a finished page.",
    "Our developers are currently arguing about the best font to use. Stay tuned for a groundbreaking decision.",
    "Warning: This website may contain traces of caffeine and coding errors.",
    "Currently teaching our servers the difference between a semicolon and a comma...",
    "Legend says this website will be finished when developers finally agree on tabs vs spaces",
    "Quantum computing would make this faster, but we're stuck with a calculator from 1995",
    "Loading pixel by pixel... We believe in artisanal web development",
    "The good news: we're making progress. The bad news: we started backwards",
    "Currently negotiating with our CSS to behave properly...",
    "Our developers are playing rock-paper-scissors to decide the color scheme",
    "Warning: Website may contain traces of Stack Overflow solutions",
    "Loading... Please enjoy these randomly generated excuses",
    "Sorry for the wait - our intern accidentally deleted the internet",
    "We're not lazy, we're just giving the servers some personal space",
    "Breaking news: Developer discovered coffee machine was unplugged this whole time",
    "404: Motivation not found. Please send pizza to continue",
    "Fun fact: This page loads faster if you close your eyes and count to infinity",
    "Warning: Excessive debugging may cause spontaneous developer naps",
    "Loading... If you can read this, our distraction strategy is working",
    "Currently teaching AI to write better code than our developers... Still waiting...",
    "This website runs on hopes, dreams, and approximately 37 energy drinks",
    "Did you know? Watching this loading screen burns exactly 0 calories",
    "Our servers are powered by renewable excuses and sustainable procrastination",
    "Loading... Please wait while we download more RAM",
    "We've got 99 problems and this website is approximately 98 of them",
    "Warning: Developer's sense of humor may have leaked into the code",
    "Our progress bar is like our timeline - purely decorative",
    "Currently performing quantum calculations to determine if this page exists",
    "Loading... Think of it as digital meditation practice",
    "We're not procrastinating, we're providing you with anticipation training",
    "Warning: Website may achieve sentience before completion",
    "Plot twist: The entire dev team is currently taking a nap (it's just me, I'm napping)",
    "Team meeting in progress... Me, myself, and I are debating the color scheme",
    "Breaking news: Solo developer discovers they can't high-five themselves",
    "Current status: Arguing with myself about best practices",
    "Warning: Developer experiencing existential crisis over semicolon placement",
    "All hands on deck! ...Unfortunately, I only have two",
    "The good news: No merge conflicts. The bad news: Because I'm the only one here",
    "Currently playing all roles: Developer, Designer, Project Manager, and Coffee Maker",
    "Stand-up meeting delayed while I find a mirror to report to",
    "Code review pending... Just waiting for my other personality to wake up",
    "This website is powered by one human and questionable amounts of caffeine",
    "Breaking: Solo developer discovers rubber duck is actually terrible at coding",
    "Warning: Developer's cat has better coding suggestions than developer",
    "Scrum master, product owner, and intern all called in sick (they're all me)",
    "Fun fact: Talking to yourself about code is normal... right?",
    "The entire development team is currently in a meeting (I'm talking to myself again)",
    "404: Coworkers not found",
    "Loading... Please wait while I Google 'how to clone myself'",
    "Currently multitasking: Coding, debugging, and questioning life choices",
    "Warning: Site maintained by one sleep-deprived human with a keyboard",
    "This website is brought to you by: Determination, caffeine, and loneliness",
    "Breaking news: Developer discovers pair programming doesn't work solo",
    "Team size: 1, Stack Overflow visits: Countless",
    "Currently playing rock-paper-scissors with myself to resolve design decisions",
    "Plot twist: There is no 'we' in this website (literally)",
    "Loading... Single developer attempting to do the work of an entire team",
    "Warning: Developer may be talking to rubber ducks again",
    "Fun fact: This website's bus factor is exactly 1",
    "The entire dev team is out for coffee (be right back)",
    "Current status: Having a heated debate with myself about indentation",
    "When we said 'our developers', we meant me. Just me. Hi!",
    "Plot twist: The 'team' was me all along!",
    "Remember when we said 'we're working on it'? Well, I'm working on it",
    "Breaking news: The mysterious 'we' turns out to be one person in pajamas",
    "Those hamsters we mentioned? Yeah... it's just me running in circles",
    "Correction: When we said 'our team', we meant me and my coffee mug",
    "Update: The royal 'we' has been downgraded to a humble 'me'",
    "Fun fact: I've been using 'we' to sound more professional. Surprise!",
    "Our team is experiencing technical difficulties... and by 'our team' I mean my brain",
    "Remember that dev team we mentioned? Yeah... about that...",
    "Turns out 'we' was a bit ambitious. It's just little old me here!",
    "When I said 'our developers are working on it', I meant I'm googling it",
    "The team of experts we mentioned is actually just me and Stack Overflow",
    "Plot twist: This whole time it was just one developer and their impostor syndrome",
    "Breaking: Local developer admits to using 'we' to sound more important",
    "Those multiple developers we mentioned? All living in my head rent-free",
    "Confession time: I've been using the royal 'we' like I'm the Queen of England",
    "That large team of developers? It's just me in different chairs",
    "We apologize for the confusion... and by 'we' I mean 'I'... sorry about that",
    "Fun fact: Every time I said 'we', my rubber duck counted as the second person",
    "Those experts we mentioned are actually just my different moods throughout the day",
    "The development team would like to announce... that it's only me here",
    "Warning: Previous mentions of 'we' may have been slightly exaggerated",
    "Our team is technically just me... but I contain multitudes!",
    "When I said 'our developers', I meant me and my various browser tabs",
    "Remember our 'team of experts'? Well, I watched a lot of YouTube tutorials",
    "Apparently my multiple personalities don't count as a development team",
    "The committee has decided... wait, no, I have decided...",
    "Our extensive QA team (me before and after coffee) is working on it",
    "I've been told to stop referring to myself as 'we'... by myself",
    "Our UX team is currently debating the philosophical implications of button placement...",
    "Breaking: Development team discovers coffee machine makes better decisions than AI",
    "We've deployed our most advanced debugging tool: unplugging it and plugging it back in",
    "Our design team is currently in an intense negotiation with the color wheel",
    "Warning: Excessive enthusiasm in the development department",
    "The backend team is teaching our servers to speak in complete sentences",
    "Our front-end ninjas are currently battling rebellious CSS",
    "Breaking news: Office plant named honorary team member for emotional support",
    "The QA team has found 99 bugs in the system. They're keeping one as a pet",
    "Our security team is teaching the firewall to play nice with others",
    "Database team currently explaining to the servers that 'nap time' isn't a valid state",
    "We've assembled a task force to investigate why nothing exploded yesterday",
    "Our optimization team is currently reducing loading times from 'forever' to 'eventually'",
    "The infrastructure team is building a tower of empty coffee cups... for science!",
    "Our AI team is teaching the algorithms to appreciate dad jokes",
    "Warning: Development team experiencing temporary creativity overflow",
    "The research team is currently exploring why code works on Friday but not Monday",
    "Our DevOps team is giving the servers a pep talk",
    "The testing department reports that everything works perfectly in their dreams",
    "Our architecture team is building castles in the cloud... literally",
    "Breaking: Development team discovers zen through recursive functions",
    "The UI team is currently negotiating peace terms with Internet Explorer",
    "Our performance team is measuring speed in 'cups of coffee per feature'",
    "Warning: Spontaneous brainstorming outbreak in the development department",
    "The backend team is teaching databases to express their feelings",
    "Our code review team has declared tabs the official space of the week",
    "The deployment team is practicing their incantations for the next release",
    "Our documentation team is translating developer mumbles into English",
    "The DevOps team is currently herding cats... and servers",
    "Our analytics team is graphing developer productivity vs snack availability",
    "The mobile team is teaching apps to practice social distancing",
    "Our cloud team is installing more RAM in the clouds... wait, that's not how it works",
    "The development team has officially classified bugs as 'surprise features'",
    "Our security team is teaching the firewall to be less judgmental",
    "Warning: Creative department currently exceeding recommended pun levels",
    "The infrastructure team is building a house of cards... with load balancers",
    "Our testing team reports that 60% of the time, it works every time",
    "The frontend team is negotiating with pixels to align properly",
    "Our dev team has discovered a new state of matter: quantum code",
    "The UX team is measuring happiness in clicks per minute",
    "Our backend team is teaching databases to tell better jokes",
    "NixOS is the best.",
    "The deployment team is practicing synchronized coffee drinking",
    "Our systems team named all the servers after pizza toppings",
    "The mobile team is teaching apps to do backflips... metaphorically",
    "Our design team is creating a new color: 'Developer Dark Mode Plus Ultra'",
    "The QA team has started a support group for retired bugs",
    "Our API team is teaching endpoints to practice self-care",
    "The cloud team is installing more rainbow in the cloud... for better performance",
    "Our machine learning team taught an AI to procrastinate... too well",
    "The optimization team is currently optimizing their optimization strategies"
];

function typeMessage(element, message, speed = 50) {
    element.innerHTML = '';  // Use innerHTML instead of textContent to support cursor
    element.classList.add('typing');
    let i = 0;

    return new Promise(resolve => {
        function type() {
            if (i < message.length) {
                element.innerHTML = message.substring(0, i + 1) + '<span class="cursor"></span>';
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}


// Set and type random message on load
const messageElement = document.getElementById('message');
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
typeMessage(messageElement, randomMessage);

let isDark = false;

// Function to change the message to a new random one
function changeMessage() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    typeMessage(messageElement, randomMessage);
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    isDark = !isDark;

    const icon = document.querySelector('.icon');
    icon.src = isDark ? 'work-in-progress-dark-mode.svg' : 'work-in-progress-light-mode.svg';

    // Save the mode in localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Function to apply the saved theme on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        isDark = true;
        document.querySelector('.icon').src = 'work-in-progress-dark-mode.svg';
    } else {
        isDark = false;
        document.querySelector('.icon').src = 'work-in-progress-light-mode.svg';
    }
}

// Apply the saved theme when the page loads
applySavedTheme();

// Event listener to handle clicks on the body (but not the SVG icon)
document.body.addEventListener('click', (e) => {
    // Ignore clicks on the SVG icon (iconElement), only change the theme on other parts of the body
    if (e.target !== iconElement) {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = `ripple ${isDark ? 'light' : ''}`;

        // Calculate size needed for the ripple
        const size = Math.max(document.body.clientWidth, document.body.clientHeight);
        ripple.style.width = ripple.style.height = `${size * 2}px`;

        // Position ripple from click point
        ripple.style.left = `${e.clientX - size}px`;
        ripple.style.top = `${e.clientY - size}px`;

        document.body.appendChild(ripple);

        // Toggle dark mode after a short delay
        setTimeout(toggleDarkMode, 100);

        // Clean up ripple element after animation ends
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }
});

// Add click event to the icon to make it swing and change the message
const iconElement = document.querySelector('.icon');
iconElement.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent this click from triggering the body event listener

    // Add swinging animation
    iconElement.classList.add('swing');

    // Remove the swinging class after animation completes to allow it to swing again on subsequent clicks
    setTimeout(() => {
        iconElement.classList.remove('swing');
    }, 1500);  // Duration of the swing animation

    // Change the message to a new random one
    changeMessage();
});