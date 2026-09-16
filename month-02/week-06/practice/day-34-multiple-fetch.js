async function getPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const posts = await response.json();

    console.log("Total posts:", posts.length);

    posts.slice(0, 5).forEach(post => {
      console.log(`Post ${post.id}: ${post.title}`);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getPosts();