---
title: "FinServ_AssetsAndLiabilities__c"
domain: financial-services-cloud-object-reference
topic: finservassetsandliabilitiesc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.543Z
estimatedTokens: 827
keywords: [FinServ_AssetsAndLiabilities__c, assets, liabilities, represented, client's, financial, accounts, real, estate, collectibles, FinServ, _AssetsAndLiabilities, Calls]
---

# FinServ_AssetsAndLiabilities__c

> Represents assets or liabilities that are not represented in a
            client's financial accounts, such as real estate or collectibles.

# FinServ\_AssetsAndLiabilities\_\_c

Represents assets or liabilities that are not represented in a client's financial accounts, such as real estate or collectibles.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Amount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount of an asset (positive) or liability (negative). |
| AssetsAndLiabilitiesSource__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionData source. Label is Source. Valid values:Manual EntryYodlee |
| AssetsAndLiabilitiesType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of asset or liability. Label is Type. Valid values:Auto LoanMortgageOtherPersonal LoanReal EstateEquipmentAutomobileCollectionGoldJewelryCash |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| Description__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of this asset or liability. |
| FinancialAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinancial account that this asset or liability is related to. |
| Household__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHousehold that this asset or liability is associated with. |
| JointOwner__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionJoint owner, if any, for this asset or liability. |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort,DescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTimestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of this asset or liability. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on createFilter, Group, Sort, UpdateDescriptionID of the user who created the asset or liability record. |
| Ownership__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of ownership for this asset or liability. Valid values:IndividualJointTrust |
| OwnerType__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClient’s ownership role (primary or joint) for this asset or liability. The value is specified by a trigger. |
| PrimaryOwner__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPrimary owner of this asset or liability. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type associated with this asset or liability. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the asset or liability in an external data source. |
