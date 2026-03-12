---
title: "Hide Call Controls"
domain: voice-pt-developer-guide
topic: hide-call-controls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.053Z
estimatedTokens: 259
keywords: [Hide, Call, control, buttons, appear, rep, Omni-Channel, widget, hidden, shown, visible]
---

# Hide Call Controls

> You can hide many of the call control buttons that appear to the rep in the
      Omni-Channel widget. These buttons can be hidden or shown for each call. By default, buttons
      are visible.

# Hide Call Controls

You can hide many of the call control buttons that appear to the rep in the Omni-Channel widget. These buttons can be hidden or shown for each call. By default, buttons are visible.

![Omni call controls](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fhide_call_controls.png&folder=voice_pt_developer_guide)

These buttons can be hidden from view.

-   Mute
-   Record (or Recording)
-   Add Caller
-   Blind Transfer
-   Merge
-   Swap

The keypad is always displayed.

To hide a button, specify false for the show method in the CallInfo object. For instance, use showAddCallerButton to hide or show the add caller button. The CallInfo object is used by the PhoneCall object for methods such as acceptCall.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")
