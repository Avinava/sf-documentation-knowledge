---
title: "Debit Points from Members"
domain: loyalty
topic: debit-points-from-members
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.058Z
estimatedTokens: 378
keywords: [Debit, Points, Members, Redeem, loyalty, member’s, pre-calculated, transaction, URL, Sample, JSON, Requests]
---

# Debit Points from Members

> Redeem a loyalty member’s pre-calculated points on a transaction.

# Debit Points from Members

Redeem a loyalty member’s pre-calculated points on a transaction.

## Example URL

```

```

The request and response parameters vary depending on the input and output parameters configured for the DebitPointsFromMembers process type in a Salesforce org.

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

-   [*Loyalty Management Help*: Create a Process Using Debit Points from Member Process Template](https://help.salesforce.com/s/articleView?id=sf.bapi_tasK-debit_points_process_template.htm&language=en_US "Loyalty Management Help: Create a Process Using Debit Points from Member
    Process Template - HTML (New Window)")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/DemoProgram/program-processes/debit Points
```

```
{
  "processParameters": [
    {
      "TransactionJournal": {
        "ActivityDate": "2023-08-27T00:00:00Z",
        "ExternalTransactionNumber": "1",
        "InvoiceDate": "2023-08-23",
        "JournalTypeName": "Redemption",
        "MemberId":"0lMRM0000004G5h2AE",
        "TransactionAmount": "45.0",
        "CurrencyIsoCode":"USD",
        "Status":"Processed"
      },
      "PointsToDebit": 200.0
    }
  ]
}
```

```
{
  "processParameters": [
    {
      "TransactionJournal": {
        "ActivityDate": "2023-08-27T00:00:00Z",
        "ExternalTransactionNumber": "1",
        "InvoiceDate": "2023-08-23",
        "JournalTypeName": "Redemption",
        "MembershipNumber": "M1256",
        "TransactionAmount": "45.0",
        "CurrencyIsoCode":"USD",
        "Status":"Processed"
      },
      "PointsToDebit": 200.0
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
               "PointsDebited":200.0
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
