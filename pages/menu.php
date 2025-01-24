<nav id="header" class="navbar navbar-expand-md navbar-dark mb-4 shadow">
    <a class="navbar-brand text-white" href="index.php"><img src="/lifeweb_prova/assets/lifeweb.png" alt="Logo" class="img-fluid" style="max-height: 40px;"> LifeWeb</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-principal" aria-controls="menu-principal" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu-principal">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link text-white" href="index.php">Início</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="menu-relatorios" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Relatórios</a>
                <div class="dropdown-menu" aria-labelledby="menu-relatorios">
                    <a class="dropdown-item" href="index.php?page=relVeiculo"><i class="fa fa-car mr-1 text-danger" aria-hidden="true"></i>Veículos</a>
                    <a class="dropdown-item" href="index.php?page=relFuncionario"><i class="fa fa-users mr-1 text-success" aria-hidden="true"></i>Funcionário</a>
                    <a class="dropdown-item" href="index.php?page=relVeiculoacimavelocidade"><i class="fa fa-bolt mr-1 text-warning" aria-hidden="true"></i>Veículos acima da velocidade</a>
                </div>
            </li>
        </ul>
    </div>
</nav>