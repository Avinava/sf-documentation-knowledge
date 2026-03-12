---
title: "Gift Campaign Default Designations Output"
domain: edu-cloud-dev-guide
topic: gift-campaign-default-designations-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.033Z
estimatedTokens: 116
keywords: [Gift, Campaign, Designations, Output, representation, associated, record]
---

# Gift Campaign Default Designations Output

> Output representation of a list of default designations associated with a gift campaign
    record.

# Gift Campaign Default Designations Output

Output representation of a list of default designations associated with a gift campaign record.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| campaignDefaultDesignations | Gift Campaign Default Designation Record Output[] | List of default gift designations associated with a gift campaign record. | Small, 59.0 | 59.0 |

## Code Examples

```
{{
   "campaignDefaultDesignations":[
      {
         "designationId":"6gdRM000000000LYAQ",
         "designationName": "Default Designation",
         "percent":50
      },
      {
         "designationId":"6gdxx000004WhULAA0",
         "designationName": "Other Designation",
         "percent":50
      }
   ]
}
```

## Related Topics

- Gift Campaign Default Designation Record
                Output (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_gift_campaign_default_designation_record_output.htm)
