---
title: "UserTerritory2AssocLog"
domain: object-reference
topic: userterritory2assoclog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.048Z
estimatedTokens: 490
keywords: [UserTerritory2AssocLog, log, user, assigned, unassigned, territory, API, version, 57.0, later, Calls, Special, Access, Rules]
---

# UserTerritory2AssocLog

> Represents a log of when a user is assigned and unassigned from a
         territory. This object is available in API version 57.0 and later.

# UserTerritory2AssocLog

Represents a log of when a user is assigned and unassigned from a territory. This object is available in API version 57.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

To see this object, enable Sales Territory and User Tracking on the Territory Settings page. Activate a territory model to start the tracking.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code of currency.Possible values are:EUR—EuroINR—Indian RupeeUSD—U.S. DollarThe default value is USD. |
| EndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the user is unassigned from a territory. If the end date is empty, the user is still assigned. |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionAuto-generated unique name of the log. |
| RoleInTerritory2 | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionUser’s role in the territory between the start and end date. The picklist is, by default, empty. Add values to this field using Object Manager. |
| StartDate | TypedateTimePropertiesFilter, SortDescriptionDate the user is assigned to the territory. |
| Territory2Id | TypereferencePropertiesFilter, Group, SortDescriptionID of the territory associated with the log.This field is a relationship field.Relationship NameTerritory2Refers ToTerritory2 |
| Territory2ModelId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the territory model associated with the log.This field is a relationship field.Relationship NameTerritory2ModelRefers ToTerritory2Model |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user associated with the log.This field is a relationship field.Relationship NameUserRefers ToUser |
