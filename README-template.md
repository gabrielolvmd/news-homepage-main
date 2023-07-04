# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

<img src="/doc/desktop-grid.png">
<img src="/doc/mobile-1.jpeg">
<img src="/doc/mobile-menu.jpeg">
<img src="/doc/mobile-2.jpeg">
<img src="/doc/mobile-3.jpeg">

### Links

- Solution URL: [Add solution URL here](https://github.com/gabrielolvmd/news-homepage-main)
- Live Site URL: [Add live site URL here]()

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Css Grid
- SCSS
- Mobile-first workflow

### What I learned

This project showcases an efficient implementation of layout using CSS Grid, ensuring a flexible and organized grid structure for content display. The design is responsive, seamlessly adapting to different screen sizes and devices. The use of media queries and responsive design techniques allows the content to be properly viewed on smartphones, tablets, and desktops.

Additionally, JavaScript is employed to enhance interactivity and functionality. Through JavaScript, features such as click events, DOM manipulation, and dynamic element display have been implemented.

The combined use of CSS Grid, responsiveness, and JavaScript results in a smooth user experience, providing an adaptable, interactive, and pleasant layout for users across various devices.

```css

In this project, I implemented a technique to utilize two images based on the user's screen size. By leveraging the srcset attribute along with the sizes attribute, I ensured responsive image rendering. The srcset attribute provided multiple image sources with different resolutions, while the sizes attribute specified the layout sizes for optimal image selection. This approach resulted in an optimized and visually appealing experience across various devices.

<picture>
        <source media="(max-width: 400px)" srcset="/assets/images/image-web-3-mobile.jpg">
        <source media="(min-width: 401px)" srcset="/assets/images/image-web-3-desktop.jpg">
        <img src="/assets/images/image-web-3-desktop.jpg" alt="Imagem">
      </picture>
```
