var images, image;

// Describe this function...
function display_image() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_img_list = document.getElementById('img-list');
    element_img_list.replaceChildren();
    images.forEach((image) => {
        let new_img = document.createElement('img');
        new_img.setAttribute("src", image);

        element_img_list.appendChild(new_img);
    });
}


images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gvzCIp9exgiM3HCN7advGH2L5Gj1NHYZOg&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFR0O3bxgkAvppQipaRGGc8IBLMqCbB-DUFw&s' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jVm7nF6Oyh6CIFSvsZEDhmSyCLhL5Mv8gQ&s' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xLDlq3v8VzaLGzJjzr8PLpSznyRGr5HaSg&s' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtLvgPhppexvz8HiK4cnGUqkCL6TUxbwAgA&s' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQrvuVIFlnVTV2cRfdgjzlv7sZHkUjrO5jA&s'];
display_image();


document.getElementById('next-button').addEventListener('click', (event) => {
    images.push(images.shift());
    display_image();

});

document.getElementById('prev-button').addEventListener('click', (event) => {
    images.unshift(images.pop());
    display_image();

});