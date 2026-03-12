---
title: "Edit org-readiness.json"
domain: bi-dev-guide-wave-templates
topic: edit-org-readinessjson
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.501Z
estimatedTokens: 172
keywords: [Edit, org-readiness.json, file, configures, validations, run, user, org, ensure, app, successfully]
---

# Edit org-readiness.json

> The org-readiness.json file configures the
  validations to run on a user org to ensure it can create an app successfully.

# Edit org-readiness.json

The org-readiness.json file configures the validations to run on a user org to ensure it can create an app successfully.

The org readiness file defines the values to use for validation, the template requirements for the org with success and failure messages to display to the user, and the validation definitions. The evaluated result of each definition is stored in the template context as Readiness\['<definition\_name>'\].

```

```

#### See Also

-   [org-readiness.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_org_readiness_json_attributes.htm "The org-readiness.json file attributes are:")

## Code Examples

```
{
  "values" : {
    "Sentiment_Analysis_transformField": {
       "sobjectName": "Case",
       "fieldName": "Description"
     },
     "Sentiment_Analysis_dataset_sourceObjectAdditionalFields" : [ ]
  },
  "templateRequirements": [
    {
      "expression": "${Readiness['Total Accounts'] > Variables.MinimumNumberOfAccounts}",
      "type": "SobjectRowCount",
      "successMessage": "Congratulations! The expected number of accounts matched!",
      "failMessage": "Sorry, you don't have enough accounts, you need at least ${Variables.MinimumNumberOfAccounts} accounts in your org.",
      "tags": [ "Account" ],
      "image": { "name": "sales.png" }
    }
  ],
  "definition": {
    "Total Accounts": {
      "type": "SobjectRowCount",
      "sobject": "Account"
    }
  }
}
```

## Related Topics

- org-readiness.json Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_org_readiness_json_attributes.htm)
