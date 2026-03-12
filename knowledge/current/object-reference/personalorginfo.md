---
title: "PersonalOrgInfo"
domain: object-reference
topic: personalorginfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.842Z
estimatedTokens: 1076
keywords: [PersonalOrgInfo, Tableau, personal, org, API, version, 64.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PersonalOrgInfo

> Represents the information for a Tableau Next personal org. This object is available in API version 64.0 and later.

# PersonalOrgInfo

Represents the information for a Tableau Next personal org. This object is available in API version 64.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

To access this object, you must have Tableau Next enabled in your org and a Tableau Next permission set.

## Fields

| Field | Details |
| --- | --- |
| DeletedBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user ID that deleted the personal org. |
| DeletedDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date the personal org was deleted. |
| Description | TypetextareaPropertiesCreate, NillableDescriptionThe description for the personal org. |
| Details | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe details for the personal org. |
| ErrorCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error code for the personal org. |
| IsPersonalOrgDeleted | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the personal org is deleted (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the personal org was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the personal org was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe API name of the personal org. |
| OrgName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the personal org. |
| PersonalOrg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the personal org. |
| PrimaryOrgUser | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe email for the primary user of the personal org. |
| PrimaryOrgUserIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe user ID for the primary user of the personal org. |
| SignupCountry | TypestringPropertiesFilter, Group, SortDescriptionThe country of the personal org signup. |
| SignupEmail | TypeemailPropertiesFilter, Group, SortDescriptionThe user email used for personal org signup. |
| SignupInstance | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Salesforce org instance used for personal org signup. |
| SignupLanguage | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language used for personal org setup.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| SignupUsername | TypestringPropertiesFilter, Group, SortDescriptionThe user name used for personal org signup. |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe source of the personal org.Possible values are:TableauEinstein—Tableau Next |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe status of the personal org.Possible values are:ActiveCreatingDeletedErrorNewThe default value is New. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PersonalOrgInfoFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PersonalOrgInfoHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PersonalOrgInfoFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PersonalOrgInfoHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
