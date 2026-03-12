---
title: "Hide Dataset Fields from the Explorer and Dashboard
    Designer"
domain: bi-dev-guide-xmd
topic: hide-dataset-fields-from-the-explorer-and-dashboard-designer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.814Z
estimatedTokens: 495
keywords: [Hide, Dataset, Explorer, Dashboard, Designer, users, can’t, select, building, queries, dashboards]
---

# Hide Dataset Fields from the Explorer and Dashboard
    Designer

> By default, all dataset fields are available in the UI. But you can hide fields so that
    users can’t select them when building queries and dashboards.

# Hide Dataset Fields from the Explorer and Dashboard Designer

By default, all dataset fields are available in the UI. But you can hide fields so that users can’t select them when building queries and dashboards.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

#### Note

Although hidden fields aren’t available in the interface, users can still manually add them in dashboard JSON and SAQL queries. Users can also access the fields with the CRM Analytics REST API.

For example, the Opportunity.StageName field appears in the explorer.

![When creating a grouping  in explorer, you can see the Opportunity.StageName dataset field.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_field_show_true.png&folder=bi_dev_guide_xmd)

To hide the field, modify the XMD as shown in the following text.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

#### Note

To show the field, set **showInExplorer** to **true**.

After applying the change, the field is no longer available for selection.

![The Opportunity.StageName dataset field is no longer available.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_field_show_false.png&folder=bi_dev_guide_xmd)

#### See Also

-   [Dimensions and Derived Dimensions in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dimensions.htm "You can add an action menu to a dimension value in Analytics lens and dashboard charts and tables. Users can then open a record and perform record-level actions. The available XMD parameters are the same for dimensions and derived dimensions.")

-   [Measures and Derived Measures in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm "You can specify the format and multiplier for each measure. The XMD parameters are the same for measures and derived measures.")

## Code Examples

```
"dimensions": [{
		"field": "Opportunity.StageName",
		"showInExplorer": false
	}],
```

## Related Topics

- Dimensions and Derived Dimensions in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dimensions.htm)
- Measures and Derived Measures in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm)
