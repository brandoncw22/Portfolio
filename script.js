document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const posts = [
        {
            title: 'Tic Tac Toe - Java Game',
            body: 'I created a simple Tic Tac Toe game using Java. The game is played in the console and the user can play against the computer. The computer uses a simple algorithm to determine its next move. Here\'s an example: "X" goes first.',
            thumbnail: 'images/thumbnail.png',
            images: ['images/examplebotgameplay.png', 'images/gameplayloop.png']
        }
        // Add more posts as needed
    ];

    const portfolioSection = document.querySelector('.portfolio-section');
    console.log('Portfolio section:', portfolioSection);

    posts.forEach(post => {
        console.log('Processing post:', post);

        const postDiv = document.createElement('div');
        postDiv.classList.add('portfolio-post');

        const postThumbnail = document.createElement('img');
        postThumbnail.classList.add('post-thumbnail');
        postThumbnail.src = post.thumbnail;
        postThumbnail.alt = post.title;

        const postTitle = document.createElement('h2');
        postTitle.classList.add('post-title');
        postTitle.textContent = post.title;

        const postBody = document.createElement('div');
        postBody.classList.add('post-body');
        postBody.style.display = 'none'; // Initially hide the post body

        const postText = document.createElement('p');
        postText.textContent = post.body;

        postBody.appendChild(postText);

        post.images.forEach(imageSrc => {
            const postImage = document.createElement('img');
            const imageTitle = document.createElement('h3');
            imageTitle.textContent = imageSrc.split('/').pop();
            
            imageTitle.classList.add('image-title');
            
            postImage.src = imageSrc;
            postImage.alt = post.title;
            postBody.appendChild(imageTitle);
            postBody.appendChild(postImage);
        });

        postDiv.appendChild(postThumbnail);
        postDiv.appendChild(postTitle);
        postDiv.appendChild(postBody);
        portfolioSection.appendChild(postDiv);

        // Add click event to toggle the post body
        postDiv.addEventListener('click', () => {
            const isExpanded = postBody.style.display === 'block';
            postBody.style.display = isExpanded ? 'none' : 'block';
        });
    });
});