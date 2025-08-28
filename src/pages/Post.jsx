import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    
    // This should now work correctly with the fixed authSlice
    const isAuthor = post && userData ? post.userID === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };


    return post ? (
  <div className="py-12">
    <Container>
      {/* Title + Actions */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        {isAuthor && (
          <div className="flex space-x-3">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-green-500">Edit</Button>
            </Link>
            <Button bgColor="bg-red-500" onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
      </div>

      {/* Featured Image */}
      <div className="w-full mb-8">
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="w-full max-h-[450px] object-cover rounded-xl shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="prose max-w-none text-gray-800 leading-relaxed">
        {parse(post.content)}
      </div>
    </Container>
  </div>
) : null

}