---
title: "TenantSecurityReportAnomaly"
domain: object-reference
topic: tenantsecurityreportanomaly
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.048Z
estimatedTokens: 1525
keywords: [TenantSecurityReportAnomaly, Stores, anomalies, how, users, run, export, reports, including, unsaved, detected, Threat, Detection, Security, Center]
---

# TenantSecurityReportAnomaly

> Stores anomalies in how users run or export reports, including
         unsaved reports, as detected by Threat Detection. For more information, see Threat Detection. This object is available to
         Security Center subscribers in API version 53.0 and later.

# TenantSecurityReportAnomaly

Stores anomalies in how users run or export reports, including unsaved reports, as detected by Threat Detection. For more information, see [Threat Detection](https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.real_time_em_threat_detection.htm). This object is available to Security Center subscribers in API version 53.0 and later.

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
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the detail record. This field is unique within your org. |
| EventDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the hijacking event was reported. For example, 2020-01-20T19:12:26.965Z. The most granular setting is milliseconds. |
| EventIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique ID of the event. |
| EventName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the event, which is Report Anomaly. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data being collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for which data is being collected. |
| Report | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID for the report for which this anomaly event was detected. If the anomaly resulted from a user executing an unsaved report, the value of this field is null. |
| Score | TypedoublePropertiesFilter, idLookup, Nillable, SortDescriptionA number from 0 through 100 that represents the anomaly score for the report execution or export tracked by this event. The anomaly score indicates how the user’s current report activity differs from their typical activity. A low score indicates that the current report activity is similar to the user’s usual activity. A high score indicates that it’s different. |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe set of features about the report activity that triggered this anomaly event.For example, a user typically downloads 10 accounts at a time, but then deviates from that pattern and downloads 1,000 accounts. This event is triggered, and the contributing features are captured in this field. Potential features include row count, column count, average row size, day of week, and the browser’s user agent used for the report activity. The data captured also shows as a percentage how much a particular feature contributed to this anomaly event. The data is in JSON format. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the report anomaly that caused this event. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant that was targeted in the event. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant that was targeted in the event. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe origin user’s unique ID. |
| Username | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityReportAnomalyChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityReportAnomalyFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityReportAnomalyHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityReportAnomalyOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityReportAnomalyShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityReportAnomalyChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityReportAnomalyFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityReportAnomalyHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityReportAnomalyOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityReportAnomalyShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
