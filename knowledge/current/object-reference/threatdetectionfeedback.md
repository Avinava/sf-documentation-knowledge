---
title: "ThreatDetectionFeedback"
domain: object-reference
topic: threatdetectionfeedback
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.195Z
estimatedTokens: 775
keywords: [ThreatDetectionFeedback, feedback, provided, user, Threat, Detection, event, occurred, org, whether, malicious, suspicious, unknown, associated, storage]
---

# ThreatDetectionFeedback

> Represents feedback provided by a user about a Threat Detection event that occurred in your org. The feedback specifies whether the event was malicious, suspicious, not
		a threat, or unknown. Each ThreatDetectionFeedback object is associated with one of these Threat Detection storage events: ApiAnomalyEventStore, CredentialStuffingEventStore,
		ReportAnomalyEventStore, or SessionHijackingEventStore. This object is available in API version 49.0 and later.

# ThreatDetectionFeedback

Represents feedback provided by a user about a Threat Detection event that occurred in your org. The feedback specifies whether the event was malicious, suspicious, not a threat, or unknown. Each ThreatDetectionFeedback object is associated with one of these Threat Detection storage events: ApiAnomalyEventStore, CredentialStuffingEventStore, ReportAnomalyEventStore, or SessionHijackingEventStore. This object is available in API version 49.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Response | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDescribes the severity of the threat.Possible values are:MaliciousNot a ThreatSuspiciousUnknown |
| ThreatDetectionEventId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the unique ID of one of these associated Threat Detection storage events:ApiAnomalyEventStoreCredentialStuffingEventStoreReportAnomalyEventStoreSessionHijackingEventStoreFor example, 0fjRM000000005p.This is a polymorphic relationship field.Relationship NameThreatDetectionEventRelationship TypeLookupRefers ToApiAnomalyEventStore, CredentialStuffingEventStore, ReportAnomalyEventStore, SessionHijackingEventStore |
| ThreatDetectionFeedbackNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number used as the unique name for this object. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe origin user’s unique ID. For example, 005000000000123.This is a polymorphic relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| Username | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe origin username in the format of user@company.com at the time the object was created. |

## Associated Object

This object has the following associated object. It’s available in the same API version as this object.

[ThreatDetectionFeedbackFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

#### See Also

-   [*Salesforce Help*: Threat Detection](https://help.salesforce.com/articleView?id=real_time_em_threat_detection.htm&type=5&language=en_US "
    Salesforce Help: Threat Detection - HTML (New Window)")

## Related Topics

- ThreatDetectionFeedbackFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
