---
title: "Using Mobile SDK
  Components in React Native Apps"
domain: mobile-sdk
topic: using-mobile-sdk-components-in-react-native-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:27.175Z
estimatedTokens: 222
keywords: [Mobile, SDK, React, Native, Apps, libraries, JavaScript, bridges, execute, code, instructions]
---

> React Native apps access the same Mobile SDK libraries as Mobile SDK native apps. For
  React Native, Mobile SDK
  provides JavaScript components, or bridges, that execute your JavaScript code as
  native Mobile SDK
  instructions.

# Using Mobile SDK Components in React Native Apps

React Native apps access the same Mobile SDK libraries as Mobile SDK native apps. For React Native, Mobile SDK provides JavaScript components, or bridges, that execute your JavaScript code as native Mobile SDK instructions.

In React Native, you access Mobile SDK functionality through the following native bridges:

-   react.force.oauth.js
-   react.force.net.js
-   react.force.smartstore.js
-   react.force.mobilesync.js

To use these bridges, add an import statement in your JavaScript code. The following example imports all four bridges.

```

```

React native apps built with forcereact specify the react-native-force source path in the package.json file:

```

```

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

You can’t use the force.js library with React Native.

## Code Examples

```
import {oauth, net, smartstore, mobilesync} from 'react-native-force';
```

```
"react-native-force": "https://github.com/forcedotcom/SalesforceMobileSDK-ReactNative.git"
```
