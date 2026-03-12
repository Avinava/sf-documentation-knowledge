---
title: "UsageResource"
domain: revenue-cloud
topic: usageresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.795Z
estimatedTokens: 1254
keywords: [UsageResource, Represents, entitlement, granted, user, party, provider, such, data, storage, computing, power, bandwidth, any, product, service., Additionally, used, represent, resources]
---

# UsageResource

> Represents an entitlement granted to a user or party by a provider,
         such as data storage, computing power, bandwidth, or any other product or service.
         Additionally, this object is used to represent resources consumed over time. This
      object is available in API version 62.0 and later.

# UsageResource

Represents an entitlement granted to a user or party by a provider, such as data storage, computing power, bandwidth, or any other product or service. Additionally, this object is used to represent resources consumed over time. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe category of the usage resource that's used to organize and understand the product grant maps.Valid values are:Currency—Available in API version 65.0 and later.UsageToken—Available in API version 64.0 and later. |
| Code | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique user-defined string for the usage resource. |
| DefaultUnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default unit of measure for the given resource. The default value can be overridden with an alternate default unit of measure for a given resource.This field is a relationship field.Relationship NameDefaultUnitOfMeasureRefers ToUnitOfMeasure |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the usage resource. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the usage resource record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the usage resource record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the usage resource.Valid values are:ActiveDraftInactive |
| TokenResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage resource of Category Token that’s used to charge this usage resource. For example, you can select a usage resource Credits (Token category) to rate the usage resource Data (Usage category). This field is available in API version 65.0 and later.Relationship NameTokenResourceRefers ToUsageResource |
| UnitOfMeasureClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure class that's used with the resource to define the units in which this resource is measured.This field is a relationship field.Relationship NameUnitOfMeasureClassRefers ToUnitOfMeasureClass |
| UsageDefinitionProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the usage resource to retrieve tax policy, calculate rating during overages, and other invoicing actions.This field is a relationship field.Relationship NameUsageDefinitionProductRefers ToProduct2 |
| UsageResourceBillingPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage resource billing policy that defines how the usage resource can be aggregated before it's sent for rating.This field is a relationship field. This field is deprecated and will be retired in a future version.Relationship NameUsageResourceBillingPolicyRefers ToUsageResourceBillingPolicy |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UsageResourceFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[UsageResourceHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[UsageResourceOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[UsageResourceShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)

Sharing is available for the object.
