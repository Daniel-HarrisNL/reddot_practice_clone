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
        // let signup_button = document.querySelector("#btn-signup");
        // signup_button.addEventListener("click", function(event){
        //         event.preventDefault();
        //         signupModal();
        // });

        //let comment_buttons = document.querySelectorAll("[id^='comment-expand-']");
        
        // comment_buttons.forEach(comment_button => {
        //         comment_button.addEventListener("click", function(event){
        //                 let this_button = event.target.id;
        //                 console.log("Target button ID: " + this_button)
                        
        //                 let parent_post = getParentPost(this_button);
                        
        //                 console.log(this_button);
                        
        //                 showComments(parent_post);
        //         });
        // });
           
}

function getParentPost(button_id){
        let relative_id = toString(button_id).match(/\d+/);
        console.log("relative ID:" + relative_id);
        let parent_post = document.querySelectorAll(`#post-card-${relative_id}`);
        console.log("parent post:" + parent_post)

        return parent_post
}

function showComments(target_post_id){
        let target_post = document.querySelector(`#${target_post_id}`);
        let comment_section = target_post.querySelector("#expand-container");
        comment_section.style.display = "block";
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

function createReply(target_post_id, target_reply){
        let target_post = document.querySelector(`#${target_post_id}`);
        let my_container = target_post.querySelector("#reply-content");
        
        let reply_text = document.querySelector(target_reply).value;
        if (reply_text == ""){
                window.alert("Reply content cannot be blank!");
                return;
        }
        else{
                let reply_content = document.createElement('div');
                reply_content.className = 'reply-wrapper';
                reply_content.innerHTML = `<p>${reply_text} - u/testReplyUser</p>`

                //Reset value box to empty
                document.querySelector(target_reply).value = "";
                //Insert new reply into container
                my_container.appendChild(reply_content);

                //Increment number of comments on counter button
                let comment_counter = target_post.querySelector("[id^='comment-expand-']");
                let full_inner = comment_counter.innerHTML;
                let digit_pattern = /\d+/;
                let integer_of_inner = parseInt(full_inner.match(digit_pattern));
                integer_of_inner = integer_of_inner + 1;
                comment_counter.innerHTML = `${integer_of_inner} Comments`
        }

}


function createPost(post_array){
        let next_id = post_array.length;
        let submit_date = currentDate();

        console.log("Create post executed")

        let container = document.querySelector("#content-container");
        let username = 'u/testusername';
        
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
                new_post.id = `post-card-${next_id}`;
                new_post.innerHTML = `<div class="post-grid">
                <div class="likebar">
                        <div class="like-wrapper">
                                <div class="upvote">
                                        <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </div>
                                <p>0</p>
                                <div class="downvote">
                                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                </div>
                        </div>
                </div>

                <div class="info">
                        
                        <div class="user-ava"></div>
                        <div class="info-wrapper-text">
                                <p>${username}</p>
                                <p style="text-indent: 2em" id="date-time">${submit_date}</p>
                        </div>
                        
                </div>

                <div class="post-content"> 
                        <div class="text-wrapper">
                                <p>${text_content}</p>
                        </div>
                </div>

                

                <div class="comment-bar">
                        <div class="comment-bar-wrapper">
                                <div class="comment-bar-messages">
                                        <a href="#!"><i class="fa fa-comment" aria-hidden="true"></i>
                                        <a href="#!"><p style="text-indent: 8px" id="comment-expand-${next_id}">0 Comments</p></a>
                                        
                                </div>
                                
                                <div class="comment-bar-share">
                                        
                                        <a href="#!"><i class="fa fa-share" aria-hidden="true"></i></a>
                                        <a href="#!"><p style="text-indent: 8px">Share</p></a>
                                        
                                </div>

                                <div class="comment-bar-save">
                                        
                                        <a href="#!"><i class="fa fa-bookmark" aria-hidden="true"></i></a>
                                        <a href="#!"><p style="text-indent: 8px">Save</p></a>
                                        
                                </div>
                                
                        </div>
                </div>

                <div class="expand-container" id="expand-container">
                        <!-- Add comments/replies above this point -->
                        <div class="reply-content" id="reply-content">
                        </div>
                        
                        <div class="reply-bar">
                                <input type="text" class="post-input" id="reply-input-${next_id}" placeholder=" Post a reply...">
                                <a href="#!" class="btn-ico" id="btn-chevron-reply"><i class="fa fa-chevron-right" aria-hidden="true" ></i>
                                </i></a>
                        </div>
                
                </div>
        </div>`
                //Reset create a post text to empty
                post_input.value = "";

                //Add the new post to the container
                container.appendChild(new_post);

                //Handle comment button
                local_comment_button = new_post.querySelector(`#comment-expand-${next_id}`);
                local_comment_button.addEventListener("click", function(event){
                        let this_button = event.target.id;
                        
                        let parent_post = `post-card-${next_id}`//getParentPost(this_button);
                        console.log("pair pt1: " + parent_post)
                        console.log("pair pt2: " + this_button);
                        
                        showComments(parent_post);
                        
                });

                // //Handle adding a reply
                local_reply_button = new_post.querySelector(`#btn-chevron-reply`);
                local_reply_button.addEventListener("click", function(event){
                        let this_button = event.target.id;
                        
                        let parent_post = `post-card-${next_id}`//getParentPost(this_button);
                        console.log("pair pt1: " + parent_post)
                        console.log("pair pt2: " + this_button);
                        
                        let target_reply = `#reply-input-${next_id}`
                        createReply(parent_post, target_reply);
                        console.log("exited create reply")
                });

                post_array.push(next_id);
                console.log("post_array:" + post_array)
                return post_array;
        }
}

window.addEventListener('load', main);
