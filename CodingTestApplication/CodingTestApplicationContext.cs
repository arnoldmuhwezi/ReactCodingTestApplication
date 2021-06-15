﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

public class CodingTestApplicationContext : DbContext
{
    // You can add custom code to this file. Changes will not be overwritten.
    // 
    // If you want Entity Framework to drop and regenerate your database
    // automatically whenever you change your model schema, please use data migrations.
    // For more information refer to the documentation:
    // http://msdn.microsoft.com/en-us/data/jj591621.aspx

    public CodingTestApplicationContext() : base("name=CodingTestApplicationContext")
    {
    }

    public System.Data.Entity.DbSet<CodingTestApplication.Models.Branches> Branches { get; set; }

    public System.Data.Entity.DbSet<UserAccessController.Models.UserAccounts> UserAccounts { get; set; }

    public System.Data.Entity.DbSet<CodingTestApplication.Models.Transactions> Transactions { get; set; }

    public System.Data.Entity.DbSet<CodingTestApplication.Models.TransactionTypes> TransactionTypes { get; set; }
}
