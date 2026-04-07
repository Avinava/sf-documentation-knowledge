---
title: "ClaimRow"
domain: mc-programmatic-content
topic: claimrow
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.973Z
estimatedTokens: 753
keywords: [ClaimRow, Function, Ordinal, extension, claim, retrieve, action, column, identify, claimed, row, **Overview**, **Syntax**]
---

> ClaimRow(1, 2, 3, 4)


  
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
    Name of column used to identify claimed row



    

# ClaimRow

## **Overview**

This function returns a row from a data extension and locks the row to prevent the information from use in another context until the row claimed status changes. If the function finds a row with the correct matching set of keys, the function returns those values. If the function finds no claimed row, the function sets key values in an unclaimed row and returns that row. If the function returns no row at all, you must set up the function to raise an error, ignore the result, or provide default content. Specify multiple pairs of column names and values as needed.

### **Syntax**

ClaimRow(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension for claim or retrieve action |
| 2 | string | Required | Name of column used to identify claimed row |
| 3 | string | Required | Name of data extension key column |
| 4 | string | Required | Value of data extension key column |

### Usage

The data extensions used with this function must possess the following characteristics:

-   A Boolean column that indicates a claimed row or not (a true value indicates the row as claimed)
-   An index on the Boolean and \_CustomObjectKey columns to allow for an efficient lookup of claimed rows
-   One or more key columns used to identify the object or recipient claiming the row, which requires a nullable column
-   An index on the key column or columns to allow an efficient lookup of claimed rows
-   The application automatically sets indexes on sendable data extensions, and you should contact your Marketing Cloud account executive to set indexes for non-sendable data extensions.

You can also include an optional column to receive a timestamp at the time the application executes the ClaimedRow() function. You must name this column ClaimedDate and assign it the Date data type. When this column exists, the ClaimedDate value in that row receives the timestamp for when that row was claimed.

You cannot overwrite or delete the data extension with a claimed status.

```
<table class="table table-hover">
<tr>
<td>Coupon Code (ClaimRow)</td>
<td>
%%[VAR @CouponRow
SET @CouponRow = ClaimRow('Coupon', 'IsClaimed', 'JobID', JobID, 'ListID', ListID, 'BatchID', _JobSubscriberBatchID, 'SubscriberID', SubscriberID)
IF EMPTY(@CouponRow) THEN ]%%
No coupons available
%%[ ELSE ]%%
Your Coupon Code is %%= FIELD(@CouponRow,'CouponCode') =%%
%%[ ENDIF ]%%
</td>
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
