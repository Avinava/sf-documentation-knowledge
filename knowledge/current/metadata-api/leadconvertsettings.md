---
title: "LeadConvertSettings"
domain: metadata-api
topic: leadconvertsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.786Z
estimatedTokens: 1058
keywords: [LeadConvertSettings, Represents, organization’s, custom, field, mappings, lead, conversion., Custom, fields, mapped, Leads, Accounts, Contacts, Opportunities., Options, creating, opportunities, during, conversion]
---

# LeadConvertSettings

> Represents an organization’s custom
			field mappings for lead conversion. Custom fields can be mapped from Leads to Accounts,
			Contacts, and Opportunities. Options for creating opportunities during lead conversion
			can also be specified.
		This type extends the Metadata metadata type and inherits its
                        fullName field.

# LeadConvertSettings

Represents an organization’s custom field mappings for lead conversion. Custom fields can be mapped from Leads to Accounts, Contacts, and Opportunities. Options for creating opportunities during lead conversion can also be specified. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

LeadConvertSettings components have the suffix LeadConvertSetting and are stored in the LeadConvertSettings folder.

## Version

LeadConvertSettings is available in API versions 39.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| allowOwnerChange | Field TypebooleanDescriptionIndicates whether to include the Record Owner field in the Convert Lead dialog box (true) or not (false). |
| objectMapping | Field TypeObjectMapping[]DescriptionA set of custom field mappings between objects. Up to three objectMapping types can be declared—one each for account, contact, and opportunity. |
| opportunityCreationOptions | Field TypeVisibleOrRequired (enumeration of type string)DescriptionThis field determines whether the Opportunity field is visible or required in the Convert Lead dialog box.Values are:VisibleOptional—The Opportunity field is included in the dialog box but not required. A new opportunity is created if the user enters an opportunity name. This is the default value.VisibleRequired—The Opportunity field is included in the dialog box and is required. A new opportunity is created based on the name the user enters.NotVisible—The Opportunity field is not included in the dialog box. No opportunity is created. |

## ObjectMapping

Represents a custom field mapping between two objects.

| Field Name | Description |
| --- | --- |
| inputObject | Field TypestringDescriptionRequired.The name of the object type containing the source fields for mapping. The value is always Lead. |
| mappingFields | Field TypeObjectMappingField[]DescriptionA set of input and output field names of the custom fields to be mapped. |
| outputObject | Field TypestringDescriptionRequired.The object type receiving data during lead conversion.AccountContactOpportunity |

## ObjectMappingField

Represents custom field names to be mapped between objects.

| Field Name | Description |
| --- | --- |
| inputField | Field TypestringDescriptionRequired.The name of a custom lead field supplying source data during lead conversion. |
| outputField | Field TypestringDescriptionRequired.The name of a custom account, contact, or opportunity field that will receive data from source field named in the accompanying inputField entry. |

## Declarative Metadata Sample Definition

The following is an example of the LeadConvertSettings type:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LeadConvertSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <allowOwnerChange>false</allowOwnerChange>
    <objectMapping>
        <inputObject>Lead</inputObject>
        <mappingFields>
            <inputField>custom_lead_field_1</inputField>
            <outputField>custom_account_field_1</outputField>
        </mappingFields>
        <mappingFields>
            <inputField>custom_lead_field_2</inputField>
            <outputField>custom_account_field_2</outputField>
        </mappingFields>
        <mappingFields>
            <inputField>custom_lead_field_3</inputField>
            <outputField>custom_account_field_3</outputField>
        </mappingFields>
        <outputObject>Account</outputObject>
    </objectMapping>
    <objectMapping>
        <inputObject>Lead</inputObject>
        <mappingFields>
            <inputField>custom_lead_field_4</inputField>
            <outputField>custom_opportunity_field_1</outputField>
        </mappingFields>
        <outputObject>Opportunity</outputObject>
    </objectMapping>
    <opportunityCreationOptions>VisibleOptional</opportunityCreationOptions>
</LeadConvertSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
