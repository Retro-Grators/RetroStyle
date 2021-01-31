# RetroStyle
SwampHacks 2021 (UF)

Schema info:
- background color
- font, color & size for heading
- font, color & size for regular text

# Installing the Extension
1. Download the source code
2. Go to chrome://extensions/ in Chrome, Edge, or another chromium browser
3. Toggle Developer mode on
4. Click "Load Unpacked" extension and select the extension-src directory
5. Click the now installed extension
6. If you are having trouble finding it, you may have to click the puzzle piece button to the right of your chrome address bar 

# Project Details
## Inspiration
Our 36-hour journey to perdition was paved with good intentions.  We explored a solution that would be a new resource for wheelchair-enabled individuals and others with mobility challenges.  Another possibility was a green project that would reduce both environmental and economic waste.  At some point, though, we realized that like just about everyone else on the planet this past year, it would be nice to do something a little fun.  That's when it struck us to do something in keeping with the Swamphacks' theme - _Retro!_  Although the resulting product might be fun, the process of cranking it out in (less than) 36 hours turned out to be a real challenge (and fun).
## What it does
Our _RetroStyle_ project is a Google Chrome extension that empowers the user to transport a favorite website back to another place and time.  A time before social distancing would be nice.  We're just sayin'!  Although the web page retains all its functionality, it is transformed into one of a choice of themes.  The user might be into flamingos and have a pet alligator named Elvis.  80's theme!  Perhaps a 90's theme is more the user's speed.  There's a theme for Star Wars fans, or even minimalists who prefer the tranquility of a dark mode.  Regardless, it has to be better than any 2020 theme, although there is a revert button just in case.
## How we built it
Through blood, sweat, and tears.  Well, it only felt that way.  Google did a fabulous job in how easy they make it for developers or hobbyists to build Chrome extensions.  Although it's not as complex as, let's say, flight control software for the Boeing 787 (ugh), getting the extension to perform as desired (in 36 hours), though, was a little tricky.  With some HTML, CSS, and Javascript, we injected scripts to reconfigure the various style properties dictating how a web page is displayed.  These included, for our Version 1.0, the background color, background image, and text colors.  (Future iterations will include custom fonts and music.)  To get the script to execute on the Chrome tab and the extension, the two components needed to be able to communicate with each other, however.  To accomplish this, an _execute function_ was utilized whereby instructions can be passed as a string, and in turn be executed.  After some feverish coding and a lot of head scratching, _voila!_
## Challenges we ran into
Originally, we wanted to create a back-end database using Google's Cloud Firestore and Cloud Storage solutions since none of us had any significant experience with them.  Although we found the initial setup extremely streamlined and headache-free, we ran into obstacles in getting it to integrate with Chrome extensions.  Towards the end of the 36-hours, we started making headway, but by then, we felt it more important to deliver a Minimum Viable Product (MVP).  Consistent with that overriding priority, after numerous hours of concerted struggles, we also tabled incorporating custom fonts.  Can you imagine how sweet it would be for H1 headings to be in a _Miami Vice_ font, though?
## Accomplishments that we're proud of
We realized early on that our project would be challenging, especially since none of us were experts in Javascript or front-end development.  The fact that we also could not collaborate in the same room presented an interesting twist.  Notwithstanding, the struggles in overcoming such tests are their own reward.  In the end, we were able to produce an MVP by embracing a collaborative spirit and leaning on each other.  The ability to be able to do this is crucial, now more than ever.  Sure, we're not going to the win a Nobel prize (and more than likely not even some drones), but for a first-time hackathon group, we accomplished more than what we set out to do.
## What we learned
Each of us took something away from the experience.  We definitely learned about new technologies that we had used for the first time, and even some that we didn't get to use. The journey also reinforced things we already knew, like that with hard work, determination, and a little ingenuity, anything is possible.
## What's next for Retro-Grator
For us, definitely more hackathons!  In addition to the drive to learn that is fueled by passion, having only 36 hours to learn something new makes for a great accelerant.  In the meantime, we know we'll be further exploring all the technologies we touched this weekend and hopefully build on our MVP to produce a Version 2.0 that includes things like custom fonts and background music.  Sonny Crockett would do no less (if he was a software engineer).  Why should we?
