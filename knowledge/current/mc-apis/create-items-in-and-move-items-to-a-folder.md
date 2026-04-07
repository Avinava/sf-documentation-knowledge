---
title: "Create Items in and Move Items to a Folder"
domain: mc-apis
topic: create-items-in-and-move-items-to-a-folder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.312Z
estimatedTokens: 457
keywords: [Items, Move, Folder, creating, new, moving, Marketing, Cloud, account, Why, How]
---

> This page contains information  about creating new items in and moving existing items to a folder within your Marketing Cloud account.

# Create Items in and Move Items to a Folder

This page contains information about creating new items in and moving existing items to a folder within your Marketing Cloud account.

## Why Create Items in and Move Items to a Folder

You can use folders (referred to in the SOAP API as categories) to organize information within your Marketing Cloud account. From there, you can set permissions on those folders to restrict access to authorized users. You can also use folders to group like messages and other content together for ease of use.

## How to Create Items in and Move Items to a Folder

When you execute a Create or Update call to object, you can set the Category or CategoryID property on application objects to place those objects in a specific folder. For example, when creating a new list, you can include the following code to place that list in a folder of your choice (as shown in .NET code):

```
List list = new List();
list.CategorySpecified=true;
list.Category = 123456;
list.ListName = "Test List A";
```

If you choose to update an existing object with a Category or CategoryID property, you can include the sample code below in the call to assign it to the specified category:

```
email.CategoryIDSpecified=true;
email.CategoryID=5; //Use the ID for the folder into which you wish to move the email
```

Marketing Cloud supports the following content types for categories:

-   Group
-   Publication
-   List
-   DataExtension
-   Email
-   EmailSendDefinition
-   ContentArea

## Related Items

-   [Create, Retrieve, Update, and Delete Folders](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_retrieving_updating_and_deleting_folders.htm)
-   [Create a List](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_list.htm)
-   [Update Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/update.htm)

## Related Topics

- Create, Retrieve, Update, and Delete Folders (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_retrieving_updating_and_deleting_folders.htm)
- Create a List (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_list.htm)
- Update Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/update.htm)
