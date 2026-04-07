---
title: "Update"
domain: mc-programmatic-content
topic: update
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.451Z
estimatedTokens: 140
keywords: [Function, Ordinal, Account, attributes, change, **Overview**, **Syntax**, Attributes, regarding, account, content, area, delivery, profile, Examples, filter, definition, Portfolio, query, send]
---

# Update

> Update(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Attributes from send classification to change

# Update

## **Overview**

Updates the send classification and returns a status. You must provide keys for both the sender and delivery profiles to successfully update a send classification.

### **Syntax**

Update(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Attributes from send classification to change |

## Example

This sample code updates the name attribute for the send classification with the external key mySendClassification:

```
var sc = SendClassification.Init('mySendClassification');

var updatedSC = {
    Name : "Updated Send Classification",
    SenderProfileKey : "mySPKey",
    DeliveryProfileKey : "myDPKey"
};

var status = sc.Update(updatedSC);
```

Last Updated: Jun 8, 2021

## Code Examples

```
var myAccount = Account.Init("MyCustomerKey");
var status = myAccount.Update({ "FromName" : "Demo From Name" });
```

```
var acctUser = AccountUser.Init('myAccountUser', 123456789);
var status = acctUser.Update({ "Password" : "XXXXX" });
```

```
var obj = ContentAreaObj.Init('testca');
var status = obj.Update({"Name" : "Name Updated By SSJS" });
```

```
var myProfile = DeliveryProfile.Init('myDeliveryProfile');
var status = myProfile.Update({ "Name" : "SSJS Updated Delivery Profile" });
```

```
var portObj = Portfolio.Init('myPortfolioCK');
var status = portObj.Update({ DisplayName : "Updated SSJS Image"});
```
