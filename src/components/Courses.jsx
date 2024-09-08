import React from 'react'
import { useSelector } from 'react-redux'

const courses = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript, and modern web frameworks.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231205165904/web-development-image.webp',
  },
  {
    id: 2,
    title: 'Data Science',
    description: 'Master Python, data analysis, machine learning, and more.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQP_x9y2Q5RV0XbojJp7oowNIqaapAjT40A&s',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Build iOS and Android apps using React Native and Flutter.',
    image: 'https://www.zestminds.com/blog/wp-content/uploads/2021/04/Mobile-App-Development-Process-Banner.jpg',
  },
  {
    id: 4,
    title: 'Cybersecurity',
    description: 'Learn ethical hacking, network security, and cyber defense techniques.',
    image: 'https://assets.everspringpartners.com/dims4/default/0fc1868/2147483647/strip/true/crop/620x250+0+0/resize/620x250!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2F68%2F50%2F50bc96eb4ea998f053c9a6b9e914%2Fadobestock-245636933-620x250.jpg',
  },
  {
    id: 5,
    title: 'Artificial Intelligence',
    description: 'Understand AI concepts, neural networks, and deep learning.',
    image: 'https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-1200-80.jpg',
  },
  {
    id: 6,
    title: 'Blockchain Technology',
    description: 'Explore decentralized systems, cryptocurrencies, and smart contracts.',
    image: 'https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg',
  },
  {
    id: 7,
    title: 'Cloud Computing',
    description: 'Learn about AWS, Google Cloud, and Microsoft Azure.',
    image: 'https://www.ingenious.co.uk/wp-content/uploads/2023/08/What-is-Cloud-Computing-and-How-Can-it-Benefit-Our-Company-1024x512.jpeg',
  },
  {
    id: 8,
    title: 'UI/UX Design',
    description: 'Design intuitive and visually appealing user interfaces.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtM2WMXv5hFxLmHioj2VpfCtaBdjjuFIb6uQ&s',
  },
  {
    id: 9,
    title: 'DevOps',
    description: 'Master CI/CD pipelines, containerization, and cloud automation.',
    image: 'https://community.aws/raw-post-images/concepts/devops-essentials/images/devops_loop.jpeg?imgSize=1600x960',
  }
];

const Courses = () => {
  const { current } = useSelector(state => state.theme)
  return (
    <div style={{color: current === "light" ? "black" : "white", backgroundColor: current === "light" ? "white" : "gray"}} className="container mx-auto p-8 min-h-screen h-full">
      <h1 className="text-3xl font-bold text-center mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses