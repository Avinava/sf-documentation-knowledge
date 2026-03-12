---
title: "Create a Custom Lightning Page Template Component"
domain: lightning
topic: create-a-custom-lightning-page-template-component
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.130Z
estimatedTokens: 2061
keywords: [Custom, Lightning, Template, Component, Every, standard, associated, page’s, regions, components, includes, let, templates, fit, business]
---

# Create a Custom Lightning Page Template Component

> Every standard Lightning page is associated with a default template component, which
    defines the page’s regions and what components the page includes. Custom Lightning page template
    components let you create page templates to fit your business needs with the structure and
    components that you define. Once implemented, your custom template is available in the Lightning
    App Builder’s new page wizard for your page creators to use.

# Create a Custom Lightning Page Template Component

Every standard Lightning page is associated with a default template component, which defines the page’s regions and what components the page includes. Custom Lightning page template components let you create page templates to fit your business needs with the structure and components that you define. Once implemented, your custom template is available in the Lightning App Builder’s new page wizard for your page creators to use.

Custom Lightning page template components are supported for record pages, app pages, and Home pages. Each page type has a different interface that the template component must implement.

-   lightning:appHomeTemplate
-   lightning:homeTemplate
-   lightning:recordHomeTemplate

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Each template component should implement only one template interface. Template components shouldn’t implement any other type of interface, such as flexipage:availableForAllPageTypes or force:hasRecordId. A template component can’t multi-task as a regular component. It’s either a template, or it’s not.

