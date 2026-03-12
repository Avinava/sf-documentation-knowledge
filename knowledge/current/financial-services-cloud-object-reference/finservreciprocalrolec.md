---
title: "FinServ_ReciprocalRole__c"
domain: financial-services-cloud-object-reference
topic: finservreciprocalrolec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.553Z
estimatedTokens: 619
keywords: [FinServ_ReciprocalRole__c, entity’s, corresponding, role, one-to-one, relationship, entities, FinServ, _ReciprocalRole, Calls]
---

# FinServ_ReciprocalRole__c

> Represents the other entity’s corresponding role in a one-to-one
            relationship between entities.

# FinServ\_ReciprocalRole\_\_c

Represents the other entity’s corresponding role in a one-to-one relationship between entities.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CreateInverseRole__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the corresponding reciprocal role record is created automatically for the inverse role (true) or not (false). |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| InverseRelationship__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUniquely identifies the relationship between Role and InverseRole__c so that it can be referenced by a trigger that creates the inverse relationship record. |
| InverseRole__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe role that the other entity occupies in the relationship, such as a grandparent to a grandchild, or an owned business to a proprietor. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of this reciprocal role. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on createFilter, Group, Sort, UpdateDescriptionID of the user who created the reciprocal role record. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type associated with this reciprocal role. |
| RelationshipType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of entities involved in the relationship. Valid values:AllContact Contact RelationAccount Account Relation |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the reciprocal role in an external data source. |
