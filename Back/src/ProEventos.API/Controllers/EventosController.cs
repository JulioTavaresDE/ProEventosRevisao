using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using System.Reflection.Metadata.Ecma335;
using Microsoft.EntityFrameworkCore;
using ProEventosRevisao.Domain;
using ProEventos.Persistence.Contextos;
using ProEventos.Application.Contratos;

namespace ProEventos.API.Controllers
{
    [ApiController]
[Route("api/[controller]")]
public class EventosController : ControllerBase
{
    private readonly IEventoService _eventoService;

    public EventosController(IEventoService eventoService)
    {
            _eventoService = eventoService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
            try
            {
                var eventos = await _eventoService.GetAllEventosAsync(true);
                if (eventos == null) return NotFound("Nenhum evento encontratdo");
                
                return Ok(eventos);
            }
            catch (Exception ex)
            {

                //throw new Exception("Nao encontro registro: ", ex);
                return this.StatusCode(500);
            }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
            try
            {
                var eventos = await _eventoService.GetEventoByIdAsync(id,true);
                if (eventos == null) return NotFound("Eventos por ID  nao encontratdo");

                return Ok(eventos);
            }
            catch (Exception ex)
            {

                //throw new Exception("Nao encontro registro: ", ex);
                return this.StatusCode(500);
            }
    }

    [HttpGet("{tema}/tema")]
    public async Task<IActionResult> GetByTema(string tema)
    {
         try
            {
                var eventos = await _eventoService.GetAllEventosByTemaAsync(tema, true);
                if (eventos == null) return NotFound("Eventos por Tema nao encontratdo");

                return Ok(eventos);
            }
            catch (Exception ex)
            {

                //throw new Exception("Nao encontro registro: ", ex);
                return this.StatusCode(500);
            }
    }

    [HttpPost]
    public async Task<IActionResult> Post(Evento model)
    {
            try
            {
                var evento = await _eventoService.AddEventos(model);
                if (evento == null) return BadRequest("Erro ao tentar adicionar Evento");

                return Ok(evento);
            }
            catch (Exception ex)
            {

                //throw new Exception("Nao encontro registro: ", ex);
                return this.StatusCode(500);
            }
        }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Evento model)
    {
            try
            {
                var evento = await _eventoService.UpdateEvento(id,model);
                if (evento == null) return BadRequest("Erro ao tentar atualizar Evento");

                return Ok(evento);
            }
            catch (Exception ex)
            {

                //throw new Exception("Nao encontro registro: ", ex);
                return this.StatusCode(500);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                if (await _eventoService.DeleteEvento(id))
                {
                    return Ok("Deletado");
                }
                else
                {
                    return BadRequest("Evento nao deletado");
                }
            }
            catch (Exception ex)
            {

                throw new Exception("Nao encontro registro: ", ex);
                //return this.StatusCode(500);
            }
        }
    }
}