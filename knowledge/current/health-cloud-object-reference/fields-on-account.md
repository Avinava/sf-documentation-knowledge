---
title: "Fields on Account"
domain: health-cloud-object-reference
topic: fields-on-account
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:35.043Z
estimatedTokens: 370
keywords: [Account, Health, Cloud, extend, standard, represent, patients, providers]
---

# Fields on Account

> Health Cloud fields extend the standard Account object to represent information about
      patients and providers.

# Fields on Account

Health Cloud fields extend the standard Account object to represent information about patients and providers.

## Fields

| Field | Details |
| --- | --- |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from when the person account is effective. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from when the person account is no longer effective. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person account is active (true) or not (false).The default value is false. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. This field can’t be encrypted. |
| SourceSystemModifiedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date that the record was last modified in its source system. |

#### See Also

-   [Payer](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_payer.htm "A payer is a health insurance company that helps cover the cost of member care. payer is represented by records on the Account object.")

-   [*Object Reference for the Salesforce Platform*: Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm)

## Related Topics

- Payer (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_payer.htm)
