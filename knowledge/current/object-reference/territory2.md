---
title: "Territory2"
domain: object-reference
topic: territory2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.135Z
estimatedTokens: 856
keywords: [Territory2, sales, territory, Territories, enabled, Calls, Special, Access, Rules]
---

# Territory2

> Represents a sales territory. Available if Sales Territories has
  been enabled.

# Territory2

Represents a sales territory. Available if Sales Territories has been enabled.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Standard and partner users can access this object. If a territory model is in Active state, any standard or partner user can view that model, including its territories and assignment rules. For territories in an active model, any standard or partner user can view assigned records and assigned users subject to your Salesforce sharing settings. Users cannot view territory models in other states (such as Planning or Archived).

## Fields

| Field Name | Details |
| --- | --- |
| AccountAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRepresents the default account record access levels for users that are assigned to the territory. Values are:Read OnlyRead/WriteOwner |
| CaseAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRepresents the default case record access levels for users that are assigned to the territory. Values are:PrivateRead OnlyRead/Write |
| ContactAccessLevel | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRepresents the default contact record access levels for users that are assigned to the territory. Values are:PrivateRead OnlyRead/Write |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the territory. The field label in the user interface is Territory Description. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. The field label in the user interface is Territory Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| ForecastUserId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionUnique identifier of a territory’s forecast manager. To select a ForecastUserId, select someone in the list of users assigned to the territory. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the territory. The field label in the user interface is Territory Label. |
| OpportunityAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRepresents the default opportunity record access levels for users that are assigned to the territory. Values are:PrivateRead OnlyRead/Write |
| ParentTerritory2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the territory’s parent territory (if any). If the territory has no parent territory, this value is null. |
| Territory2ModelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the territory model that the territory belongs to. |
| Territory2TypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the territory type that the territory belongs to. |
