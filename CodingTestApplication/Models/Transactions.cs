using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using UserAccessController.Models;

namespace CodingTestApplication.Models
{
    public class Transactions
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TransactionID { get; set; }

        // Foreign key to transactiontypes
        [ForeignKey("TransactionTypes")]
        [Display(Name = "Transaction Type")]
        public int TransactionTypeID { get; set; }
        public virtual TransactionTypes TransactionTypes { get; set; }

        // Foreign key to useraccounts
        [ForeignKey("UserAccounts")]
        [Display(Name = "Account")]
        public int AccountID { get; set; }
        public virtual UserAccounts UserAccounts { get; set; }

        [DisplayFormat(DataFormatString = "{0:C}")]
        [Display(Name = "Amount")]
        public decimal Amount { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime TransactionDate { get; set; } = DateTime.Now;
        public object Transaction { get; internal set; }
    }
}