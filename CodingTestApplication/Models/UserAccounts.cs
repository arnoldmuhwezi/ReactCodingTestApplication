using CodingTestApplication.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace UserAccessController.Models
{
    public class UserAccounts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AccountID { get; set; }

        [Required(ErrorMessage = "Cannot be blank!")]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Cannot be blank!")]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [DisplayFormat(DataFormatString = "{0:C}")]
        [Display(Name = "Initial Deposit.")]
        public decimal Balance { get; set; }

        // Foreign key to branches
        [ForeignKey("Branches")]
        public int BranchID { get; set; }
        public virtual Branches Branches { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public object UserAccount { get; internal set; }
    }
}