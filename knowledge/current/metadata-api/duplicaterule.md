---
title: "DuplicateRule"
domain: metadata-api
topic: duplicaterule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.099Z
keywords: [DuplicateRule, Important, File, Suffix, Directory, Location, Version, Fields, DuplicateRuleMatchRule, DuplicateRuleFilter, DuplicateRuleFilterItem, ObjectMapping, ObjectMappingField, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DuplicateRule

# DuplicateRule

Represents a rule that specifies how duplicate records in an object are detected. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

DuplicateRule components have the .duplicateRule suffix and are stored in the duplicateRules/ directory. The name of the component file is based on the name of the object associated with the rule. For example, the component file name duplicateRules/Account.Standard\_Account\_Duplicate\_Rule.duplicateRule describes a duplicate rule component associated with the Account object.

## Version

DuplicateRule components are available in API version 66.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionOnInsert | DupeActionType (enumeration of type string) | Required. Determines what the duplicate rule does when users or the DuplicateRule API try to insert a record that is a duplicate. Valid values are:AllowFor users, if operationsOnInsert is set to alert, the UI displays the value of alertText in a dialog. The dialog prompts users to continue or cancel. If the user chooses to continue, the insertion proceeds. If the user chooses to cancel, the record isn’t inserted.The DuplicateRule API returns an error code and a message. To complete the insertion, the code must set the allowSave field in DuplicateRuleHeader to true and reissue the request.If operationsOnInsertisn’t set to alert, the UI inserts the record without issuing an alert. The API inserts the record and doesn’t return an error code.BlockFor users, the UI displays an error message and prevents them from inserting the new record. The DuplicateRule API returns an error and doesn’t insert the record. |
| actionOnUpdate | DupeActionType (enumeration of type string) | Required. Determines what the duplicate rule does when users or the DuplicateRule API try to update a record, and the result is a duplicate. Valid values are:AllowFor users, if operationsOnUpdate is set to alert, the UI displays the value of alertText in a dialog. The dialog prompts users to continue or cancel. If the user chooses to continue, the update proceeds. If the user chooses to cancel, the record isn’t updated.The DuplicateRule API returns a message. To complete the update, the code must set the allowSave field in DuplicateRuleHeader to true and reissue the request.If operationsOnUpdateisn’t set to alert, the UI updates the record without issuing an alert. The API updates the record and doesn’t return an error code.BlockFor users, the UI displays an error message and prevents them from continuing. The DuplicateRule API returns an error. |
| alertText | string | Text that’s sent when the duplicate rule is triggered. The text is only sent if isActive is true. In the UI, the text displays as a message. The DuplicateRule API returns the message in its response.You can set a value for alertText only when you have actionOnInsert or actionOnUpdate (or both) set to Allow. Otherwise, you receive a validation error when you add or update this component. |
| description | string | Required. Text that describes the duplicate rule. The value is customer-supplied, but isn’t visible in the UI. |
| duplicateRuleFilter | DuplicateRuleFilter | Required. Criteria that define how to find records to consider when looking for duplicates. For example, use duplicateRuleFilter to exclude records from the match when looking for duplicates. |
| duplicateRuleMatchRules | DuplicateRuleMatchRule[] | Required. One or more MatchingRule components for the DuplicateRule. A MatchingRule controls what constitutes a match between records. |
| isActive | boolean | Required. If true, the DuplicateRule detects duplicate records. Otherwise, the rule has no effect. |
| masterLabel | string | Required. Label for this DuplicateRule. This value is the internal label for the rule. |
| operationsOnInsert | string[] | Required. Controls the action to take when actionOnInsert is set to Allow and the duplicate rule is triggered. Either one or both of these values can be set in the array:alertIf set, the action specified in actionOnInsert occurs; otherwise, the insert proceeds.reportIf set, the insert operation is added to the report of duplicates. |
| operationsOnUpdate | string[] | Required. Controls the action to take when actionOnUpdate is set to Allow and the duplicate rule is triggered. Either one or both of these values can be set in the array:alertIf set, the action specified in actionOnUpdate occurs; otherwise, the update proceeds.reportIf set, the update operation is added to the report of duplicates. |
| securityOption | DupeSecurityOptionType (enumeration of type string) | Required. Determines how record sharing rules affect duplicate management. Valid values are:EnforceSharingRulesSharing rules affect duplicate management. If a duplicate rule is triggered because an insert or update duplicates an existing record, but the running user doesn’t have sharing access to that record, the insert or update proceeds. The sharing rule doesn’t prevent the user from creating or updating the record because the record is hidden from the user. No message is issued.BypassSharingRulesSharing rules don’t affect duplicate management. If a duplicate rule is triggered because an insert or update duplicates an existing record, sharing rules are ignored, but other access restrictions apply. |
| sortOrder | int | Required. Determines the order in which duplicate rules are applied. |

## DuplicateRuleMatchRule

Describes the [MatchingRule](atlas.en-us.api_meta.meta/api_meta/meta_matchingrule.htm#meta_matchingrule "Represents a matching rule that is used to identify duplicate records.") associated with the DuplicateRule. The MatchingRule identifies duplicate records.

| Field Name | Field Type | Description |
| --- | --- | --- |
| matchRuleSObjectType | string | Required. The name of the target object of the matching rule. For example, if you define a duplicate rule for Contact records, and you want to match with Lead records, the value of matchRuleSObjectType is Lead. |
| matchingRule | string | Required. Value that corresponds to the value of developerName in the MatchingRule for this duplicate rule. |
| objectMapping | ObjectMapping | Required. Foreign key to an ObjectMapping that maps fields from the duplicate rule’s object to fields in the target object specified by matchRuleSObjectType. |

## DuplicateRuleFilter

Specifies filter criteria for a DuplicateRule. Salesforce only applies the DuplicateRule if the record matches the criteria.

| Field Name | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Required. A string of boolean operators that establishes the filter logic for the filter items specified in duplicateRuleFilterItems. |
| duplicateRuleFilterItems | DuplicateRuleFilterItem[] | Required. A list of DuplicateRuleFilterItem components. |

## DuplicateRuleFilterItem

This type extends the [FilterItem](atlas.en-us.api_meta.meta/api_meta/customfield.htm#filteritem) type and inherits all its fields.

| Field Name | Field Type | Description |
| --- | --- | --- |
| sortOrder | int | Required. The order of this item in the duplicate rule filter. |
| table | string | Required. The object that has the field specified in the field field of DuplicateRuleFilterItem. See the documentation for FilterItem for the definition of field. |

## ObjectMapping

Represents a map of fields in the input object of the DuplicateRule to fields in the output object of DuplicateRule. The input object is the object associated with the DuplicateRule. The output object can be the same object or a different object with similar fields.

For example, you can have a DuplicateRule that looks for duplicates between the Contact object and the Lead object. In this case, the input object is Contact, and the output object is Lead.

| Field Name | Field Type | Description |
| --- | --- | --- |
| inputObject | string | Required. The input object for the duplicate rule. The DuplicateRule is associated with this object. For example, if you define a duplicate rule for Contact records, and you want to match with Lead records, the value of inputObject is Contact. |
| mappingFields | ObjectMappingField[] | Required. The mapping of source object fields to target object fields for the duplicate rule. |
| outputObject | string | Required. The output object for the duplicate rule. This value is the same as the value of the matchRuleSObjectType field in DuplicateRuleMatchRule. Any duplicate rules that this object has are ignored when the DuplicateRule API uses the ObjectMapping. |

## ObjectMappingField

A field name in the input object of the DuplicateRule, and the corresponding field name in the output object.

| Field Name | Field Type | Description |
| --- | --- | --- |
| inputField | string | Required. Field in the object specified by the inputObject field in ObjectMapping. This field is mapped to the field in outputField, which is assumed to be a field in the object specified by the outputObject field in ObjectMapping. |
| outputField | string | Required. Field in the object specified by the outputObject field in ObjectMapping. The field is mapped to the field name in inputField, which is assumed to be a field in the object specified by the inputObject in ObjectMapping. |

## Declarative Metadata Sample Definition

The following is an example of a DuplicateRule component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").