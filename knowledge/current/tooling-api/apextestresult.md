---
title: "ApexTestResult"
domain: tooling-api
topic: apextestresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.840Z
estimatedTokens: 763
keywords: [ApexTestResult, result, Apex, test, execution, API, version, 30.0, later, SOAP, Calls, REST, HTTP, Usage]
---

# ApexTestResult

> Represents the result of an Apex test method execution. Available
  from API version 30.0 or later.

# ApexTestResult

Represents the result of an Apex test method execution. Available from API version 30.0 or later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update()

## Supported REST API HTTP Methods

Query, GET

## Fields

| Field Name | Details |
| --- | --- |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Apex class whose test methods were executed. |
| ApexLogId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPoints to the ApexLog for this test method execution if debug logging is enabled; otherwise, null. |
| ApexTestRunResultId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ApexTestRunResult that represents the entire test run. |
| AsyncApexJobId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPoints to the AsyncApexJob that represents the entire test run.This field points to the same object as ApexTestQueueItem.ParentJobId. |
| IsTestSetup | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the results are for a test setup method. The default is false. |
| Message | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe exception error message if a test failure occurs; otherwise, null. |
| MethodName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the test method. |
| Outcome | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe result of the test. Valid values are:PassFailCompileFailSkip |
| QueueItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPoints to the ApexTestQueueItem which is the class that this test method is part of. |
| RunTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time it took the test method to run, in seconds. |
| StackTrace | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe Apex stack trace if the test failed; otherwise, null. |
| TestTimestamp | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start time of the test method. |

## Usage

You can query the fields of the ApexTestResult record that corresponds to a test method executed as part of an Apex class execution.

Each test method execution is represented by a single ApexTestResult record. For example, if an Apex test class contains six test methods, six ApexTestResult records are created. These records are in addition to the ApexTestQueueItem record that represents the Apex class.

Each ApexTestResult record has an associated ApexTestResultLimits record, which captures the Apex limits used during execution of the test method.

For example code, see [ApexTestQueueItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestqueueitem.htm "Represents a single Apex class in the Apex job queue. Available in API version 30.0 and later.").

## Related Topics

- ApexTestRunResult (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestrunresult.htm)
- ApexTestQueueItem (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestqueueitem.htm)
