---
title: "Network Connection"
domain: chatterapi
topic: network-connection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.871Z
estimatedTokens: 417
keywords: [Network, Connection, External]
---

# Network Connection

> External network connection.

# Network Connection

External network connection.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| connection​Properties | AWS Inbound Network Connection PropertiesorAWS Outbound Network Connection Properties | Property names and values of the network connection. | Small, 51.0 | 51.0 |
| connectionType | String | Type of network connection. Value is AwsPrivateLink. | Small, 51.0 | 51.0 |
| description | String | Description of the network connection. | Small, 51.0 | 51.0 |
| developerName | String | Name of the network connection. | Small, 51.0 | 51.0 |
| id | String | ID of the network connection. | Small, 51.0 | 51.0 |
| isActive | Boolean | Specifies whether the network connection is active (true) or not (false). | Small, 51.0 | 51.0 |
| masterLabel | String | Label of the network connection. | Small, 51.0 | 51.0 |
| namespacePrefix | String | Namespace prefix of the network connection. | Small, 51.0 | 51.0 |
| status | String | Status of the network connection. Values are:AllocatingDeletedRemotelyPendingAcceptancePendingActivationReadyRejectedRemotelyTeardownInProgressUnprovisioned | Small, 51.0 | 51.0 |

#### See Also

-   [Named Credential](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential.htm "Named credential associated with an external credential.")

## Related Topics

- AWS Inbound Network Connection Properties (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_aws_inbound_network_connection_properties.htm)
- AWS Outbound Network Connection Properties (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_aws_outbound_network_connection_properties.htm)
- Named Credential (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential.htm)
