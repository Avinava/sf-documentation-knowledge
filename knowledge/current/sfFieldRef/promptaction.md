---
title: "PromptAction"
domain: sfFieldRef
topic: promptaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.728Z
estimatedTokens: 457
keywords: [PromptAction, how, user, interacted, in-app, guidance, prompt, walkthrough, API, version, 46.0, later]
---

# PromptAction

> Represents how the user interacted with the in-app guidance prompt or
         walkthrough. Available in API version 46.0 and later.

# PromptAction

Represents how the user interacted with the in-app guidance prompt or walkthrough. Available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PromptAction](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_promptaction.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Prompt Action ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastDisplayDate | Last Display Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastResult | Last Result | picklist |  | 255 |  |  |
| LastResultDate | Last Result Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PromptVersionId | Prompt Version ID | reference |  | 18 |  |  |
| SnoozeUntil | Snooze Until | datetime |  |  |  |  |
| StepCount | Step Count | int | 9 |  |  |  |
| StepNumber | Step Number | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimesActionTaken | Times Action Taken | int | 9 |  |  |  |
| TimesDismissed | Times Dismissed | int | 9 |  |  |  |
| TimesDisplayed | Times Displayed | int | 9 |  |  |  |
| TimesSnoozed | Times Snoozed | int | 9 |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
