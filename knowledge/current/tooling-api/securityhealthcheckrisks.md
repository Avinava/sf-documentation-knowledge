---
title: "SecurityHealthCheckRisks"
domain: tooling-api
topic: securityhealthcheckrisks
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.881Z
estimatedTokens: 792
keywords: [SecurityHealthCheckRisks, org’s, security, setting, risks, Salesforce-recommended, users, View, Setup, Configuration, user, permission, retrieve, data, Tooling]
---

# SecurityHealthCheckRisks

> Represents your org’s security setting values,
            risks, and Salesforce-recommended setting values. Only users with the "View Setup and Configuration" user
            permission can retrieve data from this object. Available in Tooling API version 37.0 and
        later.

# SecurityHealthCheckRisks

Represents your org’s security setting values, risks, and Salesforce-recommended setting values. Only users with the "View Setup and Configuration" user permission can retrieve data from this object. Available in Tooling API version 37.0 and later.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| OrgValue | TypestringPropertiesFilter, Nillable, SortDescriptionThe org’s value for the security setting. |
| OrgValueRaw | TypestringPropertiesFilter, Nillable, SortDescriptionThe org’s value for the security setting as it is stored in the database, usually without units of measure or extra text. For example, if the Minimum Password Length setting’s OrgValue is 8 characters, the OrgValueRaw is 8. |
| RiskType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe level of risk of the org’s security setting value. Valid values are:HIGH_RISKMEDIUM_RISKMEETS_STANDARD |
| SecurityHealthCheckId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Health Check score record associated with this field. |
| Setting | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the security setting. For example, Minimum password length. |
| SettingGroup | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the security setting group in which the setting resides in the Setup tree. For example, Password Policies. |
| SettingRiskCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe level of risk of the org’s security settings. Available in version 40.0 and later. Valid values are:HIGH_RISKMEDIUM_RISKLOW_RISKINFORMATIONAL |
| StandardValue | TypestringPropertiesFilter, Nillable, SortDescriptionSalesforce-recommended standard value for the security setting. |
| StandardValueRaw | TypestringPropertiesFilter, Nillable, SortDescriptionSalesforce-recommended standard value for the security setting as it is stored in the database, usually without units of measure or extra text. For example, if the Minimum Password Length setting’s StandardValue is 8 characters, the StandardValueRaw is 8. |

## Usage

Use this object to query your org’s security setting values, risks, and Salesforce-recommended setting values. Reading security settings and their security status is useful if you have multiple Salesforce applications that require consistency and compliance in their security posture.

This query gets a list of your org’s high risk settings.

```

```

This query gets your org’s Health Check score and a list of your org’s high risk settings.

```

```

This query gets your org’s Health Check score and the security settings that meet the Salesforce baseline standard.

```

```

This query lists all the values in the Salesforce baseline standard.

```

```

## Code Examples

```
SELECT RiskType, Setting, SettingGroup, OrgValue, StandardValue FROM SecurityHealthCheckRisks where RiskType=’HIGH_RISK’
```

```
SELECT Score, (SELECT RiskType, Setting, SettingGroup, OrgValue, StandardValue FROM SecurityHealthCheckRisks where RiskType=’HIGH_RISK’) FROM SecurityHealthCheck
```

```
SELECT Score, (SELECT RiskType, Setting, SettingGroup, OrgValue, StandardValue FROM SecurityHealthCheckRisks where RiskType=’MEETS_STANDARD’) FROM SecurityHealthCheck
```

```
SELECT Setting, SettingGroup, StandardValue FROM SecurityHealthCheckRisks
```
