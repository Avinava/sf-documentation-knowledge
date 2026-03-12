---
title: "Component Body"
domain: lightning
topic: component-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.058Z
estimatedTokens: 464
keywords: [Component, root-level, tag, every, <aura, component>, inherits, attribute, Setting, Content, Accessing]
---

# Component Body

> The root-level tag of every component is <aura:component>. Every component inherits the
                body attribute from <aura:component>.

# Component Body

The root-level tag of every component is <aura:component>. Every component inherits the body attribute from <aura:component>.

The <aura:component> tag can contain tags, such as <aura:attribute>, <aura:registerEvent>, <aura:handler>, <aura:set>, and so on. Any free markup that is not enclosed in one of the tags allowed in a component is assumed to be part of the body and is set in the body attribute.

The body attribute has type Aura.Component\[\]. It can be an array of one component, or an empty array, but it's always an array.

In a component, use “v” to access the collection of attributes. For example, {!v.body} outputs the body of the component.

## Setting the Body Content

To set the body attribute in a component, add free markup within the <aura:component> tag. For example:

```

```

To set the value of an inherited attribute, use the <aura:set> tag. Setting the body content is equivalent to wrapping that free markup inside <aura:set attribute="body">. Since the body attribute has this special behavior, you can omit <aura:set attribute="body">.

The previous sample is a shortcut for this markup. We recommend the less verbose syntax in the previous sample.

```

```

The same logic applies when you use any component that has a body attribute, not just <aura:component>. For example:

```

```

This is a shortcut for:

```

```

## Accessing the Component Body

To access a component body in JavaScript, use component.get("v.body").

#### See Also

-   [aura:set](atlas.en-us.lightning.meta/lightning/ref_set_intro.htm "Use <aura:set> in markup to set the value of an attribute inherited from a component or event.")

-   [Working with a Component Body in JavaScript](atlas.en-us.lightning.meta/lightning/js_cmp_body.htm "These are useful and common patterns for working with a component’s body in JavaScript.")

## Code Examples

```
<aura:component>
    <!--START BODY-->
    <div>Body part</div>
    <lightning:button label="Push Me" onclick="{!c.doSomething}"/>
    <!--END BODY-->
</aura:component>
```

```
<aura:component>
    <aura:set attribute="body">
        <!--START BODY-->
        <div>Body part</div>
        <lightning:button label="Push Me" onclick="{!c.doSomething}"/>
        <!--END BODY-->
    </aura:set>
</aura:component>
```

```
<lightning:tabset>
    <lightning:tab label="Tab 1">
        Hello world!
    </lightning:tab>
</lightning:tabset>
```

```
<lightning:tabset>
    <lightning:tab label="Tab 1">
        <aura:set attribute="body">
            Hello World!
        </aura:set>
    </lightning:tab>
</lightning:tabset>
```

## Related Topics

- aura:set (atlas.en-us.lightning.meta/lightning/ref_set_intro.htm)
- Working with a Component Body in JavaScript (atlas.en-us.lightning.meta/lightning/js_cmp_body.htm)
