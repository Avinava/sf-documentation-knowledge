---
title: "Audience"
domain: metadata-api
topic: audience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.695Z
keywords: [Audience, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, AudienceCriteria, AudienceCriterion, AudienceCriteriaValue, PersonalizationTargetInfos, PersonalizationTargetInfo, Declarative, Metadata, Sample, Definition, Usage]
---

# Audience

# Audience

Represents the audience in an Experience Builder site. An audience consists of different types of criteria, where the audience can be assigned and used for targeting in a site. This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

Audience components have the suffix .audience and are stored in the audience folder.

## Version

Audience components are available in API version 44.0 and later.

## Special Access Rules

Access to the Audience type requires the AudienceMetadata permission. This permission is on by default for orgs that have Networks enabled.

Access to permission criteria for the Audience type requires the AudiencePermissionCriteria permission. This permission is available in API version 45.0 and later and is on by default for orgs that have Networks enabled.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| audienceName | string | Required. The name of the audience. |
| container | string | Required. The name of the site or org that contains the audience. |
| criteria | AudienceCriteria | Required. Criteria in an audience. This field is available in API version 47.0 and later. |
| criterion | AudienceCriterion[] | Removed. List of criteria in an audience.This field is available in API version 44.0–46.0. In API version 47.0 and later, use criteria instead. |
| description | string | The description of the audience. |
| formula | string | Formula used to determine the audience. This field is available in API version 45.0 and later. |
| formulaFilterType | FormulaFilterType​(enumeration of type string) | Indicates the audience’s formula type. Valid values areAllCriteriaMatchAnyCriterionMatchesCustomLogicMatches (available in API version 45.0 and later) |
| isDefaultAudience | boolean | Indicates whether the audience is the default audience (true) or not (false). This field is available and required in API version 48.0. In API version 49.0 and later, this field is optional.The default audience file name is of format Default_Network Name.audience. |
| targets | PersonalizationTarget​Infos | Targets for the audience. This field is available in API version 47.0 and later. |

## AudienceCriteria

Represents criteria for an audience. This subtype is available in API version 47.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| criterion | AudienceCriterion[] | List of criteria for an audience. An audience can have up to 100 criteria. |

## AudienceCriterion

Represents a criterion for an audience.

| Field Name | Field Type | Description |
| --- | --- | --- |
| criteriaNumber | int | The number associated with the criterion in a formula, for example (1 AND 2) OR 3. This field is available in API version 45.0 and later. |
| criterionValue | AudienceCriteriaValue | The value of the criterion. |
| operator | AudienceCriterion​Operator(enumeration of type string) | The operator associated with this criterion. Valid values are:EqualNotEqualGreaterThanGreaterThanOrEqualLessThanLessThanOrEqualContainsStartsWithIncludes (available in API version 45.0 and later)NotIncludes (available in API version 45.0 and later) |
| type | AudienceCriterion​Type(enumeration of type string) | Required. Valid values are:GeoLocationDomainProfileFieldBasedPermission (available in API version 45.0 and later)Default (available in API version 47.0 and later)Audience (available in API version 53.0 and later)For a list of AudienceCriteriaValue fields that you can use with each AudienceCriterion type field value, see this table. |

## AudienceCriteriaValue

