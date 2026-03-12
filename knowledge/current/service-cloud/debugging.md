---
title: "Debugging"
domain: service-cloud
topic: debugging
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.659Z
estimatedTokens: 668
keywords: [Debugging, browser’s, console, JavaScript, error, messages, debug, Lightning, pages, built, API, several, recommendations, code, Enable]
---

# Debugging

> Use your browser’s console and JavaScript error messages to debug Lightning pages built
  with the Lightning Console JavaScript API. Here are several recommendations on debugging your
  Lightning Console API code.

# Debugging

Use your browser’s console and JavaScript error messages to debug Lightning pages built with the Lightning Console JavaScript API. Here are several recommendations on debugging your Lightning Console API code.

## Enable Debug Mode

Debug mode prevents the minification of your JavaScript code, making it readable and easier to debug in the browser. Disable debug mode for users after you've finished troubleshooting as running Salesforce in debug mode can impact performance. For more information, see [Enable Debug Mode in Salesforce](https://developer.salesforce.com/docs/platform/lwc/guide/debug-mode-enable.html).

## Disable Caching

To ensure that you code changes are reflected immediately, disable caching in Salesforce Setup. For more information, see [Disable Caching During Debugging](https://developer.salesforce.com/docs/platform/lwc/guide/debug-disable-caching.html).

## Use Chrome DevTools

Your browser's built-in developer tools offer a robust set of features for debugging. For example, Chrome's Sources panel enables you to set breakpoints and pause on exceptions. To find your Aura component code, go to the Page pane of the Sources panel and view the lightning/n/components folder. To find your LWC code, go to the Page pane of the Sources panel and view the lightning/n/modules folder, or lws is Lightning Web Security is enabled. For more information, see [Debug Using Chrome DevTools](https://developer.salesforce.com/docs/platform/lwc/guide/debug-dev-tools.html).

## Enable Custom Formatters

You can find debug information for wire adapters in Chrome's [custom object formatter](https://developer.salesforce.com/docs/platform/lwc/guide/debug-dev-tools.html#enable-custom-formatters). When using @wire for properties like EnclosingTabId, remember that the wired property returns an object with data and error properties. Check for data to ensure the data has been provisioned.

## Follow Standard Debugging Practices

The methods in the Lightning Console JavaScript APIs are asynchronous and return their results using promises. You can use a try and catch block to handle responses and potential errors.

Just like any programming issues, simplify the problem by creating a test component that replicates the issue you're facing. Review the Lightning Console JavaScript API documentation to understand the expected arguments, responses, and behaviors of the methods and wire adapters you're using.

To print messages to your browser’s console, use console.log() in your component controller code. Alternatively, you can use other console methods such as console.warn() or console.error() to help you highlight potential issues.
