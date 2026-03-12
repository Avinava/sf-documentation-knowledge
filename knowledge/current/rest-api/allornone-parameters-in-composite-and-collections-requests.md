---
title: "allOrNone Parameters in Composite and Collections Requests"
domain: rest-api
topic: allornone-parameters-in-composite-and-collections-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.397Z
estimatedTokens: 733
keywords: [allOrNone, Composite, Collections, Requests, request, uses, sObject, there, two, interact, subrequest., Note]
---

# allOrNone Parameters in Composite and Collections Requests

> If a Composite request uses sObject Collections, there are two or more allOrNone parameters that can interact, one on the Composite request and one on
		each sObject Collections subrequest.

# allOrNone Parameters in Composite and Collections Requests

If a Composite request uses sObject Collections, there are two or more allOrNone parameters that can interact, one on the Composite request and one on each sObject Collections subrequest.

-   If the Composite request has allOrNone set to true, then the all-or-none behavior also applies to each of the sObject Collections subrequests, overriding the value of allOrNone in the subrequests.
-   If the Composite request has allOrNone set to false, then each sObject Collections subrequest behaves according to its value of allOrNone.

Consider, for example, what happens with this job where a Composite request includes two items: an sObject Collections request and a request to create a Contact. The sObject Collections request tries to create two Accounts, one of which fails because there is already an existing Account with the same information.

```

```

The outerFlag and innerFlag parameters are either true or false, which leads to four possible cases.

**Case 1: outerFlag = false, innerFlag = false**

In this case, neither request has allOrNone set to true, so neither request is rolled back. One account is created and one fails.

![diagram of results for this case](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fall_or_none.composite.false_false.png&folder=api_rest)

**Case 2: outerFlag = false, innerFlag = true**

In this case, the inner sObject Collections request has allOrNone set to true, so it is rolled back. The outer Composite request is not rolled back.

![diagram of results for this case](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fall_or_none.composite.false_true.png&folder=api_rest)

**Case 3: outerFlag = true, innerFlag = true**

In this case, both requests have allOrNone set to true, so they are both rolled back.

![diagram of results for this case](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fall_or_none.composite.true_true.png&folder=api_rest)

**Case 4: outerFlag = true, innerFlag = false**

The response body for this case is:

```

```

In this case, the inner sObject Collections request has allOrNone set to false, so it is not immediately rolled back. However, the outer Composite request has allOrNone set to true so it is rolled back, which also rolls back the inner sObject Collections request.

![diagram of results for this case](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fall_or_none.composite.true_false.png&folder=api_rest)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

Even though the response body for sObject Collections request shows "success" : true for the creation of the first Account, the fact that the Composite request is rolled back means that the Account creation is rolled back. The final result is that the new Account is *not* created.

## Code Examples

```
POST https://MyDomainName.my.salesforce.com/services/data/v66.0/composite -H "Authorization: Bearer token"

{
   "allOrNone" : outerFlag,
   "collateSubrequests" : false,
   "compositeRequest" : [
      {
         "method" : "POST",
         "url" : "/services/data/v66.0/composite/sobjects",
         "body" : {
            "allOrNone" : innerFlag,
            "records" : [
               {
                  "attributes" : { "type" : "Account" },
                  "Name" : "Northern Trail Outfitters",
                  "BillingCity" : "San Francisco"
               },
               {
                  "attributes" : { "type" : "Account" },
                  "Name" : "Easy Spaces",
                  "BillingCity" : "Calgary"
               }
            ]
         },
         "referenceId" : "newAccounts"
      },
      {
         "method" : "POST",
         "url" : "/services/data/v66.0/sObject/Contact",
         "body" : {
                "FirstName" : "John",
                "LastName" : "Smith"
         },
         "referenceId" : "newContact"
      }
   ]
}
```

```
{
   "compositeResponse" : [
      {
         "body" : [
            {
               "id" : "001R00000066cndIAA",
               "success" : true,
               "errors" : [ ]
            },
            {
               "success" : false,
               "errors" : [
                  {
                     "statusCode" : "DUPLICATES_DETECTED",
                     "message" : "Use one of these records?",
                     "fields" : [ ]
                  }
               ]
            }
         ],
         "httpHeaders" : { },
         "httpStatusCode" : 200,
         "referenceId" : "collection1"
      },
      {
         "body" : [
            {
               "errorCode" : "PROCESSING_HALTED",
               "message" : "The transaction was rolled back since another operation in the same transaction failed."
            }
         ],
         "httpHeaders" : { },
         "httpStatusCode" : 400,
         "referenceId" : "newContact"
      }
   ]
}
```
