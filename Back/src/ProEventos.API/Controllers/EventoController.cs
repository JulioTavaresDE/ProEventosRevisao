using Microsoft.AspNetCore.Mvc;
using ProEventosRevisao;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    public IEnumerable<Evento> _evento = new Evento[] {
         new Evento () {
            EventoId = 1,
            Tema = "Dot net Core e Angular",
            Local = "Belo Horizonte",
            Lote = "1 Lote",
            QtdPessoas = 250,
            DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
            ImageURL = "foto2.png"
            },
        new Evento(){
            EventoId = 2,
            Tema = "Angular e suas novidades",
            Local = "sao Paulo",
            Lote = "2 Lote",
            QtdPessoas = 350,
            DataEvento = DateTime.Now.AddDays(3).ToString("dd/MM/yyyy"),
            ImageURL = "foto3.png"
             }
       };

    public EventoController()
    {

    }

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _evento;
       
    }

    [HttpGet("{id}")]
    public IEnumerable<Evento> GetById(int id)
    {
        return _evento.Where(evento => evento.EventoId == id);
    }

    [HttpPost]
    public string Post()
    {
        return "exemplo de post";
    }

    [HttpPut("{id}")]
    public string Put(int id)
    {
        return $"Exemplo de Put {id}";
    }

     [HttpDelete("{id}")]
    public Evento Delete(int id)
    {
       return new Evento(){
        EventoId = 1,
        Tema = "Dot net Core e Angular",
        Local = "Belo Horizonte",
        Lote = "1 Lote",
        QtdPessoas = 250,
        DataEvento = DateTime.Now.AddDays(2).ToString()
       };
    }
}