Represents the value of a criterion in an audience. For a list of AudienceCriteriaValue fields that you can use with each AudienceCriterion type field value, see [this table](#AudCritTypeAudCritValueTable).

| Field Name | Field Type | Description |
| --- | --- | --- |
| audienceDeveloperName | string | Developer name of the audience. This field is available in API version 53.0 and later. You can use this field only when the value of the AudienceCriterion type field is Audience. |
| city | string | City of a user. You can use this field only when the value of the AudienceCriterion type field is GeoLocation. |
| country | string | Country of a user. You can use this field only when the value of the AudienceCriterion type field is GeoLocation. |
| domain | string | Domain of a user. You can use this field only when the value of the AudienceCriterion type field is Domain. |
| entityField | string | Field of an object. You can use this field only when the value of the AudienceCriterion type field is FieldBased. |
| entityType | string | Type of object. You can use this field only when the value of the AudienceCriterion type field is FieldBased. |
| fieldValue | string | Value of a field. You can use this field only when the value of the AudienceCriterion type field is FieldBased. |
| isEnabled | string | Indicates whether the permission is enabled (true) or not (false) for a user. This field is available in API version 45.0 and later. You can use this field used only when the value of the AudienceCriterion type field is Permission. |
| permissionName | string | Valid API name of a standard user or custom permission. This field is available in API version 45.0 and later. You can use this field only when the value of the AudienceCriterion type field is Permission. |
| permissionType | string | Type of permission. Valid values are Standard and Custom. This field is available in API version 45.0 and later. You can use this field only when the value of the AudienceCriterion type field is Permission. |
| profile | string | Profile of a user. You can use this field only when the value of the AudienceCriterion type field is Profile. |
| subdivision | string | Subdivision of a user. You can use this field only when the value of the AudienceCriterion type field is GeoLocation. |

This table summarizes which AudienceCriteriaValue fields you can use with the different AudienceCriterion type field values.

| AudienceCriterion Type | AudienceCriteriaValue Fields |
| --- | --- |
| GeoLocation | citycountrysubdivision |
| Domain | domain |
| Profile | profile |
| FieldBased | entityFieldentityTypefieldValue |
| Permission | isEnabledpermissionNamepermissionType |
| Audience | audienceDeveloperName |

## PersonalizationTargetInfos

Represents targets for an audience. This subtype is available in API version 47.0 and later.

When deploying an audience, you must include [ExperienceBundle](atlas.en-us.api_meta.meta/api_meta/meta_experiencebundle.htm "Represents a text-based code structure of the settings and site components, such as pages, branding sets, and themes that make up an Experience Builder site. Developers can quickly update and deploy Experience Builder sites programmatically using their preferred development tools. This type extends the Metadata metadata type and inherits its fullName field.") in your package to support experience variation targets.

| Field Name | Field Type | Description |
| --- | --- | --- |
| target | PersonalizationTarget​Info[] | List of targets for an audience. |

## PersonalizationTargetInfo

Represents a target for an audience. This subtype is available in API version 47.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| groupName | string | Required. Group name of the target. Groups bundle related target and audience pairs. You can have up to 2,000 groups and 500 targets per group.To determine the target group name, see https://developer.salesforce.com/docs/atlas.en-us.communities_dev.meta/communities_dev/communities_dev_personalization_names.htm in the Experience Cloud Developer Guide. |
| priority | int | Priority of the target. Within a group, priority determines which target is returned when the user matches more than one audience. |
| targetType | string | Required. Type of target, indicating the nature of the data being targeted. Supported values include:ExperienceVariation (API version 47.0 and later)NavigationLinkSet (API version 49.0 and later)Report (API version 49.0 and later)Dashboard (API version 49.0 and later)You can have up to 2,500 ExperienceVariation targets and 25,000 record targets.For more information on the ExperienceVariation target type, see ExperienceBundle. |
| targetValue | string | Required. Value of the target, which is the developer name of the experience variation, such as ContactSupport_ContactSupportFor​California_Page for a page variation.To determine the target developer name, see https://developer.salesforce.com/docs/atlas.en-us.communities_dev.meta/communities_dev/communities_dev_personalization_names.htm in the Experience Cloud Developer Guide. |

## Declarative Metadata Sample Definition

The following is an example of an Audience component.

```

```

## Usage

You can’t use Metadata API to delete an audience.

In API version 47.0 and later, you can’t create an audience without criteria.

The list of targets provided in the input for an audience is considered the state of target assignments that you want. For example, see the following information for deleting, creating, and updating targets.

If you don’t have a default audience, updating targets can result in the UI erroneously showing a target assigned to the default audience. The target assignment data in the API is correct. To work around the UI issue, temporarily assign another target to the default audience and then delete it.

Personalization using audience targeting varies what the user can see in the browser but doesn’t secure data in any way. To prevent users accessing sensitive data, use standard Salesforce security features, such as sharing rules and permission sets.

Delete targets

To delete a single target from an audience, deploy the entire list of targets for the audience minus the one that you want to delete.

To delete all the targets from an audience, deploy the audience with empty targets tags. For example:

```

```

Update an audience without updating targets

To update an audience without updating targets, deploy the audience without targets tags. For example:

```

```

Create targets

To create a target, deploy the entire list of targets for the audience plus the one that you want to create.

Update the priority of a target

To change the priority of a target within an audience, deploy the entire list of targets for the audience with the new priority values for the targets.

To change the priority of a target that affects priority in another audience, deploy both audiences with their entire list of targets with the new priority values for the targets.

Update the target assignment for an audience

To reassign a target to a new audience, deploy both audiences with their entire list of targets. Deploy one list with the target removed, and the other list with the target added.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").