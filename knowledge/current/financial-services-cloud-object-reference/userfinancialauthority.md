---
title: "UserFinancialAuthority"
domain: financial-services-cloud-object-reference
topic: userfinancialauthority
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.726Z
estimatedTokens: 1291
keywords: [UserFinancialAuthority, maximum, monetary, amount, user, authorize, financial, product, API, version, 57.0, later, Calls, Associated, Objects]
---

# UserFinancialAuthority

> Represents the maximum monetary amount a user can authorize for a given financial type and product. This object is available in API version 57.0 and later.

# UserFinancialAuthority

Represents the maximum monetary amount a user can authorize for a given financial type and product. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe configuration details for the user financial authority record. This field can't be edited. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date when the user financial authority is in effect. |
| EvaluationMethod | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionThe logic that validates the user financial authority. For example, the Claim Coverage Valuation method validates that a payment on a claim coverage doesn’t exceed the maximum amount allowed for the user on that claim coverage product.Possible values are:Claim Coverage Valuation |
| FinancialType | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionThe financial type associated with the user financial authority.Possible values are:Claim ExpenseClaim Loss |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MaximumApprovalAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe maximum monetary amount a user can approve for a financial activity. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the financial user authority. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner associated with the user financial authority.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe product associated with the user financial authority.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start date when the user financial authority is in effect. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe user associated with the user financial authority.This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UserFinancialAuthorityChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

[UserFinancialAuthorityHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[UserFinancialAuthorityOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[UserFinancialAuthorityShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- UserFinancialAuthorityChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- UserFinancialAuthorityHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- UserFinancialAuthorityOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- UserFinancialAuthorityShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
