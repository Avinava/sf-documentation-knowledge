---
title: "AccountingFieldMapping"
domain: psc-api
topic: accountingfieldmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.976Z
estimatedTokens: 656
keywords: [AccountingFieldMapping, accounting, mappings, organize, data, bring, ledger, entry, records, Parent, File, Suffix, Directory, Location, Version, custom, populate, transaction, journal, Salesforce]
---

# AccountingFieldMapping

> Represents the custom field mappings used to populate transaction journal
         records with other Salesforce data. This object is available in API version 58.0 and
      later.

# AccountingFieldMapping

Represents the custom field mappings used to populate transaction journal records with other Salesforce data. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountingModelConfigId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe accounting set associated with the accounting field mapping record.This field is a relationship field.Relationship NameAccountingModelConfigRelationship TypeLookupRefers ToAccountingModelConfig |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the person who created the accounting field mapping. |
| IsForAllocationType | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether this supplemental mapping applies to transaction journal records of allocation type (true) or not (false).The default value is false. |
| IsForPaymentType | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether this supplemental mapping applies to transaction journal records of payment type (true) or not (false).The default value is false. |
| IsForTransactionType | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether this supplemental mapping applies to transaction journal records of transaction type (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the language used.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MappingBehavior | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIf set to PointInTime, the target field's data is mapped from the source field only when the transaction journal record is created. If set to CurrentValue, Accounting Subledger reverses and replaces the generated transaction journal records when the value on the transaction journal record is different from the source field value (for example, when you update the source field or the generated record).Possible values are:CurrentValue—Current ValuePointInTime—Point-in-TimeThe default value is PointInTime. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe standard name of the accounting set on the UI. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix of the accounting set. |
| SourceField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe API name of the field on the source object that is mapped to the target field.Possible values are:OM_1_Primary__c.Amount__cOM_1_Primary__c.Check_Reference_Number__cOM_1_Primary__c.CloneSourceIdOM_1_Primary__c.Committed_Date__cOM_1_Primary__c.CreatedByIdOM_1_Primary__c.CreatedDateOM_1_Primary__c.Fund_Account_Name__cOM_1_Primary__c.Generate_Expected__cOM_1_Primary__c.IdOM_1_Primary__c.IsDeletedOM_1_Primary__c.LastModifiedByIdOM_1_Primary__c.LastModifiedDateOM_1_Primary__c.LastReferencedDateOM_1_Primary__c.LastViewedDateOM_1_Primary__c.NameOM_1_Primary__c.OwnerIdOM_1_Primary__c.Paid__cOM_1_Primary__c.Payment_Date__cOM_1_Primary__c.Payment_Method__cOM_1_Primary__c.RecordTypeIdOM_1_Primary__c.RecordVisibilityIdOM_1_Primary__c.Scheduled_Date__cOM_1_Primary__c.SystemModstampOM_1_Primary__c.Transaction_Date__cOM_1_Primary__c.UserRecordAccessIdOM_1_Primary__c.Written_Off__cOM_1_Primary__c.temp__c |
| TargetField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe API name of the field on the transaction journal record for this mapping.Possible values are:CreatedDate |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AccountingFieldMapping xmlns="http://soap.sforce.com/2006/04/metadata">
	<accountingModelConfig>ModelConfigOne</accountingModelConfig>
	<fullName>FieldMappingOne</fullName>
	<masterLabel>FieldMappingOne</masterLabel>
	<isForAllocationType>true</isForAllocationType>
	<isForPaymentType>true</isForPaymentType>
	<isForTransactionType>true</isForTransactionType>
	<mappingBehavior>PointInTime</mappingBehavior>
	<sourceField>TransactionJournal.MappingTargetOne__c</sourceField>
	<targetField>MappingTargetOne__c</targetField>
	<isProtected>false</isProtected>
</AccountingFieldMapping>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/​metadata">
	<types>
		<members>FieldMappingOne</members>
		<name>AccountingFieldMapping</name>
	</types>
	<version>58.0</version>
</Package>
```
