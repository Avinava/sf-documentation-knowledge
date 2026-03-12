---
title: "Aura Component Bundle Design Resources"
domain: lightning
topic: aura-component-bundle-design-resources
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.096Z
estimatedTokens: 2402
keywords: [Aura, Component, Bundle, Design, Resources, resource, control, attributes, exposed, builder, tools, Lightning, App, Experience, Flow]
---

# Aura Component Bundle Design Resources

> Use a design resource to control which attributes are exposed
      to builder tools like the Lightning App Builder, Experience Builder, or Flow
      Builder. A design resource lives in the same folder as your .cmp
      resource, and describes the design-time behavior of the Aura component—information that
      visual tools need to display the component in a page or app.

# Aura Component Bundle Design Resources

Use a design resource to control which attributes are exposed to builder tools like the Lightning App Builder, Experience Builder, or Flow Builder. A design resource lives in the same folder as your .cmp resource, and describes the design-time behavior of the Aura component—information that visual tools need to display the component in a page or app.

For example, here’s a simple design resource that goes in a bundle with a “Hello World” component. We’ll build on this example as we move through the supported tags and attributes.

```

```

## design:component

This is the root element for the design resource. It contains the component’s design-time configuration for tools such as the App Builder to use.

| Attribute | Description |
| --- | --- |
| label | Sets the label of the component when it displays in tools such as App Builder.When creating a custom Lightning page template component, this text displays as the name of the template in the Lightning App Builder new page wizard. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Label expressions in markup are supported in .cmp and .app resources only.

## design:attribute

To make an Aura component attribute available for admins to edit in tools such as the App Builder, add a design:attribute node for the attribute into the design resource. An attribute marked as required in the component definition automatically appears, unless it has a default value assigned to it.

