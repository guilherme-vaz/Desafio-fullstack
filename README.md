# Mesha-fullstack



# Construindo o backend

Install [Docker Compose](https://docs.docker.com/compose/install/).

<ol>
<li>Create container with MySQL <br><code>$ docker-compose up -d</code></li><br>
<li>Create database structure <br><code>$ node ace migration:run</code></li><br>
<li>Install dependencies <br><code>$ npm install</code></li><br>
<li>Server with changes watcher <br><code>$ npm run dev</code></li><br>
<li>Build for production and launch server <br><code>$ npm run build</code> <br><code>$ npm run start</code></li>
</ol>

# Construindo o Frontend

<ol>
<li>Project setup <br><code>$ npm install</code></li><br>
<li>Compiles and hot-reloads for development <br><code>$ npm run serve</code></li><br>
<li>Compiles and minifies for production <br><code>$ npm run build</code></li><br>
<li>Lints and fixes files <br><code>$ npm run lint</code></li><br>
</ol>
