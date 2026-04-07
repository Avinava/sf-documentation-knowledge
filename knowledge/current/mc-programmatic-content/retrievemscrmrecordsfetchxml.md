---
title: "RetrieveMscrmRecordsFetchXML"
domain: mc-programmatic-content
topic: retrievemscrmrecordsfetchxml
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.327Z
estimatedTokens: 265
keywords: [RetrieveMscrmRecordsFetchXML, Function, Ordinal, Dynamics, CRM, Fetch, XML, query, **Overview**, **Syntax**, Usage]
---

# RetrieveMscrmRecordsFetchXML

> RetrieveMscrmRecordsFetchXML(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Dynamics CRM Fetch XML query

# RetrieveMscrmRecordsFetchXML

## **Overview**

Takes a correctly formed Fetch XML query and returns the attributes specified in the query.

### **Syntax**

RetrieveMscrmRecordsFetchXML(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Dynamics CRM Fetch XML query |

### Usage

```
SET @FetchXML = concat('<fetch mapping='logical' count='1' version='1.0'> <entity name='contact'> <attribute name='contactid' /> <attribute name='emailaddresstring' /> <attribute name='firstname' /> <attribute name='lastname' /> <filter> <condition attribute='contactid' operator='eq' value='', @SubscriberKey, '' /> </filter> </entity></fetch>')
SET @RowSet_All = RetrieveMscrmRecordsFetchXML(@FetchXML)
IF Rowcount(@RowSet_All) >= 1 Then
    SET @RowSet = Row(@RowSet_All, 1)
    SET @contactid = Field(@Rowset,'contactid', 0)
    SET @emailaddresstring = Field(@Rowset,'emailaddresstring', 0)
    SET @firstname = Field(@Rowset,'firstname', 0)
    SET @lastname = Field(@Rowset,'lastname', 0)
ENDIF
```

Last Updated: Jun 8, 2021
