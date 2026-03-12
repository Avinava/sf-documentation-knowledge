---
title: "Update Member Details"
domain: loyalty
topic: update-member-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.233Z
estimatedTokens: 375
keywords: [Member, personal, preference, URL, Sample, JSON]
---

# Update Member Details

> Update personal and preference details of a member.

# Update Member Details

Update personal and preference details of a member.

## Example URL

```

```

The request and response parameters vary depending on the input and output parameters configured for the UpdateMemberDetails process type in a Salesforce org.

## Sample JSON Request

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Some of the API request fields contain field names that are interchangeable. For information on the list of interchangeable field names, see [Loyalty Management Connect API Interchangeable Request Fields](atlas.en-us.loyalty.meta/loyalty/loyalty_connect_interchangeable_request_fields.htm "The Loyalty Management Business API supports interchangeable fields in JSON requests. For some of the request fields, you can use either an ID, number, or name. For example, if you don’t want to store and use Salesforce IDs when accessing Loyalty Management-related data from an external system, simply use names and numbers instead.").

Here's an example with a member ID:

```

```

Here's an example with a current membership number:

```

```

## Sample JSON Response

```

```

#### See Also

-   [*Loyalty Management Help*: Create a Process Using the Update Member Details Process Template](https://help.salesforce.com/s/articleView?id=xcloud.bapi_task_update_member_details.htm&type=5&language=en_US "Loyalty Management Help: Create a Process Using the Update Member Details
    Process Template - HTML (New Window)")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/DemoProgram/program-processes/Update Member Details
```

```
{
   "processParameters":[
      {
         "MemberId":"0lMRM0000004G5h2AE",
         "MembershipNumber":"M1234",
         "Email":"adam.smith@nto.com",
         "EnrollmentDate":"2023-05-28",
         "LastName":"Smith"
      }
   ]
}
```

```
{
   "processParameters":[
      {
         "CurrentMembershipNumber":"M1234",
         "MembershipNumber":"M1234",
         "Email":"adam.smith@nto.com",
         "EnrollmentDate":"2023-05-28",
         "LastName":"Smith"
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
               "MemberId":"0lMRM0000004F102AE",
               "ContactId":"003RM0000088CugYAE",
               "TransactionJournalId":null
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
