---
title: "Custom Object and External Object Interactions"
domain: pkg2-dev
topic: custom-object-and-external-object-interactions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.974Z
estimatedTokens: 1793
keywords: [Custom, External, Interactions, log, record, package, usage, custom_entity_type, equal, CustomObject, ExternalObject, means, user, performed, action]
---

# Custom Object and External Object Interactions

> When a log record in your package usage log has custom_entity_type equal to CustomObject or
   ExternalObject, it means that a user performed an action
  that resulted in a create, read, update, or delete (CRUD) interaction on your object.

# Custom Object and External Object Interactions

When a log record in your package usage log has custom\_entity\_type equal to CustomObject or ExternalObject, it means that a user performed an action that resulted in a create, read, update, or delete (CRUD) interaction on your object.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


To determine the type and amount of CRUD that occurred on your packaged component, focus on:

-   operation\_type
-   operation\_count

Many user actions result in CRUD, such as platform events, Apex REST API requests, or scheduled job executions. Each action is related to a log\_record\_type, and each log record has some standard fields that are always populated with data. For example, an Apex REST API request with a log\_record\_type of ApexRestApi always has url, api\_version, http\_method, and http\_status\_code data. Many actions produce log records with supplemental fields that are often populated. For example, an Apex REST API request sometimes has request\_status, referrer\_uri, and api\_type data.

## CRUD from Apex REST API Requests

To analyze an Apex REST API request that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of ApexRestApi. Then use these fields to dig into the details of the Apex REST API interaction.

| Standard Data | Supplemental Data |
| --- | --- |
| urlapi_versionhttp_methodhttp_status_code | request_statusreferrer_uriapi_typerows_processedrequest_sizeresponse_sizenum_fields |

## CRUD from Apex SOAP API Requests

To analyze an Apex SOAP API request that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of ApexSoap. Then use these fields to explore the details of the Apex SOAP API interaction.

| Standard Data | Supplemental Data |
| --- | --- |
| api_versionclass_namemethod_name | urlrequest_statusreferrer_uri |

## CRUD from REST API Requests

To analyze a REST API request that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of RestApi. Then use these fields to understand the details of the REST API interaction.

| Standard Data | Supplemental Data |
| --- | --- |
| urlapi_versionhttp_methodhttp_status_code | request_statusreferrer_uriapi_typerows_processedrequest_sizeresponse_sizenum_fields |

## CRUD from SOAP API Requests

To analyze a SOAP API request that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of API. Then use these fields to uncover the details of the SOAP API interaction.

| Standard Data | Supplemental Data |
| --- | --- |
| api_typeapi_versionrequest_sizeresponse_sizemethod_name | urlrequest_statusrequest_urirows_processednum_fields |

## CRUD from Bulk API Requests

To analyze a Bulk API request that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of BulkApiV1 or BulkApiV2. Then use these fields to discover the details of the Bulk API interaction.

| Standard Data | Supplemental Data |
| --- | --- |
| api_versionbulk_job_idbulk_batch_idbulk_operation | api_typerows_processed |

## CRUD from Scheduled Job Executions

To analyze a scheduled job execution that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of CronJob. There are no additional package usage log fields to describe scheduled job executions.

| Standard Data | Supplemental Data |
| --- | --- |
| none | none |

## CRUD from Platform Events

To analyze a platform event that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of PlatformEventConsumer. Then use these fields to discover the details of the platform event.

| Standard Data | Supplemental Data |
| --- | --- |
| none | eventevent_subscriberevent_count |

## CRUD from Queueable Apex Executions

To analyze a queueable Apex execution that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of QueuedExec. There are no additional package usage log fields to describe Apex executions.

| Standard Data | Supplemental Data |
| --- | --- |
| none | none |

## CRUD from Standard User Interface Requests

To analyze a user interaction that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of URI. Then use these fields to discover the details of the user interaction.

| Standard Data | Supplemental Data |
| --- | --- |
| url | request_statusreferrer_uri |

## CRUD from Visualforce Remoting Requests

To analyze a Visualforce Remoting request that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of VFRemoting. Then use these fields to explore the details of the Visualforce Remoting request.

