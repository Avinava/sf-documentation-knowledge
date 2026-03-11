---
title: "EmbeddedServiceFlowConfig"
domain: tooling-api
topic: embeddedserviceflowconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.709Z
keywords: [EmbeddedServiceFlowConfig, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields, Usage]
---

# EmbeddedServiceFlowConfig

# EmbeddedServiceFlowConfig

Represents whether an Embedded Service Flow feature is enabled or not. This object is available in API version 45.0 and later.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this type, you need the Customize Application user permission.

## Fields

| Field | Details |
| --- | --- |
| EmbeddedServiceConfigId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of an EmbeddedServiceConfig (the Embedded Service deployment) that the flow config is associated with. |
| Enabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the embedded flow is enabled (true) or not (false). Defaults to false. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the parent object EmbeddedServiceConfig in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Metadata | TypeEmbeddedServiceFlowConfigPropertiesCreate, Nillable, UpdateDescriptionThe embedded service flow config's metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |

## Usage

To get a Flow feature working, you need three things: an [EmbeddedServiceConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedserviceconfig.htm "Represents a setup node for creating an Embedded Service deployment. Available in API version 38.0 and later.") deployment, an EmbeddedServiceFlowConfig record, and an [EmbeddedServiceFlow](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedserviceflow.htm "Represents a Flow Definition used by an Embedded Service deployment. This object is available in API version 45.0 and later.") record with the type set to FL\_Flow. The EmbeddedServiceFlowConfig record controls whether the Flow feature associated with this deployment is enabled or disabled.