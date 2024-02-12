using ProEventosRevisao.Domain;
using System.Threading.Tasks;

namespace ProEventos.Persistence.Contratos;

public interface IPalestrantePersist
{
    //Palestrantes
    Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos);
    Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos);
    Task<Palestrante> GetPalestranteByIdAsync(int PalestranteId, bool includeEventos);
}
