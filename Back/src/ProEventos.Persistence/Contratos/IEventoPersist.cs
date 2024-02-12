using ProEventosRevisao.Domain;
using System.Threading.Tasks;

namespace ProEventos.Persistence.Contratos;

public interface IEventoPersist
{

    //Eventos
    Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false);
    Task<Evento[]> GetAllEventosAsync(bool includePalestrantes = false);
    Task<Evento> GetEventoByIdAsync(int EventoId, bool includePalestrantes = false);
    //Task GetEventoByIdAsync(bool includePalestrantes=false);
}
