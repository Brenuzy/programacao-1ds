# Inicializa uma lista vazia para armazenar os números
numeros = []

# Solicita os 4 números ao usuário
for i in range(4):
    while True:
        try:
            # Solicita a entrada e converte para float
            num = float(input(f"Digite o {i+1}º número: "))
            numeros.append(num)
            break
        except ValueError:
            # Trata o erro se o usuário não digitar um número válido
            print("Entrada inválida. Por favor, digite um número.")

# Calcula a média dos números na lista
# A soma é feita e dividida pelo total de elementos (4)
media = sum(numeros) / len(numeros)

# Exibe o resultado com duas casas decimais
# O uso de f-string com ":.2f" formata o float para duas casas decimais
print(f"A média dos números é: {media:.2f}")
