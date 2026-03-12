---
title: "Extended Metadata (XMD) Reference"
domain: bi-dev-guide-xmd
topic: extended-metadata-xmd-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.782Z
estimatedTokens: 669
keywords: [Extended, Metadata, XMD, modify, file, customize, formatting, dataset, appear, Analytics, lenses, dashboard, widgets]
---

# Extended Metadata (XMD) Reference

> You can modify the XMD file to customize the formatting of dataset fields and field
    values that appear in Analytics lenses and dashboard widgets.

# Extended Metadata (XMD) Reference

You can modify the XMD file to customize the formatting of dataset fields and field values that appear in Analytics lenses and dashboard widgets.

Any fields in the XMD that aren’t described in this document aren’t supported and must not be customized. Configuring unsupported fields might cause unexpected behavior. You also can’t export XMD. When saving XMD files, use UTF-8 format to be sure that Analytics visualizations correctly display international characters.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

#### Note

Almost all of the XMD functionality is now supported in the UI for editing datasets and lenses. The **Edit Dataset** page allows you to customize actions for the dataset, and the **Lenses Dataset Fields** section allows you to customize other actions.

-   **[Dates in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dates.htm)**
    Specify date conventions for Analytics dashboards and lenses.
-   **[Dimensions and Derived Dimensions in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dimensions.htm)**
    You can add an action menu to a dimension value in Analytics lens and dashboard charts and tables. Users can then open a record and perform record-level actions. The available XMD parameters are the same for dimensions and derived dimensions.
-   **[Measures and Derived Measures in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm)**
    You can specify the format and multiplier for each measure. The XMD parameters are the same for measures and derived measures.
-   **[Organizations in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_organizations.htm)**
    If your datasets combine records from multiple Salesforce orgs, map Salesforce orgs to their URLs. Analytics uses these mappings to locate a record in a multi-org environment. The organizations section is used for opening links, not performing Salesforce actions.
-   **[ShowDetailsDefaultFields in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_showDetailsDefaultFields.htm)**
    Specify the default fields that appear in a Analytics values table. You can override the defaults and show other fields when you create a values table.

#### See Also

-   [Configure the XMD for a Dataset](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_edit.htm "You can configure the XMD file to override the default appearance of dataset fields and field values and to add actions to dimensions in charts and tables. Each dataset has a separate XMD file.")

## Related Topics

- Dates in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dates.htm)
- Dimensions and Derived Dimensions in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dimensions.htm)
- Measures and Derived Measures in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm)
- Organizations in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_organizations.htm)
- ShowDetailsDefaultFields in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_showDetailsDefaultFields.htm)
- Configure the XMD for a Dataset (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_edit.htm)
