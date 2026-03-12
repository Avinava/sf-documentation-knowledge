---
title: "AdvAcctForecastSetUse"
domain: mfg-api-devguide
topic: advacctforecastsetuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.563Z
estimatedTokens: 458
keywords: [AdvAcctForecastSetUse, junction, advanced, account, forecast, another, whose, record, serves, context, generating, forecasts, manufacturing, program, Sustainability]
---

# AdvAcctForecastSetUse

> Represents a junction between an advanced account forecast set and another object whose record serves as the context for generating forecasts. For example, a
			manufacturing program or a Sustainability Cloud object’s record can be the context for generating forecasts. This object is available in API version 55.0 and later.

# AdvAcctForecastSetUse

Represents a junction between an advanced account forecast set and another object whose record serves as the context for generating forecasts. For example, a manufacturing program or a Sustainability Cloud object’s record can be the context for generating forecasts. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdvAccountForecastSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe forecast set associated with the account.This is a relationship field.Relationship NameAdvAccountForecastSetRelationship TypeLookupRefers ToAdvAccountForecastSet |
| ExternalReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe reference number of the manufacturing program record used to associate it with the account forecast fact records. |
| ForecastContextId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object whose record is used as the context for generating forecasts.This is a polymorphic relationship field.Relationship NameForecastContextRelationship TypeLookupRefers ToAccount, ManufacturingProgram |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the advanced account forecast use record. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the advanced account forecast set partner record.Possible values are:ActiveApprovedCanceledDraftInactiveRejectedSubmittedForApproval—Submitted For ApprovalThe default value is 'Active'. |
