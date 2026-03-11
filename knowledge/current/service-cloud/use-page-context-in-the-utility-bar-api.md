---
title: "Use Page Context in the Utility Bar API"
domain: service-cloud
topic: use-page-context-in-the-utility-bar-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:50.122Z
keywords: [Page, Context, Utility, Bar, API, Lightning, Web, Components, LWC, Aura]
---

# Use Page Context in the Utility Bar API

# Use Page Context in the Utility Bar API

In both Lightning console apps and standard navigation apps, utilities can respond to the context of the current page. For a Lightning web component, use the CurrentPageReference wire adapter. For an Aura component, specify implements="force:hasRecordId" to access the recordId of the record a user is viewing.

## Lightning Web Components (LWC)

The CurrentPageReference wire adapter provides the page reference that describes the current page.

```

```

The component displays the record ID when the utility bar is loaded on a record page.

```

```

For more information about working with the page reference, see the [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/platform/lwc/guide/use-navigate-basic.html).

## Aura Components

This simple component implements force:hasRecordId and listens for changes to the record being viewed. When this component is added to a utility bar, it displays the recordId of the record currently being viewed.

```

```

The component’s controller listens for changes to the recordId, and prints the new recordId to the developer console upon a change.

```

```

This image shows what the component looks like in the utility bar of a Lightning console app.

![A utility bar component that displays the current recordId.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_console%2Fimages%2Fapi_console_utility_bar_record_context.png&folder=api_console)