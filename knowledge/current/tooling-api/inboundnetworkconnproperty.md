---
title: "InboundNetworkConnProperty"
domain: tooling-api
topic: inboundnetworkconnproperty
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.865Z
estimatedTokens: 364
keywords: [InboundNetworkConnProperty, Represents, name-value, pair, describes, inbound, network, connection., API, version, 49.0, later., Supported, SOAP, Calls, REST, HTTP, Fields]
---

# InboundNetworkConnProperty

> Represents a name-value pair that describes the properties
        of the inbound network connection. Available in API version 49.0 and later.

# InboundNetworkConnProperty

Represents a name-value pair that describes the properties of the inbound network connection. Available in API version 49.0 and later.

## Supported SOAP Calls

create(), delete(), describeObject(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, HEAD, PATCH, POST, QUERY

## Fields

| Field | Details |
| --- | --- |
| InboundNetworkConnectionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the corresponding InboundNetworkConnection. |
| PropertyName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe name of a property used to establish an InboundNetworkConnection. Valid values are:AwsVpcEndpointId—The unique endpoint ID for connections to an AWS Virtual Private Cloud (VPC).Region—The region in which the VPC is hosted.SourceIpRanges—The ranges of source IP address allocated to this inbound connection by the Salesforce-managed VPC in your cloud provider. |
| PropertyValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value of the PropertyName. An example of the PropertyValue of Region is us-west-2.The PropertyValue of SourceIpRanges is a JSON string that lists the start and end IP address for each range. This example shows two IP address ranges.[   {     "startIp":"10.10.10.0",     "endIp":"10.10.10.3"   },   {     "startIp":"100.100.100.0",     "endIp":"100.100.100.15"   } ] |

## Code Examples

```
[
  {
    "startIp":"10.10.10.0",
    "endIp":"10.10.10.3"
  },
  {
    "startIp":"100.100.100.0",
    "endIp":"100.100.100.15"
  }
]
```

## Related Topics

- InboundNetworkConnection (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_inboundnetworkconnection.htm)
