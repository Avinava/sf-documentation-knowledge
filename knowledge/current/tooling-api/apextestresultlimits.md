---
title: "ApexTestResultLimits"
domain: tooling-api
topic: apextestresultlimits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.243Z
keywords: [ApexTestResultLimits, Supported, SOAP, API, Calls, REST, HTTP, Methods, Fields, Usage]
---

# ApexTestResultLimits

# ApexTestResultLimits

Captures the Apex test limits used for a particular test method execution. An instance of this object is associated with each ApexTestResult object. Available from API version 37.0 or later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update()

## Supported REST API HTTP Methods

Query, GET

## Fields

| Field Name | Details |
| --- | --- |
| ApexTestResultId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated ApexTestResult object. |
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

The ApexTestResultLimits object is populated for each test method execution, and it captures the limits used between the Test.startTest() and Test.stopTest() methods. If startTest() and stopTest() aren’t called, limits usage is not captured. Note the following:

-   The associated test method must be run asynchronously.
-   Limits for asynchronous Apex operations (batch, scheduled, future, and queueable) that are called within test methods are not captured.
-   Limits are captured only for the default namespace.