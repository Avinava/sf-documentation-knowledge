---
title: "steps JSON"
domain: bi-dev-guide-json
topic: steps-json
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.282Z
estimatedTokens: 1047
keywords: [steps, JSON, key, CRM, Analytics, dashboard, separate, node, step, define, query, control, behavior, whether, facet]
---

# steps JSON

> The steps key defines all steps available in a
        CRM  Analytics dashboard. It contains a separate node for each step. Each step node has
        properties that define the query or list of static values. It also contains properties that
        control the behavior of the step, like whether to facet the step. The properties and JSON
        syntax vary based on the step type and whether the step is in compact form or SAQL
        form.

# steps JSON

The steps key defines all steps available in a CRM Analytics dashboard. It contains a separate node for each step. Each step node has properties that define the query or list of static values. It also contains properties that control the behavior of the step, like whether to facet the step. The properties and JSON syntax vary based on the step type and whether the step is in compact form or SAQL form.

-   **[aggregateflex Step Type Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_aggregateflex.htm)**
    Use the aggregateflex step type to perform aggregate queries on a Analytics dataset. An aggregate query summarizes rows, like returning one row per grouping. For example, this step type can return the total amount per sales rep.
-   **[apex Step Type Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_apex.htm#bi_dbjson_steps_types_apex)**
    Use to include custom Apex functionality in a dashboard to access Salesforce platform features that aren’t inherently supported in Analytics. For example, pull in data using any API, manipulate data using your Apex classes, or apply simple case statements or complex machine learning. You can even harness AppExchange for things like integrating Twitter with Analytics—all in a way that is familiar.
-   **[columns Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_columns.htm)**
    Use the columns property to add a column to a step query source in Compact form 2.0.
-   **[grain Step Type Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_grain.htm)**
    Use the grain step type for a values table. Values tables have no groupings, just a list of dataset fields to display as columns in the table.
-   **[saql Step Type Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_saql.htm)**
    Use the saql step type for special cases when querying a Analytics dataset. With this step type, you can write a custom SAQL query to create derived fields in a values table. You can specify dimensions without groupings. Also, you can bind the dataset name or entire query. For example, you can bind this step type to a static step that provides different SAQL queries or datasets based on a selection.
-   **[soql Step Type Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_soql.htm)**
    Use to directly query Salesforce objects—both standard and custom—to get Salesforce data that’s not available in datasets. You can also query external objects created with an OData adapter for Salesforce Connect. To view the results in the dashboard, the user viewing the dashboard must have access to the object and fields queried by the soql step. The SOQL query returns only records to which the user has access.
-   **[source Step Type Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_sources.htm)**
    Use the sources property to add columns, groups, filters, and formulas to a step query.
-   **[staticflex Step Type Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_staticflex.htm)**
    Use the staticflex step type to manually define your own set of data. For example, you can use this step to populate a list of static values in a toggle or list widget. It can also be used to provide values to a binding. For example, it can provide possible filters, groups, measures, sort order, and limits.
-   **[visualizationParameters Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_visualizationParameters_properties.htm)**
    The visualizationParameters key contains chart properties defined for the step. When you associate the step with a widget, the widget properties override these settings.
-   **[filters Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_filters.htm)**
    Use the filters property to add a filter to a step query. Although you can create filters for query steps in the user interface, you have to manually define filters for static steps in the dashboard JSON.

## Related Topics

- aggregateflex Step Type Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_aggregateflex.htm)
- apex Step Type Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_apex.htm)
- columns Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_columns.htm)
- grain Step Type Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_grain.htm)
- saql Step Type Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_saql.htm)
- soql Step Type Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_soql.htm)
- source Step Type Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_sources.htm)
- staticflex Step Type Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_staticflex.htm)
- visualizationParameters Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_visualizationParameters_properties.htm)
- filters Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_filters.htm)
