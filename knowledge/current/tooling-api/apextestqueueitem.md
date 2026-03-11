---
title: "ApexTestQueueItem"
domain: tooling-api
topic: apextestqueueitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.232Z
keywords: [ApexTestQueueItem, Supported, SOAP, API, Calls, REST, HTTP, Methods, Fields, Usage, Note]
---

# ApexTestQueueItem

# ApexTestQueueItem

Represents a single Apex class in the Apex job queue. Available in API version 30.0 and later.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH

## Fields

| Field Name | Details |
| --- | --- |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Apex class whose tests are to be executed.This field can't be updated. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the test. Valid values are:QueuedProcessingAbortedCompletedFailedPreparingHoldingTo abort a class that is in the Apex job queue, perform an update operation on the ApexTestQueueItem object and set its Status field to Aborted. |
| ExtendedStatus | TypestringPropertiesFilter, Nillable, SortDescriptionThe pass rate of the test run.For example: “(4/6)”. This means that four out of a total of six tests passed.If the class fails to execute, this field contains the cause of the failure. |
| ParentJobId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRead-only. Points to the AsyncApexJob that represents the entire test run.If you insert multiple Apex test queue items in a single bulk operation, the queue items will share the same parent job. This means that a test run can consist of the execution of the tests of several classes if all the test queue items are inserted in the same bulk operation. |
| ShouldSkipCodeCoverage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to opt out of collecting code coverage information during Apex test runs. Available in API version 43.0 and later. |
| TestRunResultID | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the associated ApexTestRunResult object. Available in API version 37.0 and later. |

## Usage

Insert an ApexTestQueueItem object to place its corresponding Apex class in the Apex job queue for execution. The Apex job executes the test methods in the class.

The example RunTestListener.java class subscribes to the TestResult system topic and prints out the test results using ApexTestQueueItem and ApexTestResult. The example makes these assumptions:

-   You have already set up a Java client application for Streaming API. This example uses the org.cometd.client.BayeuxClient created in the Java Client code example in the [*Streaming API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/).
-   You have a logged in com.sforce.soap.tooling.SoapConnection. For examples, see the [*SOAP API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/).
-   The logged-in user has the View All Data permission to subscribe to the TestResult system topic, /systemTopic/TestResult.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Instead of Streaming API, you can use Pub/Sub API to subscribe to events. Based on gRPC API and HTTP/2, Pub/Sub API delivers binary event messages in the Apache Avro format and is more efficient than Streaming API. See the [Pub/Sub API Documentation](https://developer.salesforce.com/docs/platform/pub-sub-api/overview "HTML (New Window)").

As an alternative to using ApexTestQueueItem, you can run test methods using the Salesforce CLI commands. See [Run Apex Tests](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm "HTML (New Window)") in the Salesforce DX Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

The RunTestListener.java class must be instantiated after the Streaming API handshake. For example:

```

```

```

```