---
title: "Rows.Retrieve"
domain: mc-programmatic-content
topic: rowsretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.032Z
estimatedTokens: 429
keywords: [Rows.Retrieve, Function, Ordinal, filter, retrieve, **Overview**, **Syntax**]
---

> Rows.Retrieve(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    
    Specifies information to filter for the retrieve

# Rows.Retrieve

## **Overview**

Retrieves up to 2500 rows of data in a data extension

### **Syntax**

Rows.Retrieve(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string |  | Specifies information to filter for the retrieve |

## Example

This sample code retrieves all data from the birthdayDE data extension.

```
var  birthdayDE = DataExtension.Init("birthdayDE");
var data = birthdayDE.Rows.Retrieve();
```

This sample code retrieves all data using a simple filter where the age is greater than 20.

```
var birthdayDE = DataExtension.Init("birthdayDE");
var filter = {Property:"Age",SimpleOperator:"greaterThan",Value:20};
var data = birthdayDE.Rows.Retrieve(filter);
```

This sample code retrieves all data using a complex filter where the age is greater than 20 and the first name is Angel.

```
var birthdayDE = DataExtension.Init("birthdayDE");
var complexfilter = {
                LeftOperand:{
                    Property:"Age",
                    SimpleOperator:"greaterThan",
                    Value:20
                },
                LogicalOperator:"AND",
                RightOperand:{
                    Property:"FirstName",
                    SimpleOperator:"equals",
                    Value:"Angel"
        }};
var moredata = birthdayDE.Rows.Retrieve(complexfilter);
```

This function returns information in an array of objects in JSON format:

```
[
    {
        "FirstName":"Angel",
        "LastName":"Angel",
        "EmailAddress":"aruiz@example.com",
        "Age":"25",
        "Birthday":"11/29/1985 12:00:00 AM"
    }
]
```

The Retrieve function cannot be used in the context of an email message or email preview.

Last Updated: Jun 8, 2021