| Standard Data | Supplemental Data |
| --- | --- |
| class_namemethod_name | urlrequest_statusreferrer_urirequest_sizeresponse_size |

## CRUD from Visualforce Requests

To analyze a Visualforce request that resulted in a CRUD operation on your packaged component, look for a log\_record\_type of VisualforceRequest. Then use these fields to explore the details of the Visualforce request.

| Standard Data | Supplemental Data |
| --- | --- |
| url | request_statusreferrer_urirequest_sizeresponse_size |

## CRUD from All Other User Actions

To analyze any other user action that results in a CRUD operation on your packaged component, look for a log\_record\_type of UnassociatedCRUD. There are no additional package usage log fields to describe all other interactions.

| Standard Data | Supplemental Data |
| --- | --- |
| none | none |

## Example

Let’s look at an example package usage log record and analyze the custom or external object interaction.

```

```

The Insurance\_Agent packaged component of type CustomObject had CRUD performed as a result of a user action from the subscriber org My Customer Inc. Specifically, two records were inserted during a Visualforce Remoting request that the user performed at 2022-12-15 at 05:47 am UTC.

The key data in this analysis are:

| Question | Field | Value |
| --- | --- | --- |
| What | custom_entitycustom_entity_typepackage_version_idmanaged_package_namespace | Insurance_AgentCustomObject04txx0000004IdiAcme |
| Who | organization_iduser_id_token | 00Dxx0000006H2l005-rBBA92863JO8GJN3pT75gp0cG8a9z1vpH6MOti/359o= |
| How | log_record_type | VFRemoting |
| How Much | operation_typeoperation_count | INSERT2 |
| When | timestamp_derived | 2022-12-15T05:47:35.945Z |

In this example, the Visualforce Remoting code isn’t owned by the package, so url, class\_name, and method\_name are tokenized.

```

```

If the Visualforce Remoting code is part of the package, you see actual values instead of tokens.

#### See Also

-   [Package Usage Logs Schema](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm "Make informed development decisions based on package usage log data. Analyze adoption, user behavior, company information, and Lightning app and page usage data. Package usage logs list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC.")

## Code Examples

```
{
     "timestamp_derived": "2022-12-15T05:47:35.945Z",
     "log_record_type": "VFRemoting",
     "request_id": "4mbhuJkvJ7Q83tlq2Z5aAk",
     "organization_id": "00Dxx0000006H2l",
     "organization_name": "MyCustomer Inc.",
     "organization_status": "Demo",
     "organization_edition": "Enterprise Edition",
     "organization_country_code": "IN",
     "organization_language_locale": "en_US",
     "organization_time_zone": "Australia/Sydney",
     "organization_instance": "GS0",
     "organization_type": "Production",
     "user_id_token": "005-rBBA92863JO8GJN3pT75gp0cG8a9z1vpH6MOti/359o=",
     "user_type": "Standard",
     "url":"uwlNmuT1+gH+xKq+xCoxiaAyOOhw8B4WLeQXAbgx+mA=",
     "package_id": "033xx0000004FqD",
     "package_version_id": "04txx0000004Idi",
     "managed_package_namespace": "Acme",
     "custom_entity": "Insurance_Agent",
     "custom_entity_type": "CustomObject",
     "operation_type": "INSERT",
     "operation_count": 2,
     "session_key": "9/uZ+soHD+0UqKYt",
     "login_key": "5tjyGvX04w06xFgT",
     "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/IP_ADDRESS_REMOVED Safari/537.36",
     "user_country_code": "IN",
     "user_time_zone": "Asia/Kolkata",
     "class_name": "shwGCoJjDrkhbw+CY4TFzVxFWypN07UGvtGkexbj/y4=",
     "method_name": "3/UbV0E5yIW8a3c2Fb2XXjfWse1MUekEZWX44tp5TJs="
}
```

```
"url": "uwlNmuT1+gH+xKq+xCoxiaAyOOhw8B4WLeQXAbgx+mA=",
"class_name": "shwGCoJjDrkhbw+CY4TFzVxFWypN07UGvtGkexbj/y4=",
"method_name": "3/UbV0E5yIW8a3c2Fb2XXjfWse1MUekEZWX44tp5TJs="
```

## Related Topics

- Package Usage Logs Schema (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm)
