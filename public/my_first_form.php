<?php
  var_dump($_GET);
  var_dump($_POST);
?>
<!DOCTYPE html>
<html>
    <head>
        <title>My First HTML Form</title>
    </head>
    <body>
        <label for="username">click me to focus the username field
        </label>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <form method="POST" action="/my_first_form.php">
            <p>
                <label for="username">Username</label>
                <input id="username" name="username" type="text" placeholder="Enter Username Here">
            </p>
            <p>
                <label for="password">Password</label>
                <input id="password" name="password" type="password" placeholder="Enter Password Here">
            </p>
            <p>
                <input type="submit" value="Log In">
            </p>
        </form>
        <hr>
        <form method="GET" action="https://duckduckgo.com" target="_blank"> 
            <p>
                <label for="search">Search Duckduckgo</label>
                <br>
                <input id="search" name="q" type="text" placeholder="Enter Inquiry Here">
            </p>
            <p>
                <input type="submit" value="Search">
            </p>
        </form>
        <hr>
        <form method="GET">
            <p>
            <label for="email_body" style="text-decoration:underline;">Compose an Email</label>
            <br>
            <label for="email_to">Who is this to?</label>
            <br>
            <textarea id="email_to" name="email_to" cols="30" rows="1" placeholder="To Whom?"></textarea>
            <br>
            <label for="email_from">Who is this from?</label>
            <br>
            <textarea id="email_from" name="email_from" cols="30" rows="1" placeholder="From Whom?"></textarea>
            <br>
            <label for="email_subject">Subject:</label>
            <br>
            <textarea id="email_subject" name="email_subject" cols="30" rows="1" placeholder="What's this mainly about?"></textarea>
            <br>
            <label for="email_body">What do you want to say?</label>
            <br>
            <textarea id="email_body" name="email_body" cols="30" rows="10" placeholder="Body"></textarea>
            </p>
            <p>
                <input type="checkbox" id="mail_list" name="mail_list" value="yes" checked>
                <label for="mail_list">Sign me up for the mailing list!</label>
                <br>
                <input type="submit" value="Send E-mail">
            </p>
            <hr>
        </form>
        <a href="https://www.reddit.com/search?q=javascript&restrict_sr=&sort=top&t=all" target="_blank">Go to reddit/javascript</a>
        <form method="GET" action="https://www.reddit.com/search" target="_blank">
            <p>
                <label for="search_reddit">Search Reddit, and sort results by "top"</label>
                <br>
                <input id="search_reddit" name="q" type="text" placeholder="Search Reddit">
                <input type="hidden" name="sort" value="top">
                <input type="submit" value="Search">
            </p>
        </form>
        <hr>
        <form>
            <h1>Multiple Choice Test</h1>
            <p>What coding languages do you know?</p>
            <label>
                <input type="radio" name="q1" value="JavaScript">
                JavaScript
            </label>
            <br>
            <label>
                <input type="radio" name="q1" value="PHP">
                PHP
            </label>
            <br>
            <label>
                <input type="radio" name="q1" value="C++">
                C++
            </label>
            <br>
            <label>
                <input type="radio" name="q1" value="HTML">
                HTML
            </label>
            <br>
            <p>How long have you been coding?</p>
            <label>
                <input type="radio" name="q2" value="1-5">
                1-5 years
            </label>
            <br>
            <label>
                <input type="radio" name="q2" value="6-10">
                6-10 years
            </label>
            <br>
            <label>
                <input type="radio" name="q2" value="11-15">
                11-15 years
            </label>
            <br>
            <label>
                <input type="radio" name="q2" value="20+">
                20+ years
            </label>
            <br>
            <p>What's the weather look like today?</p>
            <label>
                <input type="checkbox" name="q3" value="rainy">
                Rainy
            </label>
            <br>
            <label>
                <input type="checkbox" name="q3" value="cloudy">
                Cloudy
            </label>
            <br>
            <label>
                <input type="checkbox" name="q3" value="Sunny">
                Sunny
            </label>
            <br>
            <label>
                <input type="checkbox" name="q3" value="humid">
                Humid
            </label>
            <p>
                <input type="submit" value="Submit Answers">
            </p>
            <br>
        </form>
        <form>
            <h1>Select Testing</h1>
            <p>Which OS are you using?</p>
            <select id="os" name="os []" multiple>
            <option>OS X</option>
            <option>Windows</option>
            <option>Linux</option>
            </select>
            <br>
            <label for="coding_job">Are you currently working a codeing related job</label>
            <select id="coding_job" name="coding_job"> 
            <option value="2">No</option>
            <option value="1">Yes</option>
            </select>
            <br>
            <input type="submit" value="Submit Answer">
        </form>
    </body>
</html>