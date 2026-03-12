---
title: "TenantSecurityCredentialStuffing"
domain: object-reference
topic: tenantsecuritycredentialstuffing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.884Z
estimatedTokens: 1423
keywords: [TenantSecurityCredentialStuffing, Stores, user, successfully, logs, Salesforce, identified, credential, stuffing, attack, Threat, Detection, Security, Center, subscribers]
---

# TenantSecurityCredentialStuffing

> Stores when a user successfully logs in to Salesforce during an identified
         credential stuffing attack. For more information, see Threat Detection. This object is available to
         Security Center subscribers in API version 53.0 and later.

# TenantSecurityCredentialStuffing

Stores when a user successfully logs in to Salesforce during an identified credential stuffing attack. For more information, see [Threat Detection](https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.real_time_em_threat_detection.htm). This object is available to Security Center subscribers in API version 53.0 and later.

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
| AcceptLanguage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionList of HTTP headers that specify the natural language, such as English, that the client understands. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the individual detail record. This field is unique within your org. |
| EventDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the hijacking event was reported. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique ID of the event. |
| EventName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the event, which is Credential Stuffing. |
| LoginType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of login used to access the session. For the list of possible values, see the LoginType field of LoginHistory in the Object Reference. |
| LoginUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the login page. For example, login.salesforce.com. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for the data collected. |
| Score | TypedoublePropertiesFilter, idLookup, Nillable, SortDescriptionIndicates that a user successfully logged in to Salesforce during an identified credential stuffing attack. The value of this field is always 1. |
| Summary | TypetextareaPropertiesNillableDescriptionA summary of the threat that caused this event to be created. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant that was targeted in the event. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant that was targeted in the event. |
| UserAgent | TypetextareaPropertiesNillableDescriptionUserAgent used in the HTTP request, post-processed by the server. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe origin user’s unique ID. |
| Username | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityCredentialStuffingChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityCredentialStuffingFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityCredentialStuffingHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityCredentialStuffingOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityCredentialStuffingShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityCredentialStuffingChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityCredentialStuffingFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityCredentialStuffingHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityCredentialStuffingOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityCredentialStuffingShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
