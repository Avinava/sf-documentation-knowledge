---
title: "Upsert an Account and Create a Contact"
domain: rest-api
topic: upsert-an-account-and-create-a-contact
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.953Z
estimatedTokens: 192
keywords: [Upsert, Account, Create, Contact, following, example, uses, Composite, resource, upsert, account, create, contact, linked, account., requests, executed, single, call., composite.json]
---

# Upsert an Account and Create a Contact

> The following example uses the Composite resource to upsert an account and create a
        contact that is linked to the account. All these requests are executed in a single call. The
            composite.json file contains the composite request and subrequest
        data.

# Upsert an Account and Create a Contact

The following example uses the Composite resource to upsert an account and create a contact that is linked to the account. All these requests are executed in a single call. The composite.json file contains the composite request and subrequest data.

Upsert an account and create a contact

```

```

Request body composite.json file

```

```

Response body after successfully executing the composite request

```

```

#### See Also

-   [sObject Rows by External ID](atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm "Creates, retrieves, upserts, or deletes records based on the value of a specified external ID field. By using the PATCH method with this resource, you can send upsert requests to Salesforce.")

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/ -H "Authorization: Bearer token -H "Content-Type: application/json" -d "@composite.json"
```

```
{
    "allOrNone" : true,
    "compositeRequest": [{
        "method": "PATCH",
        "url": "/services/data/v66.0/sobjects/Account/ExternalAcctId__c/ID12345",
        "referenceId": "NewAccount",
        "body": {
            "Name": "Acme"
        }
    },{
        "method" : "POST",
        "url" : "/services/data/v66.0/sobjects/Contact",
        "referenceId" : "newContact",
        "body" : {
            "LastName" : "Harrison",
            "AccountId" : "@{NewAccount.id}"
        }
    }]
}
```

```
{
    "compositeResponse" : [{
        "body" : {
            "id" : "0016g00000Wqu1EAAR",
            "success" : true,
            "errors" : [ ],
            "created" : true
        },
        "httpHeaders" : {
            "Location" : "/services/data/v66.0/sobjects/Account/0016g00000Wqu1EAAR"
        },
        "httpStatusCode" : 201,
        "referenceId" : "NewAccount"
    },{
        "body" : {
            "id" : "0036g00000WKnfLAAT",
            "success" : true,
            "errors" : [ ]
        },
        "httpHeaders" : {
            "Location" : "/services/data/v66.0/sobjects/Contact/0036g00000WKnfLAAT"
        },
        "httpStatusCode" : 201,
        "referenceId" : "newContact"
    }]
}
```

## Related Topics

- sObject Rows by External ID (atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm)
