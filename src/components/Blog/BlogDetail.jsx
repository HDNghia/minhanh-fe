import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { renderContent } from "./RenderContent";

const BlogDetailPage = () => {
    const { slug } = useParams();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch data from API
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`https://minhanh.wealthfarming.org/api/posts?where[slug][equals]=${slug}`);
                const fetchedData = response.data.docs;

                // Transform API response to desired format
                const formattedBlogs = fetchedData.map((blog) => ({
                    title: blog.title,
                    slug: blog.slug,
                    date: new Date(blog.createdAt).toLocaleDateString('vi-VN'),
                    author: blog.author.full_name, // Extract name from email
                    content: blog.content.root.children.map((child) => renderContent(child)).join(' '),
                    image: 'https://minhanh.wealthfarming.org' + blog.image.url,
                }));

                setBlogs(formattedBlogs[0]);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    if (!blogs) {
        return <div className="text-center py-16">Bài viết không tồn tại.</div>;
    }

    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-900 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={blogs.image}
                            alt={blogs.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                                {blogs.title}
                            </h1>
                            <div className="text-gray-600 dark:text-gray-400 mb-4">
                                <span className="mr-4">Ngày đăng: {blogs.date}</span>
                                <span>Tác giả: {blogs.author}</span>
                            </div>
                            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                <div
                                    className="prose prose-lg max-w-none mb-12"
                                    dangerouslySetInnerHTML={{ __html: blogs.content }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;