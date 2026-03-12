---
title: "OpportunityContactRoleSuggestionInsight"
domain: object-reference
topic: opportunitycontactrolesuggestioninsight
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.512Z
estimatedTokens: 633
keywords: [OpportunityContactRoleSuggestionInsight, suggestion, new, opportunity, contact, role, API, versions, 45.0, later, Calls, Special, Access, Rules, Usage]
---

# OpportunityContactRoleSuggestionInsight

> Represents a suggestion for a new opportunity contact role.
		Available in API versions 45.0 and later.

# OpportunityContactRoleSuggestionInsight

Represents a suggestion for a new opportunity contact role. Available in API versions 45.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getDeleted(), query(), retrieve()

## Special Access Rules

To add or decline opportunity contact role suggestions, users need a Sales Cloud Einstein license, edit access on opportunities, and read or edit access on contacts. As of the Spring ’20 release, Pardot and Sales Engagement users no longer have access to this object.

## Fields

| Field Name | Details |
| --- | --- |
| ContactId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related contact record. |
| CreatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the created opportunity contact role record. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| Division | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe division of the suggested opportunity contact role. |
| LastOperationUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who last performed a related operation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| OpportunityId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related opportunity. |
| RationaleLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe reason why this is a suggested opportunity contact role. |
| Role | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe role of the suggested opportunity contact role. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the suggested contact. Possible values include:NewPendingAddedDeclined |

## Usage

This object is read-only and isn’t supported in workflows, triggers, or process builder.
