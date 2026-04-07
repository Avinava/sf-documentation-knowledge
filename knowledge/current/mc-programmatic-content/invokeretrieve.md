---
title: "InvokeRetrieve"
domain: mc-programmatic-content
topic: invokeretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.562Z
estimatedTokens: 339
keywords: [InvokeRetrieve, Function, Ordinal, API, array, variable, Retrieve, call, OverallStatus, passed, **Overview**, **Syntax**, perform, containing, status, RequestID]
---

> InvokeRetrieve(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    object
    Required
    API object from which to return array of API objects



    2
    variable
    
    Retrieve call OverallStatus parameter that is passed 

# InvokeRetrieve

## **Overview**

Returns an array of API objects from a RetrieveRequest object.

### **Syntax**

InvokeRetrieve(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | object | Required | API object from which to return array of API objects |
| 2 | variable |  | Retrieve call OverallStatus parameter that is passed to a defined AMPscript variable. You pass in the variable and the method returns the value stored in that variable. See other Invoke calls for previously defined variables. See the Retrieve method for possible OverallStatus values. |
| 3 | variable |  | Retrieve call RequestID parameter that is passed to a defined AMPscript variable. You pass in the variable and the method returns the value stored in that variable. See other Invoke calls for previously defined variables. See the Retrieve method for more information about RequestID values. |

### Usage

```
SET @rr_1=CreateObject("RetrieveRequest")
SetObjectProperty(@rr_1,"ObjectType","Subscriber")
AddObjectArrayItem(@rr_1,"Properties","EmailAddress")
SET @sfp=CreateObject("SimpleFilterPart")
SetObjectProperty(@sfp,"Property","EmailAddress")
SetObjectProperty(@sfp,"SimpleOperator","equals")
AddObjectArrayItem(@sfp,"Value",@emailaddress)
SetObjectProperty(@rr_1,"Filter",@sfp)
SET @sub=InvokeRetrieve(@rr_1)
```

Last Updated: Jun 8, 2021

## Code Examples

```
var StatusAndRequestID = [0,0];
var Result = Platform.Function.InvokeRetrieve(apiRetreiveObject,StatusAndRequestID);
var status = StatusAndRequestID[0];
var requestID = StatusAndRequestID[1];

if(Result != null) {
  for(var i in Result) {
     name = Result[i].Name;
     id = Result[i].ObjectID;
```
