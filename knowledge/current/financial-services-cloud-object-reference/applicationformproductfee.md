---
title: "ApplicationFormProductFee"
domain: financial-services-cloud-object-reference
topic: applicationformproductfee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.450Z
estimatedTokens: 1040
keywords: [ApplicationFormProductFee, fees, associated, application, form, API, version, 61.0, later, Digital, Lending, permission, Calls, Objects]
---

# ApplicationFormProductFee

> Represents the fees associated with an application form. This
      object is available in API version 61.0 and later. Available with Digital Lending permission
      set.

# ApplicationFormProductFee

Represents the fees associated with an application form. This object is available in API version 61.0 and later. Available with Digital Lending permission set.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=financial_services_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product that’s being applied for in the application.This field is a relationship field.Relationship NameApplicationFormProductRelationship TypeMaster-detailRefers ToApplicationFormProduct (the master object) |
| ApplicationFormProductProposalId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product proposal with which the fee is associated.This field is a relationship field.Relationship NameApplicationFormProductProposalRelationship TypeLookupRefers ToApplicationFormProductProposal |
| FeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fee amount that's paid by the applicant. |
| FeeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of fee paid by an applicant.Valid values are:Closing FeeOrigination Fee |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the application form product fee record. |
| ProductFeeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe base fee associated to the product.This field is a relationship field.Relationship NameProductFeeRelationship TypeLookupRefers ToProductFee |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormProductFeeChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ApplicationFormProductFeeFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ApplicationFormProductFeeHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ApplicationFormProductFeeChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ApplicationFormProductFeeFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ApplicationFormProductFeeHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
