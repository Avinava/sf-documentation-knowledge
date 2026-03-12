---
title: "PayType"
domain: eu-developer-guide
topic: paytype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.304Z
estimatedTokens: 397
keywords: [PayType, pay, provided, service, worker, determines, hourly, rate, labor, agreement, API, version, 61.0, later, Calls]
---

# PayType

> Represents the type of pay provided to the field service worker that
         determines the hourly rate based on a labor agreement.  This object is available in
      API version 61.0 and later.

# PayType

Represents the type of pay provided to the field service worker that determines the hourly rate based on a labor agreement. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the pay type. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the pay type is no longer in effect. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the pay type takes effect. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier of the pay type. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the pay type is active.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the pay type. |
| WageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of pay provided to the field service worker.Possible values are:DoubleTime—Double TimeRegularTime—Regular TimeTimeAndAHalf—Time and a HalfUnpaidTime—Unpaid TimeThe default value is RegularTime. |
