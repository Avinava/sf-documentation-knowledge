---
title: "describeAppMenu()"
domain: api
topic: describeappmenu
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.968Z
estimatedTokens: 357
keywords: [describeAppMenu, Retrieves, metadata, items, either, Salesforce, mobile, app, navigation, menu, dropdown, Code, Sample—Java, Arguments, Faults]
---

# describeAppMenu()

> Retrieves metadata about items either in the Salesforce mobile app navigation menu or
        the Salesforce dropdown app menu.

# describeAppMenu()

Retrieves metadata about items either in the Salesforce mobile app navigation menu or the Salesforce dropdown app menu.

This call is available in API version 29.0 and later.

If you’re accessing the API using a custom community URL, the describeAppMenu() call retrieves the tab set associated with the community ID you specify.

## Syntax

```

```

## Code Sample—Java

This code sample shows how to get the menu items from the Salesforce mobile app navigation menu.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| appMenuType | string | Restricts the menu data returned to the specified menu type.Valid values are:AppSwitcher—to retrieve the data from the Salesforce dropdown app menuSalesforce1—to retrieve the data from the Salesforce mobile app navigation menuNetworkTabs—to retrieve the data from a community tab set |
| networkId | ID | If the appMenuType is set to NetworkTabs, enter the ID of the community to retrieve the tab set from. If appMenuType is not NetworkTabs, this field must be null or empty. |

## Response

[DescribeAppMenuResult](atlas.en-us.api.meta/api/sforce_api_calls_describeappmenuresult.htm "The describeAppMenu() call returns a list of menu items contained in the specified menu type.")

## Faults

[InvalidOrNullForRestrictedPicklist](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#invalidornullforrestrictedpicklist)

## Code Examples

```
DescribeAppMenuResult describeResult = connection.describeAppMenu(String appMenuType, String networkId);
```

```apex
public void describeAppMenu() {
    try {
        //The following two lines are equivalent
        DescribeAppMenuResult describe = connection.describeAppMenu("Salesforce1", "");
        DescribeAppMenuResult appMenu = getClient().describeAppMenu(AppMenuType.Salesforce1);

        for (DescribeAppMenuItem menuItem : appMenu.getAppMenuItems()) {

            if (menuItem.getType() == "Tab.apexPage") {

                String visualforceUrl = menuItem.getContent();

                System.out.println("URL to Visualforce page: " + visualforceUrl);

            }

        }

    } catch (ConnectionException ce) {
        ce.printStackTrace();
    }
}
```

## Related Topics

- DescribeAppMenuResult (atlas.en-us.api.meta/api/sforce_api_calls_describeappmenuresult.htm)
- InvalidOrNullForRestrictedPicklist (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
