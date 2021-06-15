namespace CodingTestApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Branches",
                c => new
                    {
                        BranchID = c.Int(nullable: false, identity: true),
                        BranchName = c.String(nullable: false, maxLength: 20),
                        Location = c.String(maxLength: 40),
                        CreationDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.BranchID);
            
            CreateTable(
                "dbo.Transactions",
                c => new
                    {
                        TransactionID = c.Int(nullable: false, identity: true),
                        TransactionTypeID = c.Int(nullable: false),
                        AccountID = c.Int(nullable: false),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        TransactionDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.TransactionID)
                .ForeignKey("dbo.TransactionTypes", t => t.TransactionTypeID, cascadeDelete: true)
                .ForeignKey("dbo.UserAccounts", t => t.AccountID, cascadeDelete: true)
                .Index(t => t.TransactionTypeID)
                .Index(t => t.AccountID);
            
            CreateTable(
                "dbo.TransactionTypes",
                c => new
                    {
                        TransactionTypeID = c.Int(nullable: false, identity: true),
                        TransactionName = c.String(nullable: false, maxLength: 20),
                    })
                .PrimaryKey(t => t.TransactionTypeID);
            
            CreateTable(
                "dbo.UserAccounts",
                c => new
                    {
                        AccountID = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false),
                        LastName = c.String(nullable: false),
                        Balance = c.Decimal(nullable: false, precision: 18, scale: 2),
                        BranchID = c.Int(nullable: false),
                        CreationDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.AccountID)
                .ForeignKey("dbo.Branches", t => t.BranchID, cascadeDelete: true)
                .Index(t => t.BranchID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Transactions", "AccountID", "dbo.UserAccounts");
            DropForeignKey("dbo.UserAccounts", "BranchID", "dbo.Branches");
            DropForeignKey("dbo.Transactions", "TransactionTypeID", "dbo.TransactionTypes");
            DropIndex("dbo.UserAccounts", new[] { "BranchID" });
            DropIndex("dbo.Transactions", new[] { "AccountID" });
            DropIndex("dbo.Transactions", new[] { "TransactionTypeID" });
            DropTable("dbo.UserAccounts");
            DropTable("dbo.TransactionTypes");
            DropTable("dbo.Transactions");
            DropTable("dbo.Branches");
        }
    }
}
