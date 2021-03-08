function main(){
        let signup_button = document.querySelector("#btn-submit");
        let cancel_button = document.querySelector("#btn-cancel");

        
        cancel_button.addEventListener("click", function(event){
                event.preventDefault();
                redirect();
        });

        signup_button.addEventListener("click", function(event){
                event.preventDefault();
                let created = createUserAccount();
                if (created==true){
                        redirect();
                }
                
        });

};

function redirect(){
        window.location.href = "http://localhost:3000/"
}

function createUserAccount(){
        let username_input = document.querySelector("#username");
        let password_input = document.querySelector("#password");
        let confirm_input = document.querySelector("#password-confirm");

        if (localStorage.getItem('users')){
                user_array = JSON.parse(localStorage.getItem('users'));
        }
        else {
                user_array = [];
        }

        let username = username_input.value;
        let password = password_input.value;
        let confirm = confirm_input.value;

        if (username=="" || password=="" ||confirm==""){
                alert("Fields cannot be left blank, account not created.")
                return false;
        }
        else {
                if (password == confirm){

                        let user_credentials = [username, password]
        
                        user_array.push(user_credentials);
                        localStorage.setItem('users', JSON.stringify(user_array));
                        return true;
                }
                else {
                     alert("Passwords must match, account not created.")
                     return false;   
                }
        }
        
}


window.addEventListener('load', main);