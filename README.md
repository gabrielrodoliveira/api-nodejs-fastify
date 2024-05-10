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
    <li><strong>Method:</strong> POST</li>
    <li><strong>Request Body:</strong> JSON object with title, description, and duration.</li>
    <li><strong>Response:</strong> Status code 201 if successful.</li>
</ul>

<div style="position: relative; font-family: Arial, sans-serif;">
  <input type="text" value="https://github.com/gabrielrodoliveira/api-nodejs-fastify" id="copyInput" readonly style="width: 80%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin-bottom: 10px;">
  <button onclick="copyToClipboard()" style="position: absolute; right: 0; top: 0; padding: 10px; border: none; background-color: #4CAF50; color: white; border-radius: 5px; cursor: pointer;">Copiar</button>
</div>

<script>
  function copyToClipboard() {
    const copyText = document.getElementById("copyInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Link copiado: " + copyText.value);
  }
</script>
