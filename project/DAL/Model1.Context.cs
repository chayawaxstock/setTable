﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class SetTable1Entities4 : DbContext
    {
        public SetTable1Entities4()
            : base("name=SetTable1Entities4")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderBasket> OrderBaskets { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductOfOrder> ProductOfOrders { get; set; }
        public virtual DbSet<EditTable> EditTables { get; set; }
    }
}
