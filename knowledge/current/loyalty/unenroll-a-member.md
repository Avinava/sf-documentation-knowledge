---
title: "Unenroll a Member"
domain: loyalty
topic: unenroll-a-member
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.207Z
estimatedTokens: 362
keywords: [Unenroll, Member, loyalty, program, URL, Sample, JSON, Requests]
---

# Unenroll a Member

> Unenroll a member from a loyalty program.

# Unenroll a Member

Unenroll a member from a loyalty program.

## Example URL

```

```

The request and response parameters vary depending on the input and output parameters configured for the UnenrollMember process type in a Salesforce org.

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

-   [*Loyalty Management Help*: Create a Process Using Unenroll Member Process Template](https://help.salesforce.com/s/articleView?id=xcloud.bapi_task_unenroll_member.htm&type=5&language=en_US "Loyalty Management Help: Create a Process Using Unenroll Member Process
    Template - HTML (New Window)")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/DemoProgram/program-processes/unenroll Member
```

```
{
   "processParameters":[
      {
         "MemberId":"0lMRM0000004G6f2AE"
      }
   ]
}
```

```
{
   "processParameters":[
      {
         "CurrentMembershipNumber":"007"
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
               "MemberId":"0lMRM0000004F152AE"
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
