---
title: "Apex Wires While Offline"
domain: mobile-offline
topic: apex-wires-while-offline
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.400Z
estimatedTokens: 334
keywords: [Apex, Wires, Offline, Lightning, web, components, wire, functions, continue, provide, cached, durable, store]
---

# Apex Wires While Offline

> Lightning web components that wire properties or functions to Apex methods continue to
  provide cached values from the durable store, if available.

# Apex Wires While Offline

Lightning web components that wire properties or functions to Apex methods continue to provide cached values from the durable store, if available.

If the result of an Apex method hasn’t been retrieved previously and saved to the durable store, an error is returned. The correct way to handle the error depends on whether the Apex method is wired to a property or a function.

When using a property, the wire service either provisions the results to the <property>.data property, or returns an error to the <property>.error property. Use an if:true directive in your component template to check for the presence of each, and render the appropriate output. Changes to <property> trigger a re-render of your component with new values.

With a function, the wire service provisions results to the wired function via an object with either an error or data property. Check for the presence of each in your JavaScript function, and set an appropriate property of your component. This triggers a re-render of your component with new values.

Example code for each of these approaches is available in [Wire Apex Methods to Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_wire_method "HTML (New Window)") in the Lightning Web Components Developer Guide.
