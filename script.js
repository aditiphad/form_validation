function results() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    // var mobile = document.getElementById("mobile").value;
    var ele = document.getElementsByName("hobby").value;
    var elements = document.getElementsByName('gender');
    var comments = document.getElementById("comments").value;


    // ################### validation for first name last name ######################
    if (fname == "") {
        document.getElementById("first_error").innerHTML =
            "Please Enter First Name!";
        return false;
    } else {
        document.getElementById("first_error").innerHTML = "LOOKS GOOD!"
    }

    if (lname == "") {
        document.getElementById("last_error").innerHTML = "Please Enter Last Name!";
        return false;
    }

    // ############# Validtion for email ################

    var emailfilter = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
    var b = emailfilter.test(document.myform.email.value);
    if (b == false) {
        document.getElementById("email_error").innerHTML = "Enter valid emailid!";
        document.myform.email.focus();
        return false;
    }

    // ################ validation for radio buttons ###############
    if ((document.myform.gender[0].checked == false) && (document.myform.gender[1].checked == false)) {
        document.myform.gender[0].focus();
        document.getElementById('gender_error').innerHTML = 'Please specify gender.';
        return false;
    }
    document.getElementById('gender_error').innerHTML = '';

    // %%%%%%%%%%%%%%%%%%%%% checkbox validation %%%%%%%%%%%%%%%%%%%%%%%%%%

    var ele = []
    var hobby1 = document.getElementById("hobby1")
    if (hobby1.checked) {
        ele.push(hobby1.value);
    }
    var hobby2 = document.getElementById("hobby2")
    if (hobby2.checked) {
        ele.push(hobby2.value);
    }
    var hobby3 = document.getElementById("hobby3")
    if (hobby3.checked) {
        ele.push(hobby3.value);
    }
    var hobby4 = document.getElementById("hobby4")
    if (hobby4.checked) {
        ele.push(hobby4.value);
    }
    if (ele.length > 0) {
        document.getElementById("submit").innerHTML = ele;

    } else {
        document.getElementById("submit").innerHTML = "You Dont have any hobbies";
        return false;
    }


    // %%%%%%%%%%%%%% radio validation %%%%%%%%%%%%%%%%%%%%%

    var checkedButton;
    console.log(elements);
    elements.forEach(e => {
        if (e.checked) {
            //if radio button is checked, set sort style
            checkedButton = e.value;
        }
    });

    // %%%%%%%%%%%%%%%%% Valudation for comments %%%%%%%%%%%%%%%%%%%%%%

    if (comments == "") {
        document.getElementById("comments_error").innerHTML = "Please Comment Below!";
        return false;
    }


    // %%%%%%%%%%%%%%%%%%%%%%%% return input values %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5
    var x = document.getElementById("qualify").selectedIndex;
    var y = document.getElementById("qualify").options;
    


    document.write("<h1>Thank You!!!!!!!</h1>");
    document.write("<body style='background-color:black;color:whitesmoke;text-align:left;line-height:1.8;margin-top:5%;font-size:20px;'></body>");
    document.getElementById("<h3>Your Data is as follows:-</h3");

    document.write("First Name: " + fname + "<br/>");
    document.write("Last Name: " + lname + "<br/>");
    document.write("Your Email Id: " + email + "<br/>");
    document.write("Your Gender: " + checkedButton + "<br/>");
    document.write("Your Qualification: " + y[x].text + "<br/>");
    document.write("Your Hobbies: " + ele + "<br/>");
    document.write("Your Message: " + comments + "<br/>");





}

// %%%%%%%%%%%%%%%%%%%%%%%%%%% For displaying success messages %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function hideme() {
    document.getElementById("first_error").innerHTML = "LOOKS GOOD!";
    document.getElementById("first_error").style.color = "green";
}

function hide_last() {
    document.getElementById("last_error").innerHTML = "LOOKS GOOD!";
    if (!lname == "") {
        document.getElementById("last_error").style.color = "green";
        return false;
    }
}

function hide_email() {
    // document.getElementById("email_error").innerHTML = "GREAT!";
    // if (!email == "") {
    //     document.getElementById("email_error").style.color = "green";
    //     return false;
    // }

    var emailfilter = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
    var b = emailfilter.test(document.myform.email.value);
    if (b == false) {
        document.getElementById("email_error").style.color = 'red';
        document.myform.email.focus();
        return false;
    } else {
        document.getElementById("email_error").innerHTML = "GREAT!";
        document.getElementById("email_error").style.color = "green";
        document.myform.email.focus();
    }
}

function hide_hobby() {
    document.getElementById("check_error").innerHTML = "WONDERFULLL!";
    if (!yeah == "") {
        document.getElementById("check_error").style.color = "green";
        return false;
    }
}

function hide_gender() {
    document.getElementById("gender_error").innerHTML = "OKAY!";
    if (!male == "") {
        document.getElementById("gender_error").style.color = "green";
        return false;
    }
}

function hide_comments() {
    document.getElementById("comments_error").innerHTML = "THANK  YOU!!!";
    if (!comments == "") {
        document.getElementById("comments_error").style.color = "green";
        return false;
    }
}

// %%%%%%%%%%%  select all hobbies of checkboxes%%%%%%%%%%%%%%%%%%%

function selects() {
    var ele = document.getElementsByName('chk');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].type == 'checkbox')
            ele[i].checked = true;
        hide_hobby();
    }
    document.getElementById("checkedit").checked = false;
}

function deSelect() {
    var ele = document.getElementsByName('chk');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].type == 'checkbox')
            ele[i].checked = false;
        document.getElementById("check_error").innerHTML = "Select atleast one hobby!";
        document.getElementById("check_error").style.color = "rgba(217,0,0,0.918)";
    }
    document.getElementById("checkit").checked = false;
}