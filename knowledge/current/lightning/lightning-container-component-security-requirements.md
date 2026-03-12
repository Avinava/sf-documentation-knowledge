---
title: "Lightning Container Component Security Requirements"
domain: lightning
topic: lightning-container-component-security-requirements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.554Z
estimatedTokens: 327
keywords: [Lightning, Container, Component, Security, Requirements, Ensure, components, meet, Validity, Resource, Content, Access, Distribution]
---

# Lightning Container Component Security Requirements

> Ensure that your Lightning container components meet security requirements.

# Lightning Container Component Security Requirements

Ensure that your Lightning container components meet security requirements.

## Namespace Validity

The Lightning container component’s security measures check the validity of its namespaces. Suppose that you develop a <lightning:container\> component with the namespace “vendor1.” The static resource’s namespace must also be “vendor1.” If they don’t match, an error message appears.

```

```

## Static Resource Content Access

You can’t use raw <iframe\> elements to access a Lightning container component. The <lightning:container\> component enforces this requirement with the query parameter \_CONFIRMATIONTOKEN, which generates a unique ID for each user session. The following code isn’t permitted, because the <iframe\> src attribute doesn’t contain a \_CONFIRMATIONTOKEN query parameter.

```

```

Instead, use the $Resource global value provider to build the resource URL for the <lightning:container\> component.

```

```

## Distribution Requirements

To upload a package to AppExchange, you must supply all the Lightning container component’s original sources and dependencies. When you provide minified or transpiled code, you must also include the source files for that code and the source map (.js.map) files for the minified code.

## Code Examples

```
<aura:component>
  <lightning:container
    src="{!$Resource.vendor1__resource + '/code_belonging_to_vendor1'}"
    onmessage="{!c.vendor1__handles}"/>
<aura:component>
```

```
<aura:component>
  <iframe src="https://domain--vendor2.container.lightning.com/lcc/123456/vendor2__resource/index.html"/>
</aura:component>
```

```
<aura:component>
  <lightning:container
    src="{!$Resource.vendor2__resource + '/index.html' }"/>
</aura:component>
```
