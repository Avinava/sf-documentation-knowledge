---
title: "Generating an OpenAPI 3.0 Document for sObjects REST API
		(Beta)"
domain: rest-api
topic: generating-an-openapi-30-document-for-sobjects-rest-api-beta
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.207Z
estimatedTokens: 2405
keywords: [Generating, OpenAPI, 3.0, Document, sObjects, REST, API, Beta, generate, document, opt-in, beta, feature., represents, sObject, resources, reflect, customizations, configurations., Note]
---

# Generating an OpenAPI 3.0 Document for sObjects REST API
		(Beta)

> You can generate an OpenAPI document for sObjects REST API using this opt-in beta
		feature. The OpenAPI document represents sObject REST API resources that reflect your
		customizations and configurations.

# Generating an OpenAPI 3.0 Document for sObjects REST API (Beta)

You can generate an OpenAPI document for sObjects REST API using this opt-in beta feature. The OpenAPI document represents sObject REST API resources that reflect your customizations and configurations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at [Agreements and Terms](https://www.salesforce.com/company/legal/agreements).

## Supported Editions

This beta feature is available to all editions, sandboxes, and scratch orgs that have API Enabled.

## About the Document

The OpenAPI document adheres to Version 3.0 of the OpenAPI Specification. For more information, see [https://www.openapis.org](https://www.openapis.org).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This beta OpenAPI document is subject to change. Don’t build production integrations based on this OpenAPI document.

## What the OpenAPI Document Covers

You can retrieve, create, and update object data with REST API resources that this OpenAPI document describes.

-   /sobjects
    -   Lists the available objects and their metadata for your data. Provides the organization encoding, and the maximum batch size permitted in queries.
    -   See [Describe Global](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_describeGlobal.htm).
-   /sobjects/{sObject}
    -   Describes the individual metadata for the specified object. Can create an object record. For example, retrieve the metadata for the Account object using the GET method or create an Account object using the POST method. Generates a list of all accessible sObjects in your org and adds them to the components section of the OpenAPI spec.
    -   See [sObject Basic Information](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_basic_info.htm).
-   /sobjects/{sObject}/describe
    -   Describes the individual metadata at all levels for sObjects
    -   See [sObject Describe](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_describe.htm).
-   /sobjects/{sObject}/{id}
    -   Accesses records based on the specified object ID. Retrieves, updates, or deletes records. Can retrieve field values. Use the GET method to retrieve records or fields, the DELETE method to delete records, and the PATCH method to update records. Generates a list of all accessible sObjects in your org and adds them to the components section of the OpenAPI spec.
    -   See [sObject Rows](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_retrieve.htm).
-   /query
    -   Retrieves records using a SOQL query.
    -   See [Execute the Specified SOQL Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm).
-   /query/queryLocator
    -   Retrieves the next batch of records from a SOQL query using a query locator.
    -   See [Query More Results](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm).
-   /sobjects/{sObject}/updated
    -   Retrieves the list of individual updated records within the timespan for sObjects
    -   See [Get a List of Updated Records Within a Given Timeframe](atlas.en-us.api_rest.meta/api_rest/dome_get_updated.htm "Use the *** resource to get a list of updated (modified or added) records for the specified object. Specify the date and time range within which the records for the given object were updated.").
-   /sobjects/{sObject}/deleted
    -   Retrieves the list of individual deleted records within the timespan for sObjects
    -   See [sObject Get Deleted](atlas.en-us.api_rest.meta/api_rest/resources_getdeleted.htm "Retrieves the list of individual records that have been deleted within the given timespan for the specified object. This resource is available in REST API version 29.0 and later.").
-   /sobjects/{sObject}/{id}/{blobField}
    -   Retrieves the specified blob field from an individual record and returns it as binary data
    -   See [sObject Blob Get](atlas.en-us.api_rest.meta/api_rest/resources_sobject_blob_retrieve.htm "Gets the specified blob field from an individual record and returns it as binary data. Only certain standard objects have blob fields, such as Attachment, ContentNote, ContentVersion, Document, Folder, and Note.").
-   /async/specifications/oas3
    -   Use with a GET HTTP method to retrieve all valid resource URIs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

Use the wildcard character \* to match single URI path segments or the remaining path when it’s used at the end of a URI. For example, /sobjects/{sObject}/\* retrieves all data and metadata for the specified sObject.

## Enabling the Beta

To enable this beta, follow these steps. You must have either the Modify All Data or the Customize Application permission.

1.  From Setup, in the Quick Find box, enter User Interface, and then select **User Interface**.
2.  On the User Interface page, select **Enable Salesforce Platform REST API, OpenAPI Spec Generation (Beta)**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

    #### Note

    Selecting this item asserts that you accept the Beta Services Terms provided at the [Agreements and Terms](https://www.salesforce.com/company/legal/agreements).


## Generate an OpenAPI Document

To generate the OpenAPI document, send a POST request to https://MyDomainName.my.salesforce.com/services/data/vXX.X/async/specifications/oas3. The API version XX.X must be the latest version. The request body must be:

{ "resources" : \[ selectors \] }

To get all resources, use a quoted asterisk ("\*") as a selector.

{ "resources" : \["\*"\] }

To get specific sections of the OpenAPI document, use one or more quoted targeted selectors:

-   "/sobjects"
-   "/sobjects/{sObject}"
-   "/sobjects/{sObject}/{id}"
-   "/sobjects/{sObject}/deleted"
-   "/sobjects/{sObject}/describe"
-   "/sobjects/{sObject}/{id}/{blobField}"

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

-   {blobField}, {id}, and {sObject} must be entered literally. They aren’t variables.
-   Don’t add trailing slashes at the end of a selector, For example, "/sobjects/" retrieves nothing.
-   If the \* selector is used, no other selectors are allowed. This selector can’t be combined with any other selectors and must be used exactly as shown.
-   The API version in the POST and GET requests and in the resource body must be the latest version.

For example:

{ "resources" : \[ "/sobjects/{sObject}", "/sobjects/{sObject}/{id}", "/sobjects/{sObject}/deleted", "/sobjects/{sObject}/describe", "/sobjects/{sObject}/{id}/{blobField}" \] }

To reduce the size of the OpenAPI document, add the sObject filter to the request body. For example, to generate resources for Account and Contact sObjects only:

{ "resources" : \[ "/sobjects/{sObject}", "/sobjects/{sObject}/{id}", "/sobjects/{sObject}/deleted", "/sobjects/{sObject}/describe", "/sobjects/{sObject}/{id}/{blobField}" \], "sobjects" : { "include" : \["Account", "Contact"\] } }

A successful POST request returns a JSON response body containing a URI to view the details page and a URI to get the OpenAPI document. The URIs contain a locator ID. In this example, the locator ID is NTByUjAwMDAwMDAwMDBh.

```

```

If the server encounters errors processing the request, it reports a “Failed” status and returns a 4xx or 5xx status.

## View the Details Page

You can check the status of your request to generate an OpenAPI document and view other information from the details page. This is an example details page.

{ "name" : "OAS3", "apiTaskStatus" : "INPROGRESS", "errors" : \[\], "createdById" : "005xxxxxxxxxxxx", "version" : 66.0 }

To view the details page, send a GET request using this URL.

```

```

For example:

```

```

The API version in the GET request must be the latest version.

## View the OpenAPI Document

To view the OpenAPI document for the target sObjects, sent a GET request using this URL.

```

```

For example:

```

```

The server responds with the OpenAPI document. For example:

```

```

If you select a resource that doesn’t match any of the supported resources, or you select a resource that you don’t have permissions to access, the request doesn’t fail but the OpenAPI document won’t contain that resource. Also, the resource’s path won’t be visible in the OpenAPI document.

After the OpenAPI document is generated, you can retrieve the OpenAPI document again by using the same locator ID for 48 hours. After 48 hours, using that locator ID results in a 404 (Not Found) error.

## Giving Feedback

To give us your feedback, log in to [Trailhead](https://trailhead.salesforce.com/ "HTML (New Window)") and then join the [OpenAPI Specs for Salesforce REST APIs Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000H1LF?tab=discussion "HTML (New Window)").

Your feedback is valuable and can help us find existing problems and inspire future change. We’re looking for general impressions, improvement suggestions, bugs, and feedback about how well this OpenAPI document aligns with your OpenAPI use cases.

## Code Examples

```
HTTP/1.1 202 Accepted 
{ "results" : "/v66.0/async/specifications/oas3/NTByUjAwMDAwMDAwMDBh/results",
"details" : "/v66.0/async/specifications/oas3/NTByUjAwMDAwMDAwMDBh"}
```

```
HTTP/1.1 200 OK{
  "openapi": "3.0.1",
  "info": {
      "title": "Lightning Platform REST API",
      "description": "REST API provides you with programmatic access to your data in Salesforce. 
                      The flexibility and scalability of REST API make it an excellent choice for integrating Salesforce into your applications 
                      and for performing complex operations on a large scale. You can use REST API tools to create, manipulate, 
                      and search data in Salesforce by sending HTTP requests to endpoints in Salesforce. 
                      Depending on where you send requests, you access and operate on different pieces of information, called resources. 
                      Resources include records, query results, metadata, and more. ",
      "version": "66.0
  },
  "servers": [
      ...
  ],
  "security": [
      ...
  ],
  "paths": {
      "/sobjects": { ... },
      "/sobjects/{sObject}": { ... },
      "/sobjects/{sObject}/{id}": { ... },
      "/sobjects/{sObject}/deleted": { ... },
      "/sobjects/{sObject}/describe": { ... },
      "/sobjects/{sObject}/{id}/{blobField}": { ... }
  },
  "components": {
      ...
  }
}
```

## Related Topics

- Get a List of Updated Records Within a Given Timeframe (atlas.en-us.api_rest.meta/api_rest/dome_get_updated.htm)
- sObject Get Deleted (atlas.en-us.api_rest.meta/api_rest/resources_getdeleted.htm)
- sObject Blob Get (atlas.en-us.api_rest.meta/api_rest/resources_sobject_blob_retrieve.htm)
