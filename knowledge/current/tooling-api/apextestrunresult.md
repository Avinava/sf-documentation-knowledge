---
title: "ApexTestRunResult"
domain: tooling-api
topic: apextestrunresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.250Z
keywords: [ApexTestRunResult, Supported, SOAP, API, Calls, REST, HTTP, Methods, Fields]
---

# ApexTestRunResult

# ApexTestRunResult

Contains summary information about all the test methods that were run in a particular Apex job. Available from API version 37.0 or later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update()

## Supported REST API HTTP Methods

Query, GET

## Fields

| Field Name | Details |
| --- | --- |
| AsyncApexJobId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent Apex job ID for the result. |
| ClassesCompleted | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of classes executed during the test run. |
| ClassesEnqueued | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe total number of classes enqueued during the test run. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time at which the test run ended. |
| IsAllTests | TypebooleanPropertiesCreate, Filter, Group, Sort, UpdateDescriptionIndicates whether all Apex test classes were run. |
| JobName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for future use. |
| MethodsCompleted | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of methods completed during the test run. This value is updated after each class is run. |
| MethodsEnqueued | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of methods enqueued for the test run. This value is initialized before the test runs. |
| MethodsFailed | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of methods that failed during this test run. This value is updated after each class is run. |
| Source | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source of the test run, such as the Developer Console. |
| StartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time at which the test run started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of the test run. Can be one of these values:QueuedPreparingProcessingAbortedCompletedFailed |
| TestSetupTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time it took the setup methods to run, in milliseconds. |
| TestTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time it took the test to run, in milliseconds. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who ran the test run. |