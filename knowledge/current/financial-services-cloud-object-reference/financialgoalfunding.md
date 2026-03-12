---
title: "FinancialGoalFunding"
domain: financial-services-cloud-object-reference
topic: financialgoalfunding
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.275Z
estimatedTokens: 468
keywords: [FinancialGoalFunding, financial, goal, individual, person, account, requires, funding, API, version, 59.0, later, Calls, Associated, Objects]
---

# FinancialGoalFunding

> The financial goal of an individual or person account that requires
         funding. This object is available in API version 59.0 and later.

# FinancialGoalFunding

The financial goal of an individual or person account that requires funding. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount contributed to the financial goal. |
| FinancialGoalId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe financial goal of an individual or person account that requires funding.This field is a relationship field.Relationship NameFinancialGoalRelationship TypeLookupRefers ToFinancialGoal |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinancialGoalFundingChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- FinancialGoalFundingChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
