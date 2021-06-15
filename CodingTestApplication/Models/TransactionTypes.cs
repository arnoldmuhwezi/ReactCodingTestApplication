using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CodingTestApplication.Models
{
    public class TransactionTypes
        {
            [Key]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public int TransactionTypeID { get; set; }

            [StringLength(20)]
            [Required(ErrorMessage = "Cannot be blank!")]
            [Display(Name = "Transaction Name")]
            public string TransactionName { get; set; }

            [Display(Name = "Description")]
            public char Description { get; set; }
            public object TransactionType { get; internal set; }
    }
    
}