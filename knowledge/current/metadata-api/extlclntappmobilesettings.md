---
title: "ExtlClntAppMobileSettings"
domain: metadata-api
topic: extlclntappmobilesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.323Z
estimatedTokens: 425
keywords: [ExtlClntAppMobileSettings, external, client, app’s, mobile, app, settings, screen, lock, device, Parent, File, Suffix, Directory, Location]
---

# ExtlClntAppMobileSettings

> Represents an external client app’s mobile app settings, such as screen lock on a mobile device.

# ExtlClntAppMobileSettings

Represents an external client app’s mobile app settings, such as screen lock on a mobile device.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The ExtlClntAppMobileSettings metadata type is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)") or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/ "HTML (New Window)"). Use of this pilot or beta service is at the Customer's sole discretion.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppMobileSettings components have the suffix .ecaMobile and are stored in the extlClntAppMobileSettings folder.

## Version

ExtlClntAppMobileSettings components are available in API version 64.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| externalClientApplication | string | Required. The name of the associated external client app. |
| isScreenLockEnabled | boolean | Required. Indicates whether the mobile app locks the screen after a specified timeout value. |
| label | string | Label for the external client app’s mobile app settings configuration. |

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
