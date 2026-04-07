---
title: "Add"
domain: mc-programmatic-content
topic: add
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.262Z
estimatedTokens: 95
keywords: [Add, Function, Ordinal, numeric, Second, **Overview**, **Syntax**, Usage, JSON, representing, new, account, user, content, area, data, extension, Examples, delivery, profile]
---

# Add

> Add(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    object
    Required
    Object representing the properties of the new data extension

# Add

## **Overview**

Creates a new data extension and returns an initialized DataExtension object

### **Syntax**

Add(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | object | Required | Object representing the properties of the new data extension |

Limit your data extension external keys to 36 characters to help ensure all further processes function correctly.

## Examples

This sample code creates a data extension:

```
var deObj = {
        "CustomerKey" : "demoDE",
        "Name" : "My Demo DE",
        "Fields" : [
          { "Name" : "Field 1", "FieldType" : "Number", "IsPrimaryKey" : true, "IsRequired" : true },
          { "Name" : "Field 2", "FieldType" : "Text", "MaxLength" : 50 },
          { "Name" : "Field 3", "FieldType" : "Date", "Ordinal" : 2 },
        ]
    };

var myDE = DataExtension.Add(deObj);
```

This sample code creates a sendable data extension:

```
var deObj = {
    CustomerKey : "SendableDE",
    Name : "Sendable Data Extension",
    Fields : [
        { "Name" : "SubKey", "FieldType" : "Text", "IsPrimaryKey" : true, "MaxLength" : 50, "IsRequired" : true },
        { "Name" : "SecondField", "FieldType" : "Text", "MaxLength" : 50 },
        { "Name" : "ThirdField", "FieldType" : "Text", "MaxLength" : 50 },
        { "Name" : "DifferentSubKey", "FieldType" : "Text", "MaxLength" : 50 }
    ],
    SendableInfo : {
        Field : { "Name" : "SubKey", "FieldType" : "Text" },
        RelatesOn : "Subscriber Key"
    }
};

var de = DataExtension.Add(deObj);
```

This sample code creates a sendable and testable data extension:

```
var deObj = {
     "CustomerKey" : "0demoDE5",
     "Name" : "0My Demo DE5",
     SendableInfo : {
          Field : { "Name" : "Field 2", "FieldType" : "Text" },
          RelatesOn : "Subscriber Key"
     },
     "IsTestable": true,
     "Fields" : [
          { "Name" : "Field 1", "FieldType" : "Number", "IsPrimaryKey" : true, "IsRequired" : true },
          { "Name" : "Field 2", "FieldType" : "Text", "MaxLength" : 50 },
          { "Name" : "Field 3", "FieldType" : "Date", "Ordinal" : 2 },
     ]
};

var myDE = DataExtension.Add(deObj);
```

Last Updated: Jun 8, 2021

## Code Examples

```
%%=Add(@abc,@def)=%%
```

```
var newUser = {
    "Name" : "Andrea Cruz",
    "UserID" : "acruz",
    "Password" : "PASSWORD",
    "Email" : "acruz@example.com",
    "ClientID" : 123456789,
    "DefaultBusinessUnitKey": "childBUKey",
    "AssociatedBusinessUnits" : ["childBUKey", "grandchildBUKey"]
};

var status = AccountUser.Add(newUser);
```

```
var exampleArea = {
    "CustomerKey" : "exampleArea",
    "Name" : "SSJS Content Area Example",
    "CategoryID" : 123456                            //Use only if you wish to assign the content area to a specific folder
    "Layout" : "RawText",                            //Use only if you wish to create a specific layout format for a content area
    "LayoutSpecified" : true,                        //Use only if you specify a layout type
    "Content" : "<b>This is example content</b>"
};

var addedCA = ContentAreaObj.Add(exampleArea);
```

```
var newDP = {
    "Name" : "SSJS Added Delivery Profile",
    "CustomerKey" : "test_delivery_profile",
    "Description" : "An SSJS Added Profile",
    "SourceAddressType" : "DefaultPrivateIPAddress"
};
var newProfile = DeliveryProfile.Add(newDP);
```

```
var newMail = {
    "CustomerKey" : "test_email_key",
    "Name" : "Test Email",
    "CategoryID" : "123456",
    "HTMLBody" : "<b>This is a test email</b>",
    "TextBody" : "This is a test email",
    "Subject" : "Test Email Subject",
    "IsActive" : "true",
    "IsHTMLPaste" : "true",
    "Status" : "active",    
    "EmailType" : "HTML",
    "CharacterSet" : "US-ASCII",
    "HasDynamicSubjectLine" : "false"
};
var myEmail = Email.Add(newMail);
```
