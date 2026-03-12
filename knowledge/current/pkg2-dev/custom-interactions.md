---
title: "Custom Interactions"
domain: pkg2-dev
topic: custom-interactions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.983Z
estimatedTokens: 1118
keywords: [Custom, Interactions, understand, features, components, subscriber, interacted, how, they, flow, user, journey, Apex, enums, Successful]
---

# Custom Interactions

> To understand which features and UI components a subscriber interacted with and how they
  flow through a user journey, create custom interactions with Apex enums and the IsvPartners.AppAnalytics.logCustomInteraction Apex
  method.

# Custom Interactions

To understand which features and UI components a subscriber interacted with and how they flow through a user journey, create custom interactions with Apex enums and the IsvPartners.AppAnalytics.logCustomInteraction Apex method.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


| Standard Data | Supplemental Data |
| --- | --- |
| class_namemethod_nameline_numberinteraction_id_token | api_version |

## Successful Custom Interactions

To analyze a custom interaction with your packaged components, look for a log\_record\_type of CustomInteraction and a custom\_entity\_type of CustomInteractionLabel. The custom\_entity contains a custom interaction label that you created and that was logged.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

interaction\_id\_token is included only if an interaction\_id was provided to the associated IsvPartners.AppAnalytics.logCustomInteraction call. interaction\_id\_token is a hashed, tokenized version of the raw interaction id that was provided.

## Unsuccessful Custom Interactions

When custom\_entity\_type is equal to CustomInteractionFailure then the custom interaction couldn’t be logged. To determine the reason for the failed logging, review the reason code provided by the custom\_entity value.

| custom_entity | Message |
| --- | --- |
| LABEL_NO_NAMESPACE | We couldn’t log the custom interaction with App Analytics. The interaction label provided to IsvPartners.AppAnalytics.logCustomInteraction must have a namespace. |
| LABEL_NOT_ENUM | We couldn’t log the custom interaction with App Analytics. The interaction label provided to IsvPartners.AppAnalytics.logCustomInteraction must be an Apex enum. |
| LABEL_WRONG_NAMESPACE | We couldn’t log the custom interaction with App Analytics. The interaction label provided to IsvPartners.AppAnalytics.logCustomInteraction must have the same namespace as the Apex code that called the method. |
| OVER_CALL_LIMIT | IsvPartners.AppAnalytics.logCustomInteraction was called too many times in a single user request. This custom interaction and subsequent ones for this user request weren’t logged with App Analytics. |

## Example

Let’s look at an example package usage log record and analyze a successful Apex interaction.

```

```

The MyInteractionLabels.LoginButtonClicked custom interaction label was logged as a custom interaction as a result of a user action from subscriber org MyCustomer Inc on 2023-09-20 at 6:17 am. Specifically, the user interaction resulted in logging a custom interaction from line number 56 of the loginButtonCallback method found in the Acme.MyController Apex class. In addition to the InteractionLabels.LoginButtonClicked label, an interaction ID was provided to the log call resulting in an interaction token id value of 7NDe8HM8ZgPdBL+jiOpTW3/xKTwwL30dyxmKNxtyzi8=.

The key data in this analysis are:

| Question | Field | Value |
| --- | --- | --- |
| What | class_namecustom_entitycustom_entity_typepackage_version_idmanaged_package_namespaceclass_namemethod_nameline_numberinteraction_id_token | Acme.MyControllerMyInteractionLabels.LoginButtonClickedCustomInteractionLabel04txx0000004IdiAcmeloginButtonCallback567NDe8HM8ZgPdBL+jiOpTW3/xKTwwL30dyxmKNxtyzi8= |
| Who | organization_iduser_id_token | 00Dxx0000006H2l005-9BwnBWYO5FMn4cZ1sLw7F3LmTpoe8M77GrZOZHL6xQk= |
| How | log_record_type | CustomInteraction |
| When | timestamp_derived | 2023-09-20T06:17:39.167Z |

#### See Also

-   [Download Package Usage Logs, Package Usage Summaries, and Subscriber Snapshots](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_download_mp_logs.htm "To request package usage logs, monthly package usage summaries, and subscriber snapshots, use the AppAnalyticsQueryRequest object. Usage logs, usage summaries, and subscriber snapshots are downloadable comma-separated value (.csv) files.")

-   [Considerations for Custom Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_interactions.htm#app_analytics_custom_interactions "Easily create and log custom interactions on your managed package using Apex. As subscribers interact with your package and your Apex code is executed, the custom interactions that you defined are logged. Retrieve your custom interactions in your package's AppExchange App Analytics usage logs and usage summaries.")

## Code Examples

```
{
    "timestamp_derived": "2023-09-20T06:17:39.167Z",
    "log_record_type": "CustomInteraction",
    "request_id": "TID:7635077000004b3035",
    "organization_id": "00Dxx0000006H2l",
    "organization_name": "MyCustomer Inc.",
    "organization_status": "Demo",
    "organization_edition": "Enterprise Edition",
    "organization_country_code": "IN",
    "organization_language_locale": "en_US",
    "organization_time_zone": "Australia/Sydney",
    "organization_instance": "GS0",
    "organization_type": "Production",
    "user_id_token": "005-9BwnBWYO5FMn4cZ1sLw7F3LmTpoe8M77GrZOZHL6xQk=",
    "user_type": "Standard",
    "package_id": "033xx0000004FqD",
    "package_version_id": "04txx0000004Idi",
    "managed_package_namespace": "Acme",
    "custom_entity": "MyInteractionLabels.LoginButtonClicked",
    "custom_entity_type": "CustomInteractionLabel",
    "session_key": "2l4YtFB/RmsRKVsS",
    "login_key": "fGV6RgVOH3ZCgl2v",
    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/IP_ADDRESS_REMOVED Safari/537.36",
    "user_country_code": "US",
    "user_time_zone": "America/Los_Angeles",
    "class_name": "Acme.MyController",
    "method_name": "loginButtonCallback",
    "line_number": 56,
    "interaction_id_token": "7NDe8HM8ZgPdBL+jiOpTW3/xKTwwL30dyxmKNxtyzi8="
}
```

## Related Topics

- Download Package Usage Logs, Package Usage Summaries, and Subscriber Snapshots (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_download_mp_logs.htm)
- Considerations for Custom Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_interactions.htm)
