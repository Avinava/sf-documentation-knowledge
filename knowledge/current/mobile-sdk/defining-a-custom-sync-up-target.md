---
title: "Defining a Custom Sync Up Target"
domain: mobile-sdk
topic: defining-a-custom-sync-up-target
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.645Z
estimatedTokens: 1180
keywords: [Defining, Sync, Target, define, targets, operations, subclassing, platform’s, abstract, base, hybrid, apps, you’re, implement, native, platform, support, classes, Handling]
---

> You define custom targets for sync up operations by subclassing your platform’s abstract base
   class for sync up targets. To use custom targets in hybrid apps, you’re required to implement a
   custom native target class for each platform you support. The base sync up target classes
   are:

# Defining a Custom Sync Up Target

You define custom targets for sync up operations by subclassing your platform’s abstract base class for sync up targets. To use custom targets in hybrid apps, you’re required to implement a custom native target class for each platform you support. The base sync up target classes are:

-   **iOS:**

    | Swift | Objective-C |
    | --- | --- |
    | SyncUpTarget | SFSyncUpTarget |

-   **Android:** SyncUpTarget

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

These classes sync the requested records but not their related records. To include related records, use the sync target classes described in [Syncing Related Records](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_related.htm#entity_framework_sync_related "It’s a common problem in syncing offline data: You can easily sync your explicit changes, but how do you update affected related records? You can do it manually with enough knowledge, determination, and perspicacity, but that’s the old way. Starting with Mobile SDK 5.2, Mobile Sync provides tools that let you sync parent records and their related records with a single call.").

## Handling Field Lists in Create and Update Operations

A target’s Create On Server and Update On Server methods operate only on the list of fields specified in their argument lists. However, a Salesforce object can require the target to create certain fields that can’t be updated by apps. With these objects, a target that uses a single field list for both create and update operations can fail if it tries to update locked fields.

To specify distinct field lists for create and update operations, you can use an initializer method that supports createFieldlist and updateFieldlist parameters. This option can save you the effort of defining a custom target if you’re doing so only to provide these field lists.

iOS

Call the following SFSyncUpTarget init method:

Swift

```

```

Here's an example:

```

```

Objective-C

```

```

If you provide the createFieldlist and updateFieldlist arguments, the target uses them where applicable. In those cases, the target ignores the field list defined in the sync options object.

Android

Use the following SyncUpTarget constructor:

```

```

If you provide the createFieldlist and updateFieldlist arguments, the target uses them where applicable. In those cases, the target ignores the field list defined in the SyncOptions object.

## Required Methods

Every custom target class must implement the following required methods.

Create On Server Method

Sync up a locally created record. Hybrid and React native apps can override the fields parameter by calling syncUp with the optional createFieldList parameter.

iOS:

Swift

```

```

Objective-C

```

```

Android:

```

```

Update On Server Method

Sync up a locally updated record. For the objectId parameter, Mobile Sync uses the field specified in the getIdFieldName() method (Android) or the idFieldName property (iOS) of the custom target. Hybrid and React native apps can override the fields parameter by calling syncUp with the optional updateFieldList parameter.

**iOS:**

Swift

```

```

Objective-C

```

```

Android:

updateOnServer(SyncManager syncManager, String objectType, String objectId, Map<String, Object> fields);

Delete On Server Method

Sync up a locally deleted record. For the objectId parameter, Mobile Sync uses the field specified in the getIdFieldName() method (Android) or the idFieldName property (iOS) of the custom target.

**iOS:**

Swift

```

```

Objective-C

```

```

Android:

```

```

Optional Configuration Changes

Optionally, you can override the following values in your custom class.

getIdsOfRecordsToSyncUp

List of record IDs returned for syncing up. By default, these methods return any record where \_\_local\_\_ is true.

iOS:

Swift

```

```

Objective-C

```

```

Android:

```

```

Modification Date Field Name

Field used during a LEAVE\_IF\_CHANGED sync up operation to determine whether a record was remotely modified. Default value is lastModifiedDate.

iOS (Swift and Objective-C):

modificationDateFieldName property

Android:

```

```

isNewerThanServer

Determines whether a soup element is more current than the corresponding server record.

iOS:

Swift

```

```

Objective-C

```

```

Android:

```

```

ID Field Name

Field used to get the ID of the record. For example, during sync up, Mobile SDK obtains the ID that it passes to the updateOnServer() method from the field whose name matches idFieldName in the local record.

iOS (Swift and Objective-C):

idFieldName property

Android:

String getIdFieldName();

## Code Examples

```
SyncUpTarget.init(createFieldlist: [Any]?, updateFieldlist: [Any]?)
```

```
SyncUpTarget.init(createFieldlist: nil, updateFieldlist: ["Name"])
```

```
- (instancetype)initWithCreateFieldlist:(NSArray *)createFieldlist
                        updateFieldlist:(NSArray *)updateFieldlist
```

```apex
public SyncUpTarget(List<String> createFieldlist, List<String> updateFieldlist)
```

```
func createOnServer(syncManager: SyncManager, 
                         record: [AnyHashable : Any], 
                      fieldlist: [Any], 
                     onComplete: SyncUpcompletionBlock([AnyHashable : Any]?) 
                                     -> Void, 
                         onFail: SyncUpErrorBlock(Error) -> Void)
```

## Related Topics

- Syncing Related Records (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_related.htm)
