---
title: "Capturing Profile Data"
domain: data-cloud
topic: capturing-profile-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.189Z
keywords: [Capturing, Profile, Data, Setting, Attributes, Supported, Customer, 360, Model, Anonymous, Known, Users, Shared, Party, Identifiers]
---

# Capturing Profile Data

# Capturing Profile Data

The Data Cloud Module for the Engagement Mobile SDK enables collection of profile data through the SDK’s Identity APIs.

Before profile data can be sent to Data Cloud:

1.  The Data Cloud Module for the Engagement Mobile SDK must be configured and [initialized.](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_initialization.htm "Before the Data Cloud Module for the Engagement Mobile SDK can be used to invoke web services using the API, the SDK must be configured. Use the CdpConfigBuilder for iOS or CdpConfig.Builder for Android helper class to build your SDK configuration by providing required settings appId and endpoint that can be obtained from your Mobile Connector. Optionally, configuration can be provided for the settings trackScreens, trackLifecycle, and sessionTimeoutInSeconds.")
2.  [Consent](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_consent_management.htm "Engagement Mobile SDK offers a managed solution for allowing and restricting collection of event data. Your mobile application is responsible for presenting the device owner with the choice to opt in or opt out of data collection and for setting the Data Cloud Module consent property accordingly.") to track must be granted.

## Setting Profile Attributes

**iOS**

```

```

**Android**

```

```

When a profile attribute changes, the Data Cloud Module triggers an identity profile event containing all the attributes that have been set. These attributes can be set to any name and value pair.

## Supported Customer 360 Data Model

The Identity Schema provided by the recommended Mobile Connector schema for Data Cloud contains profile attributes that support identity resolution features in Data Cloud when mapped to the appropriate Customer 360 Data Model.

Each identity event contains fields that can be mapped.

-   Individual
    -   firstName
    -   lastName
-   Software Application
    -   registrationId
    -   softwareApplicationName
-   Device
    -   advertiserId
    -   deviceType
    -   osName
-   Contact Point App
    -   registrationId

**Device advertiserId**

Starting with Android 13 (API level 33), [permission is required to request the device’s advertiserId](https://developer.android.com/about/versions/13/behavior-changes-13#ad-id). In [Data Cloud 2.0.2](https://github.com/salesforce-marketingcloud/mobile-sdk-cdp-android/releases/tag/2.0.2), this permission is included by default. To [prevent this permission from getting merged into your app](https://developers.google.com/android/reference/com/google/android/gms/ads/identifier/AdvertisingIdClient.Info#public-methods), add this element to your AndroidManifest.xml:

```

```

**Contact Points**

Each supported contact point has a set of required attributes that must be provided to the SDK’s Identity API. After all attributes have been provided, the Data Cloud Module triggers a profile event contacting points along with an identity event. The contact points and required attributes that trigger them are:

-   Contact Point Email Schema
    -   email
-   Contact Point Phone Schema
    -   phoneNumber
-   Contact Point Address Schema
    -   addressLine1
    -   city
    -   postalCode
    -   stateProvince
    -   country

## Anonymous and Known Users

In the Data Cloud Module, all customers are considered known by default. To mark a customer as anonymous, set the isAnonymous profile attribute to “1”. Conversely, setting isAnonymous to “0” ensures that customers are considered known.

**iOS**

```

```

**Android**

```

```

## Shared Party Identifiers

The Engagement Mobile SDK also supports sharing identifiers between modules that support other Salesforce systems for integration use cases. For example, match an individual using a mobile application that has Data Cloud and the MobilePush modules to send a push notification to a specific anonymous mobile user.

**Anonymous MobilePush User**

The identity event contains fields that can be mapped to the Party Identification model.

-   registrationId — Identification Number

**Known MobilePush User**

When the MobilePush module obtains a resolved identity for a mobile customer, it sets a profileId using the SDK’s Identity API. The Data Cloud Module is notified of this change and sends a partyIdentification event with these fields.

-   userId — Identification Number
-   IDName — Party Identification Name
-   IDType — Party Identification Type