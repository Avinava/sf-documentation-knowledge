---
title: "Tracking.Retrieve"
domain: mc-programmatic-content
topic: trackingretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.446Z
estimatedTokens: 141
keywords: [Tracking.Retrieve, Function, Ordinal, Criteria, search, account, **Overview**, **Syntax**, send]
---

# Tracking.Retrieve

> Tracking.Retrieve(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    
    Criteria used to search for account

# Tracking.Retrieve

## **Overview**

Returns an array of tracking data related to the accounts specified by the passed filter argument

### **Syntax**

Tracking.Retrieve(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string |  | Criteria used to search for account |

## Example

This sample code retrieves an array of tracking data for the accounts based on the specified filter criteria:

```
var acctTracking = Account.Tracking.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"MyAccount"});
```

Last Updated: Jun 8, 2021

## Code Examples

```
var sendTracking = Send.Tracking.Retrieve({Property:"SendID",SimpleOperator:"equals",Value:12345});
```
