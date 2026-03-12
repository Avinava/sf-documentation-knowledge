---
title: "Make Your Lightning Page Components Width-Aware with lightning:flexipageRegionInfo"
domain: lightning
topic: make-your-lightning-page-components-width-aware-with-lightningflexipageregioninf
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.142Z
estimatedTokens: 312
keywords: [Lightning, Components, Width-Aware, flexipageRegionInfo, add, component, region, App, Builder, sub-component, passes, width, parent, strategic, CSS]
---

# Make Your Lightning Page Components Width-Aware with lightning:flexipageRegionInfo

> When you add a component to a region on a page in the Lightning App
      Builder, the lightning:flexipageRegionInfo sub-component
      passes the width of that region to its parent component. With lightning:flexipageRegionInfo and some strategic CSS, you can tell the parent
      component to render in different ways in different regions at runtime.

# Make Your Lightning Page Components Width-Aware with lightning:flexipageRegionInfo

When you add a component to a region on a page in the Lightning App Builder, the lightning:flexipageRegionInfo sub-component passes the width of that region to its parent component. With lightning:flexipageRegionInfo and some strategic CSS, you can tell the parent component to render in different ways in different regions at runtime.

For example, the List View component renders differently in a large region than it does in a small region as it’s a width-aware component.

![List view in large and small regions](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Flab_width_aware_comps.png&folder=lightning)

Valid region width values are: Small, Medium, Large, and Xlarge.

You can use CSS to style your component and to help determine how your component renders. Here’s an example.

This simple component has two fields, field1 and field2. The component renders with the fields side by side, filling 50% of the region’s available width when not in a small region. When the component is in a small region, the fields render as a list, using 100% of the region’s width.

```

```

Here’s the CSS file that goes with the component.

```

```

## Code Examples

```
<aura:component implements="flexipage:availableForAllPageTypes">
    <aura:attribute name="width" type="String"/>
    <lightning:flexipageRegionInfo width="{!v.width}"/>
    <div class="{! 'container' + (v.width=='SMALL'?' narrowRegion':'')}">
        <div class="{! 'eachField f1' + (v.width=='SMALL'?' narrowRegion':'')}">
            <lightning:input name="field1" label="First Name"/>
        </div>
        <div class="{! 'eachField f2' + (v.width=='SMALL'?' narrowRegion':'')}">
            <lightning:input name="field2" label="Last Name"/>
        </div>
    </div>
</aura:component>
```

```
.THIS .eachField.narrowRegion{
    width:100%;
}
.THIS .eachField{
    width:50%;
    display:inline-block;
}
```
