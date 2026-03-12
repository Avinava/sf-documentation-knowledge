---
title: "DescribeAppMenuResult"
domain: api
topic: describeappmenuresult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.972Z
estimatedTokens: 415
keywords: [DescribeAppMenuResult, describeAppMenu, call, menu, items, contained, DescribeAppMenuItem]
---

# DescribeAppMenuResult

> The describeAppMenu() call returns a list of menu
    items contained in the specified menu type.

# DescribeAppMenuResult

The describeAppMenu() call returns a list of menu items contained in the specified menu type.

The following types are available in API version 29.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| appMenuItems | DescribeAppMenuItem[] | Array of one or more menu items in the selected menu type. |

## DescribeAppMenuItem

Each DescribeAppMenuItem object has these fields:

| Name | Type | Description |
| --- | --- | --- |
| colors | DescribeColor[] | Array of color information used for the tab associated with the menu item. |
| content | string | Information that helps build the menu item. Each menu item has a different type of content for this field. For example, the Salesforce app menu type could contain:FlexiPage—the ID of the Lightning pageVisualforce tab—the URL to the page, such as /apex/myApexPage.Menu items of types other than these don’t use this field. |
| icons | DescribeColor[] | Array of icon information used for the tab associated with the menu item. |
| label | string | The display label of the menu item. |
| name | string | API name of the menu item. |
| type | string | The type of menu item, and its subtype, if any. Possible values for the Salesforce app menu type are:Standard.Dashboards—Dashboards menu itemStandard.Feed—Chatter feed menu itemStandard.Today—the Today menu itemStandard.Tasks—Tasks menu itemTab.apexPage—a Visualforce tab menu itemTab.flexipage—a Lightning page tab menu item |
| url | string | The Salesforce URL the menu item should point to.For the Salesforce app menu type, this field is null for the Dashboards, Feed, Today, Tasks, and Lightning page menu items. |
