---
title: "AccountServicePreference"
domain: health-cloud-object-reference
topic: accountservicepreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.932Z
estimatedTokens: 1023
keywords: [AccountServicePreference, preferences, account, services, they, receive, Home, Health, patient, workers, assigned, their, visits, API, version]
---

# AccountServicePreference

> Represents the preferences an account has for the services they receive. In
         Home Health, this object represents the preferences that a patient has for the health
         workers assigned to their visits. This object is available in API version 58.0 and
      later.

# AccountServicePreference

Represents the preferences an account has for the services they receive. In Home Health, this object represents the preferences that a patient has for the health workers assigned to their visits. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypeLookupPropertiesCreate, Filter, Group, SortDescriptionThe patient whose preference is being recorded.Relationship NameAccountRefers ToAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| PreferenceId | TypePolymorphic lookupPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Preference that the patient has about their health worker. This preference may be a skill or trait, or a specific person that they want to avoid or be assigned to their visit.Relationship NamePreferenceRefers ToServiceResourceSkill |
| PreferenceOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order of the preference selected by the patient.This field is available in API version 61.0 and later. |
| PreferenceType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of preferences that’s recorded.Possible values are:Skill |
| ServiceContextId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the work type that this preference is valid for. For instance, a patient may have a certain preference that only applies to physiotherapy and another preference that only applies to wound management.Relationship NameServiceContextRefers ToWorkType |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the feature that the created record is applicable for.Possible values are:HomeHealth—Home Health |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountServicePreferenceChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[AccountServicePreferenceFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AccountServicePreferenceHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AccountServicePreferenceChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- AccountServicePreferenceFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- AccountServicePreferenceHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
