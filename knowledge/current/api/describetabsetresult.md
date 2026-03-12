---
title: "DescribeTabSetResult"
domain: api
topic: describetabsetresult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.240Z
estimatedTokens: 297
keywords: [DescribeTabSetResult, describeTabs, call, array, objects]
---

# DescribeTabSetResult

> The describeTabs() call returns an array of
    DescribeTabSetResult objects.

# DescribeTabSetResult

The describeTabs() call returns an array of DescribeTabSetResult objects.

A DescribeTabSetResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| description | string | The description for this standard or custom app. |
| label | string | The display label for this standard or custom app. This value changes when tabs are renamed in the Salesforce user interface. See Salesforce Help for more information. |
| logoUrl | string | A fully qualified URL to the logo image associated with the standard or custom app. |
| namespace | string | If using a custom app, and a set of tabs in the custom app was installed as part of a managed package, the value of this attribute is the developer namespace prefix that the creator of the package chose when the Developer Edition organization was enabled to allow publishing a managed package. This attribute identifies elements of a AppExchange package. |
| selected | boolean | If true, then this standard or custom app is the user’s currently selected app in Salesforce Classic. |
| tabs | DescribeTab | An array of tabs that are displayed for the specified standard app or custom app. |

## Related Topics

- DescribeTab (atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult_describetab.htm)
