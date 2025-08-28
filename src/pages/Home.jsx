import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    
    // Get authentication status from Redux
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        setLoading(true)
        
        // Only fetch posts if user is authenticated
        if (authStatus) {
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                } else {
                    setPosts([])
                }
                setLoading(false)
            }).catch((error) => {
                console.error("Error fetching posts:", error)
                setPosts([])
                setLoading(false)
            })
        } else {
            // User is not authenticated, clear posts
            setPosts([])
            setLoading(false)
        }
    }, [authStatus]) // Re-run when auth status changes

    // Show loading state
    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Loading...
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // Show login message if not authenticated OR no posts available
    if (!authStatus || posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                {!authStatus ? "Login to read posts" : "No posts available"}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // Show posts if authenticated and posts exist
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
                    {posts.map(post => (
                        <PostCard 
                            key={post.$id} 
                            $id={post.$id} 
                            title={post.title} 
                            featuredImage={post.featuredImage} 
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home