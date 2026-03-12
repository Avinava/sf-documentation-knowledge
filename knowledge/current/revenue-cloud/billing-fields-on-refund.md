---
title: "Billing Fields on Refund"
domain: revenue-cloud
topic: billing-fields-on-refund
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.475Z
estimatedTokens: 719
keywords: [Billing, Refund, Standard, extend, represent, corporate, currency, transaction, amounts, accounting, periods, legal, entities, API, version]
---

# Billing Fields on Refund

> Standard fields extend the Refund object for use in Billing to
         represent information about corporate currency, transaction amounts in corporate currency,
         and accounting periods for legal entities. This object is available in API version
      64.0 and later.

# Billing Fields on Refund

Standard fields extend the Refund object for use in Billing to represent information about corporate currency, transaction amounts in corporate currency, and accounting periods for legal entities. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| CorporateCurrencyCnvAmount | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe refund amount in corporate currency. |
| CorporateCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the refund amount is converted into corporate currency. |
| CorporateCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the refund amount into corporate currency. |
| CorporateCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe currency ISO code of the corporate currency. |
| FunctionalCurrencyCnvAmount | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe amount value in functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the amount value is converted into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the amount value into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ISO code of the functional currency. Available in API version 66.0 and later. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity accounting period related to the refund.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntityAccountingPeriod |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity related to the refund.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |

#### See Also

-   [*Object Reference for the Salesforce Platform*: Refund](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_refund.htm "Object Reference for the Salesforce Platform: Refund - HTML (New Window)")
