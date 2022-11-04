using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API_REST.Models
{
    [Table("games")]
    public partial class Game
    {
        [Key]
        [Column("gameId")]
        public int GameId { get; set; }
        [Column("gameName")]
        [StringLength(50)]
        [Unicode(false)]
        public string GameName { get; set; } = null!;
        [Column("launchDate")]
        public int LaunchDate { get; set; }
        [Column("mainCharacter")]
        [StringLength(50)]
        [Unicode(false)]
        public string MainCharacter { get; set; } = null!;
        [Column("gameDirector")]
        [StringLength(50)]
        [Unicode(false)]
        public string GameDirector { get; set; } = null!;
        [Column("producer")]
        [StringLength(50)]
        [Unicode(false)]
        public string Producer { get; set; } = null!;
        [Column("gamePlatform")]
        [StringLength(50)]
        [Unicode(false)]
        public string GamePlatform { get; set; } = null!;
        [Column("gamePrice", TypeName = "money")]
        public decimal GamePrice { get; set; }
        [Column("stock")]
        public int Stock { get; set; }
    }
}
