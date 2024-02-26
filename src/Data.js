import React from 'react'
import App from './App'

const Data = () => {
  const data = [
    {
      "id":1,
      "image":"images/img_download1.png",
      "imgTit":"Builder 2",
      "title":"WixPro 72-Inch Responsive Website Builder-",
      "info":"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      "highlight":"Main Highlights",
      "highlightData":"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      "rating":9.8,
      "grade":"Exceptional",
      "stars":"images/img_image_amber_500.svg",
      "eimg":"./images/img_image_white_a700.svg",
      "etype":"Best Value"
  },
    {
      "id":2,
      "image":"images/img_download1.png",
      "imgTit":"Builder",
      "title":"SiteCraft 68-Inch Ultimate Web Design Studio-",
      "info":"Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      "highlight":"Main Highlights",
      "highlightData":"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      "rating":9.5,
      "grade":"Excellent",
      "stars":"images/img_image_amber_500_11x66.svg",
      "eimg":"./images/img_image_white_a700.svg",
      "etype":"Best choice"
  },
    {
      "id":3,
      "image":"images/img_download1.png",
      "imgTit":"Builder 1",
      "title":"WixPro 72-Inch Responsive Website Builder-",
      "info":"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      "highlight":"Main Highlights",
      "highlightData":"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      "rating":9.3,
      "grade":"Exceptional",
      "stars":"images/img_image_amber_500.svg"
  },
    {
      "id":4,
      "image":"images/img_download1.png",
      "imgTit":"CDK",
      "discount":"26%",
      "title":"CDK Resposive Builder-",
      "info":"An extensive library of widgets and apps, and detailed step-by-step guides",
      "highlight":"Main Highlights",
      "highlightPoint":[
        {
          "id":"9.9",
          "point":"Building Responsive",
        },
        {
          "id":"8.9",
          "point":"Cool",
        },
        {
          "id":"8.9",
          "point":"Docs",
        },
      ],
      "extras":[
        {
          "id":"documentation", 
        },
        {
          "id":"Easy Use",
        },
        {
          "id":"Out Of Box",
        }
      ],
      "rating":9.1,
      "grade":"Very Good",
      "stars":"images/img_image_11x66.svg",
  },

]
    return (
        <div>
      <App data={data} />
    </div>
  )
}

export default Data
