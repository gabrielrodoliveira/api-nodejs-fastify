# Video Management API

This repository contains a simple Video Management API built with Node.js using the Fastify framework and PostgreSQL as the database, hosted on Neon.

<h2>Technologies Used</h2>
<ul style="list-style-type: circle;">
    <li><strong>Node.js:</strong> A JavaScript runtime built on Chrome's V8 JavaScript engine.</li>
    <li><strong>Fastify:</strong> A fast and low overhead web framework for Node.js.</li>
    <li><strong>PostgreSQL:</strong> A powerful, open-source relational database system.</li>
    <li><strong>Neon:</strong> A cloud hosting platform for PostgreSQL databases.</li>
</ul>


<h2>Setting Up</h2>
To run the API locally, you need to have Node.js and PostgreSQL installed on your machine.

<ol>
    <li>Clone the repository:</li>
    git clone https://github.com/gabrielrodoliveira/api-nodejs-fastify.git
    <li>Install dependencies:</li>
    cd api-nodejs-fastify
    npm install
    <li>Set up the database:</li>
    <ul style="list-style-type: circle;">
        <li>Ensure PostgreSQL is running.</li>
        <li>Create a new database named nodeJs.</li>
        <li>Update the database connection details in database-postgres.js if necessary.</li>
    </ul>
    <li>Run the server:</li>
    npm start
</ol>

The server should now be running on http://localhost:3333.

<h2>Endpoints</h2>
<ul style="list-style-type: circle;">
    <li><strong>Create a Video:</strong> URL: /videos<br>Method: POST<br>Request Body: JSON object with title, description, and duration.<br>Response: Status code 201 if successful.</li>
    <li><strong>Get Videos:</strong> URL: /videos<br>Method: GET<br>Query Parameters: Optional search parameter to filter videos by title.<br>Response: JSON array of videos.</li>
    <li><strong>Update a Video:</strong> URL: /videos/:id<br>Method: PUT<br>URL Parameters: id of the video to update.<br>Request Body: JSON object with title, description, and duration.<br>Response: Status code 204 if successful.</li>
    <li><strong>Delete a Video:</strong> URL: /videos/:id<br>Method: DELETE<br>URL Parameters: id of the video to delete.<br>Response: Status code 204 if successful.</li>
</ul>


