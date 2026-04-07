---
title: "Instrumentation and Event Collection"
domain: mobile-sdk
topic: instrumentation-and-event-collection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.848Z
estimatedTokens: 460
keywords: [Instrumentation, Event, Collection, Mobile, SDK, 5.0, introduces, new, framework, adds, analytical, apps, collect, describe, how, consuming, periodically, uploads, logs, events, Salesforce, cloud, helps, focus, features, matter, customers, any, specific, users, their, organizations, Toggle, Logging, Check, Status, Upload, Frequency, Android]
---

> Mobile SDK 5.0 introduces a
  new framework that adds analytical instrumentation to Mobile SDK apps. Through this
  instrumentation, apps collect event data that describe how consuming apps use Mobile SDK. Mobile SDK periodically uploads logs of
  these events to the Salesforce cloud. This
  information helps us focus on the features that matter most to your customers. We do not collect
  any data specific to users or their Salesforce organizations.

# Instrumentation and Event Collection

Mobile SDK 5.0 introduces a new framework that adds analytical instrumentation to Mobile SDK apps. Through this instrumentation, apps collect event data that describe how consuming apps use Mobile SDK. Mobile SDK periodically uploads logs of these events to the Salesforce cloud. This information helps us focus on the features that matter most to your customers. We do not collect any data specific to users or their Salesforce organizations.

Mobile SDK app users and developers do not have access to the information Salesforce gathers. Salesforce collects it solely for its own use. The software that collects the data is maintained in Mobile SDK open source repos at [github.com/forcedotcom](https://github.com/forcedotcom).

Mobile SDK 5.0 and later enable instrumentation by default. Mobile SDK automatically publishes collected framework events to the Salesforce cloud on the following schedule:

-   **iOS:** When the app goes to the background.
-   **Android:** Every 8 hours.

Your app can toggle event logging on or off. On Android, your app can also change the collection upload frequency.

To manage the event logging service, use the following APIs. You call each API on an instance of an analytics manager object, which you initialize with your app’s current user account.

## Toggle Event Logging

**Android**

For Android, call the enableLogging(boolean enabled) method.

```

```

**iOS**

For iOS, set the BOOL loggingEnabled property.

```

```

## Check Event Logging Status

**Android**

For Android, call the isLoggingEnabled(boolean enabled) method.

```

```

**iOS**

For iOS, check the BOOL isLoggingEnabled property.

```

```

## Set Upload Frequency (Android Only)

On Android, you can set the frequency, in hours, of event log uploads. The default value is 8.

```

```

## Code Examples

```
final UserAccount curAccount = UserAccountManager.getInstance().getCurrentUser();
final SalesforceAnalyticsManager sfAnalyticsManager = 
    SalesforceAnalyticsManager.getInstance(curAccount);
sfAnalyticsManager.enableLogging(false);
```

```
SFUserAccount *account = [SFUserAccountManager
sharedInstance].currentUser;
SFSDKSalesforceAnalyticsManager *sfAnalyticsManager =
    [SFSDKSalesforceAnalyticsManager
sharedInstanceWithUser:account];
sfAnalyticsManager.loggingEnabled = NO;
```

```
final UserAccount curAccount = UserAccountManager.getInstance().getCurrentUser();
final SalesforceAnalyticsManager sfAnalyticsManager = 
    SalesforceAnalyticsManager.getInstance(curAccount);
boolean enabled = sfAnalyticsManager.isLoggingEnabled();
```

```
SFUserAccount *account = [SFUserAccountManager sharedInstance].currentUser;
SFSDKSalesforceAnalyticsManager *sfAnalyticsManager =
    [SFSDKSalesforceAnalyticsManager sharedInstanceWithUser:account];
BOOL enabled = sfAnalyticsManager.isLoggingEnabled;
```

```
final UserAccount curAccount = UserAccountManager.getInstance().getCurrentUser();
final SalesforceAnalyticsManager sfAnalyticsManager =
    SalesforceAnalyticsManager.getInstance(curAccount);
sfAnalyticsManager.setPublishFrequencyInHours(numHours); // numHours is the desired upload interval in hours.
```
