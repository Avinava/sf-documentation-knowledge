---
title: "Orchestration
    Inbound Events (POST)"
domain: automotive-cloud
topic: orchestration-inbound-events-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.833Z
estimatedTokens: 369
keywords: [Orchestration, Inbound, Events, POST, Orchestrate, process, external, sources]
---

# Orchestration
    Inbound Events (POST)

> Orchestrate and process inbound events from external sources.

# Orchestration Inbound Events (POST)

Orchestrate and process inbound events from external sources.

Resource

```

```

Resource example

```

```

Available version

59.0

HTTP methods

POST

Request body for POST

JSON example with engine overheating and low battery fault

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​EventCriteria | Additional Criteria Input | Additional criteria for event processing. It captures additional attributes of telematics events in key-value pairs for tailored actions and workflows based on specific events. | Optional | 60.0 |
| category | String | Category of the inbound event. | Optional | 60.0 |
| eventData | String | Data associated with the event from telematics provider. | Optional | 60.0 |
| sourceSystem​Identifier | String | ID to identify the source system. | Optional | 60.0 |
| subtype | String | Subtype of the inbound event. | Optional | 60.0 |
| type | String | Type of the inbound event. | Optional | 60.0 |

Response body for POST

[Inbound Event](atlas.en-us.automotive_cloud.meta/automotive_cloud/connect_responses_inbound_event_response.htm "Output representation of the events processing request during incoming events.")

#### See Also

-   [*Automotive Cloud Developer Guide*: REST Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.automotive_cloud.meta/automotive_cloud/auto_apis_rest_references.htm)

## Code Examples

```
/connect/orchestration/inbound-events
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/orchestration/inbound-events
```

```
{
  "sourceSystemIdentifier": "102",
  "type": "Transmission Issue",
  "subtype": "Transmission Over Temperature",
  "category": "FAULT",
  "eventData": "{"Event":{"vin":"EFGHTYUIF56789GH","id":"0vLSE00000000G92AI","businessSObjectType":"Vehicle","faults":[{"code":"P0218","type":"repair","description":"Engine Overheating"},{"code":"P0219","type":"repair","description":"Low Battery Warning"}],"location":{"latitude":34,"longitude":56},"signals":[{"value":"34","timeStamp":"2023-05-16T15:13:41.236Z","dataType":"string","unit":"cm","name":"speed"}]}}",
  "additionalEventCriteria": {
    "fieldList": [
      {
        "field": "priority__c",
        "value": "high"
      }
    ]
  }
}
```

## Related Topics

- Additional Criteria Input (atlas.en-us.automotive_cloud.meta/automotive_cloud/connect_requests_additional_criteria.htm)
- Inbound Event (atlas.en-us.automotive_cloud.meta/automotive_cloud/connect_responses_inbound_event_response.htm)
