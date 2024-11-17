//titulo, autor, descripcion, date

let blogs = [];

const Blog = {
    getAll: () => blogs,
    getById: (id) => blogs.find(blog => blog.id === id),
    create: () => {
        blogs.push(newBlog);
        return newBlog;
    },
    update: (id, updateBlog) => {
        const index = blogs.findIndex (blog => blog.id === id);
        if [index !== -1] {
            blogs[index] = {...blogs{index}, ...updateBlog};
        }
    },
};

export default Blog;