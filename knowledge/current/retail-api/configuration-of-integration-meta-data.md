---
title: "Configuration of Integration Meta Data"
domain: retail-api
topic: configuration-of-integration-meta-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.248Z
estimatedTokens: 1611
keywords: [Configuration, Integration, Meta, Data, dimensions, export, columns, filters, conditions, CSV, exports, Examples, sources]
---

# Configuration of Integration Meta Data

> The integration meta configuration defines dimensions, export columns, filters, or
  conditions for CSV exports.

# Configuration of Integration Meta Data

The integration meta configuration defines dimensions, export columns, filters, or conditions for CSV exports.

Before creating an integration meta configuration entry in RTR Report Configuration", the Salesforce integration dimension meta configuration must be created, saved, and synchronized to off-platform.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

If additional custom period is enabled for a salesorg, then the property enableForCustomTimeLevel: true should be added to the export configuration.

You can create CSV export integration metadata configuration by adding new report configuration entry to RTR Report Configurations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

**It is mandatory to include the key fields of each dimension in the exported columns when exporting a CSV file of the report.**

For CSV export reports, provide the following inputs:
| Attribute | Description |
| --- | --- |
| Information Internal Name | A unique internal name of the integration metadata configuration. |
| Configuration Usage | Integration Metadata. |
| Configuration of sales org | The sales organization to which the product belongs. |
| Configuration Reporting KPI Set | The KPI set connected to measure dimension. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

When you trigger an inbound integration data source, ensure that you specify the calendaryear instead of businessyear in the request parameters. For more information, see [Triggering CSV Exports](atlas.en-us.retail_api.meta/retail_api/rtr_triggering_csv_exports.htm "Use the Triggering CSV Exports API to trigger CSV exports simultaneously. The CSV exports are generated asynchronously.").

## Examples of the supported data sources

Examples of different supported data sources are listed in this section. Such a meta JSON must be saved to off-platform in order to enable CSV export. A meta JSON consists of the following blocks:

-   datasources:

    Inbound datasources:

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

    #### Note

    Inbound data source meta configuration supports only accountdimension and kpidimension. If other dimensions are configured, then they are ignored.

    -   PromotionTacticDailyMeasureReal
    -   PromotionTacticWeeklyMeasureReal
    -   DailyRealData
    -   DailyIntData
    -   ProductMeasures
    -   AccountMeasures
    -   AccountProductMeasures
    -   WeeklyMeasureReal
    -   WeeklyMeasureInt

    Writeback datasources:

    -   AccountAndPromotionMeasures
    -   PromotionMeasures
    -   PromotionAndTacticMeasures
    -   PromotionMeasuresWithBOMComponents
    -   PromotionAndTacticMeasuresWithBOMComponents

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

    #### Note

    See [Triggering the CSV Export Process](https://developer.salesforce.com/docs/atlas.en-us.260.0.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/rtr_triggering_csv_export_process.htm) for more information.

-   dimensions:

    Specifies dimensions to fetch data based on the selected data source:

    -   accountdimension: Retrieves Salesforce data from CGCloud\_\_Account\_Extension\_\_c
    -   promotiondimension: Retrieves Salesforce data from CGCloud\_\_Promotion\_\_c
    -   tacticdimension: Retrieves Salesforce data from CGCloud\_\_Tactic\_\_c
    -   productdimension: Retrieves Salesforce data from Product2
    -   kpidimension: Specifies the KPIs that are exported. The KPIs that are calculated based on the KPI set defined in the report configuration are available for the export.
    -   timedimension: Specifies how to define the time dimension, by default, it’s fixed to the business year.
        -   includetotal: true or false (include the total value of the KPI)
        -   splitweeks: true (only valid for weekly or custom period) or false
        -   period: weekly, monthly, custom, customweek, and custommonth. An additional custom period-enabled salesorg supports only custom, customweek, and custommonth whereas a custom period-enabled salesorg supports custom and monthly period types only. An org using a standard calendar supports only weekly and monthly period types.

            ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

            #### Note

            For period type customweek/custommonth, it is mandatory to include the timedimension.StartDate as the first timedimension column.


-   exportsettings:

    Specifies columns to generate in CSV file and CSV separator.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

    #### Note

    Export columns is not supported for inbound data sources. This means exportsettings.columns should not be specified in the export meta configuration.

    -   columns: Array of strings referencing dimension attributes.

        dimensionname.attribute must exist in the corresponding dimension. the allowed accessors for timedimension:

        -   timedimension.label
        -   timedimension.StartDate
        -   timedimension.EndDate
        -   timedimension.yearnumber

        The allowed accessors for kpidimension:

        -   kpidimension.label
        -   kpidimension.measurecode
        -   kpidimension.name

        Spread operator: The last column requires spread operator on either a kpidimension or timedimension accessor.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

        #### Note

        When spread operator is used on kpidimension as the last column, accessors of kpidimension can’t be used in columns before. When spread operator is used on timedimension as the last column, accessors of timedimension can’t be used in columns before.

    -   Separator: The string specifying CSV separator. The allowed separators are:
        -   ,
        -   |
        -   ;
        -   :

-   exportfilters:

    Specifies conditions to apply when export process fetches data from Salesforce dimensions.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

    #### Note

    For inbound data sources, filtering is supported only on accountdimension.

## Related Topics

- Triggering CSV
     Exports (atlas.en-us.retail_api.meta/retail_api/rtr_triggering_csv_exports.htm)
