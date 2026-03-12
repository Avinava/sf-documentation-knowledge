---
title: "Issue a Voucher"
domain: loyalty
topic: issue-a-voucher
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.107Z
estimatedTokens: 365
keywords: [Issue, Voucher, new, loyalty, member, URL, Sample, JSON]
---

# Issue a Voucher

> Issue a new voucher to a loyalty member.

# Issue a Voucher

Issue a new voucher to a loyalty member.

## Example URL

```

```

The request and response parameters vary depending on the input and output parameters configured for the IssueVoucher process type in a Salesforce org.

## Sample JSON Request

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

-   [*Loyalty Management Help*: Create a Process Using Issue Voucher Process Template](https://help.salesforce.com/s/articleView?id=xcloud.bapi_task_issue_voucher_process_template_task.htm&type=5&language=en_US "Loyalty Management Help: Create a Process Using Issue Voucher Process
    Template - HTML (New Window)")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/DemoProgram/program-processes/Issue Voucher
```

```
{
   "processParameters":[
      {
         "MemberId":"0lMxx00000000BJEAY",
         "VoucherCode":"15OFF",
         "VoucherFaceValue":15,
         "VoucherExpirationDate":"2022-07-13"
      }
   ]
}
```

```
{
   "processParameters":[
      {
         "MembershipNumber":"003",
         "VoucherCode":"15OFF",
         "VoucherDiscountPercentage":20
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
