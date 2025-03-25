<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #48353e;
    color: white;
}
.container {
    display: flex;
    width: 90%;
    max-width: 1200px;
    height: 90vh;
    background: white;
    color: #333;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}




/* Barra lateral */
.sidebar {
    width: 30%;
    background: #085861;
    color: white;
    text-align: center;
    padding: 30px;

    flex-direction: column;
    align-items: center;
}
.sidebar img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 3px solid white;
    margin-bottom: 15px;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%; /* Asegura que la imagen no se desborde */
    visibility: visible; /* Se asegura de que no esté oculta */
}

/* 📱 Adaptación para pantallas pequeñas */
@media (max-width: 600px) {
    .sidebar img {
        width: 120px;  /* Reduce tamaño en móviles */
        height: 120px;
        border: 2px solid rgb(8, 79, 76);
    }
}
.sidebar h2 {
    text-decoration: 100%;
    color: #f6f1f1;
    font-weight: bold;
}
.contact-info {
    margin-top: 20px;
    text-align: center;
}
.contact-info p {
    font-size: 14px;
    margin: 5px 0;
}
.contact-info a {
    text-decoration: 100%;
    color: #e1e2f2;
    font-weight: bold;
}
.contact-info a:hover {
    text-decoration: underline;
}

.links {
    text-align: left;
    margin-top: 25px;
    margin-bottom: 25px;
}

.links h3 {
    background: #118595;
    padding: 8px;
    margin: 8px;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
}

.links a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f0ecec;
    font-size: 14px;
    padding: 8px 0;
    transition: color 0.3s ease;
}

.links a:hover {
    color: #192555;
}

.links a i {
    margin-right: 8px;
    color: #1a0e8b;
}
.bio h2, .interests h2, .portfolio h2 {
    border-bottom: 2px solid #115d6b;
    padding-bottom: 5px;
    margin-bottom: 10px;
    color: #105760;
}
.bio p, .interests ul {
    font-size: 14px;
    color: #333;
}
.interests {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: auto;
    margin-bottom: 10px;
}



.interests ul {
    list-style: none;
    padding: 0;
    margin-top: 15px;
}



.interests li:last-child {
    border-bottom: none;
}

.interests li i {
    color: #1212a8;
    margin-right: 10px;
}


/* Contenido principal */
.main-content {
    width: 70%;
    padding: 30px;
    overflow-y: auto;
}
.title {
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #0e4a5a;
}
.bio, .portfolio {
    margin-bottom: 20px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: auto;
    margin-bottom: 10px;
}
.bio h2, .portfolio h2 {
    color: #0d494d;
    border-bottom: 2px solid #147c82;
    padding-bottom: 5px;
    margin-bottom: 10px;
}
.bio p {
    font-size: 14px;
    line-height: 1.2;
    text-align: justify;
    
}
.interests li {
    font-size: 14px;
    margin-bottom: 5px;
}
/* Portafolio */
.portfolio .tabs {
    display: flex;
    justify-content: space-around;
    background: #0c5d63;
    color: white;
    padding: 10px;
    border-radius: 5px;
}
.portfolio .tabs div {
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
}
.portfolio .tabs div:hover {
    background: #0c1a4a;
}
.portfolio .tabs div.active {
    background: #b13c3c;
    font-weight: bold;
}
.tab-content {
    display: none;
    padding: 15px;
    background: #fbfcfc;
    border-radius: 5px;
    margin-top: 10px;
    color: #18525e;
}
.tab-content.active {
    display: block;
}

/* Botones de años */
.year {
    background: #cad0d4;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    transition: background 0.3s;
}
.year:hover {
    background: #0b4b60;
}
.year-content {
    display: none;
    padding: 5px 15px;
    background: white;
    border-left: 4px solid #0c4e58;
    margin-top: 5px;
}

.year {
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
        }
        
        .year-content {
            display: none;
            padding-left: 20px;
        }

/* Responsivo */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        height: auto;
    }
    .sidebar {
        width: 100%;
        padding: 20px;
    }
    .main-content {
        width: 100%;
        padding: 20px;
    }
    .portfolio .tabs {
        flex-direction: column;
    }
}
</style>
</head>
<body>



