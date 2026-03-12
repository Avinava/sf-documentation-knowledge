---
title: "RelatedRecordAssocCriteria"
domain: financial-services-cloud-object-reference
topic: relatedrecordassoccriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.205Z
estimatedTokens: 851
keywords: [RelatedRecordAssocCriteria, criteria, automatically, linking, records, accounts, leads, opportunities, cases, branches, work, Parent, File, Suffix, Directory, API, version, 52.0, later]
---

# RelatedRecordAssocCriteria

> Defines criteria for automatically linking records like accounts, leads,
         opportunities, and cases with the branches that work with them. This object is
      available in API version 52.0 and later.

# RelatedRecordAssocCriteria

Defines criteria for automatically linking records like accounts, leads, opportunities, and cases with the branches that work with them. This object is available in API version 52.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=financial_services_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To use this object, you must have the Financial Services Cloud Extension permission set.

## Fields

| Field | Details |
| --- | --- |
| AssociationHandlerApexClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a custom Apex class that handles the creation of association records for specific association criteria. (Typically in the user interface you see the class name.) This class must:Apply to an object that the Record Association Builder doesn't directly supportImplement the fscwmgen.BranchManagement​AssociationHandler interfaceReturn a list of Branch Unit Related RecordsPopulate at least the minimum required fields in each Branch Unit Related Record:BranchUnitId: Represents the current branch unit of the user or contactBusinessUnitMemberId: The Banker ID of the user or contactRelatedRecordId: The ID of the custom object to be relatedThis field is a relationship field.Relationship NameAssociationHandlerApexClassRelationship TypeLookupRefers ToApexClass |
| AssociationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe association type.Possible values are:BranchManagement |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the association criteria. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the association criteria. |
| EventType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of reference object event that triggers creation of the association.Possible values are:CreateUpdate |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSupported languages for the association criteria. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe master label of the association criteria. This internal label doesn’t get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix of the association criteria. |
| PreCondition | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA formula that, when true, causes a new association to be created. |
| ReferenceObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe reference object for the association criteria.Possible values are:AccountCaseContactInteractionSummaryLeadOpportunityCustom objects |
| SelectedOwnerField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA field to use instead of the default Owner ID. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the association criteria.Possible values are:ActiveDraftInactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RelatedRecordAssocCriteriaChangeEventChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<RelatedRecordAssocCriteria xmlns="http://soap.sforce.com/2006/04/metadata">
   <associationType>BranchManagement</associationType>
   <eventType>Create</eventType>
   <masterLabel>RevenueThreeMillion</masterLabel>
   <preCondition>[Account].AnnualRevenue > 3000000</preCondition>
   <referenceObject>Account</referenceObject>
   <status>Active</status>
</RelatedRecordAssocCriteria>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>RelatedRecordAssocCriteria</name>
    </types>
    <version>52.0</version>
</Package>
```

## Related Topics

- RelatedRecordAssocCriteriaChangeEventChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
