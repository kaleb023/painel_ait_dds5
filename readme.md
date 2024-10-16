# Painel de Aulas AIT DDS 5
## Instrutor : Ramon de Holanda

# Realize um commit na sua branch se estiver pendente

## Atualizando a branch hipotetica chamda thiago
### Primeiro passo troque para a branch principal
git checkout main

### Baixe a nova versão da branch principal
git pull origin main

### Acesse a branch a sera mesclada com a main (branch hipotetica chamada Thiago)
git checkout thiago

### Realize o merge (esse perge pega atualizações da main na sua branch)
git merge main

### Adicione arquivos pendentes
git add .

### Faça commit com as mudanças
git commit -m "mensagem descrevendo o merge"

## Atualizando a main

### Acessando a main
git checkout main

### Atualizando main (Se sua branch main já estiver atualizada não terá atualizações)
git pull origin main

### Merge com a branch hipotetica chamada thiago
git merge thiago

### Adicione arquivos pendentes (se houverem)
git add .

### Faça commit com as mudanças (se necessário)
git commit -m "mensagem descrevendo o merge"
