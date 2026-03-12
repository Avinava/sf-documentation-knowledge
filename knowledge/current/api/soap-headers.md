---
title: "SOAP Headers"
domain: api
topic: soap-headers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.895Z
estimatedTokens: 589
keywords: [SOAP, API, client, applications]
---

# SOAP Headers

> The API provides SOAP headers to client applications.

# SOAP Headers

The API provides SOAP headers to client applications.

| Header | Description |
| --- | --- |
| AllOrNoneHeader | Specifies whether a call rolls back all changes unless all records are processed successfully. This header is available in API version 20.0 and later. |
| AllowFieldTruncationHeader | Specifies the truncation behavior for some field types in API version 15.0 and later. |
| AssignmentRuleHeader | Specifies the assignment rule to use when creating or updating an Account, Case, or Lead. |
| CallOptions | Specifies the call options for an API request. |
| DebuggingHeader | Returns the debug log in the output header, DebuggingInfo, and specifies the level of detail in the debug log. |
| DisableFeedTrackingHeader | Specifies whether the changes made in the current call are tracked in feeds. |
| DuplicateRuleHeader | Determines options for using duplicate rules to detect duplicate records. Duplicate rules are part of the Duplicate Management feature. |
| EmailHeader | Sends an email notification when a request is processed. Provides equivalent functionality for the Salesforce user interface. |
| LimitInfoHeader | A response header returned from calls to SOAP API. This header returns limit information for the organization. Use this header to monitor your API limits as you make calls against the organization. |
| LocaleOptions | Specifies the language of the labels returned. The value must be a valid user locale (language and country), such as de_DE or en_GB. For more information on locales, see the Language field on the CategoryNodeLocalization object. |
| LoginScopeHeader | Specifies the organization ID so that you can authenticate Self-Service users for your organization using the login() call. |
| MruHeader | Indicates whether to update the list of most recently used items (true) or not (false). |
| OwnerChangeOptions | Specifies ownership of attachments and notes. |
| PackageVersionHeader | Specifies the package version for each installed managed package in API version 16.0 and later. |
| QueryOptions | Specifies the batch size for query results. |
| SessionHeader | Specifies the session ID returned from the login server after a successful login(). |
| UserTerritoryDeleteHeader | Specifies a user to whom open opportunities are assigned when the current owner is removed from a territory. |

## Related Topics

- AllOrNoneHeader (atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm)
- AllowFieldTruncationHeader (atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm)
- AssignmentRuleHeader (atlas.en-us.api.meta/api/sforce_api_header_assignmentruleheader.htm)
- CallOptions (atlas.en-us.api.meta/api/sforce_api_header_calloptions.htm)
- DebuggingHeader (atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm)
- DisableFeedTrackingHeader (atlas.en-us.api.meta/api/sforce_api_header_disablefeedtracking.htm)
- DuplicateRuleHeader (atlas.en-us.api.meta/api/sforce_api_header_duplicateruleheader.htm)
- EmailHeader (atlas.en-us.api.meta/api/sforce_api_header_emailheader.htm)
- LimitInfoHeader (atlas.en-us.api.meta/api/sforce_api_header_limitinfo.htm)
- LocaleOptions (atlas.en-us.api.meta/api/sforce_api_header_localeheader.htm)
