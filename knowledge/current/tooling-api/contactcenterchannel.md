---
title: "ContactCenterChannel"
domain: tooling-api
topic: contactcenterchannel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.442Z
keywords: [ContactCenterChannel, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# ContactCenterChannel

# ContactCenterChannel

Represents a junction object that relates a Bring Your Own Channel for Contact Center as a Service (CCaaS) messaging channel to a CallCenter object for Bring Your Own Channel for CCaaS. This object also represents the routing details for a voicemail configuration. This object is available in API version 56.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object, Service Cloud Voice with Amazon Connect, Service Cloud Voice with Partner Telephony, Service Cloud Voice with Partner Telephony from Amazon Connect, or Bring Your Own Channel for CCaaS must be enabled.

To access this Tooling object, you must be a SysAdmin user or have ViewSetup user permissions.

## Fields

| Field | Details |
| --- | --- |
| ChannelId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionFor Bring Your Own Channel for CCaaS, this field represents the unique ID of the Bring Your Own Channel messaging channel (MessagingChannel) that’s associated with the contact center (CallCenterId). Available in API version 60.0 and later.This field is a relationship field.Relationship NameChannelRefers ToMessagingChannel |
| ContactCenterId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field is a relationship field. For Bring Your Own Channel for CCaaS, this field represents the unique ID of the contact center (CallCenterId) that’s associated with the Bring Your Own Channel messaging channel (MessagingChannel). Available in API version 60.0 and later.This field is a relationship field.Relationship NameContactCenterRelationship TypeMaster-detailRefers ToCallCenter (the master object) |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAvailable in API version 63.0 only. For internal use. |
| VoicemailFallbackQueueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf voicemail routing is configured for the contact center, this field represents the unique ID of the fallback queue to use if voicemail routing fails. This field is a relationship field. Don't change the value in this field. Instead, configure voicemail routing in Lightning Experience.This field is a relationship field.Relationship NameVoicemailFallbackQueueRefers ToGroup |
| VoicemailHandler | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf voicemail routing is configured for the contact center, this field represents the unique ID of the flow used to route voicemails. Don't change the value in this field. Instead, configure voicemail routing in Lightning Experience. |