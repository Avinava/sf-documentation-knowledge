---
title: "FinancialAccountStatement"
domain: automotive-cloud
topic: financialaccountstatement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.249Z
estimatedTokens: 750
keywords: [FinancialAccountStatement, periodic, statement, summary, financial, account, API, version, 60.0, later, Calls, Special, Access, Rules, Associated]
---

# FinancialAccountStatement

> Represents a periodic statement summary for a financial account. This
      object is available in API version 60.0 and later.

# FinancialAccountStatement

Represents a periodic statement summary for a financial account. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Vehicle and Asset Finance must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the financial account statement. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionIndicates the end date of the financial account statement period. |
| FinancialAccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe financial account associated with the financial account statement.This field is a relationship field.Relationship NameFinancialAccountRelationship TypeLookupRefers ToFinancialAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the financial account statement in an external system. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionIndicates the start date of the financial account statement period. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the statement type.Possible values are:Account Closure StatementBalance StatementPeriodic Statement |
| Url | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the statement attachment or file. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinancialAccountStatementChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[FinancialAccountStatementFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[FinancialAccountStatementHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