For Lightning page interfaces, the design resource supports only attributes of type Integer, String, or Boolean. To see which attribute types the lightning:availableForFlowScreens interface supports, go to [Which Custom Lightning Component Attribute Types Are Supported in Flows?](atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_map.htm "Not all custom Lightning component data types are supported in flows. You can map only these types and their associated collection types between flows and custom Lightning components.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

In a design:attribute node, Flow Builder supports only the name, label, description, and default attributes. The other attributes, like min and max, are ignored.

| Attribute | Description |
| --- | --- |
| aiDescription | (Beta) AI-related description of the attribute, used by Agentforce to help analyze the component. Supported only in orgs that have Setup with Agentforce (Beta) enabled. |
| datasource | Renders a field as a picklist, with static values. Only supported for String attributes.<design:attribute name="Name" datasource="value1,value2,value3" />You can also set the picklist values dynamically using an Apex class. See Create Dynamic Picklists for Your Custom Components for more information.Any String attribute with a datasource in a design resource is treated as a picklist. |
| default | Sets a default value on an attribute in a design resource.<design:attribute name="Name" datasource="value1,value2,value3" default="value1" /> |
| description | Displays as an i-bubble for the attribute in the tool. |
| label | Attribute label that displays in the tool. |
| max | If the attribute is an Integer, this sets its maximum allowed value. If the attribute is a String, this is the maximum length allowed. |
| min | If the attribute is an Integer, this sets its minimum allowed value. If the attribute is a String, this is the minimum length allowed. |
| name | Required attribute. Its value must match the aura:attribute name value in the .cmp resource. |
| placeholder | Input placeholder text for the attribute when it displays in the tool. |
| required | Denotes whether the attribute is required. If omitted, defaults to false. |
| type | The design attribute’s data type. Color is the only valid value.The Color type displays a color picker in Experience Builder. Applies only to components that implement the forceCommunity:availableForAllPageTypes interface.Supported only for aura:attribute elements of type String in the .cmp resource.Use the default attribute to specify RGBA, RGB, or hex strings. For example:<design:attribute type="Color" name="buttonColor" default="rgba(0, 255, 255, 1)" /> |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Label expressions in markup are supported in .cmp and .app resources only.

## <design:suppportedFormFactors> and <design:suppportedFormFactor>

Use these tag sets to designate which devices your component supports. The design:suppportedFormFactor subtag supports the type attribute. Valid type values are Large (desktop) and Small (phone).

If you don’t declare form factor support for a component, then by default, it supports the same form factors as the page types that it’s assigned to. App and record pages support the Large and Small form factors. Home pages support only the Large form factor.

Components on app and record pages can render on both mobile and desktop because those pages support both phone and desktop. Components on Home pages can render only on desktop because Home pages are supported only for desktop.

If you have an app or record page—which support both desktop and phone—you can use design:suppportedFormFactor to configure a component to render only when the page is viewed on a particular device. For example, if you restrict form factor support for your app page component to Small, the app page drops the component when the page is viewed on desktop. The app page displays the component when the page is viewed on a phone.

Here’s the “Hello World” component design resource, with both desktop and phone support added.

```

```

You can add this tag set to your component design file to create custom page templates that support only desktop, only phone, or both.

## <sfdc:objects> and <sfdc:object>

Use these tag sets to restrict your component to one or more objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

<sfdc:objects> and <sfdc:object> aren’t supported in Experience Builder or the Flow Builder. They’re also ignored when setting a component to use as an object-specific action or to override a standard action.

Here’s the same “Hello World” component’s design resource restricted to two objects.

```

```

If an object is installed from a package, add the namespace\_\_ string to the beginning of the object name when including it in the <sfdc:object> tag set. For example: objectNamespace\_\_ObjectApiName\_\_c.

These tag sets don't support external objects.

See the [User Interface API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm "HTML (New Window)") for the list of supported objects.

## <design:ai> and <design:description> (Beta)

Use these tag sets to add an AI description to your component and make it accessible to Agentforce in Setup. Supported only for record pages in orgs that have Setup with Agentforce (Beta) enabled. For more information about the Setup with Agentforce beta program, see [Streamline Administrative Tasks with Setup with Agentforce (Beta)](https://help.salesforce.com/s/articleView?id=release-notes.rn_setup_with_agentforce_beta.htm&release=260&language=en_US).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Setup with Agentforce is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

In Setup, Agentforce can analyze and recommend custom components when creating a new Lightning page as a result of a user utterance. For Agentforce to analyze if your custom component fits the requirements outlined in the user’s utterance, your component must contain an AI-related description of what it does as well as descriptions of its attributes.

These descriptions aren't user-facing. Agentforce uses them as part of its analysis of the component for inclusion in agent-generated Lightning pages. AI component descriptions can be up to 4,000 characters. See [Tips for Writing AI Component Descriptions](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-agentforce-tips.html) in the Lightning Web Components Developer Guide.

Specify the design:ai tag only once inside a .design file. The design:ai tag contains one design:description tag.

To add an AI-related property description, use the aiDescription attribute on the design:attribute tag.

Here’s the same “Hello World” component with AI-related component and attribute descriptions.

```

```

#### See Also

-   [Configure Components for Lightning Pages and the Lightning App Builder](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm "There are a few steps to take before you can use your custom Aura components in either Lightning pages or the Lightning App Builder.")

-   [Tips and Considerations for Configuring Components for Lightning Pages and the Lightning App Builder](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_tips.htm "Keep these guidelines in mind when creating components and component bundles for Lightning pages and the Lightning App Builder.")

## Code Examples

```
<design:component label="Hello World">
    <design:attribute name="subject" label="Subject" description="Name of the person you want to greet" />
    <design:attribute name="greeting" label="Greeting" />
</design:component>
```

```
<design:component label="Hello World">
    <design:attribute name="subject" label="Subject" description="Name of the person you want to greet" />
    <design:attribute name="greeting" label="Greeting" />
    <design:supportedFormFactors>
        <design:supportedFormFactor type="Large"/>
        <design:supportedFormFactor type="Small"/>
    </design:supportedFormFactors>
</design:component>
```

```
<design:component label="Hello World">
    <design:attribute name="subject" label="Subject" description="Name of the person you want to greet" />
    <design:attribute name="greeting" label="Greeting" />
    <design:supportedFormFactors>
        <design:supportedFormFactor type="Large"/>
        <design:supportedFormFactor type="Small"/>
    </design:supportedFormFactors>
    <sfdc:objects>
        <sfdc:object>Custom__c</sfdc:object>
        <sfdc:object>Opportunity</sfdc:object>
    </sfdc:objects>
</design:component>
```

```
<design:component label="Hello World">
    <design:attribute name="subject" label="Subject" description="Name of the person you want to greet"/>
    <design:attribute name="greeting" label="Greeting"/>
    <design:supportedFormFactors>
        <design:supportedFormFactor type="Large"/>
        <design:supportedFormFactor type="Small"/>
    </design:supportedFormFactors>
    <sfdc:objects>
        <sfdc:object>Custom__c</sfdc:object>
        <sfdc:object>Opportunity</sfdc:object>
    </sfdc:objects>
    <design:ai>
        <design:description>This component displays a greeting that's addressed to the name in the subject property.
        </design:description>
   </design:ai>
   <design:attribute name="myAttributeName" aiDescription="AI property description"/>
</design:component>
```

## Related Topics

- Which Custom Lightning Component Attribute Types Are Supported in Flows? (atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_map.htm)
- Create Dynamic Picklists for Your Custom Components (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_dynamic_picklists.htm)
- Configure Components for Lightning Pages and the Lightning App Builder (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm)
- Tips and Considerations for Configuring Components for Lightning Pages and the Lightning App Builder (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_tips.htm)
