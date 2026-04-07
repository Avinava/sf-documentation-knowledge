---
title: "Native Modules for React Native Apps Native Modules for React Native Apps"
domain: mobile-sdk
topic: native-modules-for-react-native-apps-native-modules-for-react-native-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.985Z
estimatedTokens: 502
keywords: [Native, Modules, React, Apps, Mobile, SDK, serve, JavaScript, bridges, functionality, OAuth, Network, SmartStore, Sync]
---

# Native Modules for React Native Apps Native Modules for React Native Apps

> Mobile SDK provides native
  modules for React Native that serve as JavaScript bridges to native Mobile SDK functionality.

# Native Modules for React Native Apps Native Modules for React Native Apps

Mobile SDK provides native modules for React Native that serve as JavaScript bridges to native Mobile SDK functionality.

## OAuth

The OAuth bridge is similar to the OAuth plugin for Cordova.

Usage

```

```

Types and Methods

See [react.force.oauth.ts](https://github.com/forcedotcom/SalesforceMobileSDK-ReactNative/tree/v9.0.0/src/react.force.oauth.ts "HTML (New Window)") in the SalesforceMobileSDK-ReactNative GitHub repo.

## Network

The Network bridge is similar to the force.js library for hybrid apps.

Usage

```

```

Types and Methods

See [react.force.net.ts](https://github.com/forcedotcom/SalesforceMobileSDK-ReactNative/tree/v9.0.0/src/react.force.net.ts "HTML (New Window)") in the SalesforceMobileSDK-ReactNative GitHub repo.

## SmartStore

The SmartStore bridge is similar to the SmartStore plugin for Cordova. Unlike the plugin, however, first arguments aren’t optional in React Native.

Usage

```

```

Types and Methods

See [react.force.smartstore.ts](https://github.com/forcedotcom/SalesforceMobileSDK-ReactNative/tree/v9.0.0/src/react.force.smartstore.ts "HTML (New Window)") in the SalesforceMobileSDK-ReactNative GitHub repo.

## Mobile Sync

The Mobile Sync bridge is similar to the Mobile Sync plugin for Cordova. Unlike the plugin, however, first arguments aren’t optional in React Native.

Usage

```

```

Types and Methods

See [react.force.mobilesync.ts](https://github.com/forcedotcom/SalesforceMobileSDK-ReactNative/tree/v9.0.0/src/react.force.mobilesync.ts "HTML (New Window)") in the SalesforceMobileSDK-ReactNative GitHub repo.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Handling of field lists for “sync up” operations changed in Mobile SDK 5.1. See [Plugin Methods Plugin Methods](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_plugin_methods.htm) for a description of the JavaScript syncUp() method.

## Code Examples

```
import {oauth} from 'react-native-force';
```

```
import {net} from 'react-native-force';
```

```
import {smartstore} from 'react-native-force';
```

```
import {mobilesync} from 'react-native-force';
```

## Related Topics

- Plugin Methods Plugin Methods (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_plugin_methods.htm)
