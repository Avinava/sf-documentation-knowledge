---
title: "ClaimRowValue"
domain: mc-programmatic-content
topic: claimrowvalue
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.641Z
estimatedTokens: 922
keywords: [ClaimRowValue, Function, Ordinal, data, extension, claim, retrieve, action, column, **Overview**, **Syntax**, Usage]
---

# ClaimRowValue

> ClaimRowValue(1, 2, 3, 4, 5, 6)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of data extension for claim or retrieve action



    2
    string
    Required
    Name of column in data extension from wh

# ClaimRowValue

## **Overview**

This function returns a value from a data extension and locks the row to prevent the information from use in another context until the value claimed status changes. If the function finds a row with the correct matching set of keys, the function returns the requested column value. If the function finds no claimed row, the function attempts to claim an unused row. If the function cannot find or claim value, the function returns the specified default value. Otherwise, the function returns an error. Specify multiple pairs of column names and values as needed.

### **Syntax**

ClaimRowValue(1, 2, 3, 4, 5, 6)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension for claim or retrieve action |
| 2 | string | Required | Name of column in data extension from which to retrieve the return value |
| 3 | string | Required | Name of column in data extension that indicates a claimed or unclaimed row |
| 4 | string |  | Default value to use in case the function fails to claim a row |
| 5 | string | Required | Name of the data extension key column |
| 6 | string | Required | Value of data extension key column |

### Usage

The data extensions used with this function must possess the following characteristics:

-   A Boolean column that indicates a claimed row or not (a true value indicates the row as claimed)
-   An index on the Boolean and \_CustomObjectKey columns to allow for an efficient lookup of claimed rows
-   One or more key columns used to identify the object or recipient claiming the row value, which requires a nullable column
-   An index on the key column or columns to allow an efficient lookup of claimed rows
-   The application automatically sets indexes on sendable data extensions, and you should contact your Marketing Cloud account executive to set indexes for non-sendable data extensions.

You can also include an optional column to receive a timestamp at the time the application executes the ClaimedRow() function. You must name this column ClaimedDate and assign it the Date data type. When this column exists, the ClaimedDate value in that row receives the timestamp for when that row was claimed.

You cannot overwrite or delete the data extension with a claimed status. The sample below retrieves the same information from the same row any time a specific job sends to a specific recipient.

```
<table class="table table-hover">
<tr>
<td>Coupon Code (ClaimRowValue no default)</td>
<td>%%= ClaimRowValue('Coupon', 'CouponCode', 'IsClaimed', , 'JobID', JobID, 'ListID', ListID, 'SubscriberID', SubscriberID) =%%</td>
</tr>
</table>
The sample below retrieves a distinct row each time a specific job sends to a specific recipient. If the function does not find an appropriate value, it uses the provided default information.
<table class="table table-hover">
<tr>
<td>Coupon Code (ClaimRowValue with default)</td>
<td>%%= ClaimRowValue('Coupon', 'CouponCode', 'IsClaimed', 'None Available', 'JobID', JobID, 'ListID', ListID, 'BatchID', _JobSubscriberBatchID, 'SubscriberID', SubscriberID) =%%</td>
</tr>
</table>
```

Use the example data extension below as a model for the data extension you use to store and claim rows:

| Column Name | Type | Null | Default Value |
| --- | --- | --- | --- |
| _CustomObjectKey | Number | No | Identity |
| CouponCode | Text(30 character limit) | No |  |
| IsClaimed | Boolean | No | 0 |
| JobID | Number | Yes |  |
| ListID | Number | Yes |  |
| BatchID | Number | Yes |  |
| SubscriberID | Number | Yes |  |
| EmailAddress | Text(100 character limit) | Yes |  |
| ClaimedDate | Date | Yes |  |

Last Updated: Jun 8, 2021
