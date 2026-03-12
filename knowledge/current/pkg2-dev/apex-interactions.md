---
title: "Apex Interactions"
domain: pkg2-dev
topic: apex-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.958Z
estimatedTokens: 600
keywords: [Apex, Interactions, record, package, usage, log, custom_entity_type, ApexClass, ApexTrigger, interaction, packaged, trigger, Execution, Unexpected, Exception]
---

# Apex Interactions

> Each record in your package usage log that has a custom_entity_type of ApexClass or ApexTrigger describes an interaction with your packaged Apex class
  or trigger.

# Apex Interactions

Each record in your package usage log that has a custom\_entity\_type of ApexClass or ApexTrigger describes an interaction with your packaged Apex class or trigger.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |

## Apex Execution

When log\_record\_type is ApexExecution, the log record is associated with a user action that resulted in the execution of Apex code from an Apex class or trigger. Only the outermost Apex is captured.

| Standard Data | Supplemental Data |
| --- | --- |
| entry_pointquiddity | num_soql_queries |

## Apex Unexpected Exception

When log\_record\_type is ApexUnexpectedException, the log record is associated with a user action that resulted in an Apex class or trigger throwing an unhandled exception. The stack\_trace field provides detail about the Apex unexpected exceptions.

| Standard Data | Supplemental Data |
| --- | --- |
| stack_trace | none |

## Example

Let’s look at an example package usage log record and analyze the Apex interaction.

```

```

The InsuranceAgentDetailsBatchable packaged component of type ApexClass was interacted with as a result of a user action from subscriber org MyCustomer Inc. Specifically, an execution of a batch Apex job occurred on 2022-11-22 at 6:19 am. The batch Apex job is represented by Quiddity = A.

The key data in this analysis are:

| Question | Field | Value |
| --- | --- | --- |
| What | custom_entitycustom_entity_typepackage_version_idmanaged_package_namespace | InsuranceDetailsBatchableApexClass04txx0000004IdiAdmc |
| Who | organization_iduser_id_token | 00Dxx0000006H2l005-9BwnBWYO5FMn4cZ1sLw7F3LmTpoe8M77GrZOZHL6xQk= |
| How | log_record_typequiddity | ApexExecutionA |
| When | timestamp_derived | 2022-11-22T06:19:33.990Z |

#### See Also

-   [Package Usage Logs Schema](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm "Make informed development decisions based on package usage log data. Analyze adoption, user behavior, company information, and Lightning app and page usage data. Package usage logs list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC.")

-   [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "Apex Developer Guide - HTML (New Window)")

## Code Examples

```
{
     "timestamp_derived": "2022-11-22T06:19:33.990Z",
     "log_record_type": "ApexExecution",
     "request_id": "4mbhxFWBBXz83tlq2Z5aAk",
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
     "custom_entity": "InsuranceDetailsBatchable",
     "custom_entity_type": "ApexClass",
     "session_key": "2l4YtFB/RmsRKVsS",
     "login_key": "fGV6RgVOH3ZCgl2v",
     "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/IP_ADDRESS_REMOVED Safari/537.36",
     "user_country_code": "US",
     "user_time_zone": "America/Los_Angeles",
     "entry_point": "Acme.InsuranceDetailsBatchable",
     "num_soql_queries": "2",
     "quiddity": "A"
}
```

## Related Topics

- Package Usage Logs Schema (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm)
