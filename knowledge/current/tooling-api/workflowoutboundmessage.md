---
title: "WorkflowOutboundMessage"
domain: tooling-api
topic: workflowoutboundmessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.989Z
keywords: [WorkflowOutboundMessage, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# WorkflowOutboundMessage

# WorkflowOutboundMessage

Represents an outbound message. An outbound message sends information to a designated endpoint, like an external service. Outbound messages are configured from Setup. You must configure the external endpoint and create a listener for the messages using the SOAP API.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), search(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesFilter, SortDescriptionThe API version is automatically generated and set to the current API version when the outbound message was created. |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, Sort.DescriptionRequired. Available in version 34.0. The entity definition for the object associated with this WebLink. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the entity containing the outbound message. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IntegrationUserId | TypeIDPropertiesFilter, Group, SortDescriptionThe ID of the user under which this message is sent. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | Typemns:WorkflowOutboundMessagePropertiesCreate, Nillable, UpdateDescriptionOutbound message definition metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the outbound message. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package containing the outbound message. |