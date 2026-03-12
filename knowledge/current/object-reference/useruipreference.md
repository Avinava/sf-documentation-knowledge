---
title: "UserUIPreference"
domain: object-reference
topic: useruipreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.055Z
estimatedTokens: 447
keywords: [UserUIPreference, user, preferences, Salesforce, components, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# UserUIPreference

> Represents user preferences for Salesforce components. This object is
      available in API version 63.0 and later.

# UserUIPreference

Represents user preferences for Salesforce components. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| AsyncOperationTrackers | TypetextareaPropertiesCreate, UpdateDescriptionStores a JSON object that maps each quote ID to its asynchronous sales transaction request details, which includes a tracker ID and the start date. This field is available with Revenue Cloud in API version 66.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated number for the user preferences. Read-only. |
| ObjectScope | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the object that the preference applies to. For example, the preference applies to the Quote object. |
| PreferenceAttribute | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of preference. |
| SourceScope | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the component, feature, or product that the preference is for. For example, a preference for column widths that's associated with the Transaction Line Table component in Revenue Cloud. |
| UserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe user associated with the user preferences.This field is a relationship field.Relationship NameUserRelationship TypeMaster-detailRefers ToUser (the master object) |
| Value | TypetextareaPropertiesCreate, UpdateDescriptionThe JSON for the user's preferences. |
