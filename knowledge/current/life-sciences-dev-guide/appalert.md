---
title: "AppAlert"
domain: life-sciences-dev-guide
topic: appalert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.072Z
estimatedTokens: 1324
keywords: [AppAlert, alert, message, tab, level, API, version, 65.0, later, Calls, Associated, Objects]
---

# AppAlert

> Represents an alert message at the object, tab, or global level. This object is
      available in API version 65.0 and later.

# AppAlert

Represents an alert message at the object, tab, or global level. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional details of the message that are communicated in the app alert. This field contains information such as the tag, alert action, URL, or color. |
| DisplayContextName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context name related to the app alert display. Possible values are the object name or API name of the tab. |
| DisplayContextType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the context type related to the app alert display.Possible values are:GlobalObjectTab |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time that the alert becomes active. |
| ImageURL | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the app alert is silent or not.The default value is false. |
| IsSilent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the app alert is silent or not.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Message | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe message communicated in the app alert. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the app alert. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this app alert record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SnoozeUntilDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date until which the alert is snoozed. |
| Source | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source of the app alert. |
| SourceSystemIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| Subject | TypetextareaPropertiesCreate, UpdateDescriptionThe subject of the app alert. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of app alert.Possible values are:GuidedActionNotificationRecommendation |
| ValidUntilDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the alert becomes invalid. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppAlertChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AppAlertFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AppAlertHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AppAlertShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AppAlertChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- AppAlertFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AppAlertHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- AppAlertShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
