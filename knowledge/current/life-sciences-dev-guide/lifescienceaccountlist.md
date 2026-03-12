---
title: "LifeScienceAccountList"
domain: life-sciences-dev-guide
topic: lifescienceaccountlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.353Z
estimatedTokens: 688
keywords: [LifeScienceAccountList, account, filter, routine, API, version, 65.0, later, Calls, Associated]
---

# LifeScienceAccountList

> Represents the type of account lists, such as filter, static list, and
         routine. This object is available in API version 65.0 and later.

# LifeScienceAccountList

Represents the type of account lists, such as filter, static list, and routine. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

LifeScienceAccountList isn't available in the Object Manager and can't be customized.

## Fields

| Field | Details |
| --- | --- |
| CurrentTimeZone | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe timezone of the user who creates or updates a route. |
| IsMultiDayRoute | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the end date of the route is later than the start date, and the duration is more than a day (true) or not (false).The default value is false. |
| IsRoute | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a set of visits for the provider accounts is a Route to be reused to quickly reschedule visits (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Life Science Account list. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReportIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the report associated with the advanced filter. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which the data is loaded into the object. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of the Life Science account list.Possible values are:AdvancedFilter—Advanced FilterFilterList |

## Associated Object

This object has the following associated object. If the API version isn’t specified, it's available in the same API versions as this object. Otherwise, it's available in the specified API version and later.

[LifeScienceAccountListShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LifeScienceAccountListShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
