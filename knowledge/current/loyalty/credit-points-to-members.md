---
title: "Credit Points to Members"
domain: loyalty
topic: credit-points-to-members
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.055Z
estimatedTokens: 377
keywords: [Credit, Points, Members, pre-calculated, loyalty, member, every, transaction, URL, Sample, JSON, Requests]
---

# Credit Points to Members

> Credit pre-calculated points to a loyalty member on every transaction.

# Credit Points to Members

Credit pre-calculated points to a loyalty member on every transaction.

## Example URL

```

```

The request and response parameters vary depending on the input and output parameters configured for the CreditPointsToMembers process type in a Salesforce org.

## Sample JSON Requests

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Some of the API request fields contain field names that are interchangeable. For information on the list of interchangeable field names, see [Loyalty Management Connect API Interchangeable Request Fields](atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm "The Loyalty Management Business API supports interchangeable fields in JSON requests. For some of the request fields, you can use either an ID, number, or name. For example, if you don’t want to store and use Salesforce IDs when accessing Loyalty Management-related data from an external system, simply use names and numbers instead.").

Here's an example with a member ID:

```

```

Here's an example with a membership number:

```

```

## Sample JSON Response

```

```

#### See Also

-   [*Loyalty Management Help*: Create a Process Using Credit Points to Member Process Template](https://help.salesforce.com/s/articleView?id=bapi_task_credit_points_process_template.htm&language=en_US "Loyalty Management Help: Create a Process Using Credit Points to Member
    Process Template - HTML (New Window)")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/DemoProgram/program-processes/credit Points
```

```
{
   "processParameters":[
      {
         "TransactionJournal":{
            "ActivityDate":"2023-08-27T00:00:00Z",
            "ExternalTransactionNumber":"1",
            "InvoiceDate":"2023-08-23",
            "JournalTypeName":"Accrual",
            "MemberId":"0lMRM0000004G5h2AE",
            "TransactionAmount":"45.0",
            "CurrencyIsoCode":"USD",
            "Status":"Processed"
         },
         "PointsToCredit":100.0
      }
   ]
}
```

```
{
   "processParameters":[
      {
         "TransactionJournal":{
            "ActivityDate":"2023-08-27T00:00:00Z",
            "ExternalTransactionNumber":"1",
            "InvoiceDate":"2023-08-23",
            "JournalTypeName":"Accrual",
            "MembershipNumber":"M1256",
            "TransactionAmount":"45.0",
            "CurrencyIsoCode":"USD",
            "Status":"Processed"
         },
         "PointsToCredit":100.0
      }
   ]
}
```

```
{
   "message":null,
   "outputParameters":{
      "outputParameters":{
         "results":[
            {
               "PointsCredited":100.0
            }
         ]
      }
   },
   "simulationDetails":{
      
   },
   "status":true
}
```

## Related Topics

- Loyalty Management Connect API Interchangeable Request Fields (atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm)
