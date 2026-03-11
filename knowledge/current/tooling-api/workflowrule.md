---
title: "WorkflowRule"
domain: tooling-api
topic: workflowrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.993Z
keywords: [WorkflowRule, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# WorkflowRule

# WorkflowRule

Represents a workflow rule that is used to fire off a specific workflow action when the specified criteria is met. Includes access to the associated WorkflowRule object in Salesforce Metadata API.

Available from API version 30.0 or later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), search(), update(), upsert()

## Supported REST HTTP Methods

Query, DELETE, GET, PATCH, POST

## Fields

| Field Name | Details |
| --- | --- |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | Typemns:WorkflowRulePropertiesCreate, Nillable, UpdateDescriptionWorkflow rule metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionThe enum name or ID of entity this rule is associated with. |
| NamespacePrefix | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe namespace of the package containing the workflow rule object. |
| TableEnumOrId | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe enum (for example, Account) or ID of the object for this workflow rule. |