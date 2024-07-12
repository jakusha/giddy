import theme from "src/themes"

export const getMarkup = (color?: string): any => {
    const svgFillColor = color || '#000000'
    return {
        home: `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.69653 9L12.6965 2L21.6965 9V20C21.6965 20.5304 21.4858 21.0391 21.1107 21.4142C20.7357 21.7893 20.227 22 19.6965 22H5.69653C5.1661 22 4.65739 21.7893 4.28232 21.4142C3.90725 21.0391 3.69653 20.5304 3.69653 20V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69653 22V12H15.6965V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
'active-home': `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.69653 9L12.6965 2L21.6965 9V20C21.6965 20.5304 21.4858 21.0391 21.1107 21.4142C20.7357 21.7893 20.227 22 19.6965 22H5.69653C5.1661 22 4.65739 21.7893 4.28232 21.4142C3.90725 21.0391 3.69653 20.5304 3.69653 20V9Z" stroke=${svgFillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69653 22V12H15.6965V22" stroke=${svgFillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
search: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9999 20.9999L16.6499 16.6499" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
'active-search': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke=${svgFillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9999 20.9999L16.6499 16.6499" stroke=${svgFillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
newpost: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
'active-newpost': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19" stroke=${theme.colors.DEEP_BLUE_100} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19" stroke=${theme.colors.DEEP_BLUE_100} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
videofeed: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2127_2)">
<path d="M22.5334 6.88631C22.4146 6.41172 22.1727 5.97688 21.8321 5.62571C21.4914 5.27455 21.0642 5.01949 20.5934 4.88631C18.8734 4.46631 11.9934 4.46631 11.9934 4.46631C11.9934 4.46631 5.1134 4.46631 3.3934 4.92631C2.92265 5.05949 2.49538 5.31455 2.15475 5.66571C1.81412 6.01688 1.57219 6.45172 1.4534 6.92631C1.13861 8.67186 0.984636 10.4426 0.9934 12.2163C0.982179 14.0034 1.13617 15.7876 1.4534 17.5463C1.58436 18.0062 1.83171 18.4245 2.17154 18.7608C2.51138 19.0971 2.93222 19.3401 3.3934 19.4663C5.1134 19.9263 11.9934 19.9263 11.9934 19.9263C11.9934 19.9263 18.8734 19.9263 20.5934 19.4663C21.0642 19.3331 21.4914 19.0781 21.8321 18.7269C22.1727 18.3757 22.4146 17.9409 22.5334 17.4663C22.8458 15.7339 22.9997 13.9766 22.9934 12.2163C23.0046 10.4293 22.8506 8.64501 22.5334 6.88631Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.74341 15.4863L15.4934 12.2163L9.74341 8.94629V15.4863Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2127_2">
<rect width="24" height="24" fill="white" transform="translate(-0.0065918 0.466309)"/>
</clipPath>
</defs>
</svg>
`,
'active-videofeed': `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2127_2)">
<path d="M22.5334 6.88631C22.4146 6.41172 22.1727 5.97688 21.8321 5.62571C21.4914 5.27455 21.0642 5.01949 20.5934 4.88631C18.8734 4.46631 11.9934 4.46631 11.9934 4.46631C11.9934 4.46631 5.1134 4.46631 3.3934 4.92631C2.92265 5.05949 2.49538 5.31455 2.15475 5.66571C1.81412 6.01688 1.57219 6.45172 1.4534 6.92631C1.13861 8.67186 0.984636 10.4426 0.9934 12.2163C0.982179 14.0034 1.13617 15.7876 1.4534 17.5463C1.58436 18.0062 1.83171 18.4245 2.17154 18.7608C2.51138 19.0971 2.93222 19.3401 3.3934 19.4663C5.1134 19.9263 11.9934 19.9263 11.9934 19.9263C11.9934 19.9263 18.8734 19.9263 20.5934 19.4663C21.0642 19.3331 21.4914 19.0781 21.8321 18.7269C22.1727 18.3757 22.4146 17.9409 22.5334 17.4663C22.8458 15.7339 22.9997 13.9766 22.9934 12.2163C23.0046 10.4293 22.8506 8.64501 22.5334 6.88631Z" stroke=${svgFillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.74341 15.4863L15.4934 12.2163L9.74341 8.94629V15.4863Z" stroke=${svgFillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2127_2">
<rect width="24" height="24" fill=${svgFillColor} transform="translate(-0.0065918 0.466309)"/>
</clipPath>
</defs>
</svg>
`,
notifications: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
'active-notifications': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke=${svgFillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke=${svgFillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    }
}