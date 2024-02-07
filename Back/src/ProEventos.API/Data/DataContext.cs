using System.Reflection.Metadata.Ecma335;
using Microsoft.EntityFrameworkCore;

namespace ProEventosRevisao;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options){}
    public DbSet <Evento>? Eventos { get; set; }
}
