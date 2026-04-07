---
title: "FinServ_Card__c"
domain: financial-services-cloud-object-reference
topic: finservcardc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:36.599Z
estimatedTokens: 348
keywords: [FinServ_Card__c, credit, debit, card, financial, account, FinServ, _Card]
---

> Represents credit or debit card associated with this financial
         account.

# FinServ\_Card\_\_c

Represents credit or debit card associated with this financial account.

## Supported Calls

create(), delete(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountHolder__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndividual credit or debit holder associated with this card. |
| Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the account is active (true) or inactive (false). Default is true. |
| BinNumber__c | TypedoublePropertiesCreateFilter, Nillable, SortUpdateDescriptionBank Identification number for this account. |
| FinancialAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinancial account associated with this card. |
| OwnershipType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of ownership for this card. Valid values:PrimaryAuthorizedOther |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the financial account in an external data source. |
| ValidUntil__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate card is no longer valid. |
