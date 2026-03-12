---
title: "AppFormProductCollateral"
domain: financial-services-cloud-object-reference
topic: appformproductcollateral
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.351Z
estimatedTokens: 1357
keywords: [AppFormProductCollateral, physical, financial, asset, pledged, collateral, application, form, product, API, version, 65.0, later, Digital, Lending]
---

# AppFormProductCollateral

> Represents a physical or financial asset that is pledged as collateral for an
         application form product. This object is available in API version 65.0 and later.
      Available with Digital Lending permission set.

# AppFormProductCollateral

Represents a physical or financial asset that is pledged as collateral for an application form product. This object is available in API version 65.0 and later. Available with Digital Lending permission set.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Application Form Product associated with the application form product collateral. For example, A product, such as a loan, that's applied for and secured by a pledged financial asset as collateral.This field is a relationship field.Relationship NameApplicationFormProductRelationship TypeMaster-detailRefers ToApplicationFormProduct (the master object) |
| CollateralAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial or physical asset reference pledge as collateral.This field is a relationship field.Relationship NameCollateralAssetRefers ToPartyFinancialAsset |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| PartyFinancialAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Party Financial Asset associated with the application form product collateral. For example, a party's financial asset that's pledged as collateral for a loan.This field is a relationship field.Relationship NamePartyFinancialAssetRefers ToPartyFinancialAsset |
| PartyFinancialAssetLienId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lien for party financial asset that is created when the collateral is approved and the lender's legal claim is registered.This field is a relationship field.Relationship NamePartyFinancialAssetLienRefers ToPartyFinancialAssetLien |
| PledgedValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value declared for the party financial asset that's intended to be used as collateral. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the current evaluation status of the application form product collateral to determine the party financial asset's eligibility as collateral.Possible values are:AcceptedDeclaredRejectedUnder Review |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppFormProductCollateralChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AppFormProductCollateralFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AppFormProductCollateralHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AppFormProductCollateralOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AppFormProductCollateralShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AppFormProductCollateralChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- AppFormProductCollateralFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- AppFormProductCollateralHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- AppFormProductCollateralOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AppFormProductCollateralShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
