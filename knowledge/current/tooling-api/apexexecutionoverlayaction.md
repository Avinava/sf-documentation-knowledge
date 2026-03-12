---
title: "ApexExecutionOverlayAction"
domain: tooling-api
topic: apexexecutionoverlayaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.775Z
estimatedTokens: 853
namespace: YourClass
keywords: [ApexExecutionOverlayAction, Apex, code, snippet, SOQL, query, execute, specific, line, trigger, Optionally, generates, heap, dump, SOAP]
---

# ApexExecutionOverlayAction

> Specifies an Apex code snippet or SOQL query to execute at a
			specific line of code in an Apex class or trigger. Optionally, generates a heap
			dump.

**Namespace:** `YourClass`

# ApexExecutionOverlayAction

Specifies an Apex code snippet or SOQL query to execute at a specific line of code in an Apex class or trigger. Optionally, generates a heap dump.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

Query, GET, POST, PATCH, DELETE

## Fields

| Field Name | Details |
| --- | --- |
| ActionScript | TypestringPropertiesCreate, Nillable, UpdateDescriptionThe Apex code or SOQL query to run when execution reaches the line in the Apex class or trigger at the specified iteration. Results are included in the heap dump file. |
| ActionScriptType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the ActionScript is written in Apex or SOQL. Valid values are:NoneApexSOQLIf a value for this field is not supplied, or if an empty string is supplied for this value, a default value of None is used. |
| ExecutableEntityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Apex class or trigger being executed.This field is required if ExecutableEntityName is not provided. If both ExecutableEntityName and ExecutableEntityId are provided, ExecutableEntityId takes precedence. |
| ExecutableEntityName | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe Apex typeRef of the class or trigger being executed. A type lookup is done and, if the typeRef is valid, ExecutableEntityId is set to the ID of the class or trigger.For a trigger, the typeRef must begin with the SFDC trigger prefix __sfdc_trigger/. For example, __sfdc_trigger/YourTriggerName or __sfdc_trigger/YourNamespace/YourTriggerName.For a class, use the format YourClass, YourClass$YourInnerClass, or YourNamespace/YourClass$YourInnerClass.This field is required if ExecutableEntityId is not provided. If both ExecutableEntityName and ExecutableEntityId are provided, ExecutableEntityId takes precedence. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe expiration date of the overlay action.If no value is provided for this field, a default value of 30 minutes from the current time is used. |
| IsDumpingHeap | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a heap dump is generated (true) or not (false). To execute the ActionScript without generating a heap dump, set this field to false.If no value for this field is provided, a default value of true is used. |
| Iteration | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of times to execute the specified line execute before the heap dump is generated. This field is required. |
| Line | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe line number of the heap dump marker. This field is required. |
| ScopeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe user who executed the action.If no value for this field is provided, ScopeId is set to your UserId value. |

## Usage

When you are troubleshooting a runtime issue, use ApexExecutionOverlayAction to overlay a diagnostic output on an Apex class or trigger without compromising production code. Use the resulting ApexExecutionOverlayResult to find out more about the state of a variable or of the database or to test your code using specific conditions.
