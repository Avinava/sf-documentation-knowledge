---
title: "Syncing Related Records"
domain: mobile-sdk
topic: syncing-related-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.396Z
estimatedTokens: 3031
keywords: [Syncing, Records, It’s, common, problem, offline, data, easily, sync, explicit, changes, how, affected, manually, enough]
---

# Syncing Related Records

> It’s a common problem in syncing offline data: You can easily sync your explicit
    changes, but how do you update affected related records? You can do it manually with enough
    knowledge, determination, and perspicacity, but that’s the old way. Starting with Mobile SDK
    5.2, Mobile Sync provides tools
    that let you sync parent records and their related records with a single call.

# Syncing Related Records

It’s a common problem in syncing offline data: You can easily sync your explicit changes, but how do you update affected related records? You can do it manually with enough knowledge, determination, and perspicacity, but that’s the old way. Starting with Mobile SDK 5.2, Mobile Sync provides tools that let you sync parent records and their related records with a single call.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Relationship Types

Related record sync supports two types of one-to-many relationships: Lookup and Master-detail. Both types are defined in the child-to-parent, many-to-one direction. Each child knows its parent, but the parent doesn’t know its children.

**Lookup Relationships**

A lookup relationship is a “loose” link between objects based on one or more fields. For lookup relationships:

-   Child records don’t require a parent field.
-   Changes to one object don’t affect the security, access, or deletion of a linked object.

Salesforce supports up to 25 lookup fields per object. Lookup relationships can be multiple layers deep.

**Master-detail Relationships**

A master-detail relationship is a parent-child link in which the parent object exerts some control over its children. In master-detail linkage:

-   Child records require a parent field.
-   The parent’s access level determines the access level of its children.
-   If a parent record is deleted, its children are also deleted.

Salesforce supports up to two master-detail fields per object, and up to three levels of master-detail relationships.

