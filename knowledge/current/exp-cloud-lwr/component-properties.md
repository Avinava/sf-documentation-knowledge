---
title: "Component Properties"
domain: exp-cloud-lwr
topic: component-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.699Z
estimatedTokens: 563
keywords: [Component, Let’s, look, sample, code, Lightning, web, includes, four, editable, lightningCommunity__Page, tells, Experience, Builder, drag-and-drop]
---

# Component Properties

> Let’s look at some sample code for a Lightning web component that includes four
    editable properties. lightningCommunity__Page tells
    Experience Builder that this component is a drag-and-drop component. And the lightningCommunity__Default target is used to configure any
    design-time component properties for Experience Builder in its targetConfig.

# Component Properties

Let’s look at some sample code for a Lightning web component that includes four editable properties. lightningCommunity\_\_Page tells Experience Builder that this component is a drag-and-drop component. And the lightningCommunity\_\_Default target is used to configure any design-time component properties for Experience Builder in its targetConfig.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=exp_cloud_lwr)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

Always name your component properties using camel case, both in the .js file and the js-meta.xml file. Don’t capitalize the first letter because it can cause the component to break.

The default value of the property in the js-meta.xml file determines the out-of-the-box value of a component property.

If no default is provided, then we use the value of the corresponding @api variable in the .js file. This value can then be further edited via the component’s property panel in Experience Builder.

When the component is loaded, we attempt to coerce the current value of a component property to its specified JavaScript type in the js-meta.xml file. If there’s no corresponding property at all in the js-meta.xml file and the attribute only exists in the .js file, then the value isn’t coerced.

Component @api properties with values containing expression language syntax (for example, {!Route.recordId}) are only interpolated if there’s a corresponding design property config in the js-meta.xml file. See [Make a Component Aware of Its Context](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/use_context "HTML (New Window)") in the Lightning Web Components Developer Guide.

For multilingual sites, to make a String property translatable, define it as translatable=“true” in the js-meta.xml file. If you add a datasource attribute to the property—for example, to create a picklist—you can’t define that property as translatable=”true”.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="myComponent">
    <apiVersion>51.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Component Name</masterLabel>
    <description>Description of your component.</description>
    <targets>
        <target>lightningCommunity__Page</target>
        <target>lightningCommunity__Default</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightningCommunity__Default">
            <property type="String" name="stringProp" default="hello world"/>
            <property type="Integer" name="integerProp" default="314"/>
            <property type="Boolean" name="booleanProp" default="true"/>
            <property type="Color" name="colorProp" default="#333333"/>
            <property type="Picklist" name="picklistProp" datasource="item1,item2"/>
        </targetConfig>
    </targetConfigs>
</LightningComponentBundle>
```
