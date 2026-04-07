---
title: "FileTransferActivity"
domain: mc-apis
topic: filetransferactivity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:17.000Z
estimatedTokens: 890
keywords: [FileTransferActivity, instance, file, transfer, activity, account, perform, start, Interactions, Activities, permission, PartnerProperties, Items]
---

> The FileTransferActivity object represents an instance of a file transfer activity within an account. Use the perform method on an existing file transfer activity. To start a FileTransferActivity using the perform method, you need the Interactions | Activities | File Transfer | Start permission.

# FileTransferActivity

The FileTransferActivity object represents an instance of a file transfer activity within an account. Use the perform method on an existing file transfer activity. To start a FileTransferActivity using the perform method, you need the Interactions | Activities | File Transfer | Start permission.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Description | xsd:string | Describes and provides information regarding the object. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InteractionObjectID | xsd:string | Returns associated ID for activities within the asynchronous process of the overall conversation or program. |
| Keyword | xsd:string | Reserved for future use. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |

## PartnerProperties Values

The PartnerProperties property on this object accepts the following value and data types:

| Value | Data Type |
| --- | --- |
| FileTransferLocationKey | string |
| FileTransferLocationID | GUID |
| PublicKeyManagementKey | string |
| PublicKeyManagementId | int |
| FileTransferActivityID | GUID |
| ClientID | int |
| OwnerID | int |
| Name | string |
| Description | string |
| CustomerKey | string |
| FileSpec | string |
| IsActive | bool |
| IsEncrypted | bool |
| IsCompressed | bool |
| IsSigned | bool |
| Retries | int |
| RetryInterval | int |
| MaxFileAge | int |
| MaxFileAgeScheduleOffset | int |
| MaxImportFrequency | int |
| CreatedBy | int |
| CreatedDate | datetime |
| ModifiedBy | int |
| ModifiedDate | datetime |
| IsSequential | bool |
| IsSuccessfulWithoutFile | bool |
| IsUpload | bool |
| IsPgp | bool |
| MaxAgeUnit | FileTransferActivityMaxAgeUnit enumeration |

Currently, 0-Hour is the only valid enumeration for MaxAgeUnit. The PartnerProperties property on this object in a Perform call accepts the following value and data types:

| Value | Data Type |
| --- | --- |
| Type | string |
| SourceResourceSpec | string |
| IsCompressed | bool |
| OutputFilename | string |
| IsEncrypted | bool |
| Encrypt | string |
| EncryptionKey | string |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Perform a File Transfer Activity](atlas.en-us.noversion.mc-apis.meta/mc-apis/performing_a_file_transfer_activity_via_the_soap_api.htm)

## Related Topics

- Perform a File Transfer Activity (atlas.en-us.noversion.mc-apis.meta/mc-apis/performing_a_file_transfer_activity_via_the_soap_api.htm)