The following steps show you how to build the template component structure for an app page, followed by adding a design resource to configure the template regions and components. After completing these steps, you can create a Lightning page in the Lightning App Builder using the [Lightning page template](https://help.salesforce.com/s/articleView?id=platform.lightning_page_templates.htm&type=5&language=en_US) that you configured.

## 1\. Build the Template Component Structure

A custom template is an Aura component bundle that should include at least a .cmp resource and a design resource. The .cmp resource must implement a template interface, and declare an attribute of type Aura.Component\[\] for each template region. The Aura.Component\[\] type defines the attribute as a collection of components.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The Aura.Component\[\] attribute is interpreted as a region only if it’s also specified as a region in the design resource.

Here’s an example of a two-column app page template .cmp resource that uses the lightning:layout component and the Salesforce Lightning Design System (SLDS) for styling.

When the template is viewed on a desktop, its right column takes up 30% (4 SLDS columns). The left column takes up the remaining 70% of the page width. On non-desktop form factors, the columns display as 50/50.

```

```

The description attribute on the aura:component tag is optional, but recommended. If you define a description, it displays as the template description beneath the template image in the Lightning App Builder new page wizard.

## 2\. Configure Template Regions and Components in the Design Resource

The design resource controls what kind of page can be built on the template. The design resource specifies:

-   What regions a page that uses the template must have.
-   What kinds of components can be put into the page’s regions.
-   How much space the component takes on the page based on the type of device that it renders on.
-   What device form factors the component supports.

Regions inherit the interface assignments that you set for the overall page, as set in the .cmp resource.

Specify regions and components using these tags:

flexipage:template

This tag has no attributes and acts as a wrapper for the flexipage:region tag. Text literals are not allowed.

flexipage:region

This tag defines a region on the template and has these attributes. Text literals are not allowed.

| Attribute | Description |
| --- | --- |
| name | The name of an attribute in the .cmp resource marked type Aura.Component[]. Flags the attribute as a region. |
| label | The label of your region. This label appears in the template switching wizard in the Lightning App Builder when users map region content to a new template. |
| defaultWidth | Specifies the default width of the region. This attribute is required for all regions. Valid values are: Small, Medium, Large, and Xlarge. |

flexipage:formfactor

Use this tag to specify how much space the component takes on the page based on the type of device that it renders on. Add this tag as a child of the flexipage:region tag. Use multiple flexipage:formfactor tags per flexipage:region to define flexible behavior across form factors.

| Attribute | Description |
| --- | --- |
| type | The type of form factor or device the template renders on, such as a desktop or tablet. Valid values are: Medium (tablet), and Large (desktop). Because the only reasonable width value for a Small form factor (phone) is Small, you don’t have to specify a Small type. Salesforce takes care of that association automatically. |
| width | The available size of the area that the component in this region has to render in. Valid values are: Small, Medium, Large, and Xlarge. |

For example, in this code snippet, the region has a large width to render in when the template is rendered on a large form factor. The region has a small width to render in when the template is rendered on a medium form factor.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

You can use the lightning:flexipageRegionInfo subcomponent to pass region width information to a component. Doing so lets you configure your page components to render differently based on what size region they display in.

Here’s the design file that goes with the sample .cmp resource. The label text in the design file displays as the name of the template in the new page wizard.

```

```

![Lightning page template selection](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Flab_template_wizard.png&folder=lightning)

Specify supported devices for an app or record page template component with the <design:suppportedFormFactors\> tag set. When you create a custom template component for an app page, you must assign it both the Large (desktop) and Small (phone) form factors.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Home pages support the Large form factor only.

Here’s the same app page template design file, with support configured for both desktop and phone.

```

```

## 3\. (Optional) Add a Template Image

If you added a description to your .cmp resource, both it and the template image display when a user selects your template in the Lightning App Builder new page wizard.

You can use an SVG resource to define the custom template image.

![Custom template description and image](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Flab_custom_template_desc_svg.png&folder=lightning)

We recommend that your SVG resource is no larger than 150 KB, and no more than 160 px high and 560 px wide.

#### See Also

-   [Aura Component Bundle Design Resources](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_design_files.htm "Use a design resource to control which attributes are exposed to builder tools like the Lightning App Builder, Experience Builder, or Flow Builder. A design resource lives in the same folder as your .cmp resource, and describes the design-time behavior of the Aura component—information that visual tools need to display the component in a page or app.")

-   [Lightning Page Template Component Best Practices](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_template_component_tips.htm "Keep these best practices and limitations in mind when creating Lightning page template components.")

-   [Make Your Lightning Page Components Width-Aware with lightning:flexipageRegionInfo](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_width_aware.htm "When you add a component to a region on a page in the Lightning App Builder, the lightning:flexipageRegionInfo sub-component passes the width of that region to its parent component. With lightning:flexipageRegionInfo and some strategic CSS, you can tell the parent component to render in different ways in different regions at runtime.")

## Code Examples

```
<aura:component implements="lightning:appHomeTemplate" description="Main column
 and right sidebar. On a phone, the regions are of equal width">
    <aura:attribute name="left" type="Aura.Component[]" />
    <aura:attribute name="right" type="Aura.Component[]" />

    <div>
        <lightning:layout>
            <lightning:layoutItem flexibility="grow"
                                  class="slds-m-right_small">
                {!v.left}
            </lightning:layoutItem>
            <lightning:layoutItem size="{! $Browser.isDesktop ? '4' : '6' }"
                                  class="slds-m-left_small">
                {!v.right}
            </lightning:layoutItem>
        </lightning:layout>
    </div>
    
</aura:component>
```

```
<flexipage:region name="right" label="Right Region" defaultWidth="Large">
    <flexipage:formfactor type="Large" width="Large" /> 
    <flexipage:formfactor type="Medium" width="Small" />
</flexipage:region>
```

```
<design:component label="Two Region Custom App Page Template">
    <flexipage:template >
        <!-- The default width for the "left" region is "MEDIUM". In tablets,
        the width is "SMALL" -->
            <flexipage:region name="left" label="Left Region" defaultWidth="MEDIUM">
                <flexipage:formfactor type="MEDIUM" width="SMALL" />
            </flexipage:region>
            <flexipage:region name="right" label="Right Region" defaultWidth="SMALL" />
       </flexipage:template>
</design:component>
```

```
<design:component label="Two Region Custom App Page Template">
    <flexipage:template >
        <!-- The default width for the "left" region is "MEDIUM". In tablets,
        the width is "SMALL" -->
            <flexipage:region name="left" label="Left Region" defaultWidth="MEDIUM">
                <flexipage:formfactor type="MEDIUM" width="SMALL" />
            </flexipage:region>
            <flexipage:region name="right" label="Right Region" defaultWidth="SMALL" />
       </flexipage:template>
       <design:supportedFormFactors>
        <design:supportedFormFactor type="Small"/>
        <design:supportedFormFactor type="Large"/>
    </design:supportedFormFactors>
</design:component>
```

## Related Topics

- Aura Component Bundle Design Resources (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_design_files.htm)
- Lightning Page Template Component Best Practices (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_template_component_tips.htm)
- Make Your Lightning Page Components Width-Aware with lightning:flexipageRegionInfo (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_width_aware.htm)
