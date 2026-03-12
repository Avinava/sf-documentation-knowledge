---
title: "ServiceResource"
domain: salesforce-scheduler-developer-guide
topic: serviceresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.777Z
estimatedTokens: 1026
keywords: [ServiceResource, technician, asset, API, version, 38.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ServiceResource

> Represents a technician or an asset. This object is available in
		API version 38.0 and later.

# ServiceResource

Represents a technician or an asset. This object is available in API version 38.0 and later.

A technician represents an employee from your organization, such as a loan officer, investment advisor, doctor, nurse practitioner, or retail store specialist, who attends appointments with clients. An asset represents an item of commercial value, such as a product sold by your company or a competitor, that a customer has purchased and installed.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Asset.This is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the resource. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhen selected, this option means that the resource can be assigned to appointments. For service tracking purposes, resources can’t be deleted, so deactivating a resource is the best way to send them into retirement.Deactivating a user doesn’t deactivate the related service resource. You can’t create a service resource that is linked to an inactive user. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicate whether Salesforce Scheduler must consider the service resource record for scheduling appointments (true) or not (false).NoteThis field is applicable only if the Main Service Resource setting is enabled in your Salesforce org.This field is available in API version 57.0 and later.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service resource was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service resource was last viewed. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, Nillable, UpdateDescriptionThe associated user. Its label in the UI is User. If the service resource represents a service crew rather than a user, leave the User field blank and select the related crew in the ServiceCrewId field. |
| ResourceType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the resource is a Technician (T) or Asset (S). The default value is Technician (T). You can’t add additional resource types. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceResourceChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 48.0)

Change events are available for the object.

[ServiceResourceFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[ServiceResourceHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[ServiceResourceOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[ServiceResourceShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
