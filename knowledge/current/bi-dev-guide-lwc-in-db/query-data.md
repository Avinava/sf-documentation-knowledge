---
title: "Query Data"
domain: bi-dev-guide-lwc-in-db
topic: query-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.460Z
estimatedTokens: 593
keywords: [Query, Data, Let’s, how, inject, results, running, Lightning, Web, Component, code]
---

# Query Data

> Let’s learn how to inject query results into your running Lightning Web Component
        code.

# Query Data

Let’s learn how to inject query results into your running Lightning Web Component code.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_lwc_in_db)

#### Note

This doesn't apply to custom Lightning web components in Lightning dashboards as they don't query data.

To start, modify your Hello World component to use a step by setting hasStep to true in the js-meta.xml.

```

```

Add the results wiring into your .js file.

```

```

To view the query results as text, update your .html file.

```

```

Deploy the changes to your component to your org. Refresh your dashboard to pick up any updates to the component code. After refreshing the dashboard, edit the dashboard and click your component. You’re now prompted to select a data source. You can select a dataset to create a query or select an existing query. Make your selection and watch the query results appear in your dashboard.

#### See Also

-   [Component Attributes](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_attributes.htm "You can convert any Lightning Web Component into a CRM Analytics Lightning Web Component by adding specific attributes.")

-   [CRM Analytics Configuration](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_config.htm "Now that the Lightning Web Component code is ready to go, it’s time to bring the component into a CRM Analytics dashboard.")

-   [Lightning Dashboards Configuration (Beta)](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_lightning_dashboard_config.htm "Lightning dashboards provide a flexible way to visualize your data. By default, dashboards include standard components such as charts, tables, and gauges. However, you can extend their capabilities by adding custom Lightning Web Components (LWC).")

-   [Other Widgets](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_other.htm "The Hello World example is a simplified scenario. The most common real world use cases are a custom data visualization, a selection widget, or even better, a widget that does both. With practice, you can add anything you want. To see a list, a third-party data visualization integration, a hierarchy, and more widgets, check out the example GitHub repository.")

## Code Examples

```
<hasStep>true</hasStep>
```

```
import { LightningElement, api } from 'lwc';

export default class HelloWorld extends LightningElement {
    @api title;

    @api results;

    get stringResults() {
        return JSON.stringify(this.results)
    }
}
```

```
<template>
    Hello World: {title}
    Results: {stringResults}
</template>
```

## Related Topics

- Component Attributes (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_attributes.htm)
- CRM Analytics Configuration (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_config.htm)
- Lightning Dashboards Configuration (Beta) (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_lightning_dashboard_config.htm)
- Other Widgets (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_other.htm)
