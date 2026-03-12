---
title: "FinancialSecurity"
domain: financial-services-cloud-object-reference
topic: financialsecurity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.054Z
estimatedTokens: 1536
keywords: [FinancialSecurity, financial, security, instrument, stocks, bonds, API, version, 61.0, later, Calls, Special, Access, Rules, Associated]
---

# FinancialSecurity

> Represents information about a financial security instrument, such as stocks
         and bonds. This object is available in API version 61.0 and later.

# FinancialSecurity

Represents information about a financial security instrument, such as stocks and bonds. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Financial Account Management Standard Objects setting.

## Fields

| Field | Details |
| --- | --- |
| AnnualHigh | TypecurrencyPropertiesFilter, Nillable, SortDescriptionHighest price in the last 52 weeks. |
| AnnualLow | TypecurrencyPropertiesFilter, Nillable, SortDescriptionLowest price in the last 52 weeks. |
| AssetClass | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the asset class. |
| AssetSubclass | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the subclass of the Equities asset class. |
| ClosePrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe last price when a security trades during a regular trading day. |
| CurrencyIsoCode | TypepicklistPropertiesFilter, SortDescriptionISO code of the currency. |
| EarningsPerShare | TypedoublePropertiesFilter, Nillable, SortDescriptionCompany's net income divided by its outstanding shares of common stock. |
| EquityCategory | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the market capitalization and investing style. |
| ExDividendDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionTrading date on (and after) where the dividend isn’t owed to a new buyer. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| MarketCap | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal value of a company's outstanding shares of stock. |
| MarketValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe current market value of the securities. |
| MarketValueDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the market value was recorded. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name that uniquely identifies the securities. |
| OpenPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionPrice when the security first trades at the opening of the day. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PeRatio | TypedoublePropertiesFilter, Nillable, SortDescriptionPrice-Earnings Ratio of the security. |
| ProjectedDividend | TypecurrencyPropertiesFilter, Nillable, SortDescriptionProjected dividend payment. |
| ProjectedDividendYield | TypepercentPropertiesFilter, Nillable, SortDescriptionProjected dividend payment divided by the current stock price. |
| Sector | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionGroup of related or common stocks. |
| SecurityIdentifier | Typeexternal lookupPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the financial security. |
| SourceSystemIdentifier | Typeexternal lookupPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique identifier of the financial security in an external system. |
| StockExchange | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionExchange on which the securities are traded. |
| Symbol | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA ticker symbol that is used to uniquely identify the publicly traded securities in a stock exchange. |
| Volume | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of a security to trade during a specific period of time. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinancialSecurityChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FinancialSecurityFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FinancialSecurityHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FinancialSecurityShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FinancialSecurityChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- FinancialSecurityFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- FinancialSecurityHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- FinancialSecurityShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
