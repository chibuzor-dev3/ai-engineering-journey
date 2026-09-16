async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log("Title:", data.title);
    console.log("Body:", data.body);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getPost();