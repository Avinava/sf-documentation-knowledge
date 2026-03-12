---
title: "Lightning Container"
domain: lightning
topic: lightning-container
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.551Z
estimatedTokens: 283
keywords: [Lightning, Container, Upload, app, developed, third-party, framework, resource, host, content, Aura, component, frameworks, AngularJS, React]
---

# Lightning Container

> Upload an app developed with a third-party framework as a static resource, and host the
    content in an Aura component using lightning:container. Use
      lightning:container to use third-party frameworks like
    AngularJS or React within your Lightning pages.

# Lightning Container

Upload an app developed with a third-party framework as a static resource, and host the content in an Aura component using lightning:container. Use lightning:container to use third-party frameworks like AngularJS or React within your Lightning pages.

The lightning:container component hosts content in an iframe. You can implement communication to and from the framed application, allowing it to interact with the Lightning component. lightning:container provides the message() method, which you can use in the JavaScript controller to send messages to the application. In the component, specify a method for handling messages with the onmessage attribute.

-   **[Lightning Container Component Limits](atlas.en-us.lightning.meta/lightning/container_limits.htm)**
    Understand the limits of lightning:container.
-   **[lightning:container NPM Module Reference NPM Module Reference](atlas.en-us.lightning.meta/lightning/container_api_reference.htm)**
    Use methods included in the lightning:container NPM module in your JavaScript code to send and receive messages to and from your custom Aura component.

## Related Topics

- Lightning Container Component Limits (atlas.en-us.lightning.meta/lightning/container_limits.htm)
- lightning:container NPM Module Reference NPM Module Reference (atlas.en-us.lightning.meta/lightning/container_api_reference.htm)
