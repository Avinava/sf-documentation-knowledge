---
title: "DatedConversionRate"
domain: object-reference
topic: datedconversionrate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.109Z
estimatedTokens: 393
keywords: [DatedConversionRate, dated, exchange, rates, organization, multicurrency, effective, currency, features, enabled, Calls, Special, Access, Rules, Usage]
---

# DatedConversionRate

> Represents the dated exchange rates used by an organization for which
      the multicurrency and the effective dated currency features are enabled.

# DatedConversionRate

Represents the dated exchange rates used by an organization for which the multicurrency and the effective dated currency features are enabled.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(),

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| ConversionRate | TypedoublePropertiesFilter, UpdateDescriptionRequired. Conversion rate of this currency type against the corporate currency. |
| IsoCode | TypepicklistPropertiesFilter, Restricted picklistDescriptionRequired. ISO code of the currency. Must be one of the valid alphabetic, three-letter currency ISO codes defined by the ISO 4217 standard, such as USD, GBP, or JPY. Must be unique within your organization. Label is Currency ISO Code. |
| NextStartDate | TypedatePropertiesFilter, NillableDescriptionRead only. The date on which the next effective dated exchange rate will start. Effectively the day after the end date for this exchange rate. |
| StartDate | TypedatePropertiesFilterDescriptionThe date on which the effective dated exchange rate starts. The timestamp is determined by the base calendar of the API. |

## Usage

This object is for multicurrency organizations with advanced currency management enabled. Use this object to define the exchange rates your organization uses for a date range. This object is not available in single-currency organizations, nor is it available if the organization does not have advanced currency management enabled.
