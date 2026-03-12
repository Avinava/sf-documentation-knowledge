---
title: "ApexTestQueueItem"
domain: object-reference
topic: apextestqueueitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:04.529Z
estimatedTokens: 650
keywords: [ApexTestQueueItem, Apex, job, queue, API, version, 23.0, later, Calls, Special, Access, Rules, Usage]
---

# ApexTestQueueItem

> Represents a single Apex class in the Apex job queue. This object
  is available in API version 23.0 and later.

# ApexTestQueueItem

Represents a single Apex class in the Apex job queue. This object is available in API version 23.0 and later.

This object is available in API version 23.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

In API version 49.0 and later, users must have the View Setup and Configuration permission to access this object.

## Fields

| Field Name | Description |
| --- | --- |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Apex class whose tests are to be executed.This is a relationship field.Relationship NameApexClassRelationship TypeLookupRefers ToApexClass |
| ExtendedStatus | TypestringPropertiesFilter, Nillable, SortDescriptionThe pass rate of the test run.For example: “(4/6)”. This means that four out of a total of six tests passed.If the class fails to execute, this field contains the cause of the failure. |
| ParentJobId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPoints to the AsyncApexJob that represents the entire test run.If you insert multiple Apex test queue items in a single bulk operation, the queue items share the same parent job. This means that a test run can consist of the execution of the tests of several classes if all the test queue items are inserted in the same bulk operation. |
| ShouldSkipCodeCoverage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to opt out of collecting code coverage information during Apex test runs. Available in API version 43.0 and later. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the job. Valid values are:Holding1QueuedPreparingProcessingAbortedCompletedFailed1 This status applies to batch jobs in the Apex flex queue. |
| TestRunResultId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the associated ApexTestRunResult object. |

## Usage

Insert an ApexTestQueueItem object to place its corresponding Apex class in the Apex job queue for execution. The Apex job executes the test methods in the class.

To abort a class that is in the Apex job queue, perform an update operation on the ApexTestQueueItem object and set its Status field to Aborted.

If you insert multiple Apex test queue items in a single bulk operation, the queue items share the same parent job. This means that a test run can consist of the execution of the tests of several classes if all the test queue items are inserted in the same bulk operation.

## Related Topics

- ApexTestRunResult (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestrunresult.htm)
