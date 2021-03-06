function main(){
        console.log("index.js loaded");
        
        let user_posts = getCachedPosts();

        loadCachedPosts(user_posts);

        // Create a post button
        let post_button = document.querySelector("#btn-chevron-post");
        post_button.addEventListener("click", function(event){
                event.preventDefault();
                user_posts = createPost(user_posts);
                console.log("user_posts:" + user_posts)
        });

        //Sign-up pop-up
        let signup_button = document.querySelector("#btn-signup");
        signup_button.addEventListener("click", function(event){
                event.preventDefault();
                signupModal();
        });
}


function currentDate(){
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        let cTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        let formattedDate = "<b>" + cDay + "/" + cMonth + "/" + cYear + " - " + cTime + "</b>";
        return formattedDate;
}

function loadCachedPosts(post_array){
        let container = document.querySelector("#content-container");
        if (post_array.length < 1){
                console.log("No cached posts to load");
        }
        else{
                for (let i = 0; i < post_array.length; i++){
                        container.appendChild(new_post[i]);
                }
                console.log("Loaded cached posts");
        }
}

function getCachedPosts(){
        let posts = new Array(0);
        return posts;
}

function signupModal(){

        let new_post = document.createElement('div');
        new_post.className = 'signup-modal';
        new_post.innerHTML = ``

}


function createPost(post_array){
        let next_id = post_array.length;
        let submit_date = currentDate();

        console.log("Create post executed")

        let container = document.querySelector("#content-container");
        let username = 'testusername';
        
        let post_input = document.querySelector("#post-input");
        let text_content = post_input.value;

        if (text_content == ""){
                window.alert("Text content cannot be blank!");
                return;
        }

        else{

                console.log(text_content);

                let new_post = document.createElement('div');
                new_post.className = 'post-card';
                new_post.id = `post-${next_id}`;
                new_post.innerHTML = `<div class="post-grid"><div class="likebar"><div class="like-wrapper"><div class="upvote"><i class="fa fa-arrow-up" aria-hidden="true"></i></div><p>0</p><div class="downvote"><i class="fa fa-arrow-down" aria-hidden="true"></i></div></div></div><div class="info"><div class="user-ava"></div><div class="info-wrapper-text"><p>${username}</p><p style="text-indent: 2em">${submit_date}</p></div></div><div class="post-content"><div class="text-wrapper"><p>${text_content}</p></div></div><div class="comment-bar"><div class="comment-bar-wrapper"><div class="comment-bar-messages"><a href="#"><i class="fa fa-comment" aria-hidden="true"></i></a><a href="#"><p style="text-indent: 8px" id="comment-count">0 Comments</p></a></div><div class="comment-bar-share"><a href="#"><i class="fa fa-share" aria-hidden="true"></i></a><a href="#"><p style="text-indent: 8px">Share</p></a></div><div class="comment-bar-save"><a href="#"><i class="fa fa-bookmark" aria-hidden="true"></i></a><a href="#"><p style="text-indent: 8px">Save</p></a></div></div></div></div>`

                container.appendChild(new_post);

                post_array.push(next_id);
                console.log("post_array:" + post_array)
                return post_array;
        }
}

window.addEventListener('load', main);
