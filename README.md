<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Инновационная платформа для управления аптечными сетями</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        header {
            background: #333;
            color: #fff;
            padding-top: 30px;
            min-height: 70px;
            border-bottom: #77aaff 3px solid;
        }
        header a {
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 16px;
        }
        header ul {
            padding: 0;
            list-style: none;
        }
        header li {
            float: left;
            display: inline;
            padding: 0 20px 0 20px;
        }
        header #branding {
            float: left;
        }
        header #branding h1 {
            margin: 0;
        }
        header nav {
            float: right;
            margin-top: 10px;
        }
        .showcase {
            background: url('apteka.jpg') no-repeat center center/cover;
            color: #fff;
            height: 400px;
            position: relative;
        }
        .showcase h2 {
            text-align: center;
            line-height: 400px;
            margin: 0;
        }
        .showcase p {
            text-align: center;
            position: relative;
            top: -20px;
        }
        .boxes {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
        }
        .box {
            background: #fff;
            flex: 1;
            margin-right: 20px;
            margin-bottom: 20px;
            padding: 10px 20px;
        }
        .box h3 {
            margin-top: 0;
        }
        .box p {
            font-size: 14px;
        }
        footer {
            background: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
            margin-top: 20px;
        }
        footer p {
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div id="branding">
                <h1>Платформа для аптек</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О проекте</a></li>
                    <li><a href="#">Установка</a></li>
                </ul>
            </nav>
        </header>

        <section class="showcase">
            <h2>Инновационная платформа для управления аптечными сетями</h2>
            <p>Упрощаем управление аптеками с помощью современных технологий</p>
        </section>

        <section class="boxes">
            <div class="box">
                <h3>Управление ассортиментом</h3>
                <p>Легко добавляйте, удаляйте и обновляйте информацию о товарах. Следите за наличием и сроками годности.</p>
            </div>
            <div class="box">
                <h3>Аналитика продаж</h3>
                <p>Получайте подробные отчеты о продажах, выявляйте популярные товары и оптимизируйте закупки.</p>
            </div>
            <div class="box">
                <h3>Интеграция с поставщиками</h3>
                <p>Автоматизируйте процесс заказа товаров у поставщиков и отслеживайте статус поставок.</p>
            </div>
            <div class="box">
                <h3>Управление персоналом</h3>
                <p>Организуйте графики работы, контролируйте выполнение задач и мотивируйте сотрудников.</p>
            </div>
            <div class="box">
                <h3>Мобильное приложение</h3>
                <p>Управляйте аптекой прямо со своего смартфона, оставаясь в курсе всех событий.</p>
            </div>
        </section>

        <section class="boxes">
            <div class="box">
                <h3>Инструкция по установке</h3>
                <p>1. Установите Node.js и npm.</p>
                <p>2. Клонируйте репозиторий: <code>git clone https://github.com/your-repo/apteka-platform.git</code></p>
                <p>3. Установите зависимости: <code>npm install</code></p>
                <p>4. Настройте переменные окружения в файле <code>.env</code>.</p>
                <p>5. Запустите сервер разработки: <code>npm run dev</code></p>
                <p>6. Откройте браузер и перейдите по адресу <code>http://localhost:3000</code>.</p>
            </div>
        </section>

        <footer>
            <p>Платформа для аптек, &copy; 2025</p>
        </footer>
    </div>
</body>
</html>

