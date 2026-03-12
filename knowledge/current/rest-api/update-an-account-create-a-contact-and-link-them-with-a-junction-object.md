---
title: "Update an Account, Create a Contact, and Link Them with a Junction
            Object"
domain: rest-api
topic: update-an-account-create-a-contact-and-link-them-with-a-junction-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.829Z
estimatedTokens: 148
keywords: [Account, Contact, Link, Junction, uses, Composite, resource, two, records, AccountContactJunction, requests, executed, call, composite.json, file]
---

# Update an Account, Create a Contact, and Link Them with a Junction
            Object

> The following example uses the Composite resource to update some fields on an
        account, create a contact, and link the two records with a junction object called AccountContactJunction. All these requests are executed in
        a single call. The composite.json file contains the composite request
        and subrequest data.

# Update an Account, Create a Contact, and Link Them with a Junction Object

The following example uses the Composite resource to update some fields on an account, create a contact, and link the two records with a junction object called AccountContactJunction. All these requests are executed in a single call. The composite.json file contains the composite request and subrequest data.

Update an account, create a contact, and link them with a junction object

```

```

Request body composite.json file

```

```

Response body after successfully executing the composite request

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/ -H "Authorization: Bearer token -H "Content-Type: application/json" -d "@composite.json"
```

```
{
    "allOrNone" : true,
    "compositeRequest" : [{
        "method" : "PATCH",
        "url" : "/services/data/v66.0/sobjects/Account/001xx000003DIpcAAG",
        "referenceId" : "UpdatedAccount",
        "body" : {  
            "Name" : "Salesforce",
            "BillingStreet" : "Landmark @ 1 Market Street",
            "BillingCity" : "San Francisco",
            "BillingState" : "California",
            "Industry" : "Technology"
        }
    },{
        "method" : "POST",
        "referenceId" : "NewContact",
        "url" : "/services/data/v66.0/sobjects/Contact/",
        "body" : {  
            "lastname" : "John Doe",
            "Phone" : "1234567890"
        }
    },{
        "method" : "POST",
        "referenceId" : "JunctionRecord",
        "url" : "/services/data/v66.0/sobjects/AccountContactJunction__c",
        "body" : {  
            "accountId__c" : "001xx000003DIpcAAG",
            "contactId__c" : "@{NewContact.id}"
        }
    }]
}
```

```
{
  "compositeResponse" : [{
    "body" : null,
    "httpHeaders" : { },
    "httpStatusCode" : 204,
    "referenceId" : "UpdatedAccount"
  }, {
    "body" : {
      "id" : "003R00000025R22IAE",
      "success" : true,
      "errors" : [ ]
    },
    "httpHeaders" : {
      "Location" : "/services/data/v66.0/sobjects/Contact/003R00000025R22IAE"
    },
    "httpStatusCode" : 201,
    "referenceId" : "NewContact"
  }, {
    "body" : {
      "id" : "a00R0000000iN4gIAE",
      "success" : true,
      "errors" : [ ]
    },
    "httpHeaders" : {
      "Location" : "/services/data/v66.0/sobjects/AccountContactJunction__c/a00R0000000iN4gIAE"
    },
    "httpStatusCode" : 201,
    "referenceId" : "JunctionRecord"
  }]
}
```
