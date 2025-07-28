This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

1. Project Setup

git clone repo-url
cd supreme-group-frontend
npm install
npm run dev

2. Component architecture overview.

Created separate Components for each section
Banner
Contact(Contact,Contact form)
Footer
Header
VideoSection
Layout
Utils>images.js to maintain all the images in one place

3. Responsive design strategy.
   For responsive design I have used Tailwind breakpoints and implemented the Css according to the break points

4. Performance
   Optimized animation performance with Framer Motion
   Reduced bundle size through selective imports

5. Accessibility considerations
   Semantic HTML structure
   Proper color contrast ratios
   Focus states for all interactive elements

6. Explanation of any third-party libraries used
   I have used External libraries like

   1. Tailwind CSS v4.1 For fast UI development,Animation utilities for basic transitions
   2. Farmer Motion for animation part

7. Assumptions made and decisions taken during the implementation process.

   1. Project Architecture
   2. Responsive Design
   3. Responsive Design (Custom animation is time taking also tailwind utility speeds up development)

8. Challenges faced and potential solutions.
   Not much challenges I have faced but in the video rendering and animation part I have faced challenges
   to implement animation and scrolling triggers

9. Suggested upcoming features and improvements.
   We can improve the rendering of multiple videos and animation which is making website page heavy so we can optimize it more
