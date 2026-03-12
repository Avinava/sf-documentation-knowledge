---
title: "HealthConditionDetail"
domain: life-sciences-dev-guide
topic: healthconditiondetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.445Z
estimatedTokens: 916
keywords: [HealthConditionDetail, child, associate, site, laterality, codes, HealthCondition, records, API, version, 52.0, later, Calls, Usage, Associated]
---

# HealthConditionDetail

> This child object is used to associate body site and laterality codes to
         HealthCondition records. This object is available in API version 52.0 and later.

# HealthConditionDetail

This child object is used to associate body site and laterality codes to HealthCondition records. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DetailCodeId | TypePolymorphic Master-Detail referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences a code set or code set bundle that adds information to a HealthCondition record.Referenced ObjectsCodeSet, CodeSetBundle |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpeicifies the type of information represented by the detail code that’s accosicated to the HealthCondition record.Possible values are:Body SiteLaterality |
| HealthConditionId | TypeMaster-Detail referencePropertiesCreate, Filter, Group, SortDescriptionThe parent HealthCondition record to which the body site and laterality information is being added.Referenced ObjectsHealthCondition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the HealthConditionDetail record. |

## Usage

-   Use the HealthConditionId field to reference the parent HealthCondition record that the additional information is being associated to.
-   Use the DetailType picklist to specify the type of code that’s being associated to the HealthCondition record.
-   Use the DetailCodeId field to reference the code set or code set bundle record with the associated information.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthConditionDetailFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[HealthConditionDetailHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HealthConditionDetailChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- HealthConditionDetailFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- HealthConditionDetailHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- HealthConditionDetailChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
