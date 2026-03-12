---
title: "Omni-Channel Action"
domain: api-action
topic: omni-channel-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.150Z
estimatedTokens: 355
keywords: [Omni-Channel, Action, PendingServiceRouting, record, skills-based, routing, REST, HTTP, Inputs, Outputs, Usage]
---

# Omni-Channel Action

> Create a PendingServiceRouting
   record used for Omni-Channel skills-based routing.

# Omni-Channel Action

Create a PendingServiceRouting record used for Omni-Channel skills-based routing.

For more information about skills-based routing, see [Skills-Based Routing for Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_skills_based_routing.htm&language=en_US) in Salesforce Help.

This object is available in API version 44.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/skillsBasedRouting

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| recordId | TypeIDDescriptionRequired. ID of the Salesforce record to be routed by Omni-Channel. |
| routingConfigId | TypeIDDescriptionRequired. ID of the QueueRoutingConfig record to be used by Omni-Channel. |
| skillIdList | TypestringDescriptionOptional. Comma-separated list of Skill IDs. Maximum number of skills is 25. |

## Outputs

| Output | Details |
| --- | --- |
| pendingServiceRoutingId | TypeIDDescriptionID of the new PendingServiceRouting record, if the request was successful. |

## Usage

Sample Input

The following code sample attempts to create a PendingServiceRouting record using a work record (recordId), the routing configuration (routingConfigId), and two skills (skillIdList).

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Code Examples

```
{
  "inputs": [{
      "recordId":"400B0000004GGUUIA4",
      "routingConfigId":"0K8B0000000CbgZKAS",
      "skillIdList":"0C4B00000008QImKAM,0C4B0000000CcR1KAK"
  }]
}
```

```
[
  {
    "actionName":"skillsBasedRouting",
    "errors":null,
    "isSuccess":true,
    "outputValues":{
      "pendingServiceRoutingId":"0JRB0000000TWA2"
    }
  }
]
```
