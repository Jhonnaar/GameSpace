using API_REST.DBContext;
using API_REST.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding.Metadata;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentsController : ControllerBase
    {
        private readonly AppDbContext context;

        public RentsController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet("{id}")]
        public dynamic getByUser(int id)
        {
            try
            {
                return context.Rents.Where(e=>e.UserId==id);
            }
            catch (Exception e)
            {
                return e;
            }
        }

        // GET: api/<RentsController>
        [HttpGet("topgame")]
        public dynamic getGame()
        {
            int act = 0;
            int ant = 0;
            int top = -1;
            List<int> games = new List<int>();
            var rents = context.Rents.ToList();
            foreach (var rent in rents)
            {
                games.Add(rent.GameId);
            }
            foreach (var game in games)
            {
                ant = games.Where(e => e == game).Count();
                if (ant>act)
                {
                    act = ant;
                    top = game;
                }
            }
            return context.Games.FirstOrDefault(e=>e.GameId==top);
        }

        [HttpGet("topuser")]
        public dynamic getUser()
        {
            int act = 0;
            int ant = 0;
            int top = -1;
            List<int> users = new List<int>();
            var rents = context.Rents.ToList();
            foreach (var rent in rents)
            {
                users.Add(rent.UserId);
            }
            foreach (var user in users)
            {
                ant = users.Where(e => e == user).Count();
                if (ant > act)
                {
                    act = ant;
                    top = user;
                }
            }
            return context.Users.FirstOrDefault(e => e.UserId == top); ;
        }

        // GET api/<RentsController>/5
        [HttpGet("today")]
        public dynamic get()
        {
            var todayRents = context.Rents.Where(e => e.RentedDate.Day==DateTime.Now.Day);
            var games = context.Games.ToList();
            List<Game> todayGames = new List<Game>();
            foreach (var item in todayRents)
            {
                todayGames.Add(games.FirstOrDefault(e=>e.GameId==item.GameId));
            }
            return todayGames;
        }

        [HttpGet("lessgame")]
        public dynamic getLessGame()
        {
            int act = 9999;
            int ant = 0;
            int top = -1;
            List<int> games = new List<int>();
            var rents = context.Rents.ToList();
            foreach (var rent in rents)
            {
                games.Add(rent.GameId);
            }
            foreach (var game in games)
            {
                ant = games.Where(e => e == game).Count();
                if (ant < act)
                {
                    act = ant;
                    top = game;
                }
            }
            return context.Games.FirstOrDefault(e => e.GameId == top);
        }

        /*
        // POST api/<RentsController>
        [HttpPost]
        public ActionResult Post([FromBody] Rent value)
        {
            {
                try
                {
                    context.Rents.Add(value);
                    context.SaveChanges();
                    return Ok();
                }
                catch (Exception e)
                {
                    return BadRequest();
                }
            }
        }

        // PUT api/<RentsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RentsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        */
    }
}
