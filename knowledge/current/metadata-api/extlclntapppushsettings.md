---
title: "ExtlClntAppPushSettings"
domain: metadata-api
topic: extlclntapppushsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:39.374Z
estimatedTokens: 1558
keywords: [ExtlClntAppPushSettings, external, client, app’s, push, notification, settings, Parent, File, Suffix, Directory, Location, Version, Special, Access]
---

# ExtlClntAppPushSettings

> Represents an external client app’s push notification settings.

# ExtlClntAppPushSettings

Represents an external client app’s push notification settings.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The ExtlClntAppPushSettings metadata type is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)") or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/ "HTML (New Window)"). Use of this pilot or beta service is at the Customer's sole discretion.

The ExtlClntAppPushSettings metadata type requires the OAuth plugin for External Client Apps. See [OAuth Plugin Enablement with Metadata API](https://help.salesforce.com/s/articleView?id=xcloud.meta_enable_oauth_plugin.htm&type=5&language=en_US) in Salesforce Help.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppPushSettings components have the suffix .ecaPush and are stored in the extlClntAppPushSettings folder.

## Version

ExtlClntAppPushSettings components are available in API version 64.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

You can configure the ExtlClntAppPushSettings metadata type with either androidPushConfig or applePushConfig, but not both. You can configure pushConfigLink instead to refer to an existing androidPushConfig or applePushConfig record.

Of the three push notification configuration options (androidPushConfig, applePushConfig, or pushConfigLink), you must only have one of the options within the same record. If you create a record with androidPushConfig or applePushConfig, the pushConfigLink is automatically generated and retrievable from the metadata.

If you retrieve the ExtlClntAppPushSettings metadata of an existing packageable external client app to install in another org, delete the androidPushConfig or applePushConfig information from the record, if present. To make sure that the destination org refers to the information in the source org, keep the pushConfigLink field as the only push notification configuration in the record.

If the pushServiceType is Android, you must configure ​​androidPushConfig or configure a pushConfigLink that refers to an existing androidPushConfig record. If the pushServiceType is Apple, you must configure ​​applePushConfig or configure a pushConfigLink that refers to an existing applePushConfig record.

| Field Name | Field Type | Description |
| --- | --- | --- |
| androidPushConfig | ExtlClntAppAndroidPushConfig | Represents the push notification configuration of an Android mobile app. |
| applePushConfig | ExtlClntAppApplePushConfig | Represents the push notification configuration of an iOS mobile app. |
| externalClientApplication | string | Required. The name of the associated external client app. |
| label | string | Label for the external client app’s push notifications configuration. |
| pushConfigLink | string | Identifies the push notification credentials used by the app. Valid format is the org ID (for example, 00D000000000001) and an ExtlClntAppApplePushConfig or ExtlClntAppAndroidPushConfig record ID (for example, 1Dh000000000001) separated by a colon. For example: 00D000000000001:1Dh000000000001If you configure pushConfigLink, you can’t also have androidPushConfig or applePushConfig in the same record. |
| pushServiceType | PushServiceType (enumeration of type string) | Required. Identifies the mobile operating system of the mobile app. Valid values are:AppleAndroid |

## ExtlClntAppAndroidPushConfig

Represents the push notification configuration of an Android mobile app.

| Field Name | Field Type | Description |
| --- | --- | --- |
| fcmProject | string | Required. The ID of the Google Firebase project associated with the mobile app. |
| serviceAccount | string | Required. The Base64-encoded Admin SDK private key for your Google Firebase service account. You can generate this key from the Service accounts tab in the Google Firebase console.The maximum length of the string is 8000 characters. |

## ExtlClntAppApplePushConfig

Represents the push notification configuration of an iOS mobile app. To configure the required authentication for iOS push notifications, you submit either a private key (.p8 file) or a TLS certificate (.p12 file).

To configure push notifications with a private key (.p8 file), complete the signingKey, keyIdentifier, and teamIdentifier fields.

To configure push notifications with a TLS certificate (.p12 file), complete the certificate and password fields.

| Field Name | Field Type | Description |
| --- | --- | --- |
| applicationBundle | string | The bundle ID of the iOS mobile app from Apple App Store Connect. |
| certificate | string | The Base64-encoded TLS certificate with Apple Push Notification service (APNs) enabled. To generate and export this certificate, see Communicate with APNs using a TLS certificate in Apple Developer documentation. |
| environment | ApplePushEnvironmentType (enumeration of type string) | Required. The Apple Push Notification service environment. Valid values are:ProductionSandbox |
| keyIdentifier | string | The key identifier for the private key entered in the signingKey field. See Get a key identifier in Apple Developer documentation. |
| password | string | The password for the TLS certificate entered in the certificate field. |
| signingKey | string | The Base64-encoded private key with Apple Push Notification service (APNs) enabled. To generate and download this key, see Create a private key to access a service in Apple Developer documentation. |
| teamIdentifier | string | The team ID listed in the membership details of the Apple Developer account associated with the iOS mobile app. |

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
