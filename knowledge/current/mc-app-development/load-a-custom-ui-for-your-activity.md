---
title: "Load a Custom UI for Your Activity"
domain: mc-app-development
topic: load-a-custom-ui-for-your-activity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:21.455Z
estimatedTokens: 602
keywords: [Sample, Load, Activity, hover, UIs, display, journey, running, mode, configure, appears, there’s, userInterfaces.runningHover, config.json, iframe, loads, Button, Dynamic, URLs, Modal, Interacting, via, Postmonger, Dimensions, Items]
---

> Custom hover UIs are used to display information. While a journey is in running mode, you can configure a custom hover UI to load for an activity. This hover UI is optional and appears only if there’s a userInterfaces.runningHover object in the config.json. The hover UI contains an iframe that loads

# Load a Custom UI for Your Activity

Custom hover UIs are used to display information. While a journey is in running mode, you can configure a custom hover UI to load for an activity. This hover UI is optional and appears only if there’s a userInterfaces.runningHover object in the config.json. The hover UI contains an iframe that loads the URL that the runningHover object specifies.

![](/docs/resources/img/en-us/noversion?doc_id=images%2Fjb-custom-running-hover.gif&folder=mc-app-development)

To define default outcomes, define runningHover and runningModal in the activity's config.json under the userInterfaces object.

## Sample

## More Details Button

The hover UI contains a button labeled More Details, which closes the hover and opens a larger modal element. This modal contains an iframe that loads the URL specified in the runningModal object. The iframe supports Postmonger's destroy event. Users click the **X** that is shown by default to exit. If you provide a button, such as a Cancel button, along with the modal's default close method, Postmonger's destroy event closes the iframe when the user clicks **Cancel** or **X**.

You cannot hide the More Details button, but you can customize the text by setting a runningHoverButtonLabel in the config.json's lang object.

## Dynamic URLs for the Hover and Modal

Both the runningHover and runningModal URLs load inside an iframe, so any JavaScript you run within the iframe works. You can make dynamic decisions about what to show or hide either from the server hosting the URL, or by using JavaScript in the browser. While the URLs are static, you can make them dynamic by pointing them at a server resource that redirects the iframe.

## Interacting with the Hover and Modal via Postmonger

Interacting with a hover UI and modal using Postmonger events works just as it does for activities, but with limited interactivity. For example, you can't use the updateActivity method or its equivalent.

Hover UIs and modals are initialized by calling their respective context-dependent initialization Postmonger events.

## Hover and Modal Iframe Dimensions

-   The running hover's iframe is 200 px x 243 px.
-   The running modal's iframe is 420 px x 560 px.

    > iframe dimensions cannot be resized.


## Related Items

[Postmonger Events Reference](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/using-postmonger.htm)

## Related Topics

- Postmonger Events Reference (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/using-postmonger.htm)
