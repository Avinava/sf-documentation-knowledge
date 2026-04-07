---
title: "Retrieve"
domain: mc-programmatic-content
topic: retrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.870Z
estimatedTokens: 214
keywords: [Retrieve, Examples, Function, Ordinal, Criteria, search, account, filter, expression, JSON, containing, additional, **Overview**, **Syntax**, options, user, Critieria, content, extension, Directs, accounts, accessible, authen, email, event, definitions, folder, Portfolio, send, classification, criteria, triggered]
---

> Retrieve(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Criteria used to search for send

# Retrieve

## **Overview**

Retrieves a send based on the specified criteria

### **Syntax**

Retrieve(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Criteria used to search for send |

## Examples

This sample code retrieves a send based on the specified filter criteria:

```
var sends = Send.Retrieve({Property:"ID",SimpleOperator:"equals",Value:12345});
```

This code sample uses a more complex filter to retrieve a send:

```
<script language="JavaScript" runat="Server"> Platform.Load("core", "1");
    var emailIDFilter = { Property : "Email.ID", SimpleOperator : "equals", Value : 71 }; var esdFilter = { Property : "EmailSendDefinition.CustomerKey", SimpleOperator : "equals", Value : "test_esd" };
    var complexFilter = {LeftOperand : emailIDFilter, LogicalOperator : "AND", RightOperand : esdFilter };
    Write(Stringify(Send.Retrieve(complexFilter)));
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
var getAcct = Account.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"MyAccount"});
```

```
var query = {};

query.Filter = '{Property:"CustomerKey",SimpleOperator:"equals",Value:"MyAccount"}';
query.QueryAllAccounts = true;

var getAcct = Account.Retrieve(query);
```

```
var accountUser = AccountUser.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"MyAccount"});
```

```
var results = ContentAreaObj.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"myCA"});
```

```
var results = DataExtension.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"myDEKey"});
```
