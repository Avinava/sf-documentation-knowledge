---
title: "Amazon Connect Flows Best Practices"
domain: voice-developer-guide
topic: amazon-connect-flows-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:21.455Z
estimatedTokens: 446
keywords: [Amazon, Connect, Flows, Best, Practices, Follow, ensure, configured, optimally, correctly, environment, isn’t, voice, resiliency, may]
---

# Amazon Connect Flows Best Practices

> Follow these best practices to ensure your Amazon Connect flows are configured
    optimally and correctly. If your environment isn’t set up correctly for voice resiliency, you
    may experience missing calls.

# Amazon Connect Flows Best Practices

Follow these best practices to ensure your Amazon Connect flows are configured optimally and correctly. If your environment isn’t set up correctly for voice resiliency, you may experience missing calls.

## Voice Resiliency

Voice resiliency ensures that the telephony system stays operational when the number of conversations is over limit or when certain background services are affected. See the [Voice Resiliency for Service Cloud Voice](https://help.salesforce.com/s/articleView?language=en_US&id=000395549&type=1) knowledge article for more information about voice resiliency.

If you customized any of the following [Sample Service Cloud Voice flows](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ContactFlows) in GitHub, verify they are configured to support voice resiliency:

-   Sample SCV Inbound Flow
-   Sample SCV Transfer Flow For Agent Transfers
-   Sample SCV Transfer Flow For Omni-Channel Transfers
-   Sample SCV Transfer Flow For Queue Transfers
-   Sample SCV Callback Subflow

To support voice resiliency, make sure the the inbound, transfer, and callback flows do the following if the Invoke AWS Lambda function block fails:

-   Routes the voice call to a rep or queue.
-   Doesn’t hang up/disconnect the call, even if a contact flow block errors out.

The [Sample SCV flows](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ContactFlows) in GitHub for inbound, transfer, and callback flows are configured to support voice resiliency. Here’s an example from the Sample SCV Inbound Flow contact flow:

![Amazon Connect Sample Inbound Flow for voice resiliency](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_contact_flows_voice_resiliency.png&folder=voice_developer_guide)
