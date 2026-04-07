---
title: "SmartStore Data Types"
domain: mobile-sdk
topic: smartstore-data-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:31.615Z
estimatedTokens: 311
keywords: [SmartStore, Data, any, database, soups, mirror, underlying, SQLite]
---

# SmartStore Data Types

> Like any database, SmartStore defines a set of data
  types that you use to create soups. SmartStore data types mirror the
  underlying SQLite database.

# SmartStore Data Types

Like any database, SmartStore defines a set of data types that you use to create soups. SmartStore data types mirror the underlying SQLite database.

SmartStore supports the following data types for declaring index specs. In a SmartStore soup definition, an index spec defines the data type that SmartStore expects to find in the given field.

| Type | Description |
| --- | --- |
| integer | Signed integer, stored in 4 bytes (SDK 2.1 and earlier) or 8 bytes (SDK 2.2 and later) |
| floating | Floating point value, stored as an 8-byte IEEE floating point number |
| string | Text string, stored with database encoding (UTF-8) |
| full_text | String that supports full-text searching |
| JSON1 | Index type based on the SQLite JSON1 extension. Can be used in place of integer, floating, and string types. Behaves identically to those types of index specs, except that JSON1 does not support index paths that traverse arrays. |

-   **[Date Representation](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_date_representation.htm)**


#### See Also

-   [Using Arrays in Index Paths](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_arrays.htm "Index paths can contain arrays, but certain rules apply.")

## Related Topics

- Date Representation (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_date_representation.htm)
- Using Arrays in Index Paths (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_arrays.htm)
