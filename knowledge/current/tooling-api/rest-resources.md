---
title: "REST Resources"
domain: tooling-api
topic: rest-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.473Z
estimatedTokens: 1406
keywords: [REST, Resources, give, access, Tooling, API, objects, querying, keep, mind, user, permissions, needed, vary, endpoint]
---

# REST Resources

> REST resources give you access to Tooling API objects. When querying
      Tooling API objects using REST resources, keep in mind that the user permissions needed for
      access vary from endpoint to endpoint and from object to object. Check the description of the
      endpoint and object you want to use to determine user permission requirements for
    access.

# REST Resources

REST resources give you access to Tooling API objects. When querying Tooling API objects using REST resources, keep in mind that the user permissions needed for access vary from endpoint to endpoint and from object to object. Check the description of the endpoint and object you want to use to determine user permission requirements for access.

For details on usage, syntax, and authentication, see the REST API Developer Guide.

For examples, see [REST Resource Examples](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resource_examples.htm "Robust examples using REST resources in the Tooling API.").

For information on how to minimize the number of round trips between client and server, see [Improve Performance with the Composite Resource](atlas.en-us.api_tooling.meta/api_tooling/tooling_resources_composite_composite.htm#tooling_resources_composite_composite "Use the /composite resource to improve the performance of a development tool or app built with Tooling API. This resource executes a series of Tooling API requests in a single call, minimizing the number of round trips needed between the client and server. You can use the output of one request as the input to a subsequent request. The requests’ response bodies and HTTP statuses are returned in a single response body. The entire request counts as a single call toward your API limits. Available in API version 40.0 and later.").

## REST Resources Supported by Tooling API

The base URI for each Tooling API REST resource is https://domain/services/data/vXX.X**/tooling/** where **domain** is your org’s My Domain login URL and **vXX.X** is the API version number. For example: https://MyDomainName.my.salesforce.com/services/data/v66.0/tooling/

Tooling API uses these resources.

/completions?type=

Supported methods: GET

Retrieves available code completions of the referenced type for Apex system method symbols (type=apex). Available in API version 28.0 and later.

Retrieves available code completions of the referenced type for Visualforce markup (type=visualforce). Available in API version 38.0 and later.

/executeAnonymous/?anonymousBody= <url encoded body>

Supported methods: GET

Executes Apex code anonymously. Available in API version 29.0 and later.

/query/?q=SOQL\_Query\_Statement

Supported methods: GET

Executes a query against an object and returns data that matches the specified criteria. Tooling API exposes objects like EntityDefinition and FieldDefinition that use the external object framework. That is, they don’t exist in the database but are constructed dynamically. Special query rules apply to virtual entities.

If the query result is too large, it’s broken up into batches. The response contains the first batch of results and a query identifier. The identifier can be used in a request to retrieve the next batch.

/runTestsAsynchronous/

Supported methods: POST

Runs Apex and automated flow tests asynchronously. Available for Apex tests in API version 30.0 and later. Available for automated flow tests in API version 65.0 and later.

For more information, see [Run Unit Tests Asynchronously](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_runner_async.htm "Use the Test Runner API to execute Apex and flow tests asynchronously. Available for Apex tests in API version 30.0 and later. Available for automated flow tests in API version 65.0 and later.").

/runTestsSynchronous/

Supported methods: POST

Runs Apex and automated flow tests synchronously. Available for Apex tests in API version 30.0 and later. Available for automated flow tests in API version 65.0 and later.

For more information, see [Run Unit Tests Synchronously](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_runner_sync.htm "Use the Test Runner API to execute one or more Apex or flow tests synchronously. All test methods in a synchronous test run must be in the same class. Available for Apex tests in API version 30.0 and later. Available for automated flow tests in API version 65.0 and later.").

/search/?q=SOSL\_Search\_Statement

Supported methods: GET

Search for records containing specified values.

/sobjects/

Supported methods: GET

Lists the available Tooling API objects and their metadata.

/sobjects/**SObjectName**/

Supported methods: GET, POST

Describes the individual metadata for the specified object or creates a record for a given object.

-   To retrieve the metadata for the ApexExecutionOverlayAction object, use the GET method.
-   To create a ApexExecutionOverlayAction object, use the POST method.

/sobjects/**SObjectName**/describe/

Supported methods: GET

Completely describes the individual metadata at all levels for the specified object.

For example, use this resource to retrieve the fields, URLs, and child relationships for a Tooling API object.

/sobjects/**SObjectName**/**id**/

Supported methods: GET, PATCH, DELETE

Accesses records based on the specified object ID.

Use the GET method to retrieve records or fields, the DELETE method to delete records, and the PATCH method to update records.

/sobjects/**ApexLog/id**/Body/

Supported methods: GET

Retrieves a raw debug log by ID. Available in API version 28.0 and later.

/tests/

Supported methods: GET

Retrieves Apex and automated flow tests. Available in API version 65.0 and later.

For more information, see [Retrieve Unit Tests](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_discovery.htm "The Test Discovery API returns details about Apex and automated flow tests. This resource is available in Tooling API version 65.0 and later.").

## Related Topics

- REST Resource Examples (atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resource_examples.htm)
- Improve Performance with
          the Composite Resource (atlas.en-us.api_tooling.meta/api_tooling/tooling_resources_composite_composite.htm)
- Run Unit Tests
              Asynchronously (atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_runner_async.htm)
- Run Unit Tests
              Synchronously (atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_runner_sync.htm)
- Retrieve Unit
              Tests (atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_discovery.htm)
