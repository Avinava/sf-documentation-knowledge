---
title: "Configure the XMD for a Dataset"
domain: bi-dev-guide-xmd
topic: configure-the-xmd-for-a-dataset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.758Z
estimatedTokens: 782
keywords: [Configure, XMD, Dataset, file, override, appearance, add, actions, dimensions, charts, tables, separate]
---

# Configure the XMD for a Dataset

> You can configure the XMD file to override the default appearance of dataset
                  fields and field values and to add actions to dimensions in charts and tables.
                  Each dataset has a separate XMD file.

# Configure the XMD for a Dataset

You can configure the XMD file to override the default appearance of dataset fields and field values and to add actions to dimensions in charts and tables. Each dataset has a separate XMD file.

| Available in Salesforce Classic and Lightning Experience. |
| --- |
| Available with CRM Analytics, which is available for an extra cost in Enterprise, Performance, and Unlimited Editions. Also available in Developer Edition. |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

#### Note

While you can edit the XMD, you can’t export it.

| User Permissions Needed |
| --- |
| To edit the XMD: | Edit CRM Analytics Dataflows OR Upload External Data to CRM Analytics |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

#### Note

You can also use the XMD API endpoints to edit an XMD file. For more information, see the CRM Analytics REST API Developer Guide.

1.  Edit the dataset.
2.  Download the XMD file from the Edit page. If you download an old XMD version, CRM Analytics converts it to the current version.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

    #### Note

    CRM Analytics ignores settings that it’s unable to convert.

3.  Edit the file with a text editor.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bi_dev_guide_xmd)

    #### Tip

    To ensure that the JSON format is correct, validate it with a JSON editor.

4.  Save the file in UTF-8 format to ensure that CRM Analytics visualizations display international characters.
5.  Upload the updated file to the Edit page.

    CRM Analytics validates the XMD file. If the XMD isn’t valid, an error occurs and the updated XMD settings aren’t applied. All formatting reverts to the defaults.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

    #### Note

    Each time you upload the XMD file, CRM Analytics overwrites the current dataset customizations. Changes in the XMD aren’t appended to previous customizations. Therefore, ensure that your XMD file contains all required customizations.

    The validation rules and related errors are in the [Extended Metadata (XMD) 2.0 Validation Rules and Errors](https://help.salesforce.com/articleView?id=Extended-Metadata-XMD-2-0-Validation-Rules-and-Errors&type=1&language=en_US) knowledge article.


If the dataset metadata changes after you configure the XMD, such as a field is deleted or renamed as a result of changes to the dataflow, you must update the associated XMD. For example, if the XMD refers to the old field names, errors occur when you try to configure actions using the UI. The error also appears in the errorMessage field in the XMD file.

#### See Also

-   [Extended Metadata (XMD) Reference](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference.htm "You can modify the XMD file to customize the formatting of dataset fields and field values that appear in Analytics lenses and dashboard widgets.")

## Related Topics

- Extended Metadata (XMD) Reference (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference.htm)
