---
title: "Update a Record"
domain: rest-api
topic: update-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.010Z
keywords: [Update, Record, See]
---

# Update a Record

# Update a Record

You use the sObject Rows resource to update records. Provide the updated record information in your request data and use the PATCH method of the resource with a specific record ID to update that record. Records in a single file must be of the same object type.

In the following example, the Billing City within an Account is updated. The updated record information is provided in patchaccount.json.

Example for updating an Account object

```

```

Example request body patchaccount.json file for updating fields in an Account object

```

```

Example response body for updating fields in an Account object

none returned

Error response

See [Status Codes and Error Responses](atlas.en-us.api_rest.meta/api_rest/errorcodes.htm).

The following example uses Java and HttpClient to update a record using REST API. Note that there is no PatchMethod in HttpClient, so PostMethod is overridden to return “PATCH” as its method name. This example assumes the resource URL has been passed in and contains the object name and record ID.

```

```

If you use an HTTP library that doesn't allow overriding or setting an arbitrary HTTP method name, you can send a POST request and provide an override to the HTTP method via the query string parameter \_HttpMethod. In the PATCH example, you can replace the PostMethod line with one that doesn't use override:

```

```

#### See Also

-   [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.")
    
-   [Conditional Request Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm "Use a conditional request header to validate resources before accessing them. By setting a precondition in the header, you ensure that your request succeeds only if that precondition is met. This functionality helps you prevent mistakes and reject outdated requests when updating Salesforce data. You can implement a variety of techniques with conditional request headers, such as response caching.")