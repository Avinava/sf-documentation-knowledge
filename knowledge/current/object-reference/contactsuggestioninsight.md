---
title: "ContactSuggestionInsight"
domain: object-reference
topic: contactsuggestioninsight
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.990Z
estimatedTokens: 997
keywords: [ContactSuggestionInsight, suggestion, new, contact, record, API, versions, 45.0, later, Calls, Special, Access, Rules, Usage]
---

# ContactSuggestionInsight

> Represents a suggestion for a new contact record. Available in
		API versions 45.0 and later.

# ContactSuggestionInsight

Represents a suggestion for a new contact record. Available in API versions 45.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To add or decline contact suggestions, users need a Sales Cloud Einstein license and edit access on accounts. As of the Spring ’20 release, Pardot and Sales Engagement users no longer have access to this object.

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related account. |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe address of the suggested contact. |
| City | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe city of the suggested contact. |
| ContactTitle | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe title of the suggested contact. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe country of the suggested contact. |
| CreatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the created contact record. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| Division | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe division of the suggested contact. |
| Email | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionThe email address of the suggested contact. |
| FirstName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe first name of the suggested contact. |
| GeocodeAccuracy | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionAccuracy level of the geocode for the address. See Compound Field Considerations and Limitations for details on geolocation compound fields.NoteThis field is available in the API only. |
| LastName | TypestringPropertiesFilter, Group, SortDescriptionThe last name of the suggested contact. |
| LastOperationUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who last performed a related operation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Latitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed in conjunction with Longitude to specify the precise geolocation of an address. |
| Longitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed in conjunction with Latitude to specify the precise geolocation of an address. |
| Phone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe phone number of the suggested contact. |
| PostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe postal code of the suggested contact. |
| RationaleLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe reason why this entry is a suggested contact. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe state of the suggested contact. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the suggested contact. Possible values include:NewPendingAddedDeclined |
| Street | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe street of the suggested contact. |

## Usage

This object is read-only and isn’t supported in workflows, triggers, process builder, or Visualforce pages.

## Related Topics

- Compound Field Considerations
												and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
