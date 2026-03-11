---
title: "BlacklistedConsumer"
domain: metadata-api
topic: blacklistedconsumer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.806Z
keywords: [BlacklistedConsumer, Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Usage]
---

# BlacklistedConsumer

# BlacklistedConsumer

Represents a connected app that is inaccessible to your Salesforce org’s users. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

BlacklistedConsumer components have the suffix .blacklistedConsumer and are stored in the blacklistedConsumers folder.

## Version

BlacklistedConsumer components are available in API version 49.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| blockedByApiWhitelisting | boolean | Set to true to apply the Permitted Users policy, Admin approved users are pre-authorized to all connected apps in the org. This policy limits access to only users with the associated profile or permission set assigned to the app. Set to false to allow access to the connected app. False is the default value. |
| consumerKey | string | Required. A value used by the consumer for identification of the connected app to Salesforce. Referred to as client_id in OAuth 2.0.After you define and save the value, it can’t be edited. The value must be alphanumeric, can’t contain special characters or spaces, and must be between 8–256 characters. Consumer keys must be globally unique. |
| consumerName | string | Required. The name of the connected app being blocked. |
| masterLabel | string | Required. The primary label for the connected app record. |

## Declarative Metadata Sample Definition

The following is an example of a component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

Use this type judiciously for connected apps that you want to make inaccessible to your org’s users. Blocking an app ends all current user sessions and prevents future sessions. To block malicious attempts to access your org’s data, we recommend using API Access Control instead. This feature restricts users from accessing your Salesforce APIs unless they are pre-authorized through an approved connected app.