---
title: "PtnrInvRecon"
domain: channel-revenue-management-dev-guide
topic: ptnrinvrecon
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.625Z
estimatedTokens: 509
keywords: [PtnrInvRecon, reconciliation, partner's, reported, inventory, calculated, unsold, specific, date, API, version, 64.0, later, Calls]
---

# PtnrInvRecon

> Represents the reconciliation of a partner's reported inventory with the
         partner's calculated unsold inventory on a specific date. This object is available in
      API version 64.0 and later.

# PtnrInvRecon

Represents the reconciliation of a partner's reported inventory with the partner's calculated unsold inventory on a specific date. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The account ID of the partner whose inventory is reconciled.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the currency ISO code for the currency fields.Possible values are:INR—Indian RupeeKWD—Kuwaiti DinarUSD—U.S. DollarThe default value is USD. |
| ExecutionReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA reference number in an execution process, such as a data processing engine defintion, that's used to match the partner inventory reconciliaiton with its related partner inventory item reconciliations. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the partner inventory reconcilation record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user or group that owns the partner inventory reconcilation record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReportedAsOfDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionRequired. The date as of which the partner reported their inventory. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the partner inventory reconciliation.Possible values are:ClosedIn ProgressKuwaiti DinarNew |
