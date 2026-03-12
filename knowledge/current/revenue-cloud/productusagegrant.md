---
title: "ProductUsageGrant"
domain: revenue-cloud
topic: productusagegrant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.270Z
estimatedTokens: 1918
keywords: [ProductUsageGrant, grant, associated, resource, product, service, purchased, quantity, renewal, rollover, policy, validity, API, version, 62.0]
---

# ProductUsageGrant

> Represents the details of a grant associated with a resource, product, or
         service, such as the purchased quantity, renewal and rollover policy, and validity of the
         grant. This object is available in API version 62.0 and later.

# ProductUsageGrant

Represents the details of a grant associated with a resource, product, or service, such as the purchased quantity, renewal and rollover policy, and validity of the grant. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To create, update, and delete product usage grant records, you must have the Usage Management Design Time permission set license.

## Fields

| Field | Details |
| --- | --- |
| DrawdownOrder | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe order that's used to debit entitlement consumption from the usage entitlement bucket.Valid values are:ExpiringFirstGrantedFirstGrantedLastThis field is deprecated and will be retired in a future version. |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time until when the grant remains effective. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the grant becomes effective. |
| Label | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifying label for the product usage grant. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| OverageChargeable | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether to charge for overages.Valid values are:NoYesThis field is deprecated and will be retired in a future version. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the product usage grant.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductOfferId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sellable product that grants the usage resource.This field is a relationship field. Available in API versions 62.0 and 63.0.Relationship NameProductOfferRefers ToProduct2 |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product selling model associated with the product usage grant. This field is available in API version 65.0 and later.This field is a relationship field.Relationship NameProductSellingModelRefers ToProductSellingModel |
| ProductUsageGrantNum | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe number of each resource grant map that starts with one and is consecutive. |
| ProductUsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product usage resource associated with the product usage grant. Available in API version 64.0 and later.This field is a relationship field.Relationship NameProductUsageResourceRefers ToProductUsageResource |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of the granted resource. |
| RenewalPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe grant renewal policy associated with the product usage grant.This field is a relationship field.Relationship NameRenewalPolicyRefers ToUsageGrantRenewalPolicy |
| RolloverPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe grant rollover policy associated with the product usage grant.This field is a relationship field.Relationship NameRolloverPolicyRefers ToUsageGrantRolloverPolicy |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the product usage grant.Valid values are:ActiveDraftInactive |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of model that defines how the usage resource is consumed.Valid values are:CommitGrantThe default value is Grant. Available in API version 64.0 and later. |
| UnitOfMeasureClassId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unit of measure class associated with the product usage grant.This field is a relationship field.Relationship NameUnitOfMeasureClassRefers ToUnitOfMeasureClass |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit for measure associated with the product usage grant. This value when specified, overrides the default unit of measure defined in the associated unit of measure class.This field is a relationship field.Relationship NameUnitOfMeasureRefers ToUnitOfMeasure |
| UsageDefinitionProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sellable product associated with the usage resource that's used to retrieve tax policy, calculate rating during overages, and other invoicing actions.This field is a relationship field.Relationship NameUsageDefinitionProductRefers ToProduct2 |
| UsageModelType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ID of the unit of measure associated with the product. The type of usage model for a product or service. Anchor is the main subscription product or service. Pack is the add-on product or service that grants additional usage resources for consumption. Commit is the product or service with a specific committed quantity of consumption.Valid values are:AnchorPackToken CommitmentQuantity CommitmentMonetary CommitmentThis field is available in API version 65.0 and later. |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe usage resource associated with the product usage grant.This field is a relationship field. This field is deprecated and will be retired in a future version.Relationship NameUsageResourceRefers ToUsageResource |
| ValidityPeriodTerm | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe period until when the resource grant is valid. |
| ValidityPeriodUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe length of a validity period for the resource grant, when used with the ValidityPeriodTerm field.Valid values are:MonthNoneYear |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductUsageGrantHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ProductUsageGrantOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ProductUsageGrantShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)

Sharing is available for the object.
