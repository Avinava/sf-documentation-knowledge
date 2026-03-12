---
title: "Queue Mapping and Rep Mapping"
domain: voice-pt-developer-guide
topic: queue-mapping-and-rep-mapping
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.111Z
estimatedTokens: 550
keywords: [Queue, Mapping, Rep, topic, guidance, how, handle]
---

# Queue Mapping and Rep Mapping

> This topic provides guidance on how to handle queue mapping and rep
        mapping.

# Queue Mapping and Rep Mapping

This topic provides guidance on how to handle queue mapping and rep mapping.

## Queue Mapping

Partners can provide a list of queues at runtime, which can be mapped by the admin to external queues in Salesforce using contact center UI. This mapping is used when a flow executes and returns a queue. In order to provide a list of queues for the UI, the partner package has to perform the following steps:

1.  Set partnerTransferDestinationsSupported to true in the partner ConversationVendorInfo record.
2.  Implement the Apex interface [service\_cloud\_voice.TransferDestinationProvider](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes.").

## Rep Mapping

Partners who support user syncing are able to support rep mapping in Salesforce. There’s currently no UI to see the rep mapping, but the mapping entries are stored in CallCenterRoutingMap in Salesforce. This mapping is used when a flow executes and returns a rep. In order to support rep mapping, the partner package has to perform the following steps:

1.  Set userSyncingSupported to true in the partner ConversationVendorInfo record.
2.  Implement the Apex interface [service\_cloud\_voice.UserSyncing](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes."), and return a unique user ID from the partner system in UserSyncingResponse.

#### See Also

-   [Set Up Service Cloud Voice for Partner Telephony in Your Org](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_setup_svc_org.htm "When Service Cloud Voice for Partner Telephony licenses are added to an org, Salesforce admins in the org can open the Partner Telephony Setup page and follow the steps to set up their contact center. This guide describes how you can customize that experience.")

-   [*Salesforce Help:* Omni-Channel Flows](https://help.salesforce.com/s/articleView?id=service.omnichannel_flows.htm&type=5&language=en_US "Salesforce Help: Omni-Channel Flows - HTML (New Window)")

## Related Topics

- service_cloud_voice.TransferDestinationProvider (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- service_cloud_voice.UserSyncing (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- Set Up Service Cloud Voice for Partner Telephony in Your Org (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_setup_svc_org.htm)
