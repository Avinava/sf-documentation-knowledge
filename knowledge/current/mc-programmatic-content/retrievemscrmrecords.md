---
title: "RetrieveMscrmRecords"
domain: mc-programmatic-content
topic: retrievemscrmrecords
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.740Z
estimatedTokens: 480
keywords: [RetrieveMscrmRecords, Function, Ordinal, Dynamics, CRM, entity, retrieve, records, comma-separated, fie, **Overview**, **Syntax**]
---

> RetrieveMscrmRecords(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of Dynamics CRM entity from which to retrieve records



    2
    string
    Required
    A comma-separated list of fie

# RetrieveMscrmRecords

## **Overview**

Retrieves multiple CRM records. Use fields in the target entity or select fields from related entities by using many-to-one lookup attributes.

### **Syntax**

RetrieveMscrmRecords(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of Dynamics CRM entity from which to retrieve records |
| 2 | string | Required | A comma-separated list of fields to retrieve |
| 3 | string | Required | Field name to check value |
| 4 | string | Required | Operator to check value |
| 5 | string | Required | Value to check |

### Usage

Select the name of the parent account by including parentaccount.id name in the list of fields. You can also filter on Many:1 lookup attributes by using the same nomenclature. To retrieve accounts where the parent account's name is Example.com, include 'parentaccountid.name','=','Example.com' in your filters. All values regularly retrieved in Fetch XML queries are returned. If parentaccount.id is one of the fields to be returned, the results will have columns parentaccountid, parentaccountid.name, and parentaccountid.type.

```
%%[
/* Sample Code - this retrieves all contacts where the first name is John */
var @records_retrieved, @counter, @firstname, @lastname, @id
set @records_retrieved = retrievemscrmrecords('contact', 'contactid,firstname,lastname', 'firstname', '=', 'john')
]%%
<p>Contacts:</p><br><br>
%%[
for @counter = 1 to rowcount(@records_retrieved) do
set @firstname = field(row(@records_retrieved,@counter),'firstname')
set @lastname = field(row(@records_retrieved,@counter),'lastname')
set @id = field(row(@records_retrieved,@counter),'contactid')
]%%
<p>First: &amp;nbsp; &amp;nbsp; %%=v(@firstname)=%% </p>
<p>Last: &amp;nbsp; &amp;nbsp; %%=v(@lastname)=%% </p>
<p>Id: &amp;nbsp; &amp;nbsp; %%=v(@id)=%% </p>  <br><br>
%%[next @counter ]%%
```

Last Updated: Jun 8, 2021
