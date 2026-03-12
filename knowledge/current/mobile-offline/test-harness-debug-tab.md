---
title: "Test Harness Debug Tab"
domain: mobile-offline
topic: test-harness-debug-tab
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.508Z
estimatedTokens: 548
keywords: [Test, Harness, Debug, Tab, app, developer-centric, tool, inspecting, network, logs, navigating, references, switching, applications, Refs]
---

# Test Harness Debug Tab

> The Debug tab of the Test Harness app is a developer-centric tool for inspecting
    network logs, navigating to page references, and switching applications.

# Test Harness Debug Tab

The Debug tab of the Test Harness app is a developer-centric tool for inspecting network logs, navigating to page references, and switching applications.

![Debug tab](/docs/resources/img/en-us/260.0?doc_id=images%2Fdx_harness_debug_tab.png&folder=mobile_offline)

## Page Refs

This is an advanced feature. It allows you to provide a list of resources to be primed by the LWC Offline engine. Each resource is specified as a PageReference using JSON.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=mobile_offline)

#### Warning

This tool is under development. It should be used only with guidance from a Salesforce representative.

## Network Logs

This card allows you to capture and inspect details regarding the network requests made by your Lightning web components. The tool captures requests after you tap **Start**, and stops capturing them when you tap **Stop**. To see a list of captured requests, tap **Show**. The list shows the type and URL of the request, and the response code and duration. Tap a specific request to see further details, such as the headers and body of the request and response.

## LightningSDK Control

This card provides controls for affecting the LWC Offline engine. Currently, the only option is **Rebootstrap**. Use **Rebootstrap** to reload a component under development when you’ve made changes to the component’s code. This allows you to quickly reload a custom component, without quitting and restarting the Test Harness app.

## Application Context

This card allows you to switch between applications for testing. Currently, the supported apps are the Salesforce Mobile App Plus and the Field Service App.

Field Service App users must have the Field Service Mobile license and permission set enabled. See [Field Service Permission Set Licenses](https://help.salesforce.com/s/articleView?id=service.fs_perm_set_licenses.htm&language=en_US "HTML (New Window)") for more information.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Switching applications closes the app session. Reopen the app for the change to take effect.
