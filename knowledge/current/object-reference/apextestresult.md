---
title: "ApexTestResult"
domain: object-reference
topic: apextestresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:04.541Z
estimatedTokens: 943
keywords: [ApexTestResult, result, Apex, test, execution, API, version, 23.0, later, Calls, Special, Access, Rules, Usage]
---

# ApexTestResult

> Represents the result of an Apex test method execution. This
  object is available in API version 23.0 and later.

# ApexTestResult

Represents the result of an Apex test method execution. This object is available in API version 23.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

In API version 49.0 and later, users must have the View Setup and Configuration permission to access this object.

## Fields

| Field Name | Details |
| --- | --- |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Apex class whose test methods were executed.This is a relationship field.Relationship NameApexClassRelationship TypeLookupRefers ToApexClass |
| ApexLogId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPoints to the ApexLog for this test method execution if debug logging is enabled; otherwise, null.This is a relationship field.Relationship NameApexLogRelationship TypeLookupRefers ToApexLog |
| ApexTestRunResultId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ApexTestRunResult that represents the entire test run.This is a relationship field.Relationship NameApexTestRunResultRelationship TypeLookupRefers ToApexTestRunResult |
| AsyncApexJobId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPoints to the AsyncApexJob that represents the entire test run.This field points to the same object as ApexTestQueueItem.ParentJobId.This is a relationship field.Relationship NameAsyncApexJobRelationship TypeLookupRefers ToAsyncApexJob |
| IsTestSetup | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the results are for a test setup method. The default is false. |
| Message | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe exception error message if a test failure occurs; otherwise, null. |
| MethodName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe test method name. |
| Outcome | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe result of the test method execution. Can be one of these values:PassFailCompileFailSkip |
| QueueItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPoints to the ApexTestQueueItem which is the class that this test method is part of.This is a relationship field.Relationship NameQueueItemRelationship TypeLookupRefers ToApexTestQueueItem |
| RunTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time it took the test method to run, in milliseconds. |
| StackTrace | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe Apex stack trace if the test failed; otherwise, null. |
| TestTimestamp | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start time of the test method. |

## Usage

You can query the fields of the ApexTestResult record that corresponds to a test method executed as part of an Apex class execution.

Each test method execution is represented by a single ApexTestResult record. For example, if an Apex test class contains six test methods, six ApexTestResult records are created. These records are in addition to the ApexTestQueueItem record that represents the Apex class.

Each ApexTestResult record has an associated [ApexTestResultLimits](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestresultlimits.htm "Captures the Apex test limits used for a particular test method execution. An instance of this object is associated with each ApexTestResult record. This object is available in API version 37.0 and later.") record, which captures the Apex limits used during execution of the test method.

## Related Topics

- ApexTestRunResult (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestrunresult.htm)
- ApexTestQueueItem.ParentJobId (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestqueueitem.htm)
- ApexTestQueueItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestqueueitem.htm)
- ApexTestResultLimits (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestresultlimits.htm)