See [Object Relationships Overview](https://help.salesforce.com/articleView?id=overview_of_custom_object_relationships.htm&language=en_US) in Salesforce Help.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Mobile Sync doesn’t support many-to-many relationships.

## Objects Used in Related Record Sync

Related record sync uses two special types of sync targets:

Parent-children sync up target

-   **iOS:** SFParentChildrenSyncUpTarget
-   **Android:** ParentChildrenSyncUpTarget

Handles locally created or updated records and deleted records.

Parent-children sync down target

-   **iOS:** SFParentChildrenSyncDownTarget
-   **Android:** ParentChildrenSyncDownTarget

Supports resync and cleanResyncGhosts methods.

These targets support leave-if-changed and overwrite merge modes. Each target provides a factory method (on iOS) or a constructor (on Android) that initializes an instance with the required information you provide. To perform the sync, you configure a new target class instance and pass it to the standard Mobile Sync sync method that accepts a target object.

To initialize the targets, you also provide two helper objects that deliver necessary related record information:

Parent information object

-   **iOS:**

    Swift

    ParentInfo

    Objective-C

    SFParentInfo

-   **Android:** ParentInfo

Includes:

-   Object type
-   Soup name
-   ID field name (Optional in all cases. Defaults to “Id”. Set this value only if you’re specifying a different field to identify the records.)
-   Last Modified Date field name (Optional in all cases. Defaults to “LastModifiedDate”. Set this value only if you’re specifying a different field for timestamps.)
-   External ID field name (Optional in all cases. If provided, and if a locally created parent or child record specifies a value for it, Mobile Sync performs an upsert instead of create).

Child information object

-   **iOS:** ChildrenInfo
-   **Android:** ChildrenInfo

Includes:

-   Object type
-   Soup name
-   Parent ID field name
-   ID field name (Optional in all cases. Defaults to “Id”. Set this value only if you’re specifying a different field to identify the records.)
-   Last Modified Date field name (Optional in all cases. Defaults to “LastModifiedDate”. Set this value only if you’re specifying a different field for timestamps.)
-   External ID field name (Optional in all cases. If provided, and if a locally created parent or child record specifies a value for it, Mobile Sync performs an upsert instead of create).

## Preparing Your SmartStore Data Model

To prepare for handling related objects offline, you first set up a SmartStore soup for each expected parent and child object type. For each soup, add indexed ID fields that model the server-side relationships. Here’s the list of required indexed fields:

Soup for a parent object:

Field for server ID of record

Soup for a child object:

Field for server ID of record

Field for server ID of parent record

All sync operations—up and down—begin with the parent soup and then continue to the child soups. Here’s how this flow works:

-   When you sync down related records, you are targeting parent records, and the sync downloads those records and all their children. For example, if you’re syncing accounts with their contacts, you get the contacts linked to the accounts you’ve downloaded. You don’t get contacts that aren’t linked to those accounts.
-   When you sync up related records, Mobile Sync iterates over the soup of parent records and picks up related children records. Modified child records that aren’t related to a parent record are ignored during that sync up operation.

## Sync Up

To initialize the parent-child sync-up target, you provide parent information objects and child information objects. These objects fully describe the relationships between parent-child records, both on the server and in the local store. You also provide the list of fields to sync. Here’s the full list of required information:

-   Parent information object
-   Child information object
-   Relationship type (for example, master-detail or lookup)
-   Fields to sync up in parent and children soups

The sync up operation iterates over the soup containing the parent records and uses the given information to pull related records from the children’s soups. A record is considered dirty when the \_\_local\_\_ field is set to true. A record tree—consisting of one parent and its children—is a candidate for sync up when any record in the tree is dirty. Whether the sync up actually occurs depends on how Mobile Sync handles the merge mode.

**“Leave-if-changed” Merge Mode Handling**

Mobile Sync fetches Last Modified Date fields of the target parent and children server records. The sync up operation skips that record tree if

-   the last modified date of any fetched server record is more recent than its corresponding local record

    or

-   if any fetched server record has been deleted.

**Updates Applied after Sync Up**

After the local changes have been synced to the server, Mobile Sync cleans up related records.

-   If sync up creates any parent or child record on the server, Mobile Sync updates the server ID field of the corresponding local record. If the created record is a parent, the parent ID fields of its children are also updated in the local store.
-   If any server records were deleted since the last sync down, Mobile Sync deletes the corresponding local records.
-   If sync up deletes a parent record and the relationship type is master-detail, Mobile Sync deletes the record’s children on the server and in the local store.

## Sync Down

To initialize the parent-children sync-down target, you provide parent information objects and children information objects. These objects fully describe the relationships between parent-child records, both on the server and in the local store. You also provide a list of fields to sync and some SOQL filters.

The new sync down target is actually a subclass of the SOQL sync down target. Instead of being given the SOQL query, however, the target generates it from the parent and children information objects, list of fields, and SOQL filters.

**Information Passed to Sync Down Targets**

-   Parent information object
-   Child information object
-   Relationship type (for example, master-detail or lookup)
-   Fields to sync down in parent and children soups
-   SOQL filter to apply in query on root records during sync down—for example, the condition of a WHERE clause

**Server Call**

Mobile Sync fetches the record trees, each consisting of one parent and its children, using SOQL. It then separates parents from their children and stores them in their respective soups.

**“Leave-if-changed” Merge Mode Handling**

Local record trees that contain any dirty records—locally created, modified, or deleted records—are left unaltered. For example, if a parent record has one dirty child, Mobile Sync doesn’t update the parent or the child. This rule applies even if the parent is clean locally but has been changed on the server.

**Handling Resync**

During resync, Mobile Sync adjusts the SOQL query to download only those record trees in which the parent changed since the last sync.

## Implementing Related Record Sync

After you understand the principles and requirements involved, implementing it is straightforward. You can add related record sync to your code in a few steps. The following code snippets demonstrate the technique using Account (parent) and Contact (child) objects.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

The following server-side limitations affect how you sync records from related and unrelated objects.

-   You can update your soups using the Composite API. Be aware, however, that this API limits you to 25 records at a time. For an example, see the iOS SFParentChildrenSyncUpTarget or AndroidParentChildrenSyncUpTarget implementation.
-   SOQL limitations affect how Mobile Sync can select child records in a single query. As a result, reSync can sync the changed children of changed parents, but not the changed children of unchanged parents. To work around this limitation, you can use a separate custom target that directly queries child objects.
-   SOQL doesn’t have a UNION operator, so you can’t get unrelated entities with a single call to the server. Instead, use separate queries. For example, you can use a distinct SOQLSyncDownTarget object for each query.
-   To sync up non-related records, consider implementing a custom sync up target.

**iOS and Android**

1.  Create a userstore.json file that defines SmartStore soups with the required indexed fields.

    ```

    ```

2.  Create a usersyncs.json file that defines two named syncs. In this example, ”DownSync” and “UpSync” configurations model the parent-child relationship between Account and Contact objects.

    ```

    ```


The following steps demonstrate how to use these configurations to synchronize related Account (parent) and Contact (child) records.

**iOS**

1.  In your Xcode project under **Build Phases** | **Copy Bundle Resources**, add the userstore.json and usersyncs.json files to your Xcode target.
2.  Load the store and sync configurations. Call these loaders after Mobile SDK is initialized and before you call any SmartStore or Mobile Sync methods. For example, in your AppDelegate class, call these methods in the block you pass to loginIfRequired. Don’t call either of these methods more than once.

    Swift

    ```

    ```

    Objective-C

    ```

    ```

3.  Call a Mobile Sync reSync method that takes a sync name. By passing sync names from your configuration file, you can use the reSync(named:update:) method for every sync up and sync down operation.

    Swift

    ```

    ```

    Objective-C

    ```

    ```


**Android**

1.  Place the userstore.json and usersyncs.json files in your project’s res/raw folder.
2.  Call the Mobile Sync sync method that takes a sync name. By passing sync names from your configuration file, you can use the reSync(named:update:) method for every sync up and sync down operation.

    For sync up and sync down:

    ```

    ```

## Code Examples

```
{
  "soups": [
    {
      "soupName": "ContactSoup",
      "indexes": [
        { "path": "Id", "type": "string"},
        { "path": "LastName", "type": "string"},
        { "path": "AccountId", "type": "string"},
        { "path": "__local__", "type": "string"},
        { "path": "__locally_created__", "type": "string"},
        { "path": "__locally_updated__", "type": "string"},
        { "path": "__locally_deleted__", "type": "string"}
      ]
    },
    {
      "soupName": "AccountSoup",
      "indexes": [
        { "path": "Id", "type": "string"},
        { "path": "Name", "type": "string"},
        { "path": "Description", "type": "string"},
        { "path": "__local__", "type": "string"},
        { "path": "__locally_created__", "type": "string"},
        { "path": "__locally_updated__", "type": "string"},
        { "path": "__locally_deleted__", "type": "string"}
      ]
    }
  ]
}
```

```
{
    "syncs": [{
        "syncName": "DownSync",
        "syncType": "syncDown",
        "soupName": "AccountSoup",
        "target": {
            "iOSImpl": "SFParentChildrenSyncDownTarget",
            "AndroidImpl": "ParentChildrenSyncDownTarget",
            "parent": {
                "idFieldName": "Id",
                "sobjectType": "Account",
                "modificationDateFieldName": "LastModifiedDate",
                "soupName": "AccountSoup"
            },
            "parentFieldlist": [
                "Id",
                "Name",
                "Description"
            ],
            "children": {
                "parentIdFieldName": "AccountId",
                "idFieldName": "Id",
                "sobjectType": "Contact",
                "modificationDateFieldName": "LastModifiedDate",
                "soupName": "ContactSoup",
                "sobjectTypePlural": "Contacts"
            },
            "childrenFieldlist": [
                "LastName",
                "AccountId"
            ],
            "relationshipType": "MASTER_DETAIL",
            "parentSoqlFilter": "Name LIKE 'A%' ",
            "type": "parent_children",
            "idFieldName": "Id"
        },
        "options": {"mergeMode": "OVERWRITE"}
    },

    {
        "syncName": "UpSync",
        "syncType": "syncUp",
        "soupName": "AccountSoup",
        "target": {
            "iOSImpl": "SFParentChildrenSyncUpTarget",
            "AndroidImpl": "ParentChildrenSyncUpTarget",
            "childrenCreateFieldlist": [
                "LastName",
                "AccountId"
            ],
            "parentCreateFieldlist": [
                "Id",
                "Name",
                "Description"
            ],
            "childrenUpdateFieldlist": [
                "LastName",
                "AccountId"
            ],
            "parentUpdateFieldlist": [
                "Name",
                "Description"
            ],
            "parent": {
                "idFieldName": "Id",
                "sobjectType": "Account",
                "modificationDateFieldName": "LastModifiedDate",
                "soupName": "AccountSoup"
            },
            "relationshipType": "MASTER_DETAIL",
            "type": "rest",
            "modificationDateFieldName": "LastModifiedDate",
            "children": {
                "parentIdFieldName": "AccountId",
                "idFieldName": "Id",
                "sobjectType": "Contact",
                "modificationDateFieldName": "LastModifiedDate",
                "soupName": "ContactSoup",
                "sobjectTypePlural": "Contacts"
            },
            "parentUpdateFieldlist": [
                "Name",
                "Description"
            ],
            "idFieldName": "Id"
        },
        "options": {"mergeMode":"LEAVE_IF_CHANGED"}
    }
    ]
}
```

```
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.initializeAppViewState()
    AuthHelper.loginIfRequired {
        MobileSyncSDKManager.shared.setupUserStoreFromDefaultConfig()
        MobileSyncSDKManager.shared.setupUserSyncsFromDefaultConfig()
        self.setupRootViewController()
    }
...
    return true
}
```

```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    [self initializeAppViewState];
    [SFSDKAuthHelper loginIfRequired:^{
        [self setupRootViewController];
        [[MobileSyncSDKManager sharedManager] setupUserStoreFromDefaultConfig];
        [[MobileSyncSDKManager sharedManager] setupUserSyncsFromDefaultConfig];
    }];
...
    return YES;
}
```

```
self.syncMgr.reSync(named: kSyncName) { [weak self] (syncState) in
    // Handle updates
}
```
