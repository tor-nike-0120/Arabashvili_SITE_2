<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
    <script src="resource/js/register.js"></script>        
    <link href="s/css/style.css" rel="stylesheet">
    <title>Анкета</title>
</head>
<body>
<!----------------------------NAVIGATION---------------------------->
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #A2C7E5;">
        <div class="container-fluid text-center">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="s/index.html">Статья</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="s/table_and_graf.html">График</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="s/notes.html" aria-disabled="true">Песни</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="s/register.html" aria-disabled="true">Анкета</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="s/api.html" aria-disabled="true">API</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
<!----------------------------PHP---------------------------->
    <div class="container mx-auto">
        <?php
            if(isset($_REQUEST["surname"])){
                $baseURL = "http://s/";
                $formData = [];
                foreach($_REQUEST as $key => $request_item){
                    $formData[$key] = $request_item;
                }
                $file_name = "usersfile/dataForm-".preg_replace('/[\.\/]/',"-", $formData['email']).".txt";
                $fd = fopen($file_name, 'w') or die("не удалось создать файл");
                foreach($formData as $key => $value){
                    fwrite($fd,"$key:$value\n");
                }
                fclose($fd);
                $imageFolder = "avatars/".preg_replace('/[\.\/]/',"-", $formData['email']);
                if(!file_exists($imageFolder))
                    mkdir($imageFolder);
                else if(!empty(glob($imageFolder."/*.*"))){
                    $files = glob($imageFolder."/*"); 
                    foreach($files as $file){ 
                        if(is_file($file)){
                            unlink($file); 
                        }  
                    }
                }
                $img_link = $imageFolder."/".$_FILES['avatarFile']['name'];
                $img_file_name = $_FILES['avatarFile']['name'];
                move_uploaded_file($_FILES['avatarFile']['tmp_name'], $img_link);
                echo "<a download href='$file_name'>Ссылка на файл</a>";
                echo "<br>";
                echo "<img src=\"$img_link\" height='350px' alt=\"Аватар пользователя\">";
            }
            else{
                echo '<h2 style="text-align: center;">Нет данных для обработки!</h2>';
            }
        ?>
    </div>
<!----------------------------FOOTER---------------------------->
     <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="s/index.html" class="nav-link px-2 text-muted">Статья</a></li>
            <li class="nav-item"><a href="s/table_and_graf.html" class="nav-link px-2 text-muted">График</a></li>
            <li class="nav-item"><a href="s/notes.html" class="nav-link px-2 text-muted">Песни</a></li>
            <li class="nav-item"><a href="s/register.html" class="nav-link px-2 text-muted">Анкета</a></li>
            <li class="nav-item"><a href="s/api.html" class="nav-link px-2 text-muted">API</a></li>
          </ul>
          <p class="text-center text-muted"><a name="footer"></a>© 2021 POCHETIKI, Inc</p>
        </footer>
    </div>
</body>
</html>