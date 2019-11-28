using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Customer
    {
        public string nameCustomer { get; set; }
        public string password { get; set; }
        public int idCustomer { get; set; }
        public string street { get; set; }
        public string phone { get; set; }
        public string email { get; set; }

        public static Customer ConvertDBToDto(DAL.Customer customer)
        {
            return new Customer()
            {
                nameCustomer = customer.nameCustomer,
                password = customer.password,
                idCustomer=customer.idCustomer,
                street = customer.street,
                phone = customer.phone,
                //email=customer.email
            };
        }
    }
}
