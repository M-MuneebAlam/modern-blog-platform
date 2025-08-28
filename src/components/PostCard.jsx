// import React from 'react'
// import appwriteService from "../appwrite/config"
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredImage}) {
//     // console.log("Preview URL:", appwriteService.getFilePreview(featuredImage))

//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
//                 className='rounded-xl' />

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{title}</h2>
//         </div>
//     </Link>
//   )
// }


// export default PostCard


// import React from 'react'
// import appwriteService from "../appwrite/config"
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredImage}) {
//   const cardWidth = '300px' // adjust as needed
//   const cardHeight = '400px' // adjust as needed
//   const imageHeight = '200px' // adjust as needed

//   return (
//     <Link to={`/post/${$id}`}>
//       <div 
//         className='bg-gray-100 rounded-xl p-4 flex flex-col justify-between m-2'
//         style={{width: cardWidth, height: cardHeight}}
//       >
//         <div className='w-full mb-4 overflow-hidden' style={{height: imageHeight}}>
//           <img 
//             src={appwriteService.getFilePreview(featuredImage)} 
//             alt={title}
//             className='rounded-xl w-full h-full object-cover'
//           />
//         </div>
//         <h2 className='text-xl font-bold truncate'>{title}</h2>
//       </div>
//     </Link>
//   )
// }

// export default PostCard


import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  const cardHeight = '400px'
  const imageHeight = '300px'

  return (
    <Link to={`/post/${$id}`}>
      <div
        className='bg-white rounded-xl p-4 flex flex-col justify-between w-full h-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200'
        style={{minHeight: cardHeight}}
      >
        <div className='w-full mb-4 overflow-hidden' style={{height: imageHeight}}>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className='rounded-xl w-full h-full object-cover'
          />
        </div>
        <h2 className='text-xl font-bold truncate'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
