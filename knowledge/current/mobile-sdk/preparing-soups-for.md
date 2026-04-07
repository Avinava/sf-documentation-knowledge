---
title: "Preparing Soups for"
domain: mobile-sdk
topic: preparing-soups-for
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.729Z
estimatedTokens: 1236
keywords: [Preparing, Soups, exchange, Salesforce, cloud, typically, Mobile, Sync, synchronization, support, app, require, manage, special, soup]
---

# Preparing Soups for

> Soups that exchange information with the Salesforce cloud typically use Mobile Sync for synchronization. To support
   Mobile Sync, most app types require you to
  create and manage special soup fields for “sync up” operations.

# Preparing Soups for

Soups that exchange information with the Salesforce cloud typically use Mobile Sync for synchronization. To support Mobile Sync, most app types require you to create and manage special soup fields for “sync up” operations.

Types of apps that require you to code these special fields include:

-   Hybrid apps that do not use Force.SObject (from mobilesync.js) to create and manage local records
-   Native apps
-   React Native apps

If your hybrid app uses Force.SObject for local records, Mobile Sync automatically creates and manages these fields for you. You can ignore the rest of this discussion.

## Add Required Fields

1.  Add the following fields to your soup elements. The first three are operation type fields:

    Operation Type Fields

    Be sure to set the appropriate field to true for every create, update, or delete operation.

    \_\_locally\_created\_\_

    -   Type: string
    -   Set this field to true on elements that your app *creates* locally.

    \_\_locally\_updated\_\_

    -   Type: string
    -   Set this field to true after your app *updates* an element locally.

    \_\_locally\_deleted\_\_

    -   Type: string
    -   Set this field to true when your app *is deleting* an element locally.

    Control Fields

    \_\_local\_\_

    -   Type: string
    -   This field indicates that some local change has occurred. You’re required to:
        -   Set this field to true when any of the operation type fields is true.
        -   Add a string index spec on this field.

    \_\_sync\_id\_\_

    -   Type: integer
    -   This field ensures that the cleanResyncGhosts() method removes only the desired soup elements. Mobile Sync manages the content of this field for you.

2.  Add a soup index for each of the operation and control fields. See [Registering Soups with Configuration Files](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_files.htm "Beginning with Mobile SDK 6.0SmartStore lets you define soup structures through configuration files rather than code. Since all platforms and app types use the same configuration files, you can describe all your soups in a single file. You can then compile that file into any project.").

## Mobile Sync Behavior

During sync up operations, Mobile Sync looks for soup elements with \_\_local\_\_ set to true. For each match, it evaluates the operation type fields and then performs the operation indicated by the following precedence hierarchy.

| Precedence | Field | If set to true... |
| --- | --- | --- |
| 1 (highest) | __locally_deleted__ | __locally_created__ and __locally_updated__ flags are ignored.Mobile Sync deletes the local record and, if it exists, the server record. If the server record does not exist, no remote action occurs. |
| 2 | __locally_created__ | __locally_updated__ flag is ignored.If __locally_deleted__ is not true, Mobile Sync creates the record on the server. |
| 3 | __locally_updated__ | Ignored if either __locally_deleted__ or __locally_created__ is true.Otherwise, Mobile Sync writes the updated record to the server. |

Finally, Mobile Sync resets all four fields to false.

## Example

The following examples are taken from the various language versions of the MobileSyncExplorer sample app.

**iOS Native**

This Objective-C example sets system fields by sending updateSoupForFieldName:fieldValue: messages to an SObjectData object. Using SFMobileSyncSyncManager constants for the field names, it sets the \_\_local\_\_ and \_\_locally\_created\_\_ fields before upserting the new element. You can find the SObjectData definition in the iOS sample app.

```

```

**Android Native**

The following Java example handles created and updated elements, but not deletions. It calls the JSONObject put() method to create and initialize the system fields, using SyncManager constants for the field names. After the fields are properly assigned, it either creates or upserts the element based on the isCreate control flag.

```

```

**Hybrid with the Mobile Sync Plug-in and React Native**

The following React Native code can easily be adapted for hybrid apps that use the Mobile Sync plug-in. This example shows how to update and delete—or undelete—a contact. The onSaveContact() function marks the record as updated, sets \_\_local\_\_ to true, and then saves the changes. The onDeleteUndeleteContact() function flips the \_\_locally\_deleted\_\_ field. It then sets the \_\_local\_\_ field to match the operation type value and saves the changes.

The storeMgr object is defined in the sample project as a wrapper around SmartStore and the Mobile Sync plug-in. Its saveContact() function accepts a contact object and a callback, and upserts the contact into the soup. The callback shown here calls navigator.pop(), which is specific to React Native. Hybrid apps can replace the saveContact() function with any code that calls the SmartStore upsert() function.

```

```

## Code Examples

```
- (void)createLocalData:(SObjectData *)newData {
    [newData updateSoupForFieldName:kSyncManagerLocal fieldValue:@YES];
    [newData updateSoupForFieldName:kSyncManagerLocallyCreated fieldValue:@YES];
    [self.store upsertEntries:@[ newData.soupDict ] toSoup:[[newData class] dataSpec].soupName];
}
```

```
contact.put(SyncTarget.LOCAL, true);
contact.put(SyncTarget.LOCALLY_UPDATED, !isCreate);
contact.put(SyncTarget.LOCALLY_CREATED, isCreate);
contact.put(SyncTarget.LOCALLY_DELETED, false);
if (isCreate) {
    smartStore.create(ContactListLoader.CONTACT_SOUP, contact);
} else {
    smartStore.upsert(ContactListLoader.CONTACT_SOUP, contact);
}
```

```
onSaveContact: {
    const contact = this.state.contact;
    contact.__locally_updated__ = contact.__local__ = true;
    storeMgr.saveContact(contact, () => {navigator.pop();});
},
    
onDeleteUndeleteContact: {
    const contact = this.state.contact;
    contact.__locally_deleted__ = !contact.__locally_deleted__;
    contact.__local__ = contact.__locally_deleted__ || contact.__locally_updated__ || contact.__locally_created__;
    storeMgr.saveContact(contact, () => {navigator.pop();});
},
```

## Related Topics

- Registering Soups with Configuration Files (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_files.htm)
