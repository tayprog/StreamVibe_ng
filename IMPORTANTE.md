# Passo a passo para a instalação do CLI

1. Instalar/Verificar se o nodejs está instalado no seu PC.
=> Por conta do [npm], que é um gerenciador de pacotes que vem instalado junto com o nodejs.

2. Liberar a instalação do CLI pelo Power Shell
=> Você entra no Poer Shell como Administrador e irá inserir o seguinte script:
=>Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
=>Após, digitar a opção A - Sim para todos.

3. Instalar no Power Shell o CLI do angular:
=>[npm] i -g @angular/cli 

4. Incluir o caminho do [npm] nas variáveis de ambiente:
=>C - Usuário até npm

# Comandos Principais do Angular CLI
ng v => Verifica se o Angular está instalado e em qual versão.
ng new NomeDoApp => Cria um novo APP com o nome especificado.
ng serve => Inicializar o servidor
ng g c NomeDoComponente => Cria um novo componente.