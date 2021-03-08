function main(){
        let login_button = document.querySelector("#btn-submit");
        let cancel_button = document.querySelector("#btn-cancel");

        
        cancel_button.addEventListener("click", function(event){
                event.preventDefault();
                redirect();
        });

        login_button.addEventListener("click", function(event){
                event.preventDefault();
                let login_success = loginUserAccount();
                if (login_success==true){
                        redirect();
                }
                
        });

};

function redirect(){
        window.location.href = "http://localhost:3000/"
}

function loginUserAccount(){
        let username_input = document.querySelector("#username");
        let password_input = document.querySelector("#password");
       
        if (localStorage.getItem('users')){
                user_array = JSON.parse(localStorage.getItem('users'));
        }
        else {
                alert("No user account found with those credentials.")
                return false;                
        }

        let username = username_input.value;
        let password = password_input.value;

        if (username=="" || password=="" ||confirm==""){
                alert("Fields cannot be left blank, account not created.")
                return false;
        }
        else {
                let logged_in = false;

                while (!logged_in){
                        user_array.forEach(function(item){
                                let db_name = item[0];
                                let db_pass = item[1];
                                if (db_name == username && db_pass == password){
                                        sessionStorage.setItem('username', username);
                                        logged_in = true;      
                                };      
                        });
                        if (!logged_in){        
                                alert("Invalid username or password.");
                                return false;
                        }
                }

                return true;
                
        }
        
}


window.addEventListener('load', main);