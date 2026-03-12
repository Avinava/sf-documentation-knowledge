---
title: "ProductUsageResource"
domain: revenue-cloud
topic: productusageresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.280Z
estimatedTokens: 1123
keywords: [ProductUsageResource, mapping, product, usage, resources, API, version, 64.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ProductUsageResource

> Represents the mapping of a product and its usage resources.
      This object is available in API version 64.0 and later.

# ProductUsageResource

Represents the mapping of a product and its usage resources. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the relationship between the product and the usage resource stops being active, and any usage tracking or billing related to this relationship ends. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the relationship between the product and the usage resource becomes active or effective, and any usage tracking or billing related to this relationship begins. |
| IsOptional | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product usage resource is optional when the associated product is one of the commitment usage model types (true) or not (false). The default value is false. This field is available in API version 65.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the product usage grant.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sellable product that grants the usage resource.This field is a relationship field.Relationship NameProductOfferRefers ToProduct2 |
| ProductUsageResourceNum | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe number of each resource grant map that starts with one and is consecutive. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the product usage resource record.Valid values are:ActiveDraftInactive |
| TokenResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe usage resource of category Token that’s associated with the selected usage resource. This field is available in API version 65.0 and later.This field is a relationship field.Relationship NameTokenResourceRefers ToUsageResource |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe usage resource associated with the product usage grant.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductUsageResourceChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ProductUsageResourceFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProductUsageResourceHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ProductUsageResourceOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ProductUsageResourceShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
