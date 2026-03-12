---
title: "Cancel a Voucher"
domain: loyalty
topic: cancel-a-voucher
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.023Z
estimatedTokens: 419
keywords: [Cancel, Voucher, Change, status, canceled, URL, Sample, JSON, Requests]
---

# Cancel a Voucher

> Change the status of a voucher to canceled.

# Cancel a Voucher

Change the status of a voucher to canceled.

## Example URL

```

```

The request and response parameters vary depending on the input and output parameters configured for the CancelVoucher process type in a Salesforce org.

## Sample JSON Requests

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Some of the API request fields contain field names that are interchangeable. For information on the list of interchangeable field names, see [Loyalty Management Connect API Interchangeable Request Fields](atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm "The Loyalty Management Business API supports interchangeable fields in JSON requests. For some of the request fields, you can use either an ID, number, or name. For example, if you don’t want to store and use Salesforce IDs when accessing Loyalty Management-related data from an external system, simply use names and numbers instead.").

Here's a sample request with a member ID and voucher ID

```

```

Here's a sample request with a membership number and voucher code

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

If the voucher code isn’t unique, provide either a voucher ID or a number.

```

```

## Sample JSON Response

```

```

#### See Also

-   [*Loyalty Management Help*: Create a Process Using Cancel Voucher Process Template](https://help.salesforce.com/s/articleView?id=xcloud.bapi_task_cancel_voucher_process_template.htm&type=5&language=en_US "Loyalty Management Help: Create a Process Using Cancel Voucher Process Template - HTML (New Window)")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/DemoProgram/program-processes/cancel Voucher
```

```
{
   "processParameters":[
      {
         "MemberId":"0lMxx00000000BJEAY",
         "VoucherId":"0kdxx000000000B245"
      }
   ]
}
```

```
{
   "processParameters":[
      {
         "MembershipNumber":"003",
         "VoucherCode":"15OFF"
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
               "VoucherId":"0kDRM0000004Ct22AE"
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
