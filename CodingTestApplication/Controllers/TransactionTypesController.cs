using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using CodingTestApplication.Models;

namespace CodingTestApplication.Controllers
{
    public class TransactionTypesController : Controller
    {
        private CodingTestApplicationContext db = new CodingTestApplicationContext();

        // GET: TransactionTypes
        public ActionResult Index()
        {
            return View(db.TransactionTypes.ToList());
        }

        // GET: TransactionTypes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TransactionTypes transactionTypes = db.TransactionTypes.Find(id);
            if (transactionTypes == null)
            {
                return HttpNotFound();
            }
            return View(transactionTypes);
        }

        // GET: TransactionTypes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TransactionTypes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "TransactionTypeID,TransactionName")] TransactionTypes transactionTypes)
        {
            if (ModelState.IsValid)
            {
                db.TransactionTypes.Add(transactionTypes);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(transactionTypes);
        }

        // GET: TransactionTypes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TransactionTypes transactionTypes = db.TransactionTypes.Find(id);
            if (transactionTypes == null)
            {
                return HttpNotFound();
            }
            return View(transactionTypes);
        }

        // POST: TransactionTypes/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "TransactionTypeID,TransactionName")] TransactionTypes transactionTypes)
        {
            if (ModelState.IsValid)
            {
                db.Entry(transactionTypes).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(transactionTypes);
        }

        // GET: TransactionTypes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TransactionTypes transactionTypes = db.TransactionTypes.Find(id);
            if (transactionTypes == null)
            {
                return HttpNotFound();
            }
            return View(transactionTypes);
        }

        // POST: TransactionTypes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TransactionTypes transactionTypes = db.TransactionTypes.Find(id);
            db.TransactionTypes.Remove(transactionTypes);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
