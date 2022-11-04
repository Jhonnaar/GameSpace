using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace API_REST.Models
{
    [Table("users")]
    public partial class User
    {
        public User()
        {
            Rents = new HashSet<Rent>();
        }

        [Key]
        [Column("userId")]
        public int UserId { get; set; }
        [Column("fullName")]
        [StringLength(50)]
        [Unicode(false)]
        public string FullName { get; set; } = null!;
        [Column("age")]
        public int Age { get; set; }
        [Column("email")]
        [StringLength(50)]
        [Unicode(false)]
        public string Email { get; set; } = null!;
        [Column("phoneNumber")]
        public int PhoneNumber { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<Rent> Rents { get; set; }
    }
}
