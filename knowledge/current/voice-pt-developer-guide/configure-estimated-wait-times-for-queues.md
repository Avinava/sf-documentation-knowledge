---
title: "Configure Estimated Wait Times for Queues"
domain: voice-pt-developer-guide
topic: configure-estimated-wait-times-for-queues
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.041Z
estimatedTokens: 658
keywords: [Configure, Estimated, Wait, Times, Queues, Reps, queue, skill, transferring, call, Let, Salesforce, Calculate, Telephony, Provider]
---

# Configure Estimated Wait Times for Queues

> Reps can see estimated wait times for a given queue or skill before
                transferring a call.

# Configure Estimated Wait Times for Queues

Reps can see estimated wait times for a given queue or skill before transferring a call.

Estimated wait times can be calculated by Salesforce or the telephony provider. By default, estimated wait times are calculated by Salesforce.

## Let Salesforce Calculate Estimated Wait Times

To calculate the estimated wait time when routing a call to a queue or skill, at least one call must be accepted within the past 10 minutes. If this criterion isn’t met, the estimated wait time field isn’t shown.

To let Salesforce calculate estimated wait times:

-   Verify the hasQueueWaitTime field in the CapabilitiesResult object is set to false. This is the default value.
-   Verify the telephony provider queues are mapped to Salesforce queues.
-   When accepting a call, provide the telephony provider’s queueId value to the CallInfo object.
-   When accepting a call, optionally provide the telephony provider’s queueTimestamp and queueName value to the CallInfo object.

## Let the Telephony Provider Calculate Estimated Wait Times

To display estimated wait times using the telephony provider’s calculations, set the hasQueueWaitTime field in the CapabilitiesResult object to true.

Optionally include the queueWaitTime key in the Contact object that’s returned for getPhoneContacts. The queueWaitTime field represents the telephony provider’s queue wait time measured in seconds.

For example,

```

```

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

-   [*Knowledge Article:* Estimated Wait Time Calculation When Routing Work with Omni-Channel](https://help.salesforce.com/s/articleView?id=003817179&type=1&language=en_US "Knowledge Article: Estimated Wait Time Calculation When Routing Work with
    Omni-Channel - HTML (New Window)")

-   [*Salesforce Help:* Map Your Salesforce Queues to Telephony Provider Queues](https://help.salesforce.com/s/articleView?id=service.service_map_queues.htm&type=5&language=en_US "Salesforce Help: Map Your Salesforce Queues to Telephony Provider
    Queues - HTML (New Window)")

-   [*Salesforce Help:* Make Smarter Routing Decisions by Checking Service Rep Availability](https://help.salesforce.com/s/articleView?id=service.omnichannel_check_availability_for_routing.htm&type=5&language=en_US "Salesforce Help: Make Smarter Routing Decisions by Checking Service Rep Availability - HTML (New Window)")

## Code Examples

```
new Contact ({
  id: 'queueId1'
  type: Constants.CONTACT_TYPE.QUEUE,
  name: "Queue Name",  
  queue: 'queueId1',
  queueWaitTime: 240
})
```
