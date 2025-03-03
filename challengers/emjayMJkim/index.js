const { useQuery } = require("./UseQuery.js");

const getPostById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await response.json();
}

async function usePost(postId) {
    return await useQuery({
        queryKey: ['posts', postId],
        queryFn: () => getPostById(postId)
    })
}

async function Post() {
    const { status, data, error, isFetching} = await usePost(1);
}

Post();
