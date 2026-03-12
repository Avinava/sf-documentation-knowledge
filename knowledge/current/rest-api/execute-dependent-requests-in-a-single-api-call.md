---
title: "Execute Dependent Requests in a Single API Call"
domain: rest-api
topic: execute-dependent-requests-in-a-single-api-call
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.944Z
estimatedTokens: 211
keywords: [Execute, Dependent, Requests, Single, API, Call, following, example, uses, Composite, resource, execute, several, dependent, requests, single, call., First, creates, account]
---

# Execute Dependent Requests in a Single API Call

> The following example uses the Composite resource to execute several dependent
        requests all in a single call. First, it creates an account and retrieves its information.
        Next it uses the account data and the Composite resource’s reference ID functionality to
        create a contact and populate its fields based on the account data. Then it retrieves
        specific information about the account’s owner by using query parameters in the request
        string. Finally, if the metadata has been modified since a certain date, it retrieves
        account metadata. The composite.json file contains the composite
        request and subrequest data.

# Execute Dependent Requests in a Single API Call

The following example uses the Composite resource to execute several dependent requests all in a single call. First, it creates an account and retrieves its information. Next it uses the account data and the Composite resource’s reference ID functionality to create a contact and populate its fields based on the account data. Then it retrieves specific information about the account’s owner by using query parameters in the request string. Finally, if the metadata has been modified since a certain date, it retrieves account metadata. The composite.json file contains the composite request and subrequest data.

Execute dependent requests in a single API call

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
        "method" : "POST",
        "url" : "/services/data/v66.0/sobjects/Account",
        "referenceId" : "NewAccount",
        "body" : {  
            "Name" : "Salesforce",
            "BillingStreet" : "Landmark @ 1 Market Street",
            "BillingCity" : "San Francisco",
            "BillingState" : "California",
             "Industry" : "Technology"
        }
    },{
        "method" : "GET",
        "referenceId" : "NewAccountInfo",
        "url" : "/services/data/v66.0/sobjects/Account/@{NewAccount.id}"
    },{
        "method" : "POST",
        "referenceId" : "NewContact",
        "url" : "/services/data/v66.0/sobjects/Contact",
        "body" : {  
            "lastname" : "John Doe",
            "Title" : "CTO of @{NewAccountInfo.Name}",
            "MailingStreet" : "@{NewAccountInfo.BillingStreet}",
            "MailingCity" : "@{NewAccountInfo.BillingAddress.city}",
            "MailingState" : "@{NewAccountInfo.BillingState}",
            "AccountId" : "@{NewAccountInfo.Id}",
            "Email" : "jdoe@salesforce.com",
            "Phone" : "1234567890"
        }
    },{
        "method" : "GET",
        "referenceId" : "NewAccountOwner",
        "url" : "/services/data/v66.0/sobjects/User/@{NewAccountInfo.OwnerId}?fields=Name,companyName,Title,City,State"
    },{
        "method" : "GET",
        "referenceId" : "AccountMetadata",
        "url" : "/services/data/v66.0/sobjects/Account/describe",
        "httpHeaders" : {
            "If-Modified-Since" : "Tue, 31 May 2016 18:13:37 GMT"
        }
    }]
}
```

```
{
    "compositeResponse" : [{
        "body" : {
            "id" : "001R00000033JNuIAM",
            "success" : true,
            "errors" : [ ]
        },
        "httpHeaders" : {
          "Location" : "/services/data/v66.0/sobjects/Account/001R00000033JNuIAM"
        },
        "httpStatusCode" : 201,
        "referenceId" : "NewAccount"
    },{
        "body" : {
            all the account data
        },
        "httpHeaders" : {
            "ETag" : ""Jbjuzw7dbhaEG3fd90kJbx6A0ow="",
            "Last-Modified" : "Fri, 22 Jul 2016 20:19:37 GMT"
        },
        "httpStatusCode" : 200,
        "referenceId" : "NewAccountInfo"
    },{
        "body" : {
            "id" : "003R00000025REHIA2",
            "success" : true,
            "errors" : [ ]
        },
        "httpHeaders" : {
            "Location" : "/services/data/v66.0/sobjects/Contact/003R00000025REHIA2"
        },
        "httpStatusCode" : 201,
        "referenceId" : "NewContact"
    },{
        "body" : {
            "attributes" : {
            "type" : "User",
            "url" : "/services/data/v66.0/sobjects/User/005R0000000I90CIAS"
            },
            "Name" : "Jane Doe",
            "CompanyName" : "Salesforce",
            "Title" : Director,
            "City" : "San Francisco",
            "State" : "CA",
            "Id" : "005R0000000I90CIAS"
        },
        "httpHeaders" : { },
        "httpStatusCode" : 200,
        "referenceId" : "NewAccountOwner"
    },{
        "body" : null,
        "httpHeaders" : {
            "ETag" : ""f2293620"",
            "Last-Modified" : "Fri, 22 Jul 2016 18:45:56 GMT"
         },
        "httpStatusCode" : 304,
        "referenceId" : "AccountMetadata"
    }]
}
```
