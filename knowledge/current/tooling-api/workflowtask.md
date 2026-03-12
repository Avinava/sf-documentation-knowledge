---
title: "WorkflowTask"
domain: tooling-api
topic: workflowtask
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.151Z
estimatedTokens: 584
keywords: [WorkflowTask, Represents, workflow, task, used, fire, off, specific, action, specified, criteria, met., Includes, access, associated, WorkflowRule, Salesforce, Metadata, API., Supported]
---

# WorkflowTask

> Represents a workflow task that is used to fire off a specific workflow
   action when the specified criteria is met. Includes access to the associated WorkflowRule object
   in Salesforce
   Metadata API.

# WorkflowTask

Represents a workflow task that is used to fire off a specific workflow action when the specified criteria is met. Includes access to the associated WorkflowRule object in Salesforce Metadata API.

Available from API version 32.0 or later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), search(), update(), upsert()

## Supported REST HTTP Methods

Query, DELETE, GET, PATCH, POST

## Fields

| Field Name | Details |
| --- | --- |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, Sort.DescriptionRequired. The entity definition for the object associated with the validation rule. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the entity containing the workflow task. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | Typemns:WorkflowTaskPropertiesCreate, Nillable, UpdateDescriptionWorkflow task metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package containing the workflow task object. |
| Priority | TypepicklistPropertiesFilter, Group, SortDescriptionThe task’s priority. Values are:HighNormalLow |
| Status | TypepicklistPropertiesFilter, Group, SortDescriptionThe task’s status. Values are:Not StartedIn ProgressCompletedWaiting on someone elseDeferred |
| Subject | TypestringPropertiesFilter, Group, idLookup, SortDescriptionA subject for the workflow task. It is used if an email notification is sent when the task is assigned. |

## Related Topics

- EntityDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitydefinition.htm)
