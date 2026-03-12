---
title: "Component Attributes"
domain: bi-dev-guide-lwc-in-db
topic: component-attributes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.434Z
estimatedTokens: 855
keywords: [Component, Attributes, convert, any, Lightning, Web, CRM, Analytics, adding, specific]
---

# Component Attributes

> You can convert any Lightning Web Component into a CRM Analytics Lightning Web Component
        by adding specific attributes.

# Component Attributes

You can convert any Lightning Web Component into a CRM Analytics Lightning Web Component by adding specific attributes.

The Lightning Web Component framework requires a special tag to know your component is compatible for use in CRM Analytics dashboards. Let’s start by adding this XML to your js-meta.xml file:

```

```

The target attribute informs the designer UI that this widget is compatible with CRM Analytics and Lightning dashboards, and allows the component to show up in the component selector. This stage in the process is also a good time to make sure your component widget is visible. To enable visibility, check out this line in the js-meta.xml:

```

```

Now any dashboard author can add your widget after it’s published to an org, but you also want to expose configuration options. To do that, create an attribute:

```

```

Here, you set hasStep to false because you aren’t using any query data. You’re adding a single attribute title, which is type String, so that the dashboard author can type any free text to configure. Set required="true" so that authors can’t make blank components. When you’re done, the whole file looks something like:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_lwc_in_db)

#### Note

In Lightning dashboards, the <hasStep> tag is always set to false since the custom Lightning web components don't query any data.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_lwc_in_db)

#### Note

Your API version can be different so that it matches the version of the Salesforce org that you’re developing your Lightning Web Component for.

To wire up the component, start by adding these attributes with @api annotations in your .js file. After you add them, the .js file looks like:

```

```

You don’t use any custom logic in this example, so no additional code is needed. You do need your component to say hello, so edit the HTML template in the .html file.

```

```

#### See Also

-   [CRM Analytics Configuration](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_config.htm "Now that the Lightning Web Component code is ready to go, it’s time to bring the component into a CRM Analytics dashboard.")

-   [Lightning Dashboards Configuration (Beta)](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_lightning_dashboard_config.htm "Lightning dashboards provide a flexible way to visualize your data. By default, dashboards include standard components such as charts, tables, and gauges. However, you can extend their capabilities by adding custom Lightning Web Components (LWC).")

-   [Query Data](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_query_data.htm "Let’s learn how to inject query results into your running Lightning Web Component code.")

-   [Other Widgets](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_other.htm "The Hello World example is a simplified scenario. The most common real world use cases are a custom data visualization, a selection widget, or even better, a widget that does both. With practice, you can add anything you want. To see a list, a third-party data visualization integration, a hierarchy, and more widgets, check out the example GitHub repository.")

## Code Examples

```
<targets>
    <target>analytics__Dashboard</target>
</targets>
```

```
<isExposed>true</isExposed>
```

```
<targetConfigs>
    <targetConfig targets="analytics__Dashboard">
        <hasStep>false</hasStep>
        <property name="title" type="String" label="Title" description="Title of the component" required="true" />
    </targetConfig>
</targetConfigs>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>53.0</apiVersion>
    <isExposed>true</isExposed>
      
    <masterLabel>Hello LWC</masterLabel>
    <description>Test project for LWC.</description>
      
    <targets>
        <target>analytics__Dashboard</target>
    </targets>
      
    <targetConfigs>
        <targetConfig targets="analytics__Dashboard">
            <hasStep>false</hasStep>
            <property name="title" type="String" label="Title" description="Title of the component" required="true" />
        </targetConfig>
    </targetConfigs>
</LightningComponentBundle>
```

```
import { LightningElement, api } from 'lwc';

export default class HelloWorld extends LightningElement {
    @api title;
}
```

## Related Topics

- CRM Analytics Configuration (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_config.htm)
- Lightning Dashboards Configuration (Beta) (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_lightning_dashboard_config.htm)
- Query Data (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_query_data.htm)
- Other Widgets (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_other.htm)
