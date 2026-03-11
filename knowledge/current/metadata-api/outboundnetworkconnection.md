---
title: "OutboundNetworkConnection"
domain: metadata-api
topic: outboundnetworkconnection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.858Z
keywords: [OutboundNetworkConnection, File, Suffix, Directory, Location, Version, Fields, OutboundNetworkConnProperty, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# OutboundNetworkConnection

# OutboundNetworkConnection

Represents a private connection between a Salesforce org and a third-party data service. The connection is outbound because the callouts are going *out* of Salesforce. This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

OutboundNetworkConnection components have the suffix .outboundNetworkConnection and are stored in the outboundNetworkConnections folder.

## Version

OutboundNetworkConnection components are available in API version 49.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| connectionType | ExternalConnectionType (enumeration of type string) | Required. Specifies the cloud provider of the connection.AwsPrivateLinkDataCloudPrivateConnection (Reserved for internal use) |
| description | string | A description of the connection. Maximum of 255 characters. |
| isActive | boolean | Required. Specifies whether the connection is active (true) or not (false). |
| label | string | Required. A user-friendly label for the connection. |
| outboundNetworkConnProperties | OutboundNetworkConnProperty[] | Name-value pairs that describe the properties of an outbound network connection. Specify a name-value pair for each of the properties. |
| status | ExternalConnectionStatus​(enumeration of type string) | Required. Connection status. The connection is initially Unprovisioned and moves through the other statuses automatically after an admin performs a Provision, Sync, or Teardown action. The valid values are:UnprovisionedAllocationPendingAcceptancePendingActivationRejectedRemotelyDeletedRemotelyTeardownInProgressReady |

## OutboundNetworkConnProperty

Represents a name-value pair that describes the properties of an outbound network connection.

| Field Name | Field Type | Description |
| --- | --- | --- |
| propertyName | OutboundConnPropertyName​(enumeration of type string) | Required. The name of a property used to establish to an OutboundNetworkConnection. Valid values are:AwsVpcEndpointId—The unique endpoint ID provided by Salesforce after an outbound AwsPrivateLink is created. The value is read-only when the status is Ready.AwsVpcEndpointServiceName—The name of the customer’s endpoint service running in an AWS VPC that’s used for private connections with Salesforce.Region—The region in which the VPC is hosted.Enumerated values DataCloudPrivateNetwork* are reserved for internal use. |
| propertyValue | string | Required. The value of OutboundConnPropertyName. For example, the propertyValue of Region can be us-west-2. |

## Declarative Metadata Sample Definition

The following sample definition has the suffix .outboundNetworkConnection.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").