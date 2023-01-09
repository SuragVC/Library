<h1 align="center">Library</h1>
The library is an application that runs on react frontend and Spring Backend and MySql as a database. It has some basic CRUD operation APIs which are running on port number  8080 and the frontend part runs on the react default port.Using this application user can login and add Books to library. The viewers can visit the website and read the books available on the application.
<br>
<h4>Tech Stack :-</h4>
<p>-> Java</p>
<p>-> Spring</p>
<p>-> JUnit 5</p>
<p>-> SpringBoot</p>
<p>-> Hibernate</p>
<p>-> MySQL(Database)</p>
<p>-> React</p>
<p>-> ChakraUI</p> 
<p>-> Tomcat(Server)</p> 
<br>
<h4>Features :-</h4>
<P>* All the CRUD operations are available.
<p>* User validation for adding and updating book into the Library(User name :User ,Password :0000).</p>
<P>* JUnit Testing for All the APIs.
<p>* Pagination on the backend.</P>
<p>* React Frontend (Runs on Port no : http://localhost:3000).</p>
<br>
<h3 align="center">Backend</h3>
<img src="https://i.imgur.com/7GJICYy.png"/>
<img src="https://i.imgur.com/amrLyTn.png"/>
<h3 align="center">Frontend</h3>
<img src="https://i.imgur.com/lGJ32hP.png"/>
<img src="https://i.imgur.com/CTKYai3.png"/>
<img src="https://i.imgur.com/wWpLeIk.png"/>
<img src="https://i.imgur.com/Tf1UO8e.png"/>
<p> How to run : Clone this project to your local pc run command </p>
<p>npm install</p>
<p>npm start</p>
<p> After this command Front part will start running on your PC's localhost port.</p>
<p>Create a database called Library on the MySQL Database.</p>
spring.datasource.url=jdbc:mysql://localhost:3306/Library
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=root
<p>then run backend on any IDE(STS preferred). </p>