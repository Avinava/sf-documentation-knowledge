---
title: "Tracked Communication Output"
domain: life-sciences-dev-guide
topic: tracked-communication-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.916Z
estimatedTokens: 482
keywords: [Tracked, Communication, Output, representation, communications, care]
---

# Tracked Communication Output

> Output representation of tracked communications for a care
      request.

# Tracked Communication Output

Output representation of tracked communications for a care request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| categories | String[] | The categories of the communication. | Big, 57.0 | 57.0 |
| communicator​Reference | String | The individual sending this communication request. | Big, 57.0 | 57.0 |
| contextReference | String | The clinical encounter for which the communication is created. | Big, 57.0 | 57.0 |
| mediums | String[] | The mediums of the communication request. | Big, 57.0 | 57.0 |
| name | String | The name of the communication request. | Big, 57.0 | 57.0 |
| notes | String[] | The comments made about the communication request. | Big, 57.0 | 57.0 |
| occurrenceEnd​DateTime | String | The date by when the communication is expected to end. | Big, 57.0 | 57.0 |
| occurrenceStart​DateTime | String | The date from when the communication is expected to be sent. | Big, 57.0 | 57.0 |
| payloads | Payload Output[] | Represents details of the communication. | Big, 57.0 | 57.0 |
| priority | String | The priority of the communication. | Big, 57.0 | 57.0 |
| reasonCodes | String[] | The codes that represent the reason for the communication. | Big, 57.0 | 57.0 |
| recipients | String[] | The recipients of the communication. | Big, 57.0 | 57.0 |
| replacedItems | String[] | The parent TrackedCommunication records to which the details are being added. | Big, 57.0 | 57.0 |
| requesterReference | String | The requester of the communication. | Big, 57.0 | 57.0 |
| status | String | The status of the communication. | Big, 57.0 | 57.0 |
| statusReason | String | The reason for the status of the communication. | Big, 57.0 | 57.0 |
| subject | String | The patient for whom the communication is created. | Big, 57.0 | 57.0 |
| type | String | The type of the communication. | Big, 57.0 | 57.0 |

## Related Topics

- Payload
                Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_pay_load_output.htm)
