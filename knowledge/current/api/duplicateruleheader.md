---
title: "DuplicateRuleHeader"
domain: api
topic: duplicateruleheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.710Z
estimatedTokens: 596
keywords: [DuplicateRuleHeader, Determines, options, duplicate, rules, detect, records, part, Management, feature, API, Calls, Java, Sample]
---

# DuplicateRuleHeader

> Determines options for using duplicate rules to detect duplicate records. Duplicate
    rules are part of the Duplicate Management feature.

# DuplicateRuleHeader

Determines options for using duplicate rules to detect duplicate records. Duplicate rules are part of the Duplicate Management feature.

## API Calls

[create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data."), [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data."), [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.")

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| allowSave | boolean | For a duplicate rule, when the Alert option is enabled, bypass alerts and save duplicate records by setting this property to true. Prevent duplicate records from being saved by setting this property to false. |
| includeRecordDetails | boolean | Get fields and values for records detected as duplicates by setting this property to true. Get only record IDs for records detected as duplicates by setting this property to false. |
| runAsCurrentUser | boolean | Make sure that sharing rules for the current user are enforced when duplicate rules run by setting this property to true. Use the sharing rules specified in the class for the request by setting this property to false. If no sharing rules are specified, Apex code runs in system context and sharing rules for the current user are not enforced. |

## Java Sample

This sample shows how to use the DuplicateRuleHeader to set options for using duplicate rules. To see the entire sample application, see [DuplicateResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_duplicateresult.htm "HTML (New Window)").

```

```

#### See Also

-   [DuplicateResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_duplicateresult.htm "DuplicateResult - HTML (New Window)")

-   [DuplicateRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_duplicaterule.htm "DuplicateRule - HTML (New Window)")

## Code Examples

```
_DuplicateRuleHeader header = new _DuplicateRuleHeader();
        header.setAllowSave(false);
        header.setIncludeRecordDetails(true);
        header.setRunAsCurrentUser(true);

        binding.setHeader(new SforceServiceLocator().getServiceName().getNamespaceURI(), "DuplicateRuleHeader", header);
```

## Related Topics

- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- upsert() (atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm)
