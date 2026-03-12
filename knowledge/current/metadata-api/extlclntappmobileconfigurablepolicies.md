---
title: "ExtlClntAppMobileConfigurablePolicies"
domain: metadata-api
topic: extlclntappmobileconfigurablepolicies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.726Z
estimatedTokens: 371
keywords: [ExtlClntAppMobileConfigurablePolicies, Represents, external, client, app’s, mobile, policies, configuration., Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields]
---

# ExtlClntAppMobileConfigurablePolicies

> Represents an external client app’s mobile policies configuration.

# ExtlClntAppMobileConfigurablePolicies

Represents an external client app’s mobile policies configuration.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppMobileConfigurablePolicies components have the suffix .ecaMobilePlcy and are stored in the extlClntAppMobilePolicies folder.

## Version

ExtlClntAppMobileConfigurablePolicies components are available in API version 64.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| externalClientApplication | string | Required. The name of the associated external client app. |
| label | string | Label for the external client app’s mobile policies configuration. |
| screenLockTimeout | ScreenLockTimeout (enumeration of type string) | When isScreenLockEnabled is true in the associated ExtlClntAppMobileSettings metadata type, screenLockTimeout represents the amount of time after which the mobile app locks and requires the app user to reauthenticate. Valid values include:NeverOne (1 minute)Five (5 minutes)Ten (10 minutes)Thirty (30 minutes)Sixty (60 minutes)OneTwenty (120 minutes)OneEighty (180 minutes)TwoForty (240 minutes) |

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
