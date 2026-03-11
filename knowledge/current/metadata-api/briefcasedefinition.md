---
title: "BriefcaseDefinition"
domain: metadata-api
topic: briefcasedefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:50.929Z
keywords: [BriefcaseDefinition, Important, File, Suffix, Directory, Location, Version, Fields, BriefcaseRule, BriefcaseRuleFilter, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, Usage]
---

# BriefcaseDefinition

# BriefcaseDefinition

Represents a briefcase definition. A briefcase makes selected records available for specific users and groups to view when they’re offline in the Salesforce Field Service mobile app for iOS and Android. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

BriefcaseDefinition components have the suffix .briefcaseDefinition and are stored in the briefcaseDefinitions folder.

## Version

BriefcaseDefinition components are available in API version 50.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| briefcaseRules | BriefcaseRule[] | A list of rules that specify which records are included in the briefcase. |
| description | string | Description of the briefcase. |
| isActive | boolean | Required. Indicates whether the briefcase is active by default (true) or inactive (false). Activate a briefcase to make the selected records available to assignees. |
| masterLabel | string | Required. Label for the briefcase name that appears in the Salesforce user interface. |
| type | BriefcaseType | Applies if multiple briefcase types are available in your org. Enum values include:Standard: Standard briefcase that can be used with priming APIs.HighVolume: Increased capacity briefcase that’s used with performance priming in the Salesforce Field Service mobile app.MobileAppSync: Automatically generated briefcase that’s used for performance priming in the Salesforce Field Service mobile app. |

## BriefcaseRule

Represents a rule that specifies records to be included in the BriefcaseDefinition.

| Field Name | Field Type | Description |
| --- | --- | --- |
| briefcaseRuleFilters | BriefcaseRuleFilter[] | A list of filters on a rule. |
| filterLogic | string | The filter logic for record selection, for example, 1 AND 2 where 1 and 2 correspond to filter 1 and filter 2. Filter logic operators include AND and OR. |
| isAscendingOrder | boolean | Indicates whether the records should be sorted in ascending order (true) or descending order (false). |
| isRelatedFilesRule | boolean | Indicates whether the briefcase rule is part of a hierarchical set of rules that configure the offline priming of file attachments. Available only for the Offline App (Salesforce Mobile App Plus).To configure the offline priming of file attachments, create a set of four hierarchical briefcase rules:A rule with targetEntity set to the object with the file attachments at the first levelA rule with targetEntity set to ContentDocumentLink at the second levelA rule with targetEntity set to ContentDocument at the third levelA rule with targetEntity set to ContentVersion at the fourth levelSee the Declarative Metadata Sample Definition section for an example briefcase definition that configures the offline priming of file attachments.The ContentDocumentLink, ContentDocument, and ContentVersion rules must all have isRelatedFilesRule set to true. To delete a briefcase configuration for file attachments, you must delete the ContentDocumentLink rule and all of its nested rules. You can’t delete a single rule within the hierarchy of ContentDocumentLink, ContentDocument, and ContentVersion rules.When isRelatedFilesRule is set to true, you must use the recordLimit field to limit the number of file attachments returned by a briefcase rule. Apply the same recordLimit value across the ContentDocumentLink, ContentDocument, and ContentVersion rules. You can optionally filter file attachments by file size and file type through Briefcase Builder in Setup.After you set a value for isRelatedFilesRule, you can no longer modify the field. The value that you set persists for the life of the rule. |
| orderBy | string | The field to order the records by, which determines how the records can be sorted. For example, Account Name or Created By. |
| queryScope | FilterScope (enumeration of type string) | A group of records to restrict the scope of this rule. Valid values include:EverythingAssignedToMeMineThe AssignedToMe scope is supported for the ServiceAppointment object only. |
| recordLimit | int | The maximum number of records for an object on the briefcase rule. The maximum is 50,000 records that meet the criteria. However, the records returned by one briefcase rule must fit within the maximum limit of 50,000 records across active briefcases. If there are more records that match the criteria than the record limit allows, the orderBy field determines which records are returned. |
| relatedRules | BriefcaseRule[] | A list of rules that are related to the current rule. |
| relationshipField | string | Required for relatedRules. Defines the Salesforce object field that relates the relatedRules field to another relatedRules field or the briefcaseRules field on the BriefcaseDefinition metadata type that it's nested in. For example, an Account object rule can be related to a Contact object rule using the Account ID object field. In this example, the value for the related rule's relationshipField is AccountID. |
| relationshipType | BriefcaseRuleRelationshipType (enumeration of type string) | Required for relatedRules. Defines the relationship between the relatedRules field and another relatedRules field or the briefcaseRules field on the BriefcaseDefinition metadata type that it's nested in. Valid values include:ParentToChildChildToParent |
| targetEntity | string | Required. The API name of the standard object, custom object, or custom metadata type that the briefcase rule selects records from.If the targetEntity is a custom metadata type, the briefcase rule can’t include any other fields. You can add only one briefcase rule for the same custom metadata type in a briefcase. Custom metadata types are supported as the targetEntity for top-level rules only–you can’t create a related rule with targetEntity as a custom metadata type. |

## BriefcaseRuleFilter

Specifies filter criteria for a BriefcaseRule.

| Field Name | Field Type | Description |
| --- | --- | --- |
| filterOperator | BriefcaseFilterOperator (enumeration of type string) | Required. The comparison operator for this rule filter. Capitalization matters with date filter operators. Be sure to specify date literals in uppercase. Some valid date literals include TODAY, YESTERDAY and TOMORROW.Valid values include:d—Ends withe—Equalsg—Greater thanh—Greater than or equall—Less thanm—Less than or equaln—Not equals. This value is applicable only when filterValue is empty.s—Starts with |
| filterSeqNumber | int | Required. The filter number. When you apply multiple filters, the filters are numbered sequentially, 1, 2, 3, and so on. |
| filterValue | string | The value that the field and criteria evaluate. For example, true or false for a boolean field whose criteria or filter operator is Equals.Be sure to specify date literals in uppercase. Some valid date literals include TODAY, YESTERDAY and TOMORROW.For targetEntityField values that accept a user ID, such as OwnerId or CreatedById, enter $User.Id to pass the ID of the user making the request.To evaluate targetEntityField by whether the field is empty or not empty, leave filterValue blank and set filterOperator to e (equals) or n (not equals). |
| targetEntityField | string | Required. The API name of the field to filter by. This field is from the targetEntity on BriefcaseRule. Compound fields aren't supported. Fields encrypted with deterministic encryption can be used in filters with equals and not equals operators. |

## Declarative Metadata Sample Definition

The following is an example of a BriefcaseDefinition component for account records.

The following is an example definition of a briefcase definition. If you include a rule filter, you must include a filter logic.

```

```

The following is an example package.xml that references the previous definition.

```

```

This example briefcase definition configures the offline priming of file attachments for the WorkOrder object. Files Priming is available only for the Offline App (Salesforce Mobile App Plus).

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Usage

Briefcase objects are available in orgs that have Briefcase Builder and Field Service enabled.