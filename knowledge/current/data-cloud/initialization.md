---
title: "Initialization"
domain: data-cloud
topic: initialization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.211Z
estimatedTokens: 753
keywords: [Initialization, Before, Data, Cloud, Module, Engagement, Mobile, SDK, used, invoke, web, services, API, must, configured., CdpConfigBuilder, iOS, CdpConfig.Builder, Android, helper]
---

# Initialization

> Before the Data Cloud Module for the Engagement Mobile SDK can be used to invoke web
  services using the API, the SDK must be configured. Use the CdpConfigBuilder
  for iOS or CdpConfig.Builder for Android helper class to build your SDK
  configuration by providing required settings appId and endpoint that can be obtained from your
  Mobile Connector. Optionally, configuration can be provided for the settings
   trackScreens, trackLifecycle, and
   sessionTimeoutInSeconds.

# Initialization

Before the Data Cloud Module for the Engagement Mobile SDK can be used to invoke web services using the API, the SDK must be configured. Use the CdpConfigBuilder for iOS or CdpConfig.Builder for Android helper class to build your SDK configuration by providing required settings appId and endpoint that can be obtained from your Mobile Connector. Optionally, configuration can be provided for the settings trackScreens, trackLifecycle, and sessionTimeoutInSeconds.

| Setting | Field Type | Description |
| --- | --- | --- |
| appId | string | Required. The appId setting uniquely identifies your mobile application to Data Cloud and must be in a valid universally unique identifier, UUID, format. An invalid appID results in an error. |
| endpoint | string | Required. The endpoint setting tells the SDK where to send the events being created and tracked. |
| sessionTimeoutInSeconds | integer | The sessionTimeoutInSeconds setting represents the number of seconds the mobile application can remain in the background before the current session is expired. When a customer launches the mobile application, the SDK starts a new session that is maintained while the app is in the foreground. If the customer sends the mobile application to the background, the SDK starts a timer to expire the current session. If the customer brings the mobile app back to the foreground before the session expiration, the timer is cleared and the session is continued. Otherwise the session expires. This field is set to 600 by default. |
| trackLifecycle | boolean | Enable trackLifecycle to automatically track AppForegrounded, AppBackgrounded, and AppVersionChanged behavior events. This field is set to false by default. |
| trackScreens | boolean | Enable trackScreens to automatically track the mobile app ScreenEntry behavior event. This field is set to false by default. |

## Set Up the Data Cloud Module

1.  (Optional) To capture debug information and track SDK initialization progress, set up logging before initializing the SDK. For iOS, use the setLogger method. For Android, use the setLogging method. For more information and example usage, see [Logging and Debugging](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_logging_and_debugging.htm "Logging is optional, yet critical, SDK feature that allows the mobile application developer to select the verbosity of the Data Cloud Module for the Engagement Mobile SDK’s output. By default, logging is disabled and must be enabled using the setLogger for iOS or setLogging for Android method on the SFMCSdk instance. Define the desired logging level and output destination. Enabling logging results in log capture using the native unified logging system.").
2.  Configure the Data Cloud Module.
3.  Initialize the Engagement Mobile SDK with the Data Cloud Module.

Configuration happens during the initialization routine of the Mobile application being instrumented.

## iOS Example

```

```

## Android Example

```

```

## Code Examples

```
import Cdp
import SFMCSDK

...

let appId = "{appIdFromMobileConnector}"
let endpoint = "https://{endpointFromMobileConnector}"

// 1. (Optional) Enable logging. In this example, the logger is set to show debug messages and higher.

SFMCSdk.setLogger(LogLevel.debug)

// 2. Configure the Data Cloud module
      
let cdpModuleConfig = CdpConfigBuilder(appId: appId, endpoint: endpoint)
        .trackScreens(false)
        .trackLifecycle(false)
        .sessionTimeout(600)
        .build()
  
// 3. Initialize the Engagement Mobile SDK 

SFMCSdk.initializeSdk(ConfigBuilder().setCdp(config: cdpModuleConfig).build())
```

```
import com.salesforce.marketingcloud.cdp.CdpConfig
import com.salesforce.marketingcloud.sfmcsdk.SFMCSdk
import com.salesforce.marketingcloud.sfmcsdk.SFMCSdkModuleConfig

// Optional, import SDK components needed to enable logging

import com.salesforce.marketingcloud.sfmcsdk.components.logging.LogLevel
import com.salesforce.marketingcloud.sfmcsdk.components.logging.LogListener.AndroidLogger

...

val appId = "{appIdFromMobileConnector}"
val endpoint = "https://{endpointFromMobileConnector}"

// 1. (Optional) Enable logging. In this example, the logger is set to show debug messages and higher.

SFMCSdk.setLogging(LogLevel.DEBUG, AndroidLogger())

// 2. Configure the Data Cloud module
      
val cdpModuleConfig = CdpConfig.Builder(this, appId, endpoint)
      .trackScreens(false)
      .trackLifecycle(false)
      .sessionTimeout(600)
      .build()

// 3. Initialize the Engagement Mobile SDK

SFMCSdk.configure(this, SFMCSdkModuleConfig.build {
    this.cdpModuleConfig = cdpModuleConfig
})
```

```apex
SalesforceInteractions.init({
  consents: [...],
  cookieDomain: '...'
}).then(() => {
  SalesforceInteractions.initSitemap({
    global: { ... },
    pageTypeDefault: { ... },
    pageTypes: [...]
  })
})
```

```
init(sdkConfig: SdkConfig): Promise<void>
```

```
// initialize with consent provided by a user interaction
SalesforceInteractions.init({
  cookieDomain: 'domain.com',
  consents: new Promise(resolve => {
    // user clicks button that grants consent
    document.getElementById('opt-in')
      .addEventListener('click', () => {
        resolve([{ 
          provider: 'Test Provider', 
          purpose: 'Tracking', 
          status: SalesforceInteractions.ConsentStatus.OptIn 
        }])
      }, { once: true })

    // user clicks button that revokes consent
    document.getElementById('opt-out')
      .addEventListener('click', () => {
        resolve([{ 
          provider: 'Test Provider', 
          purpose: 'Tracking', 
          status: SalesforceInteractions.ConsentStatus.OptOut 
        }])
      }, { once: true })
  })
})

// initialize with consent preconfigured
SalesforceInteractions.init({
  cookieDomain: 'domain.com',
  consents: [{ 
    provider: 'Test Provider', 
    purpose: 'Tracking', 
    status: SalesforceInteractions.ConsentStatus.OptIn 
  }]
})

// initialize with no consent
SalesforceInteractions.init({
  cookieDomain: 'domain.com',
  consents: []
})
```

## Related Topics

- Logging and Debugging (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_logging_and_debugging.htm)
