---
title: "IndividualHistory"
domain: object-reference
topic: individualhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.224Z
estimatedTokens: 397
keywords: [IndividualHistory, history, changes, data, privacy, record, Individual, versions, 42.0, later, Calls, Special, Access, Rules, Usage]
---

# IndividualHistory

> Represents the history of changes to values in the fields of a data
			privacy record, based on the Individual object. This object is available in
		versions 42.0 and later.

# IndividualHistory

Represents the history of changes to values in the fields of a data privacy record, based on the Individual object. This object is available in versions 42.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

-   This object is available if Data Protection and Privacy is enabled.
-   The Individual object isn’t available to Customer Community, Partner Community, and Customer Portal users.

## Fields

| Field Name | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the changed field. |
| IndividualId | TypereferencePropertiesFilter, Group, SortDescriptionID of the data privacy record. Label is Individual ID.This is a relationship field.Relationship NameIndividualRelationship TypeLookupRefers ToIndividual |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe updated value of the changed field. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe previous value of the changed field. |

## Usage

Use this object to identify changes to data privacy records.

This object respects field-level security on the parent object.
