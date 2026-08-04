(function () {
  "use strict";

  window.AURA_DASHBOARD = {
    atualizadoEm: "03/08/2026",
    indicadores: {
      ordensServico: 23,
      produtosVigentes: 83,
      osComDocumento: 15,
      documentosUnicos: 24,
      contatosInformados: 9,
      aguardandoAthos: 31
    },
    documentosPorOs: {
      "OS 02.01": [{ titulo: "CIT - Matrícula 1.413", tipo: "CIT", viewUrl: "documents/titularidade/OS_02.01_CIT_Matricula_1413.pdf", downloadUrl: "documents/titularidade/OS_02.01_CIT_Matricula_1413.pdf" }],
      "OS 02.02": [{ titulo: "Matrícula 1.727", tipo: "Matrícula", viewUrl: "documents/titularidade/OS_02.02_Matricula_1727.pdf", downloadUrl: "documents/titularidade/OS_02.02_Matricula_1727.pdf" }],
      "OS 02.05": [{ titulo: "Matrícula 3.335", tipo: "Matrícula", viewUrl: "documents/titularidade/OS_02.05_Matricula_3335.pdf", downloadUrl: "documents/titularidade/OS_02.05_Matricula_3335.pdf" }],
      "OS 02.06": [{ titulo: "Matrícula 3.333", tipo: "Matrícula", viewUrl: "documents/titularidade/OS_02.06_Matricula_3333.pdf", downloadUrl: "documents/titularidade/OS_02.06_Matricula_3333.pdf" }],
      "OS 02.07": [{ titulo: "Matrícula 1.146", tipo: "Matrícula", viewUrl: "documents/titularidade/OS_02.07_Matricula_1146.pdf", downloadUrl: "documents/titularidade/OS_02.07_Matricula_1146.pdf" }],
      "OS 02.08": [
        { titulo: "CAR/TO 1.004.399", tipo: "CAR", viewUrl: "documents/titularidade/OS_02.08_CAR_TO_1004399.pdf", downloadUrl: "documents/titularidade/OS_02.08_CAR_TO_1004399.pdf" },
        { titulo: "CIT - Matrícula 11.549", tipo: "CIT", viewUrl: "documents/titularidade/OS_02.08_CIT_Matricula_11549.pdf", downloadUrl: "documents/titularidade/OS_02.08_CIT_Matricula_11549.pdf" },
        { titulo: "Matrícula 11.549", tipo: "Matrícula", viewUrl: "documents/titularidade/OS_02.08_Matricula_11549.pdf", downloadUrl: "documents/titularidade/OS_02.08_Matricula_11549.pdf" }
      ],
      "OS 02.10": [{ titulo: "Matrícula 1.848", tipo: "Matrícula", viewUrl: "documents/titularidade/OS_02.10_Matricula_1848.pdf", downloadUrl: "documents/titularidade/OS_02.10_Matricula_1848.pdf" }]
    },
    medicao: {
      boletim: "BM 001/2026",
      contrato: "CPS 00003283",
      periodo: "16/04/2026 a 16/06/2026",
      emissao: "16/06/2026",
      osMedidas: 16,
      produtosVinculados: 62,
      observacao: "Cartas imagem e shapefiles disponibilizados à contratante.",
      itens: [
        ["OS 01.01", "Matheus Lopes (Geral)", 3, "1.624,5979", "26, 164, 283, 306, 1260, 1665, 2053", 4, "Diagnóstico do CAR atual; Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 01.02", "Matheus Lopes (Oeste)", 1, "299,3479", "N/D", 3, "Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 01.03", "Floresta", 1, "245,6785", "164", 3, "Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.01", "Nova Prata", 1, "164,8719", "N/D", 5, "Diagnóstico do CAR atual; Intervenções gerais; Intervenções de sondagens; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.02", "Santa Luzia / Rio Grande", 2, "662,4989", "1727", 4, "Diagnóstico do CAR atual; Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.03", "São José", 3, "1.121,5540", "8175", 4, "Diagnóstico do CAR atual; Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.04", "Lote 15", 1, "41,1572", "3194", 4, "Intervenções da proposta de CAR; Diagnóstico do CAR atual; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.05", "Amaralina", 2, "652,3385", "3335", 4, "Diagnóstico do CAR atual; Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.06", "Lavandeira", 1, "260,7337", "3333", 4, "Diagnóstico do CAR atual; Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.07", "Santa Helena", 2, "646,0054", "1146", 4, "Diagnóstico do CAR atual; Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.08", "Limeira", 1, "265,4364", "11549", 4, "Diagnóstico do CAR atual; Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.09", "Nova Barra", 1, "193,6919", "1413", 4, "Diagnóstico do CAR atual; Intervenções da proposta de CAR; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.10", "Brejo Alegre I", 2, "460,8119", "1848", 4, "Diagnóstico do CAR atual; Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.11", "Brejo Alegre II", 1, "234,7852", "N/D", 3, "Intervenções gerais; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.12", "Brejo Alegre III", 1, "75,3351", "1326", 4, "Diagnóstico do CAR atual; Intervenções da proposta de CAR; Proposta de CAR; Proposta de perímetro"],
        ["OS 02.13", "Lavandeira II", 1, "185,9778", "3080", 4, "Diagnóstico do CAR atual; Intervenções da proposta de CAR; Proposta de CAR; Proposta de perímetro"]
      ]
    }
  };
})();
