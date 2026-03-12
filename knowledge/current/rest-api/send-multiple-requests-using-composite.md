---
title: "Send Multiple Requests
      Using Composite"
domain: rest-api
topic: send-multiple-requests-using-composite
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.264Z
estimatedTokens: 1082
keywords: [Send, Multiple, Requests, Composite, Executes, series, REST, API, call, output, input, subsequent, bodies, HTTP, statuses]
---

# Send Multiple Requests
      Using Composite

> Executes a series of REST API requests in a single call. You can use
      the output of one request as the input to a subsequent request. The response bodies and HTTP
      statuses of the requests are returned in a single response body. The entire series of requests
      counts as a single call toward your API limits.

# Send Multiple Requests Using Composite

Executes a series of REST API requests in a single call. You can use the output of one request as the input to a subsequent request. The response bodies and HTTP statuses of the requests are returned in a single response body. The entire series of requests counts as a single call toward your API limits.

The requests in a composite call are called subrequests. All subrequests are executed in the context of the same user. In a subrequest’s body, you specify a reference ID that maps to the subrequest’s response. You can then refer to the ID in the url or body fields of later subrequests by using a JavaScript-like reference notation.

For example, the following composite request body includes two subrequests. The first creates an account and designates the output as refAccount. The second creates a contact parented under the new account by referencing refAccount in the subrequest body.

```

```

You can specify whether an error in a subrequest causes the whole composite request to roll back or just the subrequests that depend on it. You can also specify headers for each subrequest.

Composite is supported for the following resources.

-   All sObject resources (/services/data/vXX.X/sobjects/), including [sObject Rows by External ID](atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm "Creates, retrieves, upserts, or deletes records based on the value of a specified external ID field. By using the PATCH method with this resource, you can send upsert requests to Salesforce.") and excluding [sObject Blob Get](atlas.en-us.api_rest.meta/api_rest/resources_sobject_blob_retrieve.htm "Gets the specified blob field from an individual record and returns it as binary data. Only certain standard objects have blob fields, such as Attachment, ContentNote, ContentVersion, Document, Folder, and Note.")
-   The Query resource (/services/data/vXX.X/query/?q=soql)
-   The QueryAll resource (/services/data/vXX.X/queryAll/?q=soql)
-   The sObject Collections resource (/services/data/vXX.X/composite/sobjects). Available in API version 43.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

You can have up to 25 subrequests in a single call. Up to 5 of these subrequests can be sObject Collections or query operations, including Query and QueryAll requests.

## Syntax

URI

/services/data/vXX.X/composite

Formats

JSON

HTTP method

POST

Authentication

Authorization: Bearer token

Parameters

None required

Request body

[Composite Request Body](atlas.en-us.api_rest.meta/api_rest/requests_composite.htm "Describes a collection of subrequests to execute with the Composite resource.")

Response body

[Composite Response Body](atlas.en-us.api_rest.meta/api_rest/responses_composite.htm "Describes the result of a Composite request.")

## Example

For examples of using the Composite resource, see [Execute Dependent Requests in a Single API Call](atlas.en-us.api_rest.meta/api_rest/dome_composite_record_manipulation.htm "The following example uses the Composite resource to execute several dependent requests all in a single call. First, it creates an account and retrieves its information. Next it uses the account data and the Composite resource’s reference ID functionality to create a contact and populate its fields based on the account data. Then it retrieves specific information about the account’s owner by using query parameters in the request string. Finally, if the metadata has been modified since a certain date, it retrieves account metadata. The composite.json file contains the composite request and subrequest data.") and [Update an Account, Create a Contact, and Link Them with a Junction Object](atlas.en-us.api_rest.meta/api_rest/dome_composite_junction_object.htm "The following example uses the Composite resource to update some fields on an account, create a contact, and link the two records with a junction object called AccountContactJunction. All these requests are executed in a single call. The composite.json file contains the composite request and subrequest data.").

-   **[Composite Subrequest Result](atlas.en-us.api_rest.meta/api_rest/resources_composite_subrequest_result.htm)**
    The composite subrequest result describes the result for a subrequest.

## Code Examples

```
{
"compositeRequest" : [{
  "method" : "POST",
  "url" : "/services/data/v66.0/sobjects/Account",
  "referenceId" : "refAccount",
  "body" : { "Name" : "Sample Account" }
  },{
  "method" : "POST",
  "url" : "/services/data/v66.0/sobjects/Contact",
  "referenceId" : "refContact",
  "body" : { 
    "LastName" : "Sample Contact",
    "AccountId" : "@{refAccount.id}"
    }
  }]
}
```

## Related Topics

- sObject Rows by External
            ID (atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm)
- sObject Blob Get (atlas.en-us.api_rest.meta/api_rest/resources_sobject_blob_retrieve.htm)
- Composite Request Body (atlas.en-us.api_rest.meta/api_rest/requests_composite.htm)
- Composite Response Body (atlas.en-us.api_rest.meta/api_rest/responses_composite.htm)
- Execute Dependent Requests in a Single API
          Call (atlas.en-us.api_rest.meta/api_rest/dome_composite_record_manipulation.htm)
- Update an Account, Create a Contact, and
          Link Them with a Junction Object (atlas.en-us.api_rest.meta/api_rest/dome_composite_junction_object.htm)
- Composite Subrequest Result (atlas.en-us.api_rest.meta/api_rest/resources_composite_subrequest_result.htm)
