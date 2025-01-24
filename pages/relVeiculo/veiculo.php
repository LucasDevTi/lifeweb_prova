<div class="row shadow bg-white rounded">
    <div class="col-12 mt-2">
        <div class="jumbotron">
            <div id="divInputPlaca"></div>
            <div id="divBtnConsultar"></div>
        </div>

        <div id="divCmpGridVeiculo" class="table-responsive"></div>
    </div>
</div>

<style type="text/css">
    .jumbotron {
        padding: 32px;
    }

    #divInputPlaca, #divBtnConsultar {
        display: inline-block;
        vertical-align: top;
    }

    #divBtnConsultar {
        margin-top: 32px;
        margin-left: 10px;
    }

    #divCmpGridVeiculo {
        display: inline-block;
        width: 100%;
        margin-bottom: 20px;
    }
</style>

<script type="text/javascript">
    Cmp.ready(function() {
        new Cmp.RelVeiculo().init();
    });
</script>