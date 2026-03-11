---
title: "OutboundNetworkConnProperty"
domain: tooling-api
topic: outboundnetworkconnproperty
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.370Z
keywords: [OutboundNetworkConnProperty, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# OutboundNetworkConnProperty

# OutboundNetworkConnProperty

Represents a name-value pair that describes the properties of the outbound network connection. Available in API version 49.0 and later.

## Supported SOAP Calls

create(), delete(), describeObject(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETEGETPATCHPOST

## Fields

| Field | Details |
| --- | --- |
| OutboundNetworkConnectionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the corresponding OutboundNetworkConnection. |
| PropertyName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe name of a property used to establish to an OutboundNetworkConnection. Valid values are:AwsVpcEndpointId—The unique endpoint ID provided by Salesforce after an outbound AwsPrivateLink is created.AwsVpcEndpointServiceName—The name of the customer’s endpoint service running in an AWS VPC that’s used for private connections with Salesforce.Region—The region in which the VPC is hosted.Enumerated values DataCloudPrivateNetwork* are reserved for internal use. |
| PropertyValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value of PropertyName For example, the PropertyValue of Region might be us-west-2. |