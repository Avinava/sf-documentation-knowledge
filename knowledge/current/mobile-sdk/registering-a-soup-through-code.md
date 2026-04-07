---
title: "Registering a Soup through Code"
domain: mobile-sdk
topic: registering-a-soup-through-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.812Z
estimatedTokens: 1479
keywords: [Registering, Soup, Code, try, access, you’re, register, Hybrid, Apps, Android, Native, iOS]
---

# Registering a Soup through Code

> Before you try to access a soup, you’re required to
            register it.

# Registering a Soup through Code

Before you try to access a soup, you’re required to register it.

To register a soup, you provide a soup name and a list of one or more index specifications. If, for some reason, you can't use a configuration file to define your soup structures, here's how you can do the same thing through code. Each of the following code examples builds an index spec array consisting of name, ID, and owner (or parent) ID fields.

You index a soup on one or more fields found in its entries. SmartStore makes sure that these indexes reflect any insert, update, and delete operations. Always specify at least one index field when registering a soup. For example, if you are using the soup as a simple key-value store, use a single index specification with a string type.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   As of Mobile SDK 6.0, you can register soups in native apps through a JSON configuration file. Where possible, we recommend this strategy over coding. See [Registering Soups with Configuration Files](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_files.htm "Beginning with Mobile SDK 6.0SmartStore lets you define soup structures through configuration files rather than code. Since all platforms and app types use the same configuration files, you can describe all your soups in a single file. You can then compile that file into any project.").
-   If your soup contains unusually large elements (> 1 MB), consider registering it to use external storage. See [Using External Storage for Large Soup Elements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_external_storage.htm).

## Hybrid Apps

The JavaScript function for registering a soup requires callback functions for success and error conditions.

```

```

If the soup does not exist, this function creates it. If the soup exists, registering lets you access it.

indexSpecs

Use the indexSpecs array to create the soup with predefined indexing. Entries in the indexSpecs array specify how to index the soup. Each entry consists of a path:type pair. path is the name of an index field; type is either “string”, “integer”, “floating”, “full\_text”, or “json1”.

```

```

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   Index paths are case-sensitive and can include compound paths, such as Owner.Name.
-   Index entries that are missing any fields described in an indexSpecs array are not tracked in that index.
-   The type of the index applies only to the index. When you query an indexed field (for example, “select {soup:path} from {soup}”), the query returns data of the type that you specified in the index specification.
-   Index columns can contain null fields.
-   Beginning in Mobile SDK 4.1, you can specify index paths that point to internal (non-leaf) nodes. You can use these paths with like and match (full-text) queries. Use the string type when you define internal node paths.

    For example, consider this element in a soup named “spies”:

    ```

    ```

    In this case, “address” is an internal node because it has children. Through the index on the path “address”, you can use a like or match query to find the “city” value—“london”—in “address”. For example:

    ```

    ```

-   Beginning in Mobile SDK 4.1, you can include arrays in index paths, with some restrictions. See [Using Arrays in Index Paths](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_arrays.htm "Index paths can contain arrays, but certain rules apply.").

successCallback

The success callback function you supply takes one argument: the soup name. For example:

```

```

When the soup is successfully created, registerSoup() calls the success callback function to indicate that the soup is ready. Wait to complete the transaction and receive the callback before you begin any activity. If you register a soup under the passed name, the success callback function returns the soup.

errorCallback

The error callback function takes one argument: the error description string.

```

```

During soup creation, errors can happen for various reasons, including:

-   An invalid or bad soup name
-   No index (at least one index must be specified)
-   Other unexpected errors, such as a database error

To find out if a soup exists, use:

```

```

## Android Native Apps

For Android, you define index specs in an array of type com.salesforce.androidsdk.smartstore.store.IndexSpec. Each index spec comprises a path—the name of an index field—and a type. Index spec types are defined in the SmartStore.Type enum and include the following values:

-   string
-   integer
-   floating
-   full\_text
-   json1

```

```

## iOS Native Apps

For iOS, you define index specs in an array of SFSoupIndex objects. Each index spec comprises a path—the name of an index field—and a type. Index spec types are defined as constants in the SFSoupIndex class and include the following values:

-   kSoupIndexTypeString
-   kSoupIndexTypeInteger
-   kSoupIndexTypeFloating
-   kSoupIndexTypeFullText
-   kSoupIndexTypeJSON1

Swift

In Mobile SDK 8.0 and later, a SmartStore native Swift extension provides the following soup registration method:

```

```

Objective-C

```

```

#### See Also

-   [SmartStore Data Types](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_data_types.htm "Like any database, SmartStore defines a set of data types that you use to create soups. SmartStore data types mirror the underlying SQLite database.")

-   [Using Full-Text Search Queries](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_full_text_search.htm "To perform efficient and flexible searches in SmartStore, you use full-text queries. Full-text queries yield significant performance advantages over “like” queries when you’re dealing with large data sets.")

## Code Examples

```
var sfSmartstore = function() {
    return cordova.require("com.salesforce.plugin.smartstore");
};
sfSmartstore().registerSoup(soupName, indexSpecs, successCallback, errorCallback);
```

```
var indexSpecs = [
    {path:"Name",type:"string"},
    {path:"Id",type:"string"}
];
```

```
{  
   "first_name":"James",
   "last_name":"Bond",
   "address":{  
      "street_number":10,
      "street_name":"downing",
      "city":"london"
   }
}
```

```
SELECT {spies:first_name, spies:last_name} FROM spies WHERE {spies:address} LIKE 'london'
```

```
function(soupName) { alert("Soup " + soupName + " was successfully created"); }
```

## Related Topics

- Registering Soups with Configuration Files (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_files.htm)
- Using External Storage for Large Soup Elements (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_external_storage.htm)
- Using Arrays in Index Paths (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_arrays.htm)
- SmartStore Data Types (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_data_types.htm)
- Using Full-Text Search Queries (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_full_text_search.htm)
