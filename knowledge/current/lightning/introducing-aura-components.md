---
title: "Introducing Aura Components"
domain: lightning
topic: introducing-aura-components
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:49.035Z
estimatedTokens: 989
keywords: [Introducing, Aura, Components, Lightning, umbrella, term, web, Spring, ’19, API, version, 45.0, build, two, programming]
---

# Introducing Aura Components

> Lightning components is the umbrella term for Aura components and Lightning web
    components. As of Spring ’19 (API version 45.0), you can build Lightning components using two
    programming models: the Lightning Web Components (LWC) model, and the original Aura Components
    model.

# Introducing Aura Components

Lightning components is the umbrella term for Aura components and Lightning web components. As of Spring ’19 (API version 45.0), you can build Lightning components using two programming models: the Lightning Web Components (LWC) model, and the original Aura Components model.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


The Lightning Component framework is a UI framework for developing Lightning components for mobile and desktop devices. Lightning web components and Aura components can coexist and interoperate on a page.

Lightning Web Components uses core [Web Components](https://github.com/w3c/webcomponents/ "HTML (New Window)") standards and provides only what’s necessary to perform well in browsers supported by Salesforce. Because it’s built on code that runs natively in browsers, Lightning Web Components is lightweight and delivers exceptional performance. Most of the code you write is standard JavaScript and HTML.

For new components, create Lightning web components instead of Aura components. Lightning web components perform better and are easier to develop than Aura components. However, when you develop Lightning web components, you also may need to use Aura, because LWC doesn’t yet support everything that Aura does. We're actively working in each release to eliminate these gaps so that LWC works for all use cases.

Configure Lightning web components and Aura components to work in Lightning App Builder and Experience Builder. Admins and end users don’t know which programming model was used to develop the components. To them, they’re simply Lightning components.

This developer guide covers how to develop custom Aura components. The [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/lwc "HTML (New Window)") covers how to develop custom Lightning web components.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

The name of the programming model is Aura Components (uppercase). When we refer to the components themselves, we use Aura components (lowercase).

-   **[What is Salesforce Lightning?](atlas.en-us.lightning.meta/lightning/intro_lightning.htm)**
    Lightning includes the Lightning Component Framework and some exciting tools for developers. Lightning makes it easier to build responsive applications for any device.
-   **[Use Lightning Web Components instead of Aura Components](atlas.en-us.lightning.meta/lightning/intro_benefits.htm)**
    Lightning web components perform better and are easier to develop than Aura components. However, when you develop Lightning web components, you also may need to use Aura, because LWC doesn’t yet support everything that Aura does.
-   **[Aura Components Release Notes](atlas.en-us.lightning.meta/lightning/intro_rns.htm)**
    Use the Salesforce Release Notes to learn about the most recent updates and changes to Aura Components.
-   **[Aura Components](atlas.en-us.lightning.meta/lightning/intro_components.htm)**
    Aura components are the self-contained and reusable units of an app. They represent a reusable section of the UI, and can range in granularity from a single line of text to an entire app.
-   **[Events](atlas.en-us.lightning.meta/lightning/intro_events.htm)**
    Event-driven programming is used in many languages and frameworks, such as JavaScript and Java Swing. The idea is that you write handlers that respond to interface events as they occur.
-   **[Browser Support for Aura Components](atlas.en-us.lightning.meta/lightning/intro_browsers.htm)**
    Aura Components support the same browsers as Lightning Experience.
-   **[Using the Developer Console](atlas.en-us.lightning.meta/lightning/intro_devconsole.htm)**
    The Developer Console provides tools for developing your Aura components and applications.

## Related Topics

- What is Salesforce Lightning? (atlas.en-us.lightning.meta/lightning/intro_lightning.htm)
- Use Lightning Web Components instead of Aura Components (atlas.en-us.lightning.meta/lightning/intro_benefits.htm)
- Aura Components Release Notes (atlas.en-us.lightning.meta/lightning/intro_rns.htm)
- Aura Components (atlas.en-us.lightning.meta/lightning/intro_components.htm)
- Events (atlas.en-us.lightning.meta/lightning/intro_events.htm)
- Browser Support for Aura Components (atlas.en-us.lightning.meta/lightning/intro_browsers.htm)
- Using the Developer Console (atlas.en-us.lightning.meta/lightning/intro_devconsole.htm)
