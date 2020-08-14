using System;
using System.Collections.Generic;
using System.Linq;
					
public class Program
{
	public static void Main()
	{
		List<NewModel> modelList = new List<NewModel>
		{
			new NewModel
			{
				Property = "hey",
				PropertyNumber = 1
			}
		};
		
		List<NewModel> emptyList = new List<NewModel>();
		
		var modelListCheck = modelList.FirstOrDefault();
		Console.WriteLine("Model List Check: " + (modelListCheck == null).ToString());
		
		var emptyListCheck = emptyList.FirstOrDefault();
		Console.WriteLine("Empty List Check: " + (emptyListCheck == null).ToString());
		
		var filteredList = modelList.FirstOrDefault(x => x.PropertyNumber == 1);
		Console.WriteLine("Filtered List: " + (filteredList == null).ToString());
		
		var filteredToEmpty = modelList.FirstOrDefault(x => x.PropertyNumber != 1);		
		Console.WriteLine("Filtered to empty list: " + (filteredToEmpty == null).ToString());
		
		// Before Refactor
		// this returns List<NewModel>
		var newList = modelList.Where(x => x.PropertyNumber == 1).ToList();
		if (newList.Count() > 0) 
		{
			var firstList = newList[0]
			Console.WriteLine("newList is not null");
			return firstList;
		}
		
		// After Refactor by using FirstOrDefault()
		// FirstOrDefault returns NewModel. If no list item meets the condition, it returns null
		var filterdByFirstOrDefault = modelList.FirstOrDefault(x => x.PropertyNumber == 1);
		if (filterdByFirstOrDefault != null)
		{
			Console.WriteLine("filteredByFirstOrDefault list is not null");
			return filterdByFirstOrDefault;
		}

	}
	
	public class NewModel
	{
		public string Property { get; set; }
		public int PropertyNumber { get; set; }
	}
}

// Output
Model List Check: False
Empty List Check: True
Filtered List: False
Filtered to empty list: True
newList is not null
filteredByFirstOrDefault list is not null

// Linq Enumerable.FirstOrDefault
// https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.firstordefault?view=netframework-4.8



//// Gist example
using System;
using System.Collections.Generic;
using System.Linq;
					
public class FirstOrDefaultOrWhere
{
	public static MyModel GetModel()
	{
		List<MyModel> modelList = new List<MyModel>
		{
			new MyModel
			{
				Property = "hey",
				PropertyNumber = 1
			}
		};
	
		// Before Refactor
		// this returns List<MyModel>
		var newList = modelList.Where(x => x.PropertyNumber == 1).ToList();
		if (newList.Count() > 0) 
		{
			var firstList = newList[0]
			Console.WriteLine("newList is not null");
			return firstList;
		}
		
		// After Refactor by using FirstOrDefault()
		// FirstOrDefault returns MyModel. If no list item meets the condition, it returns null
		var filterdByFirstOrDefault = modelList.FirstOrDefault(x => x.PropertyNumber == 1);
		if (filterdByFirstOrDefault != null)
		{
			Console.WriteLine("filteredByFirstOrDefault list is not null");
			return filterdByFirstOrDefault;
		}
	}
	
	public class MyModel
	{
		public string Property { get; set; }
		public int PropertyNumber { get; set; }
	}
}