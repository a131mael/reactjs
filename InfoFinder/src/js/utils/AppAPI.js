var AppActions = require('../actions/AppActions');

module.exports = {
  searchText: function(search){
    var searchJSON =  {
       "DefinitionSource" : "",
       "Heading" : "Teste",
       "ImageWidth" : 0,
       "RelatedTopics" : [
          {
             "Result" : "<a href=\"https://duckduckgo.com/209/Prova\">Prova</a>Em direito, prova \u00e9 todo meio destinado a convencer o juiz, seu destinat\u00e1rio, a respeito da...",
             "Icon" : {
                "URL" : "",
                "Height" : "",
                "Width" : ""
             },
             "FirstURL" : "https://duckduckgo.com/209/Prova",
             "Text" : "ProvaEm direito, prova \u00e9 todo meio destinado a convencer o juiz, seu destinat\u00e1rio, a respeito da..."
          },
          {
             "Result" : "<a href=\"https://duckduckgo.com/209/Teste_de_intelig%C3%AAncia\">Teste de intelig\u00eancia</a>Quociente de intelig\u00eancia \u00e9 uma medida obtida por meio de testes desenvolvidos para avaliar as...",
             "Icon" : {
                "URL" : "",
                "Height" : "",
                "Width" : ""
             },
             "FirstURL" : "https://duckduckgo.com/209/Teste_de_intelig%C3%AAncia",
             "Text" : "Teste de intelig\u00eanciaQuociente de intelig\u00eancia \u00e9 uma medida obtida por meio de testes desenvolvidos para avaliar as..."
          },
          {
             "Result" : "<a href=\"https://duckduckgo.com/209/Teste_de_Kjeldahl\">Teste de Kjeldahl</a>O m\u00e9todo de Kjeldahl, ou teste de Kjeldahl, \u00e9 um m\u00e9todo laboratorial para a determina\u00e7\u00e3o do azoto...",
             "Icon" : {
                "URL" : "",
                "Height" : "",
                "Width" : ""
             },
             "FirstURL" : "https://duckduckgo.com/209/Teste_de_Kjeldahl",
             "Text" : "Teste de KjeldahlO m\u00e9todo de Kjeldahl, ou teste de Kjeldahl, \u00e9 um m\u00e9todo laboratorial para a determina\u00e7\u00e3o do azoto..."
          },
          {
             "Result" : "<a href=\"https://duckduckgo.com/209/Teste_de_Rorschach\">Teste de Rorschach</a>O teste de Rorschach \u00e9 uma t\u00e9cnica de avalia\u00e7\u00e3o psicol\u00f3gica pict\u00f3rica, comumente denominada de...",
             "Icon" : {
                "URL" : "https://duckduckgo.com/i/395ec920.jpg",
                "Height" : "",
                "Width" : ""
             },
             "FirstURL" : "https://duckduckgo.com/209/Teste_de_Rorschach",
             "Text" : "Teste de RorschachO teste de Rorschach \u00e9 uma t\u00e9cnica de avalia\u00e7\u00e3o psicol\u00f3gica pict\u00f3rica, comumente denominada de..."
          },
          {
             "Result" : "<a href=\"https://duckduckgo.com/209/Teste_projetivo\">Teste projetivo</a>Um teste projetivo \u00e9 um tipo de teste psicol\u00f3gico que se baseia na chamada hip\u00f3tese projetiva.",
             "Icon" : {
                "URL" : "https://duckduckgo.com/i/38c5748a.jpg",
                "Height" : "",
                "Width" : ""
             },
             "FirstURL" : "https://duckduckgo.com/209/Teste_projetivo",
             "Text" : "Teste projetivoUm teste projetivo \u00e9 um tipo de teste psicol\u00f3gico que se baseia na chamada hip\u00f3tese projetiva."
          },
          {
             "Result" : "<a href=\"https://duckduckgo.com/209/Testes_com_animais\">Testes com animais</a>Os testes com animais s\u00e3o experimentos realizados com a utiliza\u00e7\u00e3o de animais a fim de produzir...",
             "Icon" : {
                "URL" : "",
                "Height" : "",
                "Width" : ""
             },
             "FirstURL" : "https://duckduckgo.com/209/Testes_com_animais",
             "Text" : "Testes com animaisOs testes com animais s\u00e3o experimentos realizados com a utiliza\u00e7\u00e3o de animais a fim de produzir..."
          },
          {
             "Result" : "<a href=\"https://duckduckgo.com/209/Teste_de_Fidelidade\">Teste de Fidelidade</a>Teste de Fidelidade \u00e9 um programa de televis\u00e3o brasileiro exibido pela RedeTV! nas noites de...",
             "Icon" : {
                "URL" : "",
                "Height" : "",
                "Width" : ""
             },
             "FirstURL" : "https://duckduckgo.com/209/Teste_de_Fidelidade",
             "Text" : "Teste de FidelidadeTeste de Fidelidade \u00e9 um programa de televis\u00e3o brasileiro exibido pela RedeTV! nas noites de..."
          },
          {
             "Topics" : [
                {
                   "Result" : "<a href=\"https://duckduckgo.com/209/Teste_de_software\">Teste de software</a>O teste do software \u00e9 a investiga\u00e7\u00e3o do software a fim de fornecer informa\u00e7\u00f5es sobre sua...",
                   "Icon" : {
                      "URL" : "",
                      "Height" : "",
                      "Width" : ""
                   },
                   "FirstURL" : "https://duckduckgo.com/209/Teste_de_software",
                   "Text" : "Teste de softwareO teste do software \u00e9 a investiga\u00e7\u00e3o do software a fim de fornecer informa\u00e7\u00f5es sobre sua..."
                },
                {
                   "Result" : "<a href=\"https://duckduckgo.com/209/Teste_unit%C3%A1rio\">Teste unit\u00e1rio</a>Teste de unidade \u00e9 toda a aplica\u00e7\u00e3o de teste nas assinaturas de entrada e sa\u00edda de um sistema.",
                   "Icon" : {
                      "URL" : "",
                      "Height" : "",
                      "Width" : ""
                   },
                   "FirstURL" : "https://duckduckgo.com/209/Teste_unit%C3%A1rio",
                   "Text" : "Teste unit\u00e1rioTeste de unidade \u00e9 toda a aplica\u00e7\u00e3o de teste nas assinaturas de entrada e sa\u00edda de um sistema."
                },
                {
                   "Result" : "<a href=\"https://duckduckgo.com/209/Teste_de_carga\">Teste de carga</a>Teste de carga \u00e9 usado para verificar o limite de dados processados pelo software at\u00e9 que ele n\u00e3o...",
                   "Icon" : {
                      "URL" : "",
                      "Height" : "",
                      "Width" : ""
                   },
                   "FirstURL" : "https://duckduckgo.com/209/Teste_de_carga",
                   "Text" : "Teste de cargaTeste de carga \u00e9 usado para verificar o limite de dados processados pelo software at\u00e9 que ele n\u00e3o..."
                },
                {
                   "Result" : "<a href=\"https://duckduckgo.com/209/Gest%C3%A3o_da_qualidade_total\">Gest\u00e3o da qualidade</a>A gest\u00e3o da qualidade total consiste numa estrat\u00e9gia de administra\u00e7\u00e3o orientada a criar...",
                   "Icon" : {
                      "URL" : "",
                      "Height" : "",
                      "Width" : ""
                   },
                   "FirstURL" : "https://duckduckgo.com/209/Gest%C3%A3o_da_qualidade_total",
                   "Text" : "Gest\u00e3o da qualidadeA gest\u00e3o da qualidade total consiste numa estrat\u00e9gia de administra\u00e7\u00e3o orientada a criar..."
                },
                {
                   "Result" : "<a href=\"https://duckduckgo.com/209/BIA\">BIA</a>O Instituto da Sociedade Cooperativa Profissional da Seguran\u00e7a e Sa\u00fade Ocupacional \u00e9 um instituto...",
                   "Icon" : {
                      "URL" : "",
                      "Height" : "",
                      "Width" : ""
                   },
                   "FirstURL" : "https://duckduckgo.com/209/BIA",
                   "Text" : "BIAO Instituto da Sociedade Cooperativa Profissional da Seguran\u00e7a e Sa\u00fade Ocupacional \u00e9 um instituto..."
                },
                {
                   "Result" : "<a href=\"https://duckduckgo.com/209/d/ISO\">ISO Meanings</a>  See related meanings for the word 'ISO'.",
                   "Icon" : {
                      "URL" : "",
                      "Height" : "",
                      "Width" : ""
                   },
                   "FirstURL" : "https://duckduckgo.com/209/d/ISO",
                   "Text" : "ISO Meanings  See related meanings for the word 'ISO'."
                }
             ],
             "Name" : "Ou Ainda"
          }
       ],
       "Entity" : "",
       "meta" : {
          "maintainer" : {
             "github" : "duckduckgo"
          },
          "perl_module" : "DDG::Fathead::WikipediaUkrainian",
          "status" : "planning",
          "production_state" : "offline",
          "dev_date" : "2015-04-28",
          "js_callback_name" : "wikipedia_ukrainian",
          "signal_from" : "wikipedia_portuguese",
          "live_date" : "2015-05-30",
          "src_id" : 209,
          "src_options" : {
             "skip_abstract" : 0,
             "skip_qr" : "",
             "language" : "pt",
             "skip_icon" : 0,
             "skip_image_name" : 0,
             "directory" : "",
             "min_abstract_length" : "50",
             "skip_abstract_paren" : 0,
             "is_wikipedia" : 1,
             "source_skip" : "",
             "is_fanon" : 0,
             "is_mediawiki" : 1,
             "src_info" : ""
          },
          "repo" : "fathead",
          "developer" : [
             {
                "url" : "http://www.duckduckhack.com",
                "name" : "DDG Team",
                "type" : "ddg"
             }
          ],
          "tab" : null,
          "producer" : "mrshu",
          "unsafe" : null,
          "id" : "wikipedia_portuguese",
          "dev_milestone" : "live",
          "topic" : [],
          "name" : "WikipediaPortuguese",
          "attribution" : null,
          "created_date" : "2015-05-28",
          "example_query" : "Lisboa",
          "description" : "Portuguese version of Wikipedia",
          "is_stackexchange" : null,
          "designer" : "mrshu",
          "src_domain" : "pt.wikipedia.org",
          "src_name" : "Wikipedia (PT)",
          "blockgroup" : null,
          "src_url" : null
       },
       "Type" : "D",
       "Redirect" : "",
       "DefinitionURL" : "",
       "AbstractURL" : "http://pt.wikipedia.org/wiki/Teste",
       "Definition" : "",
       "AbstractSource" : "Wikipedia (PT)",
       "Infobox" : "",
       "Image" : "",
       "ImageIsLogo" : 0,
       "Abstract" : "",
       "AbstractText" : "",
       "AnswerType" : "",
       "ImageHeight" : 0,
       "Answer" : "",
       "Results" : []
    };

    AppActions.receiveResults(searchJSON.RelatedTopics);

    /*
    No CORS
    var url = "http://api.duckduckgo.com/?q="+search.text+"&format=json&pretty=1";
    $.ajax({
      type: 'GET',
      url: url,
      datatype: 'jsonp',
      cache: false,
      async: true,
      success: function(data){
        AppActions.receiveResults(data.RelatedTopics);
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }.bind(this)
    });
    */
  }
}
