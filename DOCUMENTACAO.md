 # DOCUMENTAÇÃO
 
 #### PADRÃO DE LOGS
   - OS LOGS DEVE SER ESCRITOS CONTENDO
      - NOME DA PAGE OU COMPONENTES EM QUE ESTÁ LOCALIZADO
      - NOME DAS VARIÁVEIS LOGADAS
      - MENSAGEM DESCRITIVA DO PROBLEMA
      - EXEMPLO
         ```
         console.log("PAGE_NAME/COMPONENTE_NAME >> Falha ao comunicar com o servidor [nome_variavel]", variavel);
         ```