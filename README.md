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
<h3>Create a Video</h3>
<ul style="list-style-type: circle;">
    <li><strong>URL:</strong> /videos</li>
    <li><strong>Method:</strong> POST </li>
    <li><strong>Request:</strong> JSON object with title, description, and duration.</li>
    <li><strong>Response:</strong> Status code 201 if successful.</li>
</ul>
<h3>Get Videos</h3>
<ul style="list-style-type: circle;">
    <li><strong>URL:</strong> Status code 201 if successful.</li>
    <li><strong>Method:</strong> GET</li>
    <li><strong>Request:</strong> Optional search parameter to filter videos by title.</li>
    <li><strong>Response:</strong> JSON array of videos.</li>
</ul>
<h3>Update a Video</h3>
<ul style="list-style-type: circle;">
    <li><strong>URL:</strong> /videos/:id</li>
    <li><strong>Method:</strong> PUT</li>
    <li><strong>Request:</strong> JSON object with title, description, and duration.</li>
    <li><strong>Response:</strong> Status code 204 if successful.</li>
</ul>
<h3>Delete a Video</h3>
<ul style="list-style-type: circle;">
    <li><strong>URL:</strong> /videos/:id</li>
    <li><strong>Method:</strong> DELETE</li>
    <li><strong>Request:</strong> id of the video to delete.</li>
    <li><strong>Response:</strong> Status code 204 if successful.</li>
</ul>

<h2>Hosting on Neon</h2>

To host the PostgreSQL database on Neon, sign up for an account on the Neon website and follow their documentation to create and configure a PostgreSQL database instance.

Once the database is set up on Neon:
<ol>
    <li>Update the database connection details in database-postgres.js with the Neon database credentials.</li>
    <li>Ensure the API server is configured to connect to the Neon database.</li>
    <li>Deploy the API to your preferred hosting platform, ensuring it has access to the Neon-hosted database.</li>
</ol>
