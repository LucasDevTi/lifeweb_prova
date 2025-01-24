<div class="row shadow bg-white rounded">
    <div class="col-12 mt-2">
        <div class="jumbotron col-12 d-flex">

            <div id="divInputPlaca" class="DivInputPesquisa"></div>
        
            <div id="divInputFuncionario" class="DivInputPesquisa"></div>

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

    .DivInputPesquisa{
        margin-left: 5px;
    }

    .divBtnConsultar {
        display: inline-block;
        vertical-align: top;
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
        new Cmp.RelVeiculoacimavelocidade().init();
    });
</script>