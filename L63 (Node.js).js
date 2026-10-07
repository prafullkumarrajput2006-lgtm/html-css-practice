const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('COntent-type', 'text/plain');
    res.end('Hello World, Thi is ROhan Das');
    res.end('.container{
            border: 5px solid black;
            background-color: aquamarine;
            padding: 34px;
            margin: 34px auto;
            border-radius: 50px;
            width: 666px;
        }
        a:hover{
            color: green;
            background-color: white;

        }
        a:visited{
            background-color: rgb(190, 190, 20)
        }
        
        .button{
            background-color: rgb(114, 165, 160);
            padding: 10px;
            border: 4px solid rgb(17, 2, 2);
            margin: 10px auto;
            border-radius: 10px;
            cursor: pointer;
            font-size: 15px;

        }
    </style>
</head>
<body>
    <div class="container" id="cont1">
        <h3>This is my Heading</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, provident laudantium accusantium exercitationem maxime doloremque velit eveniet inventore vitae nulla quae dicta sit excepturi error, delectus porro ullam! Molestias dicta optio aperiam ab assumenda.</p>
        <a href="https://google.com" class="button">Read More</a>
        <a href="https://instagram.com" class="button">Contect Us</a>

    </div>')
});


server.listen(port, hostname, () => {
    console.log('Server running at http://${Hostname}:${port}/');
});