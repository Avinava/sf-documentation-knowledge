---
title: "TenantSecuritySessionHijacking"
domain: object-reference
topic: tenantsecuritysessionhijacking
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.060Z
estimatedTokens: 2464
keywords: [TenantSecuritySessionHijacking, Stores, session, hijacking, events, detected, Threat, Detection, connected, tenants, Security, Center, subscribers, API, version]
---

# TenantSecuritySessionHijacking

> Stores information about session hijacking events as detected by Threat Detection
         within connected tenants in Security Center. For more information, see Threat Detection. This object is available for
         Security Center subscribers in API version 53.0 and later.

# TenantSecuritySessionHijacking

Stores information about session hijacking events as detected by Threat Detection within connected tenants in Security Center. For more information, see [Threat Detection](https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.real_time_em_threat_detection.htm). This object is available for Security Center subscribers in API version 53.0 and later.

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
| CurrentIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. If the IP address didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousIp field. |
| CurrentPlatform | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe platform of the observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. If the platform didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousPlatform field. |
| CurrentScreen | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe screen of the observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. If the screen didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousScreen field. |
| CurrentUserAgent | TypetextareaPropertiesNillableDescriptionThe user agent of the observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. If the user agent didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousUserAgent field. |
| CurrentWindow | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe browser window of the observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. If the window didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousWindow field. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the individual detail record. This field is unique within your org. |
| EventDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the hijacking event was reported. For example, 2020-01-20T19:12:26.965Z. The most granular setting is milliseconds. |
| EventIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique ID of the event. |
| EventName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the event, which is Session Hijacking. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data being collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for which data is being collected. |
| PreviousIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentIp field for the newly observed IP address. |
| PreviousPlatform | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe platform of the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentPlatform field for the newly observed platform. |
| PreviousScreen | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe screen of the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentScreen field for the newly observed screen. |
| PreviousUserAgent | TypetextareaPropertiesNillableDescriptionThe user agent of the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentUserAgent field for the newly observed user agent. |
| PreviousWindow | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe browser window of the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentWindow field for the newly observed window. |
| Score | TypedoublePropertiesFilter, idLookup, Nillable, SortDescriptionSpecifies how much the new fingerprint deviates from the previous one. The score is from 6.0 through 21.0. The event exposes five field pairs (such as CurrentIp and PreviousIp) to view the before and after data for browser features that contributed to this anomaly. See the SecurityEventData field for all contributing features in JSON format. A large deviation score (6.0 or more) between two intra-session fingerprints indicates that two different browsers are active in the same session. The presence of two active browsers usually means that session hijacking has occurred. |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe set of browser fingerprint features that triggered this event. See the Threat Detection documentation for the possible features. For example, a user’s current browser fingerprint diverges from the previously known fingerprint. If Salesforce concludes the user’s session was hijacked, it fires this event, and the contributing features are captured in this field in JSON format. Each feature describes a browser fingerprint property, such as the browser user agent, window, or platform. The data includes the current and previous values for each feature. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the threat that caused this event. The summary lists the browser fingerprint features that most contributed to the threat detection, along with their contribution to the total score. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant that was targeted in the event. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant that was targeted in the event. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe origin user’s unique ID. |
| Username | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe origin username in the format of user@company.com at the time that the event was created. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecuritySessionHijackingChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecuritySessionHijackingFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecuritySessionHijackingHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecuritySessionHijackingOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecuritySessionHijackingShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecuritySessionHijackingChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecuritySessionHijackingFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecuritySessionHijackingHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecuritySessionHijackingOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecuritySessionHijackingShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
