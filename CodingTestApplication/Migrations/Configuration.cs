namespace CodingTestApplication.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using CodingTestApplication.Models;
    using UserAccessController.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<CodingTestApplicationContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "CodingTestApplicationContext";
        }

        protected override void Seed(CodingTestApplicationContext context)
        {

            context.Branches.AddOrUpdate(
            p => p.BranchName,
            new Branches { BranchName = "Main", Location = "Kampala", CreationDate = DateTime.Parse("06/12/2021") },
            new Branches { BranchName = "Jinja", Location = "Jinja", CreationDate = DateTime.Parse("02-02-2021") },
            new Branches { BranchName = "Mbale", Location = "Mbale", CreationDate = DateTime.Parse("12-01-2021") },
            new Branches { BranchName = "Gulu", Location = "Gulu", CreationDate = DateTime.Parse("11-02-2021") },
            new Branches { BranchName = "Soroti", Location = "Soroti", CreationDate = DateTime.Parse("02-18-2021") },
            new Branches { BranchName = "Kabale", Location = "Kabale", CreationDate = DateTime.Parse("02-13-2021") },
            new Branches { BranchName = "Bundibujjo", Location = "Bundibujjo", CreationDate = DateTime.Parse("03-01-2021") },
            new Branches { BranchName = "Masaka", Location = "Masaka", CreationDate = DateTime.Parse("04-23-2021") },
            new Branches { BranchName = "Ishaka", Location = "Ishaka", CreationDate = DateTime.Parse("06-22-2021") }
            );

            context.TransactionTypes.AddOrUpdate(
            t => t.TransactionType,
            new TransactionTypes { TransactionName = "Deposit", Description = Convert.ToChar("Credits") },
            new TransactionTypes { TransactionName = "WithDraw", Description = Convert.ToChar("Debits") }
            );

            context.UserAccounts.AddOrUpdate(
            u => u.UserAccount,
            new UserAccounts { FirstName = "Sempa", LastName = "Pius", Balance = 1000000, BranchID = 4, CreationDate = DateTime.Parse("13-01-2021") },
            new UserAccounts { FirstName = "Ojok", LastName = "Enock", Balance = 300000, BranchID = 4, CreationDate = DateTime.Parse("06-02-2021") },
            new UserAccounts { FirstName = "Were", LastName = "Amos", Balance = 25535000, BranchID = 1, CreationDate = DateTime.Parse("06-03-2021") },
            new UserAccounts { FirstName = "Mwiru", LastName = "Peter", Balance = 400000, BranchID = 5, CreationDate = DateTime.Parse("06-04-2021") },
            new UserAccounts { FirstName = "Hassan", LastName = "Ryan", Balance = 1200000, BranchID = 3, CreationDate = DateTime.Parse("06-06-2021") },
            new UserAccounts { FirstName = "Mujuni", LastName = "Samuel", Balance = 350000000, BranchID = 2, CreationDate = DateTime.Parse("06-06-2021") },
            new UserAccounts { FirstName = "Sentongo", LastName = "Denis", Balance = 12500000, BranchID = 6, CreationDate = DateTime.Parse("06-06-2021") },
            new UserAccounts { FirstName = "Zackaria", LastName = "James", Balance = 8000000, BranchID = 2, CreationDate = DateTime.Parse("06-06-2021") },
            new UserAccounts { FirstName = "Atwiine", LastName = "Oswald", Balance = 94500000, BranchID = 3, CreationDate = DateTime.Parse("06-06-2021") }
            );

            context.Transactions.AddOrUpdate(
            t => t.Transaction,
            new Transactions { TransactionTypeID = 1, AccountID = 3, Amount = 200000, TransactionDate = DateTime.Parse("06-03-2021") },
            new Transactions { TransactionTypeID = 1, AccountID = 3, Amount = 200000, TransactionDate = DateTime.Parse("13-02-2021") }
            );
        }
    }
}