---
title: "Change Display Labels for Dataset Fields and Values"
domain: bi-dev-guide-xmd
topic: change-display-labels-for-dataset-fields-and-values
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.753Z
estimatedTokens: 679
keywords: [Change, Display, Labels, Dataset, changes, affect, appearance, don’t, alter, underlying, data, stored, API]
---

# Change Display Labels for Dataset Fields and Values

> When you change display labels for fields and values, the changes affect only the
    appearance in the UI. The changes don’t alter the underlying data stored in the dataset or the
    API names of the fields.

# Change Display Labels for Dataset Fields and Values

When you change display labels for fields and values, the changes affect only the appearance in the UI. The changes don’t alter the underlying data stored in the dataset or the API names of the fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

#### Note

The customizations described in this topic can now be configured using the CRM Analytics UI. It’s no longer necessary to change the XMD file. For the UI instructions, see [Change the Labels and Colors of Dataset Dimension Values](https://help.salesforce.com/s/articleView?id=bi_datasets_dimension_value_labels_colors_change.htm&language=en_US "HTML (New Window)") and [View and Configure Dataset Columns](https://help.salesforce.com/s/articleView?id=bi_explorer_dataset_fields.htm&language=en_US).

You can customize display labels for:

-   Dimensions, derived dimensions, measures, and derived measures.
-   Values in dimensions and derived dimensions.

Consider these limitations:

-   You can’t customize date labels.
-   XMD doesn't update formatting for fields that are controlled by user input or context. Formatting can only be applied to a static or preset value.

The following sample chart shows field names and values as they’re stored in the dataset. ![Default colors](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi-xmdnocustomlabels.png&folder=bi_dev_guide_xmd)

Custom display labels for dimension field values are specified in the members section of the XMD file within the section you’re modifying (such as dimensions). If you have a large XMD file, you can do a text search to find the appropriate members section.

For example, the bold text in this XMD snippet shows how to change the labels for two values of the StageName field.

```

```

Here’s how the label customizations appear in the chart.

![Default colors](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi-xmdcustomlabels.png&folder=bi_dev_guide_xmd)

#### See Also

-   [Dimensions and Derived Dimensions in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dimensions.htm "You can add an action menu to a dimension value in Analytics lens and dashboard charts and tables. Users can then open a record and perform record-level actions. The available XMD parameters are the same for dimensions and derived dimensions.")

-   [Measures and Derived Measures in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm "You can specify the format and multiplier for each measure. The XMD parameters are the same for measures and derived measures.")

## Code Examples

```
"field":"StageName",
         "members":[  
            {  
               "label":"Closed (Lost)",
               "member":"Closed Lost"
            },
            {  
               "label":"Closed (Won)",
               "member":"Closed Won"
            }
         ],
```

## Related Topics

- Dimensions and Derived Dimensions in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dimensions.htm)
- Measures and Derived Measures in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm)
