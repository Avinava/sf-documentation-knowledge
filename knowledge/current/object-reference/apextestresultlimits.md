---
title: "ApexTestResultLimits"
domain: object-reference
topic: apextestresultlimits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:04.550Z
estimatedTokens: 737
keywords: [ApexTestResultLimits, Captures, Apex, test, limits, particular, execution, instance, associated, ApexTestResult, record, API, version, 37.0, later]
---

# ApexTestResultLimits

> Captures the Apex test limits used for a particular test method
   execution. An instance of this object is associated with each ApexTestResult record. This
  object is available in API version 37.0 and later.

# ApexTestResultLimits

Captures the Apex test limits used for a particular test method execution. An instance of this object is associated with each ApexTestResult record. This object is available in API version 37.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

In API version 49.0 and later, users must have the View Setup and Configuration permission to access this object.

## Fields

| Field Name | Details |
| --- | --- |
| ApexTestResultId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated ApexTestResult object.This is a relationship field.Relationship NameApexTestResultRelationship TypeLookupRefers ToApexTestResult |
| AsyncCalls | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of asynchronous calls made during the test run. |
| Callouts | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of callouts made during the test run. |
| Cpu | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe amount of CPU used during the test run, in milliseconds. |
| Dml | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of DML statements made during the test run. |
| DmlRows | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of rows accessed by DML statements during the test run. |
| Email | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of email invocations made during the test run. |
| LimitContext | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the test run was synchronous or asynchronous. |
| LimitExceptions | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether your org has any limits that differ from the default limits. |
| MobilePush | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of mobile push calls made during the test run. |
| QueryRows | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of rows queried during the test run. |
| Soql | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of SOQL queries made during the test run. |
| Sosl | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of SOSL queries made during the test run. |

## Usage

The ApexTestResultLimits object is populated for each test method execution, and it captures the limits used between the Test.startTest() and Test.stopTest() methods. If startTest() and stopTest() aren’t called, limits usage isn’t captured. Note the following:

-   The associated test method must be run asynchronously.
-   Limits for asynchronous Apex operations (batch, scheduled, future, and queueable) that are called within test methods aren’t captured.
-   Limits are captured only for the default namespace.

## Related Topics

- ApexTestResult (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestresult.htm)
