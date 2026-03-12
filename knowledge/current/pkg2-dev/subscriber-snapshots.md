---
title: "Subscriber Snapshots"
domain: pkg2-dev
topic: subscriber-snapshots
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:26.049Z
estimatedTokens: 869
keywords: [Subscriber, Snapshots, give, point-in-time, summary, activity, usage, trends, org, package]
---

# Subscriber Snapshots

> Subscriber snapshots give you a point-in-time summary of subscriber activity. Use
    subscriber snapshots to see usage trends by org and package.

# Subscriber Snapshots

Subscriber snapshots give you a point-in-time summary of subscriber activity. Use subscriber snapshots to see usage trends by org and package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

AppExchange App Analytics is subject to certain usage restrictions, as described in the [AppExchange Program Policies](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/alliance-agreements-and-terms/salesforce-partner-program-policies.pdf "HTML (New Window)").

AppExchange App Analytics takes a daily snapshot of org, package, and custom entity data. Snapshots are captured daily at 00:00 UTC and become available for download immediately. You request a date and time, or range of dates and times, and you receive one snapshot per valid date and time requested. For example, if on April 7, 2023 you request a date and time range of StartTime=2023-04-04T00:00:00Z EndTime=2020-04-07T00:00:00Z, you receive three snapshots, one for each completed day.

| Field | Description |
| --- | --- |
| attribute_name | Represents a characteristic of a custom entity, managed package, package version, or org. Example: UsersWithMFA |
| attribute_value | A string that represents a characteristic or measure of an attribute_name.Examples:0.5701.000Acme, Inc.ActiveDeprecated |
| count | Total records for the custom entity in that org on the specified snapshot date. |
| custom_entity | The developer name of the component or custom object.Examples:AmountTravel_Expense |
| date | The subscriber snapshot date requested, in YYYY-MM-DDT00:00:00Z format. Each point-in-time snapshot is captured at 00:00 UTC on the date specified. Example: 2023-04-04T00:00:00Z |
| managed_package_namespace | Namespace of the package. Example: sfdx_isv_pkg001 |
| organization_edition | The name of the Salesforce edition the subscriber org is using.Examples:Developer EditionEnterprise EditionUnlimited Edition |
| organization_id | The 15-character ID of the subscriber org. Example: 00D4m000000Td8Y. |
| organization_name | The name of the subscriber org. Example: My_Org. |
| organization_status | The paid status of the subscriber org.Examples:ACTIVEDEMOFREETRIAL |
| package_id | The ID of the managed package. Example: 033xx00000000CI. |
| package_version_id | The ID of the managed package version. Example: 04t6A0000004eytQAA. |

The attribute\_name and attribute\_value fields are a key-value pair. Each pair has a specific scope. Some pairs provide org-level metadata, and others provide custom entity, managed package, or package version metadata,

Interpret these two fields in tandem using the information in this table.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

As of Spring ’25, trial orgs aren’t included in subscriber snapshot MFA data.

| attribute_name | Description | attribute_value | Scope |
| --- | --- | --- | --- |
| UsersWithMFA | Represents the percentage of your unique, standard users who enabled multi-factor authentication (MFA) using one of these methods.User permission setsProfile permission setsHigh-assurance session security levelThe corresponding attribute_value is always between 0 and 1, where 0 represents 0% and 1 represents 100%. | PercentExamples:0.0600.940 | Org-level.For all packages installed into an active or demo org, the same org-level UsersWithMFA percent repeats on every package version row. |
