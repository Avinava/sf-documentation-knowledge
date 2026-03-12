---
title: "Basic Structure of the XMD JSON File"
domain: bi-dev-guide-xmd
topic: basic-structure-of-the-xmd-json-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.772Z
estimatedTokens: 301
keywords: [Basic, Structure, XMD, JSON, File, block, dataset, design, easier, debug, specific, behavior, maintain, consistent, usage]
---

# Basic Structure of the XMD JSON File

> The XMD file is in JSON format. It contains a block of parameters for each dataset
  field. This design makes it easier to debug specific field behavior and maintain consistent syntax
  usage, and it streamlines the generation process. XMD doesn’t support empty strings.

# Basic Structure of the XMD JSON File

The XMD file is in JSON format. It contains a block of parameters for each dataset field. This design makes it easier to debug specific field behavior and maintain consistent syntax usage, and it streamlines the generation process. XMD doesn’t support empty strings.

The file uses this structure.

```

```

The dataset field specifies the dataset to which the XMD applies. CRM Analytics sets and maintains this parameter internally. Do not modify it.

For descriptions of the fields, see [Extended Metadata (XMD) Reference](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference.htm#bi_xmd_reference "You can modify the XMD file to customize the formatting of dataset fields and field values that appear in Analytics lenses and dashboard widgets."). To learn how to structure and format the XMD parameters for different purposes, see the [use cases](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_formatting_dataset_fields_and_values.htm#bi_xmd_formatting_dataset_fields_and_values "These topics explore some common uses of XMD. Almost all of the XMD functionality is now supported in the UI for CRM Analytics dashboards and lenses.").

## Code Examples

```
{
  "dataset": {},
  "dates": [],
  "dimensions": [],
  "derivedDimensions": [],
  "measures": [],
  "derivedMeasures": [],
  "organizations": [],
  "showDetailsDefaultFields": []
}
```

## Related Topics

- Extended Metadata (XMD) Reference (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference.htm)
- use cases (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_formatting_dataset_fields_and_values.htm)
