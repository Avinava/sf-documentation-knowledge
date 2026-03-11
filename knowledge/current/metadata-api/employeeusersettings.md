---
title: "EmployeeUserSettings"
domain: metadata-api
topic: employeeusersettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.227Z
keywords: [EmployeeUserSettings, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition]
---

# EmployeeUserSettings

# EmployeeUserSettings

Represents the employee-user settings used for automatically creating or syncing employee and user data in work.com orgs. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

A EmployeeUserSettings component file has the suffix .settings and is stored in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

EmployeeUserSettings components are available in API version 50.0 and later.

## Special Access Rules

Access to the EmployeeUserSettings type requires the Workplace Command Center permission set license available in the org and assigned to the user. The WorkplaceCommandCenterUser scratch org feature must also be enabled in the org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| emailEncoding | string | Required. The default encoding setting is Unicode: UTF-8.Valid values include:UTF-8—Unicode (UTF-8)ISO-8859-1—General US & Western Europe (ISO-8859–1, ISO-LATIN-1)Shift_JIS—Japanese (Shift-JIS)ISO-2022-JP—Japanese (JIS)EUC-JP—Japanese (EUC-JP)x-SJIS_0213—Japanese (Shift-JIS_2004)ks_c_5601-1987—Korean (ks_c_5601-1987)Big5—Traditional Chinese (Big5)GB2312—Simplified Chinese (GB2312)Big5-HKSCS—Traditional Chinese Hong Kong (Big5–HKSCS) |
| enableEmployeeAutoCreateUser | boolean | If true, users are auto-created when a new employee record is created. The default value for this field is false. |
| enableEmployeeIsSourceOfTruth | boolean | If true, the employee record is the source of truth. The default value for this field is false. |
| permset | string | Represents a set of permissions that's used to grant more access to a user. You can use permission sets to grant access but not to deny access. |
| profile | string | Required. Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. |
| usernameSuffix | string | Represents a domain name. We create a unique login by combining this domain name with each employee’s username. |

## Declarative Metadata Sample Definition

The following is an example EmployeeUser.settings-meta.xml that deploys the EmployeeUserSettings metadata to an org. The file is in the dir path force-app/main/default/settings:

```

```

The following example of package.xml file retrieves the EmployeeUserSettings metadata:

```

```