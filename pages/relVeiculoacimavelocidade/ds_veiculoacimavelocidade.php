<?php

$where = 'WHERE r.vel_registrada > v.vel_maxima';

$filtros = [];

if (!empty($_REQUEST['placa'])) {
    $filtros[] = "v.placa LIKE '%" . addslashes($_REQUEST['placa']) . "%'";
}

if (!empty($_REQUEST['funcionario'])) {
    $filtros[] = "f.nome LIKE '%" . addslashes($_REQUEST['funcionario']) . "%'";
}

if (!empty($_REQUEST['data'])) {
    
    $datas = explode(' - ', $_REQUEST['data']);
    if (count($datas) == 2) {
        $data_inicio = DateTime::createFromFormat('d/m/Y', trim($datas[0]))->format('Y-m-d');
        $data_fim = DateTime::createFromFormat('d/m/Y', trim($datas[1]))->format('Y-m-d');
        $filtros[] = "DATE(r.data_ocorrencia) BETWEEN '{$data_inicio}' AND '{$data_fim}'";
    } else {
        $data = DateTime::createFromFormat('d/m/Y', $_REQUEST['data'])->format('Y-m-d');
        $filtros[] = "DATE(r.data_ocorrencia) = '{$data}'";
    }
}

if (!empty($filtros)) {
    $where .= ' AND ' . implode(' AND ', $filtros);
}

$db = new Database();

if($db->connect()) {

    $dados = $db->sqlQueryArray(
        "SELECT 
            v.placa AS placa,
            f.nome AS funcionario,
            DATE_FORMAT(data_ocorrencia, '%d/%m/%Y: %H:%i:%s') AS data, 
            v.vel_maxima AS vel_maxima,
            r.vel_registrada AS vel_registrada,
            ROUND(((r.vel_registrada - v.vel_maxima) / v.vel_maxima) * 100) AS diferenca_velocidade,
            r.latitude AS latitude,
            r.longitude AS longitude
        FROM rastreamento r
        INNER JOIN veiculo v ON r.veiculo_id = v.id
        INNER JOIN funcionario f ON r.funcionario_id = f.id
        {$where}"
    );

    echo json_encode(array(
        'status' => 'success',
        'data' => $dados
    ));

} else {
    echo json_encode(array(
        'status' => 'failure',
        'message' => 'Erro ao conectar ao banco'
    ));
}