---
title: "AdvAcctForecastSetPartner"
domain: mfg-api-devguide
topic: advacctforecastsetpartner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.557Z
estimatedTokens: 450
keywords: [AdvAcctForecastSetPartner, junction, advanced, account, forecast, API, version, 53.0, later, Calls]
---

# AdvAcctForecastSetPartner

> Represents a junction between an advanced account forecast set and an
         account. This object is available in API version 53.0 and later.

# AdvAcctForecastSetPartner

Represents a junction between an advanced account forecast set and an account. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account that uses the forecast set for generating advanced account forecast records.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AdvAccountForecastSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe forecast set associated with the account.This is a relationship field.Relationship NameAdvAccountForecastSetRelationship TypeLookupRefers ToAdvAccountForecastSet |
| ExternalReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe reference number of the account forecast set partner record used to associate it with the account forecast fact records. |
| LastCalculationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the advanced account forecast values were last calculated for the associated account and forecast set. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescription |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the advanced account forecast set partner record.Possible values are:ActiveDraftInactiveThe default value is 'Active'. If a partner record is inactive, you can’t edit the corresponding forecast fact records. |
