---
title: "Syncing Up by External ID"
domain: mobile-sdk
topic: syncing-up-by-external-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.273Z
estimatedTokens: 802
keywords: [Syncing, External, Mobile, SDK, enhances, sync-up, functionality, adding, ability, sync, feature, specify, target, definition, soup]
---

# Syncing Up by External ID

> Mobile SDK enhances its sync-up functionality by adding the ability to sync up by
    external ID. To use this feature, you specify an external ID field name in the sync up target
    definition. If a soup record is marked as locally created, updated, or deleted and has an
    external ID value, Mobile Sync syncs it up using upsert
    instead of create. If the record also has a valid Id value, however, Mobile Sync updates the indicated Salesforce
    record.

# Syncing Up by External ID

Mobile SDK enhances its sync-up functionality by adding the ability to sync up by external ID. To use this feature, you specify an external ID field name in the sync up target definition. If a soup record is marked as locally created, updated, or deleted and has an external ID value, Mobile Sync syncs it up using upsert instead of create. If the record also has a valid Id value, however, Mobile Sync updates the indicated Salesforce record.

You can configure the external ID field name in Mobile Sync configuration files or in code. External IDs are supported for standard sync up targets and parent-child sync up targets.

## Advantage of Using Upserts

Upserts are useful for avoiding record duplication. When your sync target supports an external ID field name and a locally created record has a value for that field, Mobile Sync upserts, rather than creates, the server record.

True upsert behavior allows the app to deal with network disconnection gracefully. If the network disconnects during a sync up, the app typically doesn’t know whether its last request reached the server. In this case, the app’s logical reaction when connectivity returns is to resync.

However, consider what happens if the server did in fact received your request and created the record. In this case, resyncing without using upsert creates a duplicate record. If you’ve configured external ID field names in the sync up target, the resync can run safely: upsert finds the recently created record and merely rewrites the record’s fields with their existing values.

## Parent-Child Sync Up Recommendation

In parent-child scenarios, you can specify the external ID field name for parent or children, or both. For a graceful offline experience, it’s best to define the external ID field name in parent and children sync configurations.

## Configuring an External ID Field Name Declaratively

Here are examples of specifying an external ID field name declaratively for a target in sync configuration files.

Standard Sync Up Target

```

```

Parent-Child Sync Up Target

```

```

Extended Example

For a “one-stop” example of many types of sync configurations, see [shared/example.usersyncs.json](https://github.com/forcedotcom/SalesforceMobileSDK-Package/blob/dev/shared/example.usersyncs.json) in the [github.com/forcedotcom/SalesforceMobileSDK-Shared](https://github.com/forcedotcom/SalesforceMobileSDK-Shared "HTML (New Window)") GitHub repo.

## Configuring External ID Field Name Programmatically

iOS

For standard sync up targets:

Swift

Set the externalIdFieldName property in your SyncUpTarget or BatchSyncUpTarget class.

Objective-C

Set the externalIdFieldName property in your SFSyncUpTarget or SFBatchSyncUpTarget class.

For parent-child sync up targets:

Swift

Objective-C

Pass a non-nil value to the externalIdFieldName parameters of these factory methods (new in Mobile SDK 9.0):

```

```

Android

For standard sync up targets:

Create your target with one of these constructors:

```

```

```

```

For parent-child sync up targets:

Pass a non-nil value to the externalIdFieldName parameters of these factory methods (new in Mobile SDK 9.0):

```

```

```

```

## Code Examples

```
{ 
  “syncName”: “myExampleSyncUp”, 
  “syncType”: “syncUp”, 
  “soupName”: “MySoup”, 
    “target”: { 
               “idFieldName”: “Id”, 
               “modificationDateFieldName”: “LastModifiedDate”, 
               “externalIdFieldName”: “TheExternalId” 
   }, 
   “options”: { 
               “fieldlist”: [“Name”, “Description”], 
               “mergeMode”: “OVERWRITE” 
   }
}
```

```
{
   "syncName":"parentChildrenSyncUp",
   "syncType":"syncUp",
   "soupName":"accounts",
   "target":{
      "iOSImpl":"SFParentChildrenSyncUpTarget",
      "androidImpl":"com.salesforce.androidsdk.mobilesync.target.ParentChildrenSyncUpTarget",
      "parent":{
         "idFieldName":"IdX",
         "externalIdFieldName":"ExternalIdX",
         "sobjectType":"Account",
         "modificationDateFieldName":"LastModifiedDateX",
         "soupName":"accounts"
      },
      "createFieldlist":[
         "IdX",
         "Name",
         "Description"
      ],
      "updateFieldlist":[
         "Name",
         "Description"
      ],
      "children":{
         "parentIdFieldName":"AccountId",
         "idFieldName":"IdY",
         "externalIdFieldName":"ExternalIdY",
         "sobjectType":"Contact",
         "modificationDateFieldName":"LastModifiedDateY",
         "soupName":"contacts",
         "sobjectTypePlural":"Contacts"
      },
      "childrenCreateFieldlist":[
         "LastName",
         "AccountId"
      ],
      "childrenUpdateFieldlist":[
         "FirstName",
         "AccountId"
      ],
      "relationshipType":"MASTER_DETAIL"
   },
   "options":{
      "fieldlist":[
         
      ],
      "mergeMode":"LEAVE_IF_CHANGED"
   }
}
```

```
// From SFParentInfo.h
+ (SFParentInfo *)newWithSObjectType:(NSString *)sobjectType
                            soupName:(NSString *)soupName
                         idFieldName:(NSString *)idFieldName
           modificationDateFieldName:(NSString *)modificationDateFieldName
                 externalIdFieldName:(NSString * __nullable) externalIdFieldName;

// From SFChildrenInfo.h
+ (SFChildrenInfo *)newWithSObjectType:(NSString *)sobjectType
                     sobjectTypePlural:(NSString *)sobjectTypePlural
                              soupName:(NSString *)soupName
                     parentIdFieldName:(NSString *)parentIdFieldName
                           idFieldName:(NSString *)idFieldName
             modificationDateFieldName:(NSString *)modificationDateFieldName
                   externalIdFieldName:(NSString * __nullable)externalIdFieldName;
```

```apex
public SyncUpTarget(List<String> createFieldlist, List<String> updateFieldlist, 
    String idFieldName, String modificationDateFieldName, 
    String externalIdFieldName)
```

```apex
public BatchSyncUpTarget(List<String> createFieldlist, List<String> updateFieldlist, 
    String idFieldName, String modificationDateFieldName, 
    String externalIdFieldName)
```
