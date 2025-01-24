<div class="row shadow bg-white rounded">
    <div class="col-12 mt-2">
        <div class="jumbotron">
            <div id="divInputNome"></div>
            <div id="divBtnConsultar"></div>
        </div>

        <div id="divCmpGridFuncionario" class="table-responsive"></div>
    </div>
</div>

<style type="text/css">
    .jumbotron {
        padding: 32px;
    }

    #divInputNome, #divBtnConsultar {
        display: inline-block;
        vertical-align: top;
    }
    #divInputNome {
            width: 300px;
    }
    #divBtnConsultar {
        margin-top: 32px;
        margin-left: 10px;
    }

    #divCmpGridFuncionario {
        display: inline-block;
        width: 100%;
        margin-bottom: 20px;
    }

    @media (max-width: 375px) {
        #divInputNome {
            width: auto;
        }
    }

</style>

<script type="text/javascript">
    Cmp.ready(function() {
        new Cmp.RelFuncionario().init();
    });
</script>