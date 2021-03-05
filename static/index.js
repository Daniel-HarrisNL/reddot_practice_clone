function main(){
        //let postContainer = document.querySelector("#content-container");
        console.log("Test");
}


function currentDate(){
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        let cTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        let formattedDate = "<b>" + cDay + "/" + cMonth + "/" + cYear + " - " + cTime + "</b>";
        console.log(formattedDate);
        return formattedDate;
}

function createPost(){

        let SUBMIT_DATE = currentDate();
        
        
        // <div class="post-card"><div class="post-grid"><div class="likebar"><div class="like-wrapper"><div class="upvote"><i class="fa fa-arrow-up" aria-hidden="true"></i></div><p>0</p><div class="downvote"><i class="fa fa-arrow-down" aria-hidden="true"></i></div></div></div><div class="info"><div class="user-ava"></div><div class="info-wrapper-text"><p>USERNAME</p><p style="text-indent: 2em">SUBMIT_DATE</p></div></div><div class="post-content"><div class="text-wrapper"><p>TEXT_CONTENT</p></div></div><div class="comment-bar"><div class="comment-bar-wrapper"><div class="comment-bar-messages"><a href="#"><i class="fa fa-comment" aria-hidden="true"></i></a><a href="#"><p style="text-indent: 8px" id="comment-count">NUM_COMMENTS Comments</p></a></div><div class="comment-bar-share"><a href="#"><i class="fa fa-share" aria-hidden="true"></i></a><a href="#"><p style="text-indent: 8px">Share</p></a></div><div class="comment-bar-save"><a href="#"><i class="fa fa-bookmark" aria-hidden="true"></i></a><a href="#"><p style="text-indent: 8px">Save</p></a></div></div></div></div></div>
}

window.addEventListener('load', main);