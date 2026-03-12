---
title: "Visualforce Interactions"
domain: pkg2-dev
topic: visualforce-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.005Z
estimatedTokens: 549
keywords: [Visualforce, Interactions, record, package, usage, log, custom_entity_type, VisualforcePage, interaction, packaged, pages, Requests]
---

# Visualforce Interactions

> Each record in your package usage log that has a custom_entity_type of VisualforcePage describes an
  interaction with your packaged Visualforce pages.

# Visualforce Interactions

Each record in your package usage log that has a custom\_entity\_type of VisualforcePage describes an interaction with your packaged Visualforce pages.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


## Visualforce Requests

When a user performs an action that results in a request associated with your VisualForce page, log\_record\_type equals VisualforceRequest. One standard field is always populated with data: url.

Visualforce page requests also have supplemental fields that are often populated. For example, a Visualforce page request sometimes also has request\_status and referrer\_uri data.

Use these fields to explore the details of the Visualforce request.

| Standard Data | Supplemental Data |
| --- | --- |
| url | request_statusreferrer_urirequest_statusresponse_size |

## Example

Let’s look at an example package usage log record and analyze the Visualforce request.

```

```

The Acme\_Agent\_List packaged component of type VisualforcePage was interacted with as a result of a user action from subscriber org MyCustomer Inc on 2022-11-22 at 6:23 am.

The key data in this analysis are:

| Question | Field | Value |
| --- | --- | --- |
| What | custom_entitycustom_entity_typepackage_version_idmanaged_package_namespace | Acme__Agent_ListVisualforcePage04txx0000004IdiAcme |
| Who | organization_iduser_id_token | 00Dxx0000006H2l005-9BwnBWYO5FMn4cZ1sLw7F3LmTpoe8M77GrZOZHL6xQk= |
| How | log_record_type | VisualforceRequest |
| When | timestamp_derived | 2022-11-22T06:23:23.836Z |

#### See Also

-   [Package Usage Logs Schema](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm "Make informed development decisions based on package usage log data. Analyze adoption, user behavior, company information, and Lightning app and page usage data. Package usage logs list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC.")

-   [Visualforce Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_intro.htm "Visualforce Developer Guide - HTML (New Window)")

## Code Examples

```
{
     "timestamp_derived": "2022-11-22T06:23:23.836Z",
     "log_record_type": "VisualforceRequest",
     "request_id": "4mbi9e1ZVef83tlq2Z5aAk",
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
     "url": "/apex/Acme__Agent_List",
     "package_id": "033xx0000004FqD",
     "package_version_id": "04txx0000004Idi",
     "managed_package_namespace": "Acme",
     "custom_entity": "/apex/Acme__Agent_List",
     "custom_entity_type": "VisualforcePage",
     "request_status": "S",
     "session_key": "2l4YtFB/RmsRKVsS",
     "login_key": "fGV6RgVOH3ZCgl2v",
     "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/IP_ADDRESS_REMOVED Safari/537.36",
     "user_country_code": "US",
     "user_time_zone": "America/Los_Angeles",
     "request_size": "826",
     "response_size": "1830"
}
```

## Related Topics

- Package Usage Logs Schema (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm)
