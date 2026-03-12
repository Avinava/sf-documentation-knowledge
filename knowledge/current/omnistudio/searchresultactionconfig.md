---
title: "SearchResultActionConfig"
domain: omnistudio
topic: searchresultactionconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:52.673Z
estimatedTokens: 764
keywords: [SearchResultActionConfig, Represents, collection, fields, set, actions, user, perform, results, returned, criteria-based, search., Important, Parent, File, Suffix, Directory, Location, Version, Special]
---

# SearchResultActionConfig

> Represents a collection of fields to set up the actions
			that a user can perform on results returned by criteria-based search.

# SearchResultActionConfig

Represents a collection of fields to set up the actions that a user can perform on results returned by criteria-based search.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

SearchResultActionConfig components have the suffix .SearchResultActionConfigSettings and are stored in the SearchResultActionConfigSettings folder.

## Version

SearchResultActionConfig components are available in API version 59.0 and later.

## Special Access Rules

This type is available if Criteria-Based Search and Filter is enabled in your org.

## Fields

| Field Name | Description |
| --- | --- |
| actionReference | Field TypestringDescriptionRequired.The action that a user can launch for a search result. Specify the ID of an instance that corresponds to your action type. |
| actionScope | Field TypeSearchResultActionScope (enumeration of type string)DescriptionRequired.Specifies the scope of the action that the user can launch.Valid values are:Global—Select to apply the action to all record types in the search result.Inline—Select to restrict the action to a single record. Available in API version 64.0 and later. |
| actionType | Field TypeSearchResultActionType (enumeration of type string)DescriptionRequired.Specifies the type of action that a user can launch.Valid values are:FlowDefinitionLightningWebComponentOmniScript—Available in API version 60.0 and later. |
| agentConfirmationMessage | Field TypestringDescriptionThe confirmation message displayed to the agent. The character limit is 255. Available in API version 64.0 and later. |
| description | Field TypestringDescriptionThe description of the search result action configuration. |
| isAiAction | TypebooleanDescriptionIndicates whether the current action uses generative AI (true) or not (false). The default value is false. Available in API version 64.0 and later. |
| masterLabel | Field TypestringDescriptionRequired.The name of the action that's displayed in the search page. |

## Declarative Metadata Sample Definition

The following is an example of a SearchResultActionConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SearchResultActionConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionReference>setup_service_experience__Create_Case</actionReference>
    <actionScope>Global</actionScope>
    <actionType>FlowDefinition</actionType>
    <agentConfirmationMessage>test confirmation message</agentConfirmationMessage>
    <description>Screen flow to create a case.</description>
    <isAiAction>true</isAiAction>
    <masterLabel>Create a Case</masterLabel>
</SearchResultActionConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>SearchResultActionConfig</name>
    </types>
    <version>59.0</version>
</Package>
```

## Related Topics

- SearchResultActionConfig (atlas.en-us.industries_reference.meta/industries_reference/meta_searchresultactionconfig.htm)
