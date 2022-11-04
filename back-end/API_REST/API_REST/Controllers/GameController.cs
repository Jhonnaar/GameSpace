using API_REST.DBContext;
using API_REST.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly AppDbContext context;

        public GameController(AppDbContext context)
        {
            this.context = context;
        }

        // GET api/<GameController>/5
        [HttpGet("{key}/{value}")]
        public dynamic Get(string key, string value)
        {
            
            if (key == "gameDirector")
            {
                var gamesList = context.Games.Where(game => game.GameDirector == value);
                return gamesList;
            }
            else {
                if (key == "mainCharacter")
                {
                    var gamesList = context.Games.Where(game => game.MainCharacter == value);
                    return gamesList;
                }
                else {
                    if (key == "producer")
                    {
                        var gamesList = context.Games.Where(game=>game.Producer==value);
                        return gamesList;
                    }
                    else
                    {
                        var gamesList = context.Games.Where(game => game.LaunchDate == Int32.Parse(value));
                        return gamesList;
                    }
                }
            }
        }

        // POST api/<GameController>
        [HttpPost]
        public ActionResult Post([FromBody] Game game)
        {
            try
            {
                context.Games.Add(game);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        // PUT api/<GameController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Game game)
        {
            try
            {
                if (game.GameId == id)
                {
                    context.Entry(game).State = EntityState.Modified;
                    context.SaveChanges();
                    return Ok();
                }
                else {
                    return BadRequest();
                }
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        // DELETE api/<GameController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
