---
title: "getUserInfoResult"
domain: api
topic: getuserinforesult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.343Z
estimatedTokens: 1055
keywords: [getUserInfoResult, getUserInfo, call]
---

# getUserInfoResult

> The getUserInfo()  call returns a GetUserInfoResult object.

# getUserInfoResult

The getUserInfo() call returns a GetUserInfoResult object.

See [getUserInfo()](atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo.htm "Retrieves personal information for the user associated with the current session.") .

| Name | Type | Description |
| --- | --- | --- |
| accessibilityMode | boolean | Available in API version 7.0 and later. Indicates whether user interface modifications for the visually impaired are on (true) or off (false). The modifications facilitate the use of screen readers such as JAWS. |
| chatterExternal | boolean | Type of user license assigned to the Profile associated with the user. Indicates whether a user is part of the org or external. Available in API 40.0 and later. |
| currencySymbol | string | Currency symbol to use for displaying currency values. Applicable only when organizationMultiCurrency is false. |
| organizationId | ID | ID of the organization. Allows third-party tools to uniquely identify individual organizations in Salesforce, which is useful for retrieving billing or organization-wide setup information. |
| organizationMultiCurrency | boolean | Indicates whether the user’s organization uses multiple currencies (true) or not (false). |
| organizationName | string | Name of the user’s organization or company. |
| orgDefaultCurrencyIsoCode | string | Default currency ISO code. Applicable only when organizationMultiCurrency is false. When the logged-in user creates any objects that have a currency ISO code, the API uses this currency ISO code if it is not explicitly specified in the create() call. |
| orgDefaultCurrencyLocale | string | Default currency formatting. Applicable only when orgDefaultCurrencyIsoCode is used. |
| profileID | ID | ID of the profile associated with the role currently assigned to the user. |
| roleID | ID | Role ID of the role currently assigned to the user. |
| sessionSecondsValid | int | The number of seconds before the session expires, starting from the last update time.Available in API version 21.0 and later. |
| userDefaultCurrencyIsoCode | string | Default currency ISO code. Applicable only when organizationMultiCurrency is true. When the logged-in user creates any objects that have a currency ISO code, the API uses this currency ISO code if it is not explicitly specified in the create() call. |
| userEmail | string | User’s email address. |
| userFullName | string | User’s full name. |
| userID | ID | User ID. |
| userLanguage | string | User’s language, which controls the language for labels displayed in an application. String is 2-5 characters long. The first two characters are always an ISO language code, for example “fr” or “en.” If the value is further qualified by country, then the string also has an underscore (_) and another ISO country code, for example “US” or “UK. For example, the string for the United States is “en_US”, and the string for French Canadian is “fr_CA.”For a list of the languages that Salesforce supports, see the Salesforce online help topic “What languages does Salesforce support?” |
| userLocale | string | User’s locale, which controls the formatting of dates and choice of symbols for currency. The first two characters are always an ISO language code, for example “fr” or “en.” If the value is further qualified by country, then the string also has an underscore (_) and another ISO country code, for example “US” or “UK. For example, the string for the United States is “en_US”, and the string for French Canadian is “fr_CA.” |
| userName | string | User’s login name. |
| userTimeZone | string | User’s time zone. |
| userType | string | Type of user license assigned to the Profile associated with the user. |
| userUiSkin | string | Available in API version 7.0 and later. Possible values are:theme3—If the user is using the Salesforce Classic 2010 user interface theme, also known as the Aloha interfacetheme2—If the user is using the Salesforce Classic 2005 user interface themetheme1—If the user is using the oldest user interface theme (obsolete)In the online app, this look and feel setting is configurable from Setup by entering User Interface in the Quick Find box, then selecting User Interface. See User Interface Themes. |

## Related Topics

- getUserInfo() (atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo.htm)
- User
                    Interface Themes (atlas.en-us.api.meta/api/sforce_api_partner_themes.htm)
