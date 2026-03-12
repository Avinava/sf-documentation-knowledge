---
title: "Billing Fields on Payment"
domain: revenue-cloud
topic: billing-fields-on-payment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.485Z
estimatedTokens: 873
keywords: [Billing, Fields, Payment, Standard, fields, extend, represent, information, corporate, currency, transaction, amounts, accounting, periods, legal, entities., API, version, 64.0, later.]
---

# Billing Fields on Payment

> Standard fields extend the Payment object for use in Billing to represent
         information about corporate currency, transaction amounts in corporate currency, and
         accounting periods for legal entities. This object is available in API version 64.0
      and later.

# Billing Fields on Payment

Standard fields extend the Payment object for use in Billing to represent information about corporate currency, transaction amounts in corporate currency, and accounting periods for legal entities. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| CorporateCurrencyCnvAmount | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe payment amount in corporate currency. |
| CorporateCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the payment amount is converted into corporate currency. |
| CorporateCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the payment amount into corporate currency. |
| CorporateCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe currency ISO code of the corporate currency. |
| FunctionalCurrencyCnvAmount | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe amount value in functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the amount value is converted into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the amount value into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ISO code of the functional currency. Available in API version 66.0 and later. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity accounting period related to the payment.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntityAccountingPeriod |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity related to the payment.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PaymentFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Payment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_payment.htm "Object Reference for the Salesforce Platform: Payment - HTML (New Window)")

## Related Topics

- PaymentFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
