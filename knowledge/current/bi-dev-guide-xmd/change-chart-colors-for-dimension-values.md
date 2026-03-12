---
title: "Change Chart Colors for Dimension Values"
domain: bi-dev-guide-xmd
topic: change-chart-colors-for-dimension-values
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.747Z
estimatedTokens: 529
keywords: [Change, Chart, Colors, Dimension, customize, stacked, bar, column, waterfall, specify, measure, two, groups, color, donut]
---

# Change Chart Colors for Dimension Values

> You can customize the colors of dimension values in a stacked bar, stacked column, or
    stacked waterfall chart. If you specify one measure and two groups, you can also customize the
    color for donut, funnel, treemap, stacked pyramid, line, and timeline charts.

# Change Chart Colors for Dimension Values

You can customize the colors of dimension values in a stacked bar, stacked column, or stacked waterfall chart. If you specify one measure and two groups, you can also customize the color for donut, funnel, treemap, stacked pyramid, line, and timeline charts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

#### Note

The customizations described in this topic can now be configured using the CRM Analytics UI. It is no longer necessary to edit by modifying the XMD file. For the UI instructions, see [Change the Labels and Colors of Dataset Dimension Values](https://help.salesforce.com/articleView?id=bi_datasets_dimension_value_labels_colors_change.htm&language=en_US "HTML (New Window)") and [View and Configure Dataset Columns](https://help.salesforce.com/articleView?id=bi_explorer_dataset_fields.htm&language=en_US)

This example shows a bar chart with default colors.

![Default colors](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi-xmdnocustomcolors.png&folder=bi_dev_guide_xmd)

Custom colors are specified in the chartColor section of the XMD file. If you have a large XMD file, you can do a text search to find the appropriate chartColor section.

For example, the bold text in this XMD snippet shows how to change the colors for the true and false values of the Stage\_IsAdvanced dimension. The XMD snippet is located in the dimension section of the XMD file.

```

```

Here’s how the color customization appears in the chart.

![Default colors](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi-xmdwithcustomcolors.png&folder=bi_dev_guide_xmd)

#### See Also

-   [Dimensions and Derived Dimensions in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dimensions.htm "You can add an action menu to a dimension value in Analytics lens and dashboard charts and tables. Users can then open a record and perform record-level actions. The available XMD parameters are the same for dimensions and derived dimensions.")

## Code Examples

```
"conditionalFormatting":{  
            "chartColor":{  
               "parameters":{  
                  "values":[  
                     {  
                        "formatValue":"#E8963B",
                        "value":"false"
                     },
                     {  
                        "formatValue":"#3AE867",
                        "value":"true"
                     }
                  ]
               },
               "referenceField":"Stage_IsAdvanced",
               "type":"categories"
            }
```

## Related Topics

- Dimensions and Derived Dimensions in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dimensions.htm)
