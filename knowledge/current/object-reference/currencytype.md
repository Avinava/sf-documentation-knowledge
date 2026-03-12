---
title: "CurrencyType"
domain: object-reference
topic: currencytype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.625Z
estimatedTokens: 774
keywords: [CurrencyType, currencies, organization, multicurrency, feature, enabled, Calls, Special, Access, Rules, Usage]
---

# CurrencyType

> Represents the currencies used by an organization for which the
   multicurrency feature is enabled.

# CurrencyType

Represents the currencies used by an organization for which the multicurrency feature is enabled.

## Supported Calls

create(), describeSObjects(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

-   This object is not available in single-currency organizations.
-   You need the “Customize Application” permission to edit this object.
-   Your client application can't delete this object.

## Fields

| Field | Details |
| --- | --- |
| ConversionRate | TypedoublePropertiesFilterDescriptionRequired. Conversion rate of this currency type against the corporate currency. |
| DecimalPlaces | TypeintPropertiesFilterDescriptionRequired. For this currency, specifies the number of digits to the right of the decimal point, such as zero (0) for JPY or 2 for USD. |
| IsActive | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether this currency type is active (true) or not (false). Inactive currency types do not appear in picklists in the user interface. Label is Active. This field defaults to false if no value is provided when updating or inserting a record. |
| IsCorporate | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether this currency type is the corporate currency (true) or not (false). Label is Corporate Currency. All other currency conversion rates are applied against this corporate currency. If a currency is already defined as the corporate currency in the user interface, it can't be unset. When a non-corporate currency is set to a corporate currency, the system reconfigures all conversion rates based on the new corporate currency. |
| IsoCode | TypepicklistPropertiesFilter, Restricted picklistDescriptionRequired. ISO code of the currency. Must be one of the valid alphabetic, three-letter currency ISO codes defined by the ISO 4217 standard, such as USD, GBP, or JPY. Must be unique within your organization. Label is Currency ISO Code. |

## Usage

This object is for multicurrency organizations only. Use this object to define the currencies your organization uses.

When updating an existing record, make sure to provide values for all fields to avoid undesired changes to the CurrencyType. For example, if a value for IsActive is not provided, the default (false) is used, which could result in a currently active CurrencyType becoming inactive.

#### See Also

-   [DatedConversionRate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datedconversionrate.htm "Represents the dated exchange rates used by an organization for which the multicurrency and the effective dated currency features are enabled.")

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- DatedConversionRate (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_datedconversionrate.htm)
- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
