---
title: "REST Resources for Unit Testing"
domain: tooling-api
topic: rest-resources-for-unit-testing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.476Z
estimatedTokens: 473
keywords: [REST, Resources, Unit, Testing, Retrieve, execute, Apex, flow, tests, place, view, Test, Discovery, API, asynchronously]
---

# REST Resources for Unit Testing

> Retrieve and execute Apex and flow tests in one place. Get a complete view of your
    tests by using the Test Discovery API. Execute tests asynchronously or synchronously by using
    the Test Runner API. These APIs are both Tooling API REST resources.

# REST Resources for Unit Testing

Retrieve and execute Apex and flow tests in one place. Get a complete view of your tests by using the Test Discovery API. Execute tests asynchronously or synchronously by using the Test Runner API. These APIs are both Tooling API REST resources.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

The Test Discovery API and Test Runner API support only flow tests created with [automated flow testing](https://help.salesforce.com/s/articleView?id=platform.automate_flow_test_record_data_cloud_triggered.htm&type=5&language=en_US) in Flow Builder.

The base URI for these Tooling API REST resources is https://domain/services/data/vXX.X/tooling/ where **domain** is your org’s My Domain login URL and vXX.X is the API version number. For example: https://MyDomainName.my.salesforce.com/services/data/v66.0/tooling/

-   **[Retrieve Unit Tests](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_discovery.htm)**
    The Test Discovery API returns details about Apex and automated flow tests. This resource is available in Tooling API version 65.0 and later.
-   **[Run Unit Tests Asynchronously](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_runner_async.htm)**
    Use the Test Runner API to execute Apex and flow tests asynchronously. Available for Apex tests in API version 30.0 and later. Available for automated flow tests in API version 65.0 and later.
-   **[Run Unit Tests Synchronously](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_runner_sync.htm)**
    Use the Test Runner API to execute one or more Apex or flow tests synchronously. All test methods in a synchronous test run must be in the same class. Available for Apex tests in API version 30.0 and later. Available for automated flow tests in API version 65.0 and later.

## Related Topics

- Retrieve Unit Tests (atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_discovery.htm)
- Run Unit Tests Asynchronously (atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_runner_async.htm)
- Run Unit Tests Synchronously (atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing_runner_sync.htm)
