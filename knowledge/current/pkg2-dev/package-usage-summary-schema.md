---
title: "Package Usage Summary Schema"
domain: pkg2-dev
topic: package-usage-summary-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.910Z
estimatedTokens: 869
keywords: [Package, Usage, Summary, Schema, discover, how, users, access, operations, they, perform]
---

# Package Usage Summary Schema

> Use the package usage summary to discover how many users access your package and which
  operations they perform.

# Package Usage Summary Schema

Use the package usage summary to discover how many users access your package and which operations they perform.

Package usage summaries contain aggregate data derived from related [package usage logs](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm "Make informed development decisions based on package usage log data. Analyze adoption, user behavior, company information, and Lightning app and page usage data. Package usage logs list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC."). ISV partners have access to package usage summaries by default, and they can activate access to package usage logs and subscriber snapshots. Subscribers only have access to package usage summaries.

| Field | Description |
| --- | --- |
| custom_entity | The developer name of the component or custom object. |
| custom_entity_type | The type of component or custom object that the user viewed or manipulated.Examples:AnalyticsDashboardAnalyticsLensApexClassApexTriggerCustomInteractionLabelCustomInteractionFailureCustomObjectExternalObjectLightningPageLightningComponentVisualforcePage |
| managed_package_namespace | Namespace of the package. |
| month | The month that this usage summary applies to in YYYY-MM format. Example: 2019-03. |
| num_creates | The number of new records created from the package. |
| num_deletes | The number of deleted records associated with the package. |
| num_events | The number of log records associated with a custom_entity. |
| num_reads | The aggregate number of records associated with the custom_entity that was read.The definition of num_reads changed with the Spring ’23 release. Some data from February 2023 and all data dated January 2023 and earlier used this previous num_reads definition: the aggregate number of records associated with the package that were read, plus the number of SOSL and SOQL queries performed on the entity. |
| num_updates | The number of records associated with the package that were updated. |
| num_views | The number of times the component or page has been viewed. |
| organization_edition | The name of the Salesforce edition that the subscriber org is using.Examples:Developer EditionEnterprise EditionUnlimited Edition |
| organization_id | The 15-character ID of the subscriber org. |
| organization_name | The name of the subscriber org. Example: Acme, Inc. |
| organization_status | The paid status of the subscriber org.Examples:ActiveDemoFreeTrial |
| package_id | The ID of the package. |
| user_id_token | The hashed token representing the ID of the user who accessed the package. The token persists over time, even if a user’s details change. The token also persists across any packages that the user interacts with.The user ID token starts with the prefix 005-. In compliance with privacy regulations, our systems can’t access the actual user ID. Likewise, the hashed token can’t be linked to the user ID. |
| user_type | The user license category of the user accessing Salesforce services through the UI or API.Examples:GuestPartnerStandard |

#### See Also

-   [Package Usage Logs Schema](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm "Make informed development decisions based on package usage log data. Analyze adoption, user behavior, company information, and Lightning app and page usage data. Package usage logs list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC.")

## Related Topics

- package usage logs (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm)
- Package Usage Logs Schema (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm)
