<div class="row">
    <div class="col-12">
        <div class="jumbotron col-12 d-flex">

            <div id="divInputPlaca" class="DivInputPesquisa"></div>
            <div id="divBtnConsultar1" class="divBtnConsultar"></div>
        
            <div id="divInputFuncionario" class="DivInputPesquisa"></div>
            <div id="divBtnConsultar2" class="divBtnConsultar"></div>

            <div id="divInputData" class="DivInputPesquisa"></div>
            <div id="divBtnConsultar3" class="divBtnConsultar"></div>

        </div>

        <div id="divCmpGridRastreamento" class="table-responsive"></div>
    </div>
</div>

<style type="text/css">
    .jumbotron {
        padding: 32px;
        flex-wrap: wrap;
    }

    .DivInputPesquisa,
    .divBtnConsultar {
        display: inline-block;
        vertical-align: top;
    }

    .divBtnConsultar {
        margin-top: 32px;
        margin-left: 10px;
    }

    #divCmpGridRastreamento {
        display: inline-block;
        width: 100%;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        .jumbotron{
            justify-content: center !important;
        }
    }
</style>

<script type="text/javascript">
    Cmp.ready(function() {
        new Cmp.RelRastreamento().init();
    });
</script>