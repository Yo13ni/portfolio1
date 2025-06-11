import React from 'react'
import { useParams, Link } from 'react-router-dom'

const serviceDetails = {
  1: {
    title: "Web Design",
    content: `
      Our web design service focuses on creating visually appealing and intuitive layouts 
      that enhance user experience. We apply modern design trends and principles to build 
      interfaces that are both beautiful and functional. From wireframes to mockups, 
      every detail is crafted with the user in mind. We ensure your brand identity is 
      clearly represented through color schemes, typography, and layout. 
      Our responsive designs guarantee optimal viewing on any device. 
      We use tools like Figma and Adobe XD for precision design work. 
      Every page is optimized for performance and accessibility. 
      The result is a sleek, fast-loading, and accessible website. 
      Your users will love interacting with a design that just makes sense.
    `
  },
  2: {
    title: "Frontend Development",
    content: `
      Our frontend development service brings your design to life using HTML, CSS, and JavaScript. 
      We specialize in building fast, responsive, and interactive interfaces. 
      Technologies like React and Tailwind CSS help us create scalable and maintainable UI components. 
      We ensure consistency across browsers and devices through thorough testing. 
      Accessibility is a top priority in all our builds. 
      We integrate modern animations and transitions for smooth UX. 
      Code is written cleanly and efficiently following best practices. 
      Performance optimization is part of our process from the start. 
      We also integrate frontend with APIs for dynamic content. 
      Your website will look amazing and function seamlessly.
    `
  },
  3: {
    title: "Backend Development",
    content: `
      Our backend development service focuses on building secure and scalable server-side logic. 
      We use technologies like Node.js, Express, and MongoDB to power web applications. 
      Our architecture handles data storage, authentication, and authorization. 
      We write efficient and secure REST APIs that are easy to consume. 
      Error handling and logging are integrated for maintainability. 
      Data validation and sanitization help keep your app secure. 
      We also set up database schemas optimized for performance. 
      Deployment and CI/CD pipelines are part of the package. 
      Our backend integrates smoothly with your frontend. 
      The result is a reliable foundation for any modern app.
    `
  },
  4: {
    title: "Graphics Design",
    content: `
      Our graphics design service transforms your brand vision into impactful visuals. 
      We create stunning UI/UX designs for websites and mobile apps. 
      Our team excels in banner design, logos, business cards, and social media assets. 
      Tools like Adobe Illustrator, Photoshop, and Figma help us craft professional results. 
      We understand the balance between form and function in visual design. 
      Every pixel is placed with purpose to support user goals. 
      Our sticker and branding designs help businesses stand out. 
      We provide design systems that ensure consistency across all touchpoints. 
      Visuals are optimized for different platforms and resolutions. 
      Let us turn your creative ideas into compelling digital experiences.
    `
  }
}

const ServiceDetail = () => {
  const { id } = useParams()
  const service = serviceDetails[id]

  if (!service) return <p className="text-center mt-12 text-white">Service not found.</p>

  return (
    <div className='bg-black text-white min-h-screen py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold mb-6 text-yellow-400'>{service.title}</h2>
        <p className='text-lg leading-loose whitespace-pre-line'>{service.content}</p>
        <Link to="/" className="mt-6 inline-block text-blue-400 hover:underline">
          ← Back to Services
        </Link>
      </div>
    </div>
  )
}

export default ServiceDetail
