---
title: "Templating with Visualforce"
domain: pages
topic: templating-with-visualforce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.247Z
estimatedTokens: 600
keywords: [Templating, Visualforce, Templates, made, <apex, insert>, composition>, want, already, require, components, duplicated, custom]
---

# Templating with Visualforce

> Templates made with <apex:insert> and <apex:composition> should only be used when you want to reference an already existing Visualforce page. If you require only a set of components to be duplicated,
use custom components.

# Templating with Visualforce

Visualforce provides several strategies for reusing similar content across multiple Visualforce pages. The method you choose depends on how flexible you need your reused template to be. The more flexible a templating method is, the more any implementation of a template using that method can be modified. The following template methods are available, in order of most to least flexible:

[Defining Custom Components](atlas.en-us.pages.meta/pages/pages_comp_cust.htm)

Similar to the way you can encapsulate a piece of code in a method and then reuse that method several times in a program, you can encapsulate a common design pattern in a custom component and then reuse that component several times in one or more Visualforce pages. Defining custom components is the most flexible templating method because they can contain any valid Visualforce tags and can be imported without restrictions into any Visualforce page. However custom components should not be used to define reusable Visualforce pages. If you want to reuse the content of an entire Visualforce page, choose one of the other two templating methods.

[Defining Templates with <apex:composition>](atlas.en-us.pages.meta/pages/pages_templates_composition.htm)

If you want to define a base template that allows portions of the template to change with each implementation, use the <apex:composition\> component. This templating method is best for situations when you want to maintain an overall structure to a page, but need the content of individual pages to be different, such as a website for news articles where different articles should appear with the same page layout.

Through this technique, you can also define a template from a PageReference returned by a controller.

[Referencing an Existing Page with <apex:include>](atlas.en-us.pages.meta/pages/pages_templates_include.htm)

If you want the entire content of a Visualforce page inserted into another page, use the <apex:include\> component. This templating method is best for situations when you want to replicate the same content in multiple areas, such as a feedback form that appears on every page of a website.

Templates made with <apex:insert\> and <apex:composition\> should only be used when you want to reference an already existing Visualforce page. If you require only a set of components to be duplicated, use custom components.

## Related Topics

- Defining Custom Components (atlas.en-us.pages.meta/pages/pages_comp_cust.htm)
- Defining Templates with <apex:composition> (atlas.en-us.pages.meta/pages/pages_templates_composition.htm)
- Referencing an Existing Page with <apex:include> (atlas.en-us.pages.meta/pages/pages_templates_include.htm)
