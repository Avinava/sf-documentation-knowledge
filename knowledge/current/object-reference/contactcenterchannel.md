---
title: "ContactCenterChannel"
domain: object-reference
topic: contactcenterchannel
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.823Z
estimatedTokens: 954
keywords: [ContactCenterChannel, junction, relates, Bring, Own, Channel, Contact, Center, Service, CCaaS, messaging, CallCenter, routing, voicemail, configuration]
---

# ContactCenterChannel

> Represents a junction object that relates a Bring Your Own Channel for
         Contact Center as a Service (CCaaS) messaging channel to a CallCenter object for Bring Your
         Own Channel for CCaaS. This object also represents the routing details for a voicemail
         configuration and routing information for callback requests. This object is available
      in API version 56.0 and later.

# ContactCenterChannel

Represents a junction object that relates a Bring Your Own Channel for Contact Center as a Service (CCaaS) messaging channel to a CallCenter object for Bring Your Own Channel for CCaaS. This object also represents the routing details for a voicemail configuration and routing information for callback requests. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, Service Cloud Voice with Amazon Connect, Service Cloud Voice with Partner Telephony, Service Cloud Voice with Partner Telephony from Amazon Connect, or Bring Your Own Channel for Contact Center as a Service (CCaaS) must be enabled. To access this object, you must be a SysAdmin user or have ViewSetup user permissions.

## Fields

| Field | Details |
| --- | --- |
| ChannelId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionFor Bring Your Own Channel for CCaaS, this field represents the unique ID of the Bring Your Own Channel messaging channel (MessagingChannel) that’s associated with the contact center (CallCenterId). Available in API version 60.0 and later.This field is a relationship field.Relationship NameChannelRefers ToMessagingChannel |
| ContactCenterId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field is a relationship field. For Bring Your Own Channel for CCaaS, this field represents the unique ID of the contact center (CallCenterId) that’s associated with the Bring Your Own Channel messaging channel (MessagingChannel). Available in API version 60.0 and later.This field is a relationship field.Relationship NameContactCenterRelationship TypeMaster-detailRefers ToCallCenter (the master object) |
| OmniCallbackFallbackQueueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf callbacks are configured for the contact center and the contact center uses Omni-Channel Unified Routing, this field represents the unique ID of the fallback queue to use if contact request routing through an Omni-Channel flow fails. Don't change the value in this field. Instead, configure contact request routing in Lightning Experience.Available in API version 65.0 and later.This field is a relationship field.Relationship NameOmniCallbackFallbackQueueRefers ToGroup |
| OmniCallbackHandler | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf callbacks are configured for the contact center and the contact center uses Omni-Channel Unified Routing, this field represents the unique ID of the flow or queue used to route contact requests. Don't change the value in this field. Instead, configure contact request routing in Lightning Experience.Available in API version 65.0 and later. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAvailable in API version 63.0 only. For internal use. |
| VoicemailFallbackQueueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf voicemail routing is configured for the contact center, this field represents the unique ID of the fallback queue to use if voicemail routing fails. Don't change the value in this field. Instead, configure voicemail routing in Lightning Experience.This field is a relationship field.Relationship NameVoicemailFallbackQueueRefers ToGroup |
| VoicemailHandler | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf voicemail routing is configured for the contact center, this field represents the unique ID of the flow used to route voicemails. Don't change the value in this field. Instead, configure voicemail routing in Lightning Experience. |
