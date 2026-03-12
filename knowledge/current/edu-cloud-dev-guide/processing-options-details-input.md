---
title: "Processing Options Details Input"
domain: edu-cloud-dev-guide
topic: processing-options-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.844Z
estimatedTokens: 88
keywords: [Processing, Options, Input, representation, donor]
---

# Processing Options Details Input

> Input representation of the donor processing options.

# Processing Options Details Input

Input representation of the donor processing options.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| donor​Options | Donor Options Details Input | Donor processing options to create gift commitments. | Optional | 60.0 |

## Code Examples

```
{
  "processingOptions": {
    "donorOptions": {
      "defaultUpdateLogic": "update_all"
    }
  }
}
```

## Related Topics

- Donor Options
                        Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_donor_options_detail.htm)
