---
title: "Designing App UI"
domain: lightning
topic: designing-app-ui
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.993Z
estimatedTokens: 341
keywords: [Designing, App, Design, app's, including, markup, resource, part, corresponds, component, turn, contain, nested, components, Compose]
---

# Designing App UI

> Design your app's UI by including markup in the .app resource.
        Each part of your UI corresponds to a component, which can in turn contain nested
        components. Compose components to create a sophisticated app.

# Designing App UI

Design your app's UI by including markup in the .app resource. Each part of your UI corresponds to a component, which can in turn contain nested components. Compose components to create a sophisticated app.

An app’s markup starts with the <aura:application> tag.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Creating a standalone app enables you to host your components outside of Salesforce for Android, iOS, and mobile web or Lightning Experience, such as with Lightning Out or Lightning components in Visualforce pages. To learn more about the <aura:application> tag, see [aura:application](atlas.en-us.lightning.meta/lightning/ref_aura_application.htm "An app is a special top-level component whose markup is in a .app resource.").

Let's look at a sample.app file, which starts with the <aura:application> tag.

```

```

The sample.app file contains HTML tags, such as <h1\>, as well as components, such as <lightning:layout>. We won't go into the details for all the components here but note how simple the markup is. The <lightning:layoutItem> component can contain other components or HTML markup.

#### See Also

-   [aura:application](atlas.en-us.lightning.meta/lightning/ref_aura_application.htm "An app is a special top-level component whose markup is in a .app resource.")

## Code Examples

```
<aura:application extends="force:slds">
    <lightning:layout>
        <lightning:layoutItem padding="around-large">
            <h1 class="slds-text-heading_large">Sample App</h1>
        </lightning:layoutItem>
    </lightning:layout>
    <lightning:layout>
        <lightning:layoutItem padding="around-small">
            Sidebar
            <!-- Other component markup here -->
        </lightning:layoutItem>
        <lightning:layoutItem padding="around-small">
            Content
            <!-- Other component markup here -->
        </lightning:layoutItem>
    </lightning:layout>
    
</aura:application>
```

## Related Topics

- aura:application (atlas.en-us.lightning.meta/lightning/ref_aura_application.htm)
