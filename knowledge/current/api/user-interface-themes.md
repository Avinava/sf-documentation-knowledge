---
title: "User Interface Themes"
domain: api
topic: user-interface-themes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.834Z
estimatedTokens: 620
keywords: [User, Themes, Back, Winter, ’06, release, Salesforce, started, supporting, multiple, allowing, different, icons, colors, apply]
---

# User Interface Themes

> Back in the Winter ’06 release, Salesforce started supporting multiple user
  interface themes, allowing you to use different sets of icons and colors for the user interface.
  But these user interface themes do not apply when your org is using Lightning Experience.

# User Interface Themes

Back in the Winter ’06 release, Salesforce started supporting multiple user interface themes, allowing you to use different sets of icons and colors for the user interface. But these user interface themes do not apply when your org is using Lightning Experience.

| Available in: Salesforce Classic and earlier |
| --- |


Two user interface themes match the earlier iterations of Salesforce.

-   Theme3—The “Salesforce Classic 2010 user interface theme.” This interface was previously referred to as “Salesforce” or “new user interface theme.” You might also be familiar with it as the Salesforce Aloha interface.
-   Theme2—The “Salesforce Classic 2005 user interface theme.” This interface was previously referred to as “Salesforce Classic” or the “classic user interface theme.”

The [getUserInfo()](atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo.htm "Retrieves personal information for the user associated with the current session.") call returns a [getUserInfoResult](atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm "The getUserInfo() call returns a GetUserInfoResult object.") object, which includes the [userUiSkin](atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm#i1434461) property. This property informs you of the user’s current user interface theme.

Use the [describeQuickActions()](atlas.en-us.api.meta/api/sforce_api_calls_describequickactions.htm "Retrieves details about specified actions."), [describeTabs()](atlas.en-us.api.meta/api/sforce_api_calls_describetabs.htm "Returns information about the Salesforce Classic standard and custom apps available to the logged-in user."), and [describeTheme()](atlas.en-us.api.meta/api/sforce_api_calls_describetheme.htm "Returns information about themes available to the current logged-in user.") calls and their return types to get information on theme icons and colors.

Style sheets are available to mimic the look and feel of the older user interfaces. For more information, see Styling Visualforce Pages in the Visualforce Developer's Guide. But if you’re planning to switch to Lightning Experience, consider the Lightning Component framework, our new UI framework. See the “[Lightning Components](https://trailhead.salesforce.com/module/lex_dev_lc_basics "HTML (New Window)")” module in the [Develop for Lightning Experience](https://trailhead.salesforce.com/trail/lex_dev "HTML (New Window)") Trailhead trail to learn more.

## Related Topics

- getUserInfo() (atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo.htm)
- getUserInfoResult (atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm)
- userUiSkin (atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm)
- describeQuickActions() (atlas.en-us.api.meta/api/sforce_api_calls_describequickactions.htm)
- describeTabs() (atlas.en-us.api.meta/api/sforce_api_calls_describetabs.htm)
- describeTheme() (atlas.en-us.api.meta/api/sforce_api_calls_describetheme.htm)
