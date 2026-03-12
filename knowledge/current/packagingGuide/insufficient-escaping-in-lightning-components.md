---
title: "Insufficient Escaping in Lightning Components"
domain: packagingGuide
topic: insufficient-escaping-in-lightning-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.149Z
estimatedTokens: 308
keywords: [Insufficient, Escaping, Lightning, Components, component, bundle, responsible, sanitizing, input, provided, parent, apps, URL, Aura]
---

# Insufficient Escaping in Lightning Components

> Each component in a bundle is responsible for sanitizing the input provided to it by
    parent components, apps, or in URL parameters.

# Insufficient Escaping in Lightning Components

Each component in a bundle is responsible for sanitizing the input provided to it by parent components, apps, or in URL parameters.

The security boundary of an individual component is the component bundle. Each component in a bundle is responsible for sanitizing the input provided to it by parent components, apps, or in URL parameters. Public or global component attributes are assumed to contain attacker-controlled inputs unless sanitized by the component in an onInit handler.

Failure to sanitize inputs can lead to cross-site scripting (XSS) or URL redirection attacks.

## Aura Example

In this Aura code, a component reads data from a global attribute and then renders it to the document object model (DOM) without sufficient escaping. One parameter has the tag unescapedHTML, which is open to exploitation. A hacker or malware can inject HTML or JavaScript into the view and trigger a cross-site scripting (XSS) attack.

```

```

This Aura component code is secure because it doesn’t use the unescapedHTML.

```

```

For more info, refer to [Lightning Security](https://developer.salesforce.com/page/Lightning_Security "HTML (New Window)") in the Secure Coding Guide.

## Code Examples

```apex
<aura:component controller="name_NewsController" access="global" extends="c:name_Name" implements="force:appHostable,flexipage:availableForAllPageTypes,forceCommunity:availableForAllPageTypes">
   <aura:handler name="baseReady" event="c:name_Name" action="{!c.doInit}"/>
   ...
   <aura:attribute name="newsDetails" type="String" default="" access="global"/>
   ...
   <div class="slds-col_padded slds-size_1-of-1 textDetail">
      <div class="slds-text-longform">
         <aura:unescapedHtml aura:Id="newsDetail" value="{!v.newsDetails}"/>
       </div>
   </div>
   ...
</aura:component>
```

```apex
<aura:component controller="name_NewsController" access="global" extends="c:name_Name" implements="force:appHostable,flexipage:availableForAllPageTypes,forceCommunity:availableForAllPageTypes">
   <aura:handler name="baseReady" event="c:name_Name" action="{!c.doInit}"/>
   ...
   <aura:attribute name="newsDetails" type="String" default="" access="global"/>
   ...
   <div class="slds-col_padded slds-size_1-of-1 textDetail">
      <div class="slds-text-longform">
         <aura:Id="newsDetail" value="{!v.newsDetails}"/>
       </div>
   </div>
   ...
</aura:component>
```
