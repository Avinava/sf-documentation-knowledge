---
title: "Create a Quick Action with an LWC"
domain: mobile-offline
topic: create-a-quick-action-with-an-lwc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.503Z
estimatedTokens: 218
keywords: [Quick, Action, LWC, actions, easy, way, add, launch, Lightning, web, components, It’s, simple, Test, Harness]
---

# Create a Quick Action with an LWC

> Quick actions are an easy way to add and launch your Lightning web components. It’s
    simple to add them to the Test Harness app.

# Create a Quick Action with an LWC

Quick actions are an easy way to add and launch your Lightning web components. It’s simple to add them to the Test Harness app.

To create a Quick Action with an LWC, the LWC must have a target of type lightning\_\_RecordAction defined in the component’s meta.xml file:

```

```

After a component is deployed to Salesforce, create a Quick Action that uses it. For details, see [Quick Actions](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_quick_actions) in the Lightning Web Components Developer Guide.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=mobile_offline)

#### Tip

You don’t need to add Quick Actions to a page layout to see it in Test Harness. The Test Harness app automatically shows all LWC-based Quick Actions for the displayed sObject type.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
  <LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>59.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
      <target>lightning__AppPage</target>
      <target>lightning__HomePage</target>
      <target>lightning__RecordAction</target>
    </targets>
  </LightningComponentBundle>
```
