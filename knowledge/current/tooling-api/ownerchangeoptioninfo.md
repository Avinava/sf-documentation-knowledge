---
title: "OwnerChangeOptionInfo"
domain: tooling-api
topic: ownerchangeoptioninfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.376Z
keywords: [OwnerChangeOptionInfo, Supported, SOAP, Calls, REST, HTTP, Methods, Special, Access, Rules, Fields, Example]
---

# OwnerChangeOptionInfo

# OwnerChangeOptionInfo

Represents default and optional actions that can be performed when a record’s owner is changed. Available in Tooling API version 35.0 and later.

## Supported SOAP Calls

describeSObjects(), query()

## Supported REST HTTP Methods

Query

## Special Access Rules

OwnerChangeOptionInfo is accessible in Tooling API to user profiles with the View Setup and Configuration permission.

## Fields

| Field | Details |
| --- | --- |
| DefaultValue | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDefault value of the checkbox for this option in the user interface. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, SortDescriptionThe object to which this change applies. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the EntityDefinition containing the record. |
| IsEditable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this option is editable by the user when updating the owner using the OwnerChangeOptions SOAP header. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label that corresponds to the option in the user interface. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name for the option. |
| ParentId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe durable ID of the parent OwnerChangeOptionInfo record. Available in Tooling API version 44.0 and later. |

## Example

Retrieve all the change options for contacts.

SELECT Id, Name, Label, IsEditable, DefaultValue, EntityDefinition.QualifiedApiName FROM OwnerChangeOptionInfo WHERE EntityDefinition.QualifiedName='Contact’

Retrieve the change options for opportunities.

SELECT DurableId,EntityDefinitionId,IsEditable,Label,Name,ParentId FROM OwnerChangeOptionInfo WHERE EntityDefinition.DurableId = ‘Opportunity’