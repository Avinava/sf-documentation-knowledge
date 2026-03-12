---
title: "FinServ_ContactContactRelation__c"
domain: financial-services-cloud-object-reference
topic: finservcontactcontactrelationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.852Z
estimatedTokens: 656
keywords: [FinServ_ContactContactRelation__c, relationship, any, two, individuals, FinServ, _ContactContactRelation, Calls]
---

# FinServ_ContactContactRelation__c

> Represents the relationship between any two
        individuals.

# FinServ\_ContactContactRelation\_\_c

Represents the relationship between any two individuals.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

To avoid DML errors on insert, read-only access at minimum is required for all fields that have a default value.

| Field | Details |
| --- | --- |
| Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the relationship is active (true) or not (false). The default value is true. |
| Contact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContact that RelatedContact__c is related from. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| EndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the relationship ended. |
| ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the relationship in an external data source. |
| InverseRelationship__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUniquely identifies the relationship between Contact and RelatedContact__c so that it can be referenced by a trigger that creates the inverse relationship record. |
| Name | TypestringPropertiesDefaulted on create, Filter, idLookup, SortDescriptionAuto-number identifier for the relationship. Label is Contact Relation Name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the relationship record. |
| RelatedContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContact that Contact__c is related to. |
| Role__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRole that describes how RelatedContact__c is related to Contact__c |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the relationship in an external data source. |
| StartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the relationship started. |
