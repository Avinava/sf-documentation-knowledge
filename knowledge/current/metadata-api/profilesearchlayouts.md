---
title: "ProfileSearchLayouts"
domain: metadata-api
topic: profilesearchlayouts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.407Z
estimatedTokens: 665
keywords: [ProfileSearchLayouts, user, profile’s, search, results, layouts, similar, SearchLayouts, However, profile-specific, profile, different, layout, File, Suffix]
---

# ProfileSearchLayouts

> Represents a user profile’s search results layouts
            for an object. ProfileSearchLayouts are similar to
                SearchLayouts. However, with profile-specific layouts, each
            user profile can have a different search results layout for an object.

# ProfileSearchLayouts

Represents a user profile’s search results layouts for an object. ProfileSearchLayouts are similar to SearchLayouts. However, with profile-specific layouts, each user profile can have a different search results layout for an object.

## File Suffix and Directory Location

Profile search layouts are defined as part of a standard or custom object. SearchLayout is the default search results layout used when no layout is specified for a user profile. For more information, see [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.").

## Version

Profile search layouts for custom objects are available in API version 48.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| profileName | string[] | The name of the profile associated with a customized search results layout. The profile name can be a standard Salesforce profile or custom profile defined in your org. |
| fields | string[] | The list of fields displayed in search results for the object and for the users that have the profile Profile Name. The name field is required and is always displayed as the first column header, so it isn’t included in this list. All additional fields are included. The field name relative to the object name, for exampleMyCustomField__c, is specified for each custom field. |

## Declarative Metadata Sample Definition

The following shows a sample definition of profile-specific search layouts in an object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

To deploy a profile-specific search results layout, the profile must be defined in the destination org and if it's for a custom object, you must enable search for that custom object. If the profile-specific search results layout is for a custom object, the custom object's tab must exist in the destination org or must be included with the deployment.

```

```

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm "Picklist (Including Dependent Picklist)")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_recordtype.htm "RecordType")

#### See Also

-   [SearchLayouts](atlas.en-us.api_meta.meta/api_meta/meta_searchlayouts.htm "Represents the metadata associated with the search layouts for an object. You can customize which fields to display for users in search results, search filter fields, lookup dialogs, and recent record lists on tab home pages. You can access SearchLayouts only by accessing its encompassing CustomObject.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
                <CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
                . . .
                <profileSearchLayouts>
                <fields>ACCOUNT.NAME</fields>
                <fields>ACCOUNT.SITE</fields>
                <fields>ACCOUNT.PHONE1</fields>
                <fields>CORE.USERS.ALIAS</fields>
                <fields>ACCOUNT.ADDRESS2_CITY</fields>
                <profileName>System Administrator</profileName>
                </profileSearchLayouts>
                <profileSearchLayouts>
                <fields>ACCOUNT.NAME</fields>
                <fields>ACCOUNT.SITE</fields>
                <profileName>WDC Only User</profileName>
                </profileSearchLayouts>
                . . .
                </CustomObject>
```

## Related Topics

- CustomObject (atlas.en-us.api_meta.meta/api_meta/customobject.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_recordtype.htm)
- SearchLayouts (atlas.en-us.api_meta.meta/api_meta/meta_searchlayouts.htm)
