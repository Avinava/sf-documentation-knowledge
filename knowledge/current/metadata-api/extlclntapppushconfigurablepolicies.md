---
title: "ExtlClntAppPushConfigurablePolicies"
domain: metadata-api
topic: extlclntapppushconfigurablepolicies
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:39.365Z
estimatedTokens: 534
keywords: [ExtlClntAppPushConfigurablePolicies, external, client, app’s, push, notification, policies, configuration, Parent, File, Suffix, Directory, Location, Version, Special]
---

# ExtlClntAppPushConfigurablePolicies

> Represents an external client app’s push notification policies configuration.

# ExtlClntAppPushConfigurablePolicies

Represents an external client app’s push notification policies configuration.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The ExtlClntAppPushConfigurablePolicies metadata type is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)") or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/ "HTML (New Window)"). Use of this pilot or beta service is at the Customer's sole discretion.

The ExtlClntAppPushConfigurablePolicies metadata type requires the OAuth plugin for External Client Apps. See [OAuth Plugin Enablement with Metadata API](https://help.salesforce.com/s/articleView?id=xcloud.meta_enable_oauth_plugin.htm&type=5&language=en_US) in Salesforce Help.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppPushConfigurablePolicies components have the suffix .ecaPushPlcy and are stored in the extlClntAppPushPolicies folder.

## Version

ExtlClntAppPushConfigurablePolicies components are available in API version 64.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| externalClientApplication | string | Required. The name of the associated external client app. |
| isFullContent | boolean | Required. Indicates if push notifications display the full notification title and body text (true). When set to false, standard notifications display a generic message and custom notifications display only the notification title. |
| label | string | Label for the external client app’s push notification policies configuration. |

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
