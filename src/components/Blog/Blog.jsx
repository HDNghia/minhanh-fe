import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("https://minhanh.wealthfarming.org/api/globals/post-recommend?depth=2");
                const { data } = response;

                const formattedBlogs = [
                    {
                        id: data.post_1.id,
                        title: data.post_1.title.trim(),
                        slug: data.post_1.slug,
                        excerpt: data.except_1,
                        image: `https://minhanh.wealthfarming.org${data.post_1.image.url}`,
                        date: new Date(data.post_1.updatedAt).toLocaleDateString("vi-VN"),
                    },
                    {
                        id: data.post_2.id,
                        title: data.post_2.title.trim(),
                        slug: data.post_2.slug,
                        excerpt: data.except_2,
                        image: `https://minhanh.wealthfarming.org${data.post_2.image.url}`,
                        date: new Date(data.post_2.updatedAt).toLocaleDateString("vi-VN"),
                    },
                    {
                        id: data.post_3.id,
                        title: data.post_3.title.trim(),
                        slug: data.post_3.slug,
                        excerpt: data.except_3,
                        image: `https://minhanh.wealthfarming.org${data.post_3.image.url}`,
                        date: new Date(data.post_3.updatedAt).toLocaleDateString("vi-VN"),
                    },
                ];

                setBlogs(formattedBlogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    className="text-center mb-12"
                >
                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"
                    >
                        Bài viết Của Chúng Tôi
                    </motion.h1>
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-gray-600 dark:text-gray-400"
                    >
                        Cập nhật những bài viết mới nhất về các chủ đề liên quan đến nghĩa trang và đời sống tâm linh.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{blog.excerpt}</p>
                                <div className="text-gray-500 text-sm dark:text-gray-400">{blog.date}</div>
                                <Link
                                    to={`/blogs/${blog.slug}`}
                                    className="text-primary dark:text-primary-light font-bold hover:underline"
                                >
                                    Đọc thêm
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