<div class="container">
    <!-- Barra lateral -->
    <div class="sidebar">
        <img src="../HVconfoto/img/foto.jpg" alt="Foto de perfil">
        <h2>Sindy Fonte</h2>
        <div class="contact-info">  
            <p><strong><i class="fas fa-envelope"></i> Correo:</strong> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sindy.melft05@gmail.com" target="_blank">Sindy.melft05@gmail.com</a></p>  
            <p><strong><i class="fas fa-phone"></i> Teléfono:</strong> <a href="https://wa.me/593981135571" target="_blank">+593 981135571</a></p>  
        </div>   
        <br>
        <div class="links">  
            <h3>Links Externos</h3>  
            <a href="HOJA_DE_VIDA/Hoja_de_vida.pdf"><i class="fas fa-file-pdf"></i> Hoja de vida PDF</a>  
            <a href="https://www.linkedin.com/in/sindy-fonte-mt98113/" target="_blank">  
                <i class="fab fa-linkedin"></i> LinkedIn  
            </a>  
        </div>  
    </div>

    <!-- Sección Principal -->
    <div class="main-content">
        <div class="title">HOJA DE VIDA </div>

        <div class="bio">
            <h2>Biografía</h2>
            <p>Ingeniera en Logística y Transporte graduada de la Universidad Politécnica Estatal del Carchi, con sólida formación en gestión logística, análisis de datos, y manejo de KPIs. Experta en herramientas analíticas como Power BI y en la implementación de software ERP, como Odoo, entre otros, para optimizar procesos y mejorar la eficiencia operativa. Proactiva, con habilidades en trabajo en equipo y resolución de problemas....</p>
        </div>
        <div class="interests">  
            <h2>Intereses Profesionales</h2>  
            <ul>  
                <li><i class="fas fa-cogs"></i> Consultoría en Optimización de procesos Logísticos</li>  
                <li><i class="fas fa-shopping-cart"></i> Gestión de Compras y Abastecimiento</li>  
                <li><i class="fas fa-pencil-ruler"></i> Diseño asistido por computadora CAD</li>  
                <li><i class="fas fa-truck"></i> Transporte y Operaciones</li>  
                <li><i class="fas fa-box"></i> Logística y cadena de suministro</li>  
                <li><i class="fas fa-robot"></i> Automatización y Digitalización Logística</li>  
                <li><i class="fas fa-archive"></i> Gestión de inventario y Transporte en producciones Audiovisuales</li>  
            </ul>  
        </div>  

        <div class="portfolio">
            <h2>Portafolio de Proyectos</h2>
            <div class="tabs">
                <div class="tab-btn" onclick="showTab('cursos', this)">Cursos</div>
                <div class="tab-btn" onclick="showTab('investigacion', this)">Proyectos Investigación</div>
                <div class="tab-btn" onclick="showTab('colaboraciones', this)">Colaboraciones</div>
            </div>

            <!-- Cursos-->
            <div id="cursos" class="tab-content">
                <div class="year" onclick="toggleYear('c2024')">2024</div>
                <div id="c2024" class="year-content">
                    <ul>
                        <li>Título: SUFICIENCIA EN EL IDIOMA INGLÉS-B1. . Duración: 2 semestres . Cliente o empresa: La Universidad Politécnica Estatal del Carchi - UPEC. </li>
                    </ul>
                </div>
                <div class="year" onclick="toggleYear('c2021')">2021</div>
                <div id="c2021" class="year-content">
                    <ul>
                        <li>Título: IMPORTACIONES Y EXPORTACIONES. . Duración: 30 de Agosto al 10 de septiembre . Cliente o empresa: CECAMI. </li>
                    </ul>
                </div>
                <div class="year" onclick="toggleYear('c2019')">2019</div>
                <div id="c2019" class="year-content">
                    <ul>
                        <li>Título: CONDUCTOR PROFESIONAL, Tipo C. Duración: 6 meses . Cliente o empresa: UNIVERSIDAD DE OTAVALO. </li>
                    </ul>
                </div>
            </div>

            <!-- Proyectos Investigación -->
            <div id="investigacion" class="tab-content">
                <div class="year" onclick="toggleYear('pi2025')">2025</div>
                <div id="pi2025" class="year-content">
                    <ul>
                        <li>Título del proyecto: Logística de Abastecimiento y Gestión de Inventarios en la Agencia de Publicidad Maki Creativa. Rol: Investigador y Desarrollador. Duración: 2 semestres. Cliente o empresa: La Universidad Politécnica Estatal del Carchi - UPEC</li>
                    </ul>
                </div>
            </div>

            <!-- Colaboraciones-->
            <div id="colaboraciones" class="tab-content">
                <div class="year" onclick="toggleYear('col2024')">2024</div>
                <div id="col2024" class="year-content">
                    <ul>
                        <li>Título del proyecto: Diseño de rutas para el mejoramiento del servicio de transporte comercial, modalidad escolar e institucional con las operadoras domiciliadas en la ciudad de tulcán. Rol: Investigador y Desarrollador. Duración: 140 horas. Cliente o empresa: MSC. Diego Almeida</li>
                    </ul>
                </div>
                <div class="year" onclick="toggleYear('col2023')">2023</div>
                <div id="col2023" class="year-content">
                    <ul>
                        <li>Título del proyecto: Levantamiento de procesos y procedimientos institucionales. Rol: Desarrollador. Duración: 240 horas. Cliente o empresa: Unidad de Aseguramiento de la Calidad - UPEC</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Archivos CSS -->
    <link rel="stylesheet" href="../HVconfoto/css/main.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    
<!-- Scripts -->
<script src="../HVconfoto/js/main.js"></script>
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</body>
</html>

<script>
function showTab(tabName, element) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

function toggleYear(yearId) {
    let yearContent = document.getElementById(yearId);
    yearContent.style.display = yearContent.style.display === 'block' ? 'none' : 'block';
}

        function toggleYear(yearId) {
            var content = document.getElementById(yearId);
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }
    </script>        
