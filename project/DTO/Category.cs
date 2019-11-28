using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Category
    {
        public int numCategory { get; set; }
        public string nameCategory { get; set; }

        public static Category ConvertDBToDto(DAL.Category category)
        {
            return new Category()
            {
                nameCategory = category.nameCategory != null ? category.nameCategory.ToString().Trim() : category.nameCategory,
                numCategory = category.numCategory
            };
        }
    }
}