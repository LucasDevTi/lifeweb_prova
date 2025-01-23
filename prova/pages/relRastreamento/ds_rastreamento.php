<?php

$where = 'r.vel_registrada > v.vel_maxima';

// if(!empty($_REQUEST['placa'])) {
//     $where = "WHERE v.placa LIKE '%{$_REQUEST['placa']}%'";
// }

$db = new Database();

if($db->connect()) {

    $dados = $db->sqlQueryArray(
        "SELECT 
            v.placa AS placa,
            f.nome AS funcionario,
            r.data_ocorrencia AS data,
            v.vel_maxima AS vel_maxima,
            r.vel_registrada AS vel_registrada,
            ROUND(((r.vel_registrada - v.vel_maxima) / v.vel_maxima) * 100) AS diferenca_velocidade,
            r.latitude AS latitude,
            r.longitude AS longitude
        FROM rastreamento r
        INNER JOIN veiculo v ON r.veiculo_id = v.id
        INNER JOIN funcionario f ON r.funcionario_id = f.id
        WHERE {$where}"
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