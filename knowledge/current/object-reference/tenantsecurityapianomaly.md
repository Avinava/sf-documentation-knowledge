---
title: "TenantSecurityApiAnomaly"
domain: object-reference
topic: tenantsecurityapianomaly
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.850Z
estimatedTokens: 1658
keywords: [TenantSecurityApiAnomaly, Stores, detected, anomalies, how, users, typically, API, calls, Fore, Threat, Detection, Security, Center, subscribers]
---

# TenantSecurityApiAnomaly

> Stores detected anomalies in how users typically make API calls. Fore
         more information, see Threat Detection. This object is available to
         Security Center subscribers in API version 53.0 and later.

# TenantSecurityApiAnomaly

Stores detected anomalies in how users typically make API calls. Fore more information, see [Threat Detection](https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.real_time_em_threat_detection.htm). This object is available to Security Center subscribers in API version 53.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Threat Detection is available only for Event Monitoring subscribers.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the individual detail record. This field is unique within your org. |
| EventDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time when the anomaly was reported. For example, 2020-01-20T19:12:26.965Z. The most granular setting is milliseconds. |
| EventIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique ID of the event, which is shared with the corresponding storage object. |
| EventName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the event, which is Api Anomaly. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for the data collected. |
| Operation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API call that generated the event. For example, Query. |
| QueriedEntities | TypetextareaPropertiesNillableDescriptionThe type of entities associated with the event. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. |
| RowsProcessed | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal row count for the current operation. |
| Score | TypedoublePropertiesFilter, idLookup, Nillable, SortDescriptionA number from 0 through 100 that represents the anomaly score for the API execution or export tracked by this event. The anomaly score shows how the current API activity differs from the user’s typical activity. A low score indicates that the user’s current API activity is similar to the usual activity, and a high score indicates that it’s different. |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe set of features about the API activity that triggered this anomaly event.For example, a user typically downloads 10 accounts at a time but then deviates from that pattern and downloads 1,000 accounts. This event is triggered, and the contributing features are captured in this field. Potential features include row count, column count, average row size, day of week, and the browser’s user agent used for the report activity. The data captured also shows how much as a percentage that the feature contributed to triggering this anomaly event. The data is in JSON format. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the API anomaly that caused this event. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant that was targeted in the event. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant that was targeted in the event. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserAgent | TypetextareaPropertiesNillableDescriptionUserAgent used in the HTTP request, post-processed by the server. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe origin user’s unique ID. |
| Username | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe origin username in the format of user@company.com at the time that the event was created. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityApiAnomalyChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityApiAnomalyFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityApiAnomalyHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityApiAnomalyOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityApiAnomalyShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityApiAnomalyChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityApiAnomalyFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityApiAnomalyHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityApiAnomalyOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityApiAnomalyShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
