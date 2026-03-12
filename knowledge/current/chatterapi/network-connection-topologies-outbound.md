---
title: "Network Connection Topologies, Outbound"
domain: chatterapi
topic: network-connection-topologies-outbound
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.928Z
estimatedTokens: 271
keywords: [Network, Connection, Topologies, Outbound]
---

# Network Connection Topologies, Outbound

> Get the outbound network connection topologies for a connection
      type.

# Network Connection Topologies, Outbound

Get the outbound network connection topologies for a connection type.

Resource

```

```

In version 49.0 and later, AwsPrivateLink is the only supported connectionType.

Resource Example

```

```

Available version

49.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| regions | String[] | Comma-separated list of regions. If unspecified, returns all the regions. For a list of supported regions, see Considerations for Private Connect with AWS in Salesforce Help. | Optional | 58.0 |
| scope | String | Scope of the topologies. Values are:All—List of regions with additional information, such as status and IAM role.Region—List of regions.If a value isn’t specified, the default value is All. | Optional | 50.0 |

Response body for GET

[Outbound Network Connection Topologies](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_outbound_network_connection_topologies.htm "Outbound network connection topologies.")

## Code Examples

```
/network-connection/outbound/connection-types/connectionType/topologies
```

```
GET https://MyDomainName.my.salesforce.com/services/data/v66.0/network-connection/outbound​/connection-types/AwsPrivateLink/topologies?regions=us-east-1,us-west-2&scope=ALL
```

## Related Topics

- Outbound Network Connection Topologies (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_outbound_network_connection_topologies.htm)
