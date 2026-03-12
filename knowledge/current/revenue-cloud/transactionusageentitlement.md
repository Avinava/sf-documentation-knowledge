---
title: "TransactionUsageEntitlement"
domain: revenue-cloud
topic: transactionusageentitlement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.599Z
estimatedTokens: 2420
keywords: [TransactionUsageEntitlement, usage, entitlement, that's, granted, purchased, sellable, product, quantity, date, entitlements, were, API, version, 63.0]
---

# TransactionUsageEntitlement

> Represents the details of each usage entitlement that's granted with
         the purchased sellable product, such as quantity and date when the entitlements were
         granted. This object is available in API version 63.0 and later.

# TransactionUsageEntitlement

Represents the details of each usage entitlement that's granted with the purchased sellable product, such as quantity and date when the entitlements were granted. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To create, update, and delete transaction usage entitlement records, you must have the Usage Management Run Time permission set license.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account that's associated with the usage entitlement.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ActionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of action that resulted in the transaction usage entitlement.Valid values are:AmendCancellationNewRampRenewal |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset associated with the sellable product.This field is a relationship field.Relationship NameAssetRefers ToAsset |
| ChargeForOverage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe action to be taken when the entitlements are used beyond their grant values.Valid values are:No—Don't charge for over consumptionYes—Charge for over consumption |
| DrawdownOrder | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe order that's used to debit entitlement consumption from the usage entitlement bucket.Valid values are:ExpiringFirstGrantedFirstGrantedLast |
| EffectiveEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the active transaction usage entitlement ends. |
| EffectiveStartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the transaction usage entitlement becomes active. |
| EntitlementQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe entitlement quantity for the usage resource. |
| EntitlementProcessingStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the transaction usage entitlement has been processed by entitlement service to be used in Billing. Available in API version 65.0 and later.Possible values are:PENDING—PendingPROCESSED—ProcessedThe default value is PENDING. |
| EntitlementUomClassId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unit of measure class for the usage entitlement.This field is a relationship field.Relationship NameEntitlementUomClassRefers ToUnitOfMeasureClass |
| EntitlementUomId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unit of measure to calculate the usage entitlement.This field is a relationship field.Relationship NameEntitlementUomRefers ToUnitOfMeasure |
| ExternalOrderItem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe custom or external order item that's associated with the entitlement. |
| GrantBindingTargetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe target associated with the entitlements that are granted with the sellable product.This field is a relationship field.Relationship NameGrantBindingTargetRefers ToAccount, Asset, BindingObjectCustomExt, Contract |
| GrantType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of model that defines how the usage resource is consumed. Available in API version 65.0 and later.Possible values are:CommitGrantThe default value is Grant. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAutogenerated identifier for the transaction usage entitlement record. |
| NetQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe total quantity that combines the amended quantity with the initial transaction quantity in the order item. |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order item that's associated with the entitlement.This field is a polymorphic relationship field.Relationship NameOrderItemRefers ToOrderItem, WorkOrderLineItem |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the transaction usage entitlement.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PricebookEntryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe price book entry that's associated with the sellable product.This field is a relationship field.Relationship NamePricebookEntryRefers ToPricebookEntry |
| ProductId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe sellable product for which the entitlement is granted.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| RatingFrequencyPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sellable product for which the entitlement is granted. Available in API version 64.0 and later. This field is deprecated and will be retired in a future version.This field is a relationship field.Relationship NameRatingFrequencyPolicyRefers ToRatingFrequencyPolicy |
| TokenResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage resource of category Token associated with the usage resource related to the usage product added in the quote line item. Available in API version 65.0 and later.This field is a relationship field.Relationship NameTokenResourceRefers ToUsageResource |
| TransactionQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe transaction quantity in the order for the usage entitlement. |
| UsageAggregationPolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe usage aggregation policy for this entitlement. This field is deprecated and will be retired in a future version.This field is a relationship field.Relationship NameUsageAggregationPolicyRefers ToUsageResourceBillingPolicy |
| UsageGrantRefreshPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage grant refresh policy that's associated with the transaction usage entitlement.This field is a relationship field.Relationship NameUsageGrantRefreshPolicyRefers ToUsageGrantRenewalPolicy |
| UsageGrantRolloverPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage grant rollover policy that's associated with the transaction usage entitlement.This field is a relationship field.Relationship NameUsageGrantRolloverPolicyRefers ToUsageGrantRolloverPolicy |
| UsageModelType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of usage model for a product or service. Anchor is the main subscription product or service. Pack is the add-on product or service that grants additional usage resources for consumption. Commit is the product or service with a specific committed quantity of consumption.Valid values are:AnchorMonetary CommitmentPackQuantity CommitmentToken CommitmentAvailable in API version 64.0 and later. |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe usage resource record that's associated with the transaction usage entitlement.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |
| ValidityPeriodTerm | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe duration for which the usage resource grant is valid, when used with the validity period units. |
| ValidityPeriodUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe length of a validity period for the usage resource grant, when used with the validity period term.Valid values are:MonthNoneYear |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TransactionUsageEntitlementHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[TransactionUsageEntitlementOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[TransactionUsageEntitlementShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)

Sharing is available for the object.
