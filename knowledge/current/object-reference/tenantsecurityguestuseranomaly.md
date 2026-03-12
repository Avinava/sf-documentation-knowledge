---
title: "TenantSecurityGuestUserAnomaly"
domain: object-reference
topic: tenantsecurityguestuseranomaly
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.932Z
estimatedTokens: 1392
keywords: [TenantSecurityGuestUserAnomaly, metric, guest, user, anomaly, events, detected, Threat, Detection, API, version, 60.0, later, Calls, Special]
---

# TenantSecurityGuestUserAnomaly

> Represents metric details for guest user anomaly events detected by Threat
         Detection. This object is available in API version 60.0 and later.

# TenantSecurityGuestUserAnomaly

Represents metric details for guest user anomaly events detected by Threat Detection. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| DetailIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique identifier for this detail record. |
| EventDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the anomaly was reported. For example, 2020-01-20T19:12:26.965Z. The most granular setting is milliseconds. |
| EventIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique ID of the event, which is shared with the corresponding storage object. |
| EventName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the event. |
| MetricIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the type of metric counted. This field is unique within your organization. |
| MetricsType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of data collected. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the metric for the data collected. |
| RequestedObjects | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe objects requested by the customers. |
| Score | TypedoublePropertiesCreate, Filter, idLookup, Nillable, Sort, UpdateDescriptionSpecifies how significantly the guest user behavior deviates from the other guest users. It is formatted as a number between 0 and 1. |
| SoqlCommands | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSOQL commands run by the guest user. |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA text summary of the anomaly that caused this event. |
| Tenant | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the tenant that was targeted in the event. |
| TenantName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the tenant that was targeted in the event. |
| TotalControllerEvents | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times controllers were triggered. |
| UserAgent | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser Agent for this event. |
| UserIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe origin user’s unique ID. |
| UserType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of user of this event. For example, a guest user. |
| Username | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TenantSecurityGuestUserAnomalyChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityGuestUserAnomalyFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityGuestUserAnomalyHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityGuestUserAnomalyOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityGuestUserAnomalyShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityGuestUserAnomalyChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityGuestUserAnomalyFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityGuestUserAnomalyHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityGuestUserAnomalyOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityGuestUserAnomalyShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
