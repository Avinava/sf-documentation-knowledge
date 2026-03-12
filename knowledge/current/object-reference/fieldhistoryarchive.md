---
title: "FieldHistoryArchive"
domain: object-reference
topic: fieldhistoryarchive
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.143Z
estimatedTokens: 977
keywords: [FieldHistoryArchive, history, objects, retain, big, users, “Retain, History”, permission, API, version, 29.0, later, Calls, Usage]
---

# FieldHistoryArchive

> Represents field history values for all objects that retain field
   history. FieldHistoryArchive is a big object, available only
   to users with the “Retain Field History” permission. This object is available
  in API version 29.0 and later.

# FieldHistoryArchive

Represents field history values for all objects that retain field history. FieldHistoryArchive is a big object, available only to users with the “Retain Field History” permission. This object is available in API version 29.0 and later.

Each instance of the FieldHistoryArchive object represents a single change in the value of a field. FieldHistoryArchive stores history for both standard and custom fields.

The Field field returns the name of the field unless the parent field or object is deleted, in which case it returns the field ID. You can use the ID to retrieve the old field and object name from the FieldNameAfterArchival and ParentNameAfterArchival fields, respectively.

## Supported Calls

describeSObjects(), query()

## Fields

| Field Name | Details |
| --- | --- |
| ArchiveFieldName | TypestringPropertiesNillableDescriptionThe name of the field at the time the data was archived. If the field name changed, the name is sometimes not the same for all records related to a single field. |
| ArchiveParentName | TypestringPropertiesNillableDescriptionThe name of the parent object at the time the data was archived. If the object name changed, the name is sometimes not the same for all records related to a single field. |
| ArchiveParentType | TypestringPropertiesNillableDescriptionThe type of the field at the time the data was archived. If the field type changed, the type is sometimes not the same for all records related to a single field. |
| ArchiveTimestamp | TypedateTimePropertiesNillableDescriptionThe date and time at which the data was archived. |
| CreatedById | TypereferencePropertiesNillableDescriptionThe user ID of the user who created the original record. |
| CreatedDate | TypedateTimePropertiesNillable, SortDescriptionThe date and time at which the original record was created. |
| Field | TypepicklistPropertiesRestricted picklistDescriptionThe name of the field that was changed. If the field is deleted from the parent object, the Field field contains the field ID instead. |
| FieldHistoryType | TypepicklistPropertiesFilter, Nillable, Restricted picklist, SortDescriptionThe name of the object that contains the field history. Possible values are:AccountArticleAssetAuthorizationFormConsent – Available in version 58.0 and later.CaseCommSubscriptionConsent – Available in version 58.0 and later.ContactContactPointConsent – Available in version 58.0 and later.ContactPointTypeConsent – Available in version 58.0 and later.ContractContractLineItemCrisisEmployeeEmployeeCrisisAssessmentEntitlementIndividualInternalOrganizationUnitKnowledgeLeadOpportunityOrderOrderItemPartyConsent – Available in version 58.0 and later.Pricebook2PricebookEntryProduct2ServiceAppointmentServiceContractSolutionWorkOrderWorkOrderLineItem |
| HistoryId | TypereferencePropertiesFilter, SortDescriptionThe ID of the relevant history object (for example, AccountHistory). This field is available in versions 42.0 and later. |
| Id | TypeIDPropertiesDefaulted on create, Filter, idLookupDescriptionThe ID of the archived record. It’s useful to have a field’s ID for fields that you’ve deleted. (Field names aren’t retained in history when you delete fields from Salesforce.) |
| NewValue | TypeanyTypePropertiesNillableDescriptionThe new value of the modified field. |
| OldValue | TypeanyTypePropertiesNillableDescriptionThe previous value of the modified field. |
| ParentId | TypereferencePropertiesFilter, SortDescriptionThe ID of the object that contains the field (the parent object). |

## Usage

When sorting fields, order them as follows:

1.  FieldHistoryType ASC
2.  ParentID ASC
3.  CreatedDate DESC

#### See Also

-   [*Developer Guide:*Big Objects Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm "
    Developer Guide:Big Objects Implementation Guide - HTML (New Window)")
