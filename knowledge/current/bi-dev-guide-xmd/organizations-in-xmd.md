---
title: "Organizations in XMD"
domain: bi-dev-guide-xmd
topic: organizations-in-xmd
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.807Z
estimatedTokens: 309
keywords: [Organizations, XMD, datasets, combine, records, multiple, Salesforce, orgs, map, their, URLs, Analytics, uses, mappings, locate]
---

# Organizations in XMD

> If your datasets combine records from multiple Salesforce orgs, map Salesforce orgs to
    their URLs. Analytics uses these mappings to locate a record in a multi-org environment. The
    organizations section is used for opening links, not performing Salesforce actions.

# Organizations in XMD

If your datasets combine records from multiple Salesforce orgs, map Salesforce orgs to their URLs. Analytics uses these mappings to locate a record in a multi-org environment. The organizations section is used for opening links, not performing Salesforce actions.

This example shows the parameters for the organizations XMD parameter. The ID uses the 18-character format.

```

```

The organizations section can have the following parameters.

| Parameter | Description |
| --- | --- |
| id | Org ID, up to 18 charactersExample: "id": "00DV0025306tGV5MAM" |
| label | Display name for the Salesforce org, up to 40 characters.Example: "label": "Org1" |
| instanceUrl | The org’s My Domain login URL.Example: "instanceUrl": "https://MyDomainName.my.salesforce.com" |

#### See Also

-   [Add Actions to Dimensions](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_add_record_level_actions.htm "Set up record-level actions on a dimension so that dashboard viewers can perform actions directly from a CRM Analytics chart or table. Each action applies to a single Salesforce record, such as creating a task for an opportunity record. You can also create an action to open the Salesforce record or a URL.")

## Code Examples

```
"organizations": [
  {
    "id": "00DB00000003brXMAQ",
    "instanceUrl": "https://westregion.my.salesforce.com",
    "label": "West Region Org"
  },
  {
    "id": "00DB0000000pqd1MAA",
    "instanceUrl": "https://eastregion.my.salesforce.com",
    "label": "East Region Org"
  },
  {
    "id": "00DB0000000paacMAA",
    "instanceUrl": "https://southregion.my.salesforce.com",
    "label": "South Region Org"
  },
  {
    "id": "00DB00000001234MAA",
    "instanceUrl": "https://northregion.my.salesforce.com",
    "label": "North Region Org"
  }
 ]
```

## Related Topics

- Add Actions to Dimensions (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_add_record_level_actions.htm)
