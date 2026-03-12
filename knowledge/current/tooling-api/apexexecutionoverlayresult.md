---
title: "ApexExecutionOverlayResult"
domain: tooling-api
topic: apexexecutionoverlayresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.782Z
estimatedTokens: 674
keywords: [ApexExecutionOverlayResult, result, Apex, code, snippet, SOQL, query, defined, associated, ApexExecutionOverlayAction, resulting, heap, dump, API, version]
---

# ApexExecutionOverlayResult

> Represents the result from the Apex code snippet or SOQL query defined
   in the associated ApexExecutionOverlayAction, and the resulting heap dump if one was returned.
  Available from API version 28.0 or later.

# ApexExecutionOverlayResult

Represents the result from the Apex code snippet or SOQL query defined in the associated ApexExecutionOverlayAction, and the resulting heap dump if one was returned. Available from API version 28.0 or later.

## Supported SOAP Calls

query(), retrieve(), delete()

## Supported REST HTTP Methods

Query, GET, DELETE

## Fields

| Field Name | Details |
| --- | --- |
| ActionScript | TypestringPropertiesNillableDescriptionThe Apex code or SOQL query that was run. |
| ActionScriptType | TypepicklistPropertiesFilter, Group, Sort, NillableDescriptionIndicates whether the ActionScript is written in Apex or SOQL. Valid values are:NoneApexSOQL |
| ApexResult | TypeApexResultPropertiesNillableDescriptionA complex type that represents the result of Apex code executed as part of an ApexExecutionOverlayAction, returned in an ApexExecutionOverlayResult. |
| ExpirationDate | TypedateTimePropertiesFilter, SortDescriptionThe expiration date of the overlay action. |
| HeapDump | TypeHeapDumpPropertiesNillableDescriptionA complex type that represents a heap dump in an ApexExecutionOverlayResult object. You can only have a single row when using HeapDump in SOQL. To select only one row, you can use a LIMIT=1 clause in your SOQL query, or you can list multiple rows for the user and have them select the row to inspect. |
| IsDumpingHeap | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a heap dump was generated (true) or not (false). |
| Iteration | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of times the specified line should execute before the heap dump is generated. This field is required. |
| Line | TypeintPropertiesFilter, Group, Sort, NillableDescriptionThe line number of the checkpoint. |
| SOQLResult | TypeSOQLResultPropertiesNillableDescriptionA complex type that represents the result of a SOQL query in an ApexExecutionOverlayResult object. |
| UserId | TypereferencePropertiesFilter, Group, Sort,DescriptionThe user who executed the action. |

## Usage

When you are troubleshooting a runtime issue, you often want to find out more about the state of a variable or the state of the database, or create a specific condition to test your code. Use [ApexExecutionOverlayAction](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexexecutionoverlayaction.htm "Specifies an Apex code snippet or SOQL query to execute at a specific line of code in an Apex class or trigger. Optionally, generates a heap dump.") to overlay a diagnostic output on an Apex class or trigger without compromising production code, and use ApexExecutionOverlayResult to navigate the results.

## Related Topics

- ApexResult (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexresult.htm)
- HeapDump (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_heapdump.htm)
- SOQLResult (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_soqlresult.htm)
- ApexExecutionOverlayAction (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexexecutionoverlayaction.htm)
