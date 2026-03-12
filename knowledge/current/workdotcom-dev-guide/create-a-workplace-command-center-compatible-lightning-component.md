---
title: "Create a Workplace Command Center Compatible Lightning Component"
domain: workdotcom-dev-guide
topic: create-a-workplace-command-center-compatible-lightning-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.293Z
estimatedTokens: 305
keywords: [Workplace, Command, Center, Compatible, Lightning, Component, components, custom, solution]
---

# Create a Workplace Command Center Compatible Lightning Component

> Use Workplace Command Center compatible components in your custom solution.

# Create a Workplace Command Center Compatible Lightning Component

Use Workplace Command Center compatible components in your custom solution.

Since the Command Center is developed as a Lightning Home page, it supports dragging and dropping in standard components such as reports and list views. However, because standard components don’t subscribe to the message channel used to communicate when the Location global filter changes, they won’t change when the user filters by Location. This can create a confusing user experience. For this reason, to display Location-aware data, we recommend developing custom Lightning components.

A custom component that can be added to Command Center must support Lightning app pages. This means that custom Lightning Web Components must allow the lightning\_\_AppPage target in its config file, and custom Aura components must implement flexipage:availableForAllPageTypes.

#### See Also

-   [*Lightning Web Components Dev Guide*: Introducing Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_introduction "
    Lightning Web Components Dev Guide: Introducing Lightning Web Components - HTML (New Window)")
