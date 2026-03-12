---
title: "Add Links to Lightning Pages from Your Custom Components"
domain: lightning
topic: add-links-to-lightning-pages-from-your-custom-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.323Z
estimatedTokens: 281
keywords: [Add, Links, Lightning, Pages, Custom, Components, link, Experience, formattedUrl, component, displays, URL, hyperlink, Migrate, outputUrl]
---

# Add Links to Lightning Pages from Your Custom Components

> To link to Lightning Experience pages, use lightning:formattedUrl in your custom component. The lightning:formattedUrl component displays a URL as a hyperlink.

# Add Links to Lightning Pages from Your Custom Components

To link to Lightning Experience pages, use lightning:formattedUrl in your custom component. The lightning:formattedUrl component displays a URL as a hyperlink.

If you use raw anchor tags or the ui:outputUrl (deprecated) component for links, the page does a full reload each time you click the link. To avoid full page reloads, replace your link components with lightning:formattedUrl.

For examples, see the [Component Library](https://developer.salesforce.com/docs/component-library/bundle/lightning:formattedUrl/example "HTML (New Window)").

## Migrate from ui:outputUrl to lightning:formattedUrl

Copy the attributes from the ui:outputUrl component.

```

```

Paste the same attributes into the lightning:formattedUrl component. lightning:formattedUrl supports more attributes, like tooltip.

```

```

#### See Also

-   [*Component Library*: lightning:formattedUrl Reference](https://developer.salesforce.com/docs/component-library/bundle/lightning:formattedUrl/documentation "Component Library: lightning:formattedUrl
    Reference - HTML (New Window)")

## Code Examples

```
<aura:component>
    <ui:outputURL value="https://my/path" label="Contact ID" />
</aura:component>
```

```
<aura:component>
    <div aura:id="container">
        <p><lightning:formattedUrl value="https://my/path" label="Contact ID" tooltip="Go to Contact's recordId" /></p>
    </div>
</aura:component>
```
