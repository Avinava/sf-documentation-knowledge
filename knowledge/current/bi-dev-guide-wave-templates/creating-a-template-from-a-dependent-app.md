---
title: "Creating a Template from a Dependent App"
domain: bi-dev-guide-wave-templates
topic: creating-a-template-from-a-dependent-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.482Z
estimatedTokens: 134
keywords: [Creating, Template, Dependent, App, Apps, dependencies, assets, templatized, creation, process, standalone, templates]
---

# Creating a Template from a Dependent App

> Apps with dependencies on assets on other apps can be templatized using the same
    template creation process as standalone templates.

# Creating a Template from a Dependent App

Apps with dependencies on assets on other apps can be templatized using the same template creation process as standalone templates.

To create a template with dependencies on other apps, the supporting apps must be templatized first. If they aren’t, the template creation process returns an error that reminds you to create a template for the supporting app. Aside from that consideration, use the same steps to templatize an app that has dependencies as a template that has no dependencies.
