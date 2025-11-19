using System;

class Produto

{

    public string Nome { get; set; }

    public double Preco { get; set; }

    public double Desconto { get; set; }

    public double CalcularPrecoInicial()
    
    {
        return Preco;
    }
    
    public double CalcularPrecoFinal()

    {

        return Preco - (Preco * Desconto / 100);

    }

}

class Program

{

    static void Main()

    {

        Produto produto = new Produto

        {

            Nome = "Fone de ouvido",

            Preco = 200,

            Desconto = 25

        };
        Console.WriteLine($"Preço inicial de {produto.Nome}: R$ {produto.CalcularPrecoInicial():F2}");
        Console.WriteLine($"Preço final de {produto.Nome}: R$ {produto.CalcularPrecoFinal():F2}");

    }

}

