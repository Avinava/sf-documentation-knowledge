---
title: "InboundNetworkConnection"
domain: metadata-api
topic: inboundnetworkconnection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.486Z
estimatedTokens: 934
keywords: [InboundNetworkConnection, Represents, connection, between, third-party, data, service, Salesforce, org., inbound, because, callouts, coming, Salesforce.This, extends, Metadata, metadata, inherits, its, fullName]
---

# InboundNetworkConnection

> Represents a private connection between a
      third-party data service and a Salesforce org. The connection is inbound because the callouts
      are coming into Salesforce.This type extends the Metadata metadata type and inherits its
                        fullName field.

# InboundNetworkConnection

Represents a private connection between a third-party data service and a Salesforce org. The connection is inbound because the callouts are coming *into* Salesforce.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

InboundNetworkConnection components have the suffix .inboundNetworkConnection and are stored in the inboundNetworkConnections folder.

## Version

InboundNetworkConnection components are available in API version 49.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| connectionType | ExternalConnectionType (enumeration of type string) | Required. Specifies the cloud provider of the connection.AwsPrivateLinkDataCloudPrivateConnection (Reserved for internal use) |
| description | string | Required. A description of the connection. Maximum of 255 characters. |
| inboundNetworkConnProperties | InboundNetworkConnProperty | Name-value pairs that describe the properties of the inbound network connection. Specify a name-value pair for each of the properties. |
| isActive | boolean | Required. Specifies whether the connection is active (true) or not(false). The default value is false. |
| label | string | Required. A user-friendly label for the connection. |
| status | ExternalConnectionStatus​(enumeration of type string) | Required. Connection status. The connection is initially Unprovisioned and moves through the other states automatically after an admin performs a Provision, Sync, or Teardown action. The valid values are:UnprovisionedAllocatingPendingAcceptancePendingActivationRejectedRemotelyDeletedRemotelyTeardownInProgressReady |

## InboundNetworkConnProperty

Represents a name-value pair that describes the properties of the inbound network connection.

| Field Name | Field Type | Description |
| --- | --- | --- |
| propertyName | InboundConnPropertyName​(enumeration of type string) | Required. The name of a property used to establish an InboundNetworkConnection. Valid values are:AwsVpcEndpointId—The unique endpoint ID for connections to an AWS Virtual Private Cloud (VPC). The value is read-only when the status is Ready.Region—The region in which the VPC is hosted.SourceIpRanges—The ranges of source IP address allocated to this inbound connection by the Salesforce-managed VPC in your cloud provider. |
| propertyValue | string | Required. The value of InboundConnPropertyName. An example of the propertyValue of Region is us-west-2.The propertyValue of SourceIpRanges is a JSON string that lists the start and end IP address for each range. This example shows two IP address ranges.[   {     "startIp":"10.10.10.0",     "endIp":"10.10.10.3"   },   {     "startIp":"100.100.100.0",     "endIp":"100.100.100.15"   } ] |

## Declarative Metadata Sample Definition

The following sample definition has the suffix .inboundNetworkConnection.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

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

```
<?xml version="1.0" encoding="UTF-8"?>
<InboundNetworkConnection xmlns="http://soap.sforce.com/2006/04/metadata">
    <connectionType>AwsPrivateLink</connectionType>
    <description>This is an Inbound Connection to make API calls into Salesforce</description>
    <inboundNetworkConnProperties>
        <propertyName>Region</propertyName>
        <propertyValue>us-west-2</propertyValue>
    </inboundNetworkConnProperties>
    <inboundNetworkConnProperties>
        <propertyName>AwsVpcEndpointId</propertyName>
        <propertyValue>vpce-02ccb5fac2bacaceb</propertyValue>
    </inboundNetworkConnProperties>
    <inboundNetworkConnProperties>
        <propertyName>SourceIpRanges</propertyName>
        <propertyValue>[ { "startIp":"10.10.10.0", "endIp":"10.10.10.3" }, { "startIp":"100.100.100.0", "endIp":"100.100.100.15" } ]</propertyValue>
    </inboundNetworkConnProperties>
    <isActive>true</isActive>
    <label>MyInboundConnection</label>
    <status>Unprovisioned</status>
</InboundNetworkConnection>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>sampleInboundConnection</fullName>
    <types>
        <members>MyInboundConnection</members>
        <name>InboundNetworkConnection</name>
    </types>
    <version>49.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
