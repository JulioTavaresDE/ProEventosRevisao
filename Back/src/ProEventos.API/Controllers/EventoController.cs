using Microsoft.AspNetCore.Mvc;
using ProEventosRevisao;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    public readonly DataContext _context;

    public EventoController(DataContext context)
    {
            this._context = context;
    }

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _context.Eventos;
       
    }

    [HttpGet("{id}")]
    public IEnumerable<Evento> GetById(int id)
    {
        return _context.Eventos.Where(evento => evento.EventoId == id);
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
