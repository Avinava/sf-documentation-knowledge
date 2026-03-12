---
title: "FinServ_Revenue__c"
domain: financial-services-cloud-object-reference
topic: finservrevenuec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.615Z
estimatedTokens: 377
keywords: [FinServ_Revenue__c, data, Financial, Services, Cloud, external, systems, aggregate, revenue, streams, advisor’s, book, business, FinServ, _Revenue]
---

# FinServ_Revenue__c

> Represents data from Financial Services Cloud and external systems to
   aggregate revenue streams for an advisor’s book of business.

# FinServ\_Revenue\_\_c

Represents data from Financial Services Cloud and external systems to aggregate revenue streams for an advisor’s book of business.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount that Revenue__c is related from. This field or FinancialAccount__c requires an entry but not both. |
| Amount__c | TypecurrencyPropertiesCreate, Filter Sort, UpdateDescriptionRevenue amount. |
| Date__c | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate when this revenue was made. |
| FinancialAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinancial Account that Revenue__c is related from. This field or Account__c requires an entry but not both. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA value that uniquely identifies the revenue in an external data source. |
| SubType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subtype of revenues. Valid values: Transaction, Advisory, Investment, Custodian, Planning. |
| Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of revenues. Valid values: Fees, Commission. |
