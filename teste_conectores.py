def classificar_produto(preco):
    if preco <= 100:
        return "Baixo custo"
    elif 101 <= preco <= 500:
        return "Médio custo"
    else:
        return "Alto custo"

# Solicita o preço do produto ao usuário
try:
    preco_produto = float(input("Digite o preço do produto: R$ "))
    categoria = classificar_produto(preco_produto)
    print(f"O produto pertence à prateleira de {categoria}.")
except ValueError:
    print("Por favor, insira um valor numérico válido.")
