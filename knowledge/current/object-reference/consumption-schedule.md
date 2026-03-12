---
title: "Consumption Schedule"
domain: object-reference
topic: consumption-schedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:06.769Z
estimatedTokens: 1225
keywords: [Consumption, Schedule, organizes, rates, usage-based, products, quoted, billed, API, version, 45.0, later, Calls]
---

# Consumption Schedule

> A consumption schedule organizes a set of consumption rates by which
      usage-based products are quoted and billed. This object is available in API version 45.0
    and later.

# Consumption Schedule

A consumption schedule organizes a set of consumption rates by which usage-based products are quoted and billed. This object is available in API version 45.0 and later.

Salesforce uses consumption schedules to group consumption rates. Your consumption schedule defines the unit of measurement and rating method for the schedule's rates. It also defines the billing frequency that Salesforce Billing uses to invoice a usage product.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BillingTerm | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number used with the billing term unit to determine billing frequency. |
| BillingTermUnit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit used with the billing term to determine billing frequencyPossible values are:Month—Quarter—Year— |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled.Possible values are:AUD—Australian DollarCAD—Canadian DollarGBP—British PoundJPY—Japanese YenUSD—U.S. Dollar |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the consumption schedule. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this record is active (true) or not (false). Label is Active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MatchingAttribute | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce Billing matches usage with a consumption schedule if the records share Matching Attribute value. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Default name of this record. Label is Product Name. |
| NumberOfRates | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of consumption rates in this consumption schedule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns a consumption schedule record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RatingMethod | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA specific use case to rate usage against the schedule. This field is the controlling picklist for the Type field.Possible values are:Tier |
| SBQQ__Category__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is available only with Salesforce CPQ.You can define custom categories to organize consumption schedules in separate tabs on sales rep UI. If you do this, make sure to create a field set for each category.Possible values are:Rates |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines how rate tiers are calculated.Possible values are:Range—The schedule prices only using the tier that applies to the usage quantity.Slab—Usage within a given bound receives pricing equal to its tier’s value. |
| UnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unit of measure defines how you quantify instances of usage for your usage products. For example, if your usage product is a cloud storage subscription, you could provide a value of GB for your unit of measure. |
| blng__BillingRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is available only with Salesforce Billing.Salesforce Billing invoices usage summaries based off their related consumption schedule's billing rule. |
| blng__RevenueRecognitionRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is available only with Salesforce Billing.Salesforce Billing recognizes usage summary revenue based off the summary's related revenue recognition rule. |
| blng__TaxRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is available only with Salesforce Billing.Salesforce Billing taxes usage summary invoice lines based off the summary's related tax rule. |
