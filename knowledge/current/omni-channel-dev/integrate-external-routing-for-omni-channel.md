---
title: "Integrate External Routing for Omni-Channel"
domain: omni-channel-dev
topic: integrate-external-routing-for-omni-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:19.967Z
estimatedTokens: 380
keywords: [Integrate, External, Routing, Omni-Channel, steps, implementation]
---

# Integrate External Routing for Omni-Channel

> Use the following steps to integrate your external routing implementation with
  Omni-Channel.

# Integrate External Routing for Omni-Channel

Use the following steps to integrate your external routing implementation with Omni-Channel.

1.  [Create a Routing Configuration and Queue for External Routing](atlas.en-us.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing_create_routing.htm "External routing requires a separate routing configuration and queue in Omni-Channel. These separate objects define routing behavior and assign work to reps .").
2.  [Add Objects to Change Data Capture for External Routing](atlas.en-us.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing_add_objects_to_change_data_capture_for_external_routing.htm "To enable external routing with Omni-Channel, configure Change Data Capture (CDC) to publish event notifications for core Service Cloud objects.").
3.  [Subscribe to Change Data Capture Event Notifications](atlas.en-us.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing_subscribe_to_change_data_capture_event_notifications.htm "Select a subscription method to track Change Data Capture (CDC) event notifications and set up a listener for real-time routing data. Event notifications provide real-time updates to the partner routing application for data synchronization and routing decisions.").
4.  [Create AgentWork](atlas.en-us.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing_create_agentwork.htm "The external routing application creates AgentWork records to route work items to a rep in Omni-Channel.").

## Related Topics

- Create a Routing Configuration and Queue for
      External Routing (atlas.en-us.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing_create_routing.htm)
- Add Objects to Change Data Capture for
      External Routing (atlas.en-us.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing_add_objects_to_change_data_capture_for_external_routing.htm)
- Subscribe to Change Data Capture Event
      Notifications (atlas.en-us.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing_subscribe_to_change_data_capture_event_notifications.htm)
- Create
     AgentWork (atlas.en-us.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing_create_agentwork.htm)
