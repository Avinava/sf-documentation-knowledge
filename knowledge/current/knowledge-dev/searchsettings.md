---
title: "SearchSettings"
domain: knowledge-dev
topic: searchsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.654Z
estimatedTokens: 1912
keywords: [SearchSettings, org's, search, settings, File, Suffix, Directory, Location, Version, SearchSettingsByObject, ObjectSearchSetting, Declarative, Metadata, Sample, Definition]
---

# SearchSettings

> Represents an org's search settings.

# SearchSettings

Represents an org's search settings.

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

SearchSettings values are stored in a single file named Search.settings in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

SearchSettings is available in API version 37.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| documentContentSearchEnabled | boolean | Indicates whether a full-text document search is performed. |
| enableAdvancedSearchInAlohaSidebar | boolean | Indicates whether advanced search is available in the search sidebar (true) or not (false). Available in Salesforce Classic only. Available in API version 46.0 and later. |
| enableEinsteinSearchAssistantDialog | boolean | Indicates whether the Einstein search experience is enabled (true) or not (false). Available in API version 50.0 and later. |
| enableEinsteinSearchEs4kPilot | boolean | Indicates whether Einstein Search for Knowledge enhancements are enabled (true) or not (false). Available in API version 54.0 and later.This feature became generally available in Winter '23. In API version 56.0 and later, the default value is true. |
| enableEinsteinSearchNaturalLanguage | boolean | Indicates whether natural language search is enabled (true) or not (false). Available in API version 50.0 and later. |
| enableEinsteinSearchNLSFilters | boolean | Indicates whether the Natural Language Search Filters (Pilot) feature is enabled (true) or not (false). Available in API version 54.0 and later. |
| enableEinsteinSearchPersonalization | boolean | Indicates whether search personalization is enabled (true) or not (false). Available in Lightning Experience only. Available in API version 47.0 and later. |
| enablePersonalTagging | boolean | Indicates whether users are allowed to group records from various objects by a common theme (true) or not (false). Personal tags are visible to the user only. Available in Salesforce Classic only. Available in API version 48.0 and later. |
| enablePublicTagging | boolean | Indicates whether users are allowed to group records from various objects by a common theme (true) or not (false). Personal tags are visible to all users. Available in Salesforce Classic only. Available in API version 48.0 and later. |
| enableSalesforceGeneratedSynonyms | boolean | Indicates whether search synonyms are enabled (true) or not (false). Available in API version 47.0 and later. |
| enableSearchTermHistory | boolean | Indicates whether users are allowed to group records from various objects by a common theme (true) or not (false). Public tags are visible to everyone in the organization. Available in Salesforce Classic only. Available in API version 48.0 and later. |
| enableSetupSearch | boolean | Indicates whether the search box in the Setup sidebar returns matching custom fields, custom objects, and other supported setup items when you press Enter (true) or not (false). The default is true in Developer, Performance, Professional, Enterprise, and Unlimited editions, and false in all other editions. Available in API version 47.0 and later. |
| enableSuggestArticlesLinksOnly | boolean | Indicates whether links are provided to knowledge articles from Cases similar to the current Case (true) or not (false). Available in API version 48.0 and later. |
| enableUseDefaultSearchEntity | boolean | Indicates whether to use the admin-specified default entity in sidebar search (true) or not (false). Available in Salesforce Classic only. Available in API version 48.0 and later. |
| optimizeSearchForCJKEnabled | boolean | Required. Indicates whether the search is optimized for the Japanese, Chinese, and Korean languages (true) or not (false). This setting affects sidebar search and the account search for Find Duplicates on a lead record in sidebar search and global search. Enable this option if users are searching mostly in Japanese, Chinese, or Korean, and if the text in searchable fields is mostly in those languages. |
| recentlyViewedUsersForBlankLookupEnabled | boolean | Required. Indicates whether the list of records that are returned from a user autocomplete lookup and from a blank user lookup is taken from the user’s recently viewed user records (true). Otherwise this setting is false if the lookup shows a list of recently accessed user records from across your org (false). Only applies to User object blank lookup searches. |
| searchSettingsByObject | SearchSettingsByObject | Required. Represents a list of search settings for each object. |
| sidebarAutoCompleteEnabled | boolean | Required. Indicates whether autocomplete is enabled for sidebar search (true) or not (false). Autocomplete is when users start typing search terms and sidebar search displays a matching list of recently viewed records. |
| sidebarDropDownListEnabled | boolean | Required. Indicates whether a dropdown list appears in the sidebar search section (true) or not (false). From this list, users can select to search within tags, within a specific object, or across all objects. |
| sidebarLimitToItemsIOwnCheckboxEnabled | boolean | Required. Indicates whether the Limit to Items I Own checkbox appears (true) or not (false). The checkbox allows your users to include only records for which they are the record owner when entering search queries in the sidebar. |
| singleSearchResultShortcutEnabled | boolean | Required. Indicates whether a shortcut is enabled (true) or not (false). With the shortcut, users skip the search results page and go directly to the record’s detail page when their search returns only a single item. This setting doesn't apply to tags, case comments (in advanced search), and global search. |
| spellCorrectKnowledgeSearchEnabled | boolean | Required. Indicates whether spell check is enabled for Knowledge search (true) or not (false). |

## SearchSettingsByObject

| Field Name | Field Type | Description |
| --- | --- | --- |
| searchSettingsByObject | ObjectSearchSetting | Contains a list of search settings for each object. |

## ObjectSearchSetting

A list of search settings for each object.

| Field Name | Field Type | Description |
| --- | --- | --- |
| enhancedLookupEnabled | boolean | Required. Indicates whether enhanced lookups is enabled for the object (true) or not (false). |
| lookupAutoCompleteEnabled | boolean | Required. Indicates whether autocomplete is enabled for lookup search (true) or not (false). Autocomplete is when users edit the lookup field inline by choosing an autosuggestion. |
| name | string | Required. The entity name of the object being configured. |
| resultsPerPageCount | int | Required. The number of search results per page. |

## Declarative Metadata Sample Definition

The following is an example of the Search.settings file.

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the Search settings metadata for an organization.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see Settings. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
    <SearchSettings xmlns="http://soap.sforce.com/2006/04/metadata">
        <enableSetupSearch>false</enableSetupSearch>
        <enableAdvancedSearchInAlohaSidebar>false</enableAdvancedSearchInAlohaSidebar>
        <enableQuerySuggestionPigOn>false</enableQuerySuggestionPigOn>
        <enableSalesforceGeneratedSynonyms>false</enableSalesforceGeneratedSynonyms>
        <enableSearchTermHistory>false</enableSearchTermHistory>
        <enablePublicTagging>false</enablePublicTagging>
        <enablePersonalTagging>false</enablePersonalTagging>
        <enableSuggestArticlesLinksOnly>false</enableSuggestArticlesLinksOnly>
        <enableUseDefaultSearchEntity>false</enableUseDefaultSearchEntity>
            <documentContentSearchEnabled>true</documentContentSearchEnabled>
            <optimizeSearchForCJKEnabled>true</optimizeSearchForCJKEnabled>
            <recentlyViewedUsersForBlankLookupEnabled>true</recentlyViewedUsersForBlankLookupEnabled>
            <searchSettingsByObject>
            <searchSettingsByObject>
                <enhancedLookupEnabled>false</enhancedLookupEnabled>
                <lookupAutoCompleteEnabled>false</lookupAutoCompleteEnabled>
                <name>Account</name>
                <resultsPerPageCount>25</resultsPerPageCount>
            </searchSettingsByObject>
            <searchSettingsByObject>
                <enhancedLookupEnabled>false</enhancedLookupEnabled>
                <lookupAutoCompleteEnabled>false</lookupAutoCompleteEnabled>
                <name>Activity</name>
                <resultsPerPageCount>25</resultsPerPageCount>
            </searchSettingsByObject>
            <searchSettingsByObject>
                <enhancedLookupEnabled>false</enhancedLookupEnabled>
                <lookupAutoCompleteEnabled>false</lookupAutoCompleteEnabled>
                <name>Asset</name>
                <resultsPerPageCount>25</resultsPerPageCount>
            </searchSettingsByObject>
            </searchSettingsByObject>
            <sidebarAutoCompleteEnabled>true</sidebarAutoCompleteEnabled>
            <sidebarDropDownListEnabled>true</sidebarDropDownListEnabled>
            <sidebarLimitToItemsIOwnCheckboxEnabled>true</sidebarLimitToItemsIOwnCheckboxEnabled>
            <singleSearchResultShortcutEnabled>true</singleSearchResultShortcutEnabled>
            <spellCorrectKnowledgeSearchEnabled>true</spellCorrectKnowledgeSearchEnabled>
        <enableEinsteinSearchPersonalization>true</enableEinsteinSearchPersonalization>
    </SearchSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Search</members>
        <name>Settings</name>
    </types>
    <version>37.0</version>
</Package>
```
