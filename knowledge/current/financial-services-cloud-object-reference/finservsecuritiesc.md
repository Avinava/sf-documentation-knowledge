---
title: "FinServ_Securities__c"
domain: financial-services-cloud-object-reference
topic: finservsecuritiesc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.623Z
estimatedTokens: 560
keywords: [FinServ_Securities__c, security, stock, bond, FinServ, _Securities, Calls]
---

# FinServ_Securities__c

> Represents a security, such as a stock or bond.

# FinServ\_Securities\_\_c

Represents a security, such as a stock or bond.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| CUSIP__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCommittee on Uniform Securities Identification Procedures identification number for the securities. |
| Exchange__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExchange on which the securities are traded. Valid values:NYSENASDAQ |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastUpdated__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTimestamp for when data for the securities was last updated by an external data source. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the securities. Label is Symbol. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the securities record. |
| Price__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCurrent price of the securities. |
| SecuritiesName__c | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName that uniquely identifies the securities. |
| SecurityId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the securities. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the securities in an external data source. |
