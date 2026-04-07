---
title: "About Hybrid Development"
domain: mobile-sdk
topic: about-hybrid-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:30.692Z
estimatedTokens: 245
keywords: [Hybrid, Development, JavaScript, browser, straightforward, you’ve, altered, code, merely, refresh, changes, Developing, apps, Mobile, SDK]
---

# About Hybrid Development

> JavaScript development in a browser is straightforward. After you’ve altered the code, you merely
            refresh the browser to see your changes. Developing hybrid apps with the Mobile SDK
            container requires you to recompile and rebuild after you make changes. For this reason,
     

# About Hybrid Development

JavaScript development in a browser is straightforward. After you’ve altered the code, you merely refresh the browser to see your changes. Developing hybrid apps with the Mobile SDK container requires you to recompile and rebuild after you make changes. For this reason, we recommend you develop your hybrid app directly in a browser, and only run your code in the container in the final stages of testing.

We recommend developing in a browser such as Google Chrome that comes bundled with developer tools. These tools let you access the symbols and code of your web application during runtime.

Mobile SDK JavaScript libraries give you a choice to code with traditional callback functions:

```

```

or using promises:

```

```

Using the callback function, you can write:

```

```

Promises help you keep your asynchonous code inline, making it easier to follow. Using the promise function, you can rewrite the callback code like this:

```

```

## Code Examples

```
traditionalCallbackMethod(args, onSuccess, onFailure)
```

```
promiseBasedMethod(args).then(onSuccess).catch(onFailure)
```

```
self.smartstoreClient.removeSoup(soupName,
    onSuccessRemoveSoup(soupName),
    onErrorRemoveSoup(soupName));
...                 

function onSuccessRemoveSoup(name) {…}
function onErrorRemoveSoup(name) {…}
```

```
self.smartstoreClient.removeSoup(soupName)
    .then(function(soupName) {
        ...
    })
    .catch(function(soupName) {
	  ...
    })
```
