---
title: "CmplCtrlVerTestExecution"
domain: omnistudio
topic: cmplctrlvertestexecution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.711Z
estimatedTokens: 838
keywords: [CmplCtrlVerTestExecution, Represents, details, captured, during, execution, compliance, control, test., Details, include, status, results, timing, recommendations., API, version, 66.0, later., Supported]
---

# CmplCtrlVerTestExecution

> Represents the details captured during the execution of a compliance control
         test. Details include execution status, results, timing, and recommendations. This
      object is available in API version 66.0 and later.

# CmplCtrlVerTestExecution

Represents the details captured during the execution of a compliance control test. Details include execution status, results, timing, and recommendations. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CmplControlVersionTestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated compliance control version test.This field is a relationship field.Relationship NameCmplControlVersionTestRelationship TypeMaster-detailRefers ToCmplControlVersionTest (the master object) |
| EffectivenessScore | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe effectiveness score based on the test execution results. |
| ExecutionDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the compliance test execution was completed. |
| ExecutionResult | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe result of the compliance control test execution.Possible values are:FailedPassed |
| ExecutionStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the compliance control test execution.Possible values are:CompletedErrorInProgress—In ProgressNotStarted—Not Started |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name the compliance control test execution. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CmplCtrlVerTestExecutionChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CmplCtrlVerTestExecutionHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CmplCtrlVerTestExecutionChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
- CmplCtrlVerTestExecutionHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)
