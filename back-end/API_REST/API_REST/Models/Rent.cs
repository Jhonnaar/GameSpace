using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API_REST.Models
{
    [Table("rents")]
    public partial class Rent
    {
        [Key]
        [Column("rentId")]
        public int RentId { get; set; }
        [Column("userId")]
        public int UserId { get; set; }
        [Column("gameId")]
        public int GameId { get; set; }
        [Column("rentedDate", TypeName = "date")]
        public DateTime RentedDate { get; set; }
        [Column("paid")]
        public bool Paid { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("Rents")]
        public virtual User User { get; set; } = null!;
    }
}
