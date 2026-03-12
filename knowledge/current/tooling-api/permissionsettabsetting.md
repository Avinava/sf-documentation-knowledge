---
title: "PermissionSetTabSetting"
domain: tooling-api
topic: permissionsettabsetting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.532Z
estimatedTokens: 448
keywords: [PermissionSetTabSetting, tab’s, settings, profile, permission, manipulating, tab, visibility, profiles, Tooling, API, version, 37.0, later, SOAP]
---

# PermissionSetTabSetting

> Represents a tab’s settings for a profile or permission set. Use
            PermissionSetTabSetting for manipulating tab visibility on profiles and permission
            sets. Available in Tooling API version 37.0 and
        later.

# PermissionSetTabSetting

Represents a tab’s settings for a profile or permission set. Use PermissionSetTabSetting for manipulating tab visibility on profiles and permission sets. Available in Tooling API version 37.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update()

## Supported REST HTTP Methods

Query, GET, POST, PATCH, DELETE

## Special Access Rules

As of Spring ’20 and later, only users with View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, GroupDescriptionThe tab’s API name. For standard tabs, the name is in the form “standard-Account”. For custom tabs, it’s the developer name. |
| ParentId | TypereferencePropertiesCreate, Filter, GroupDescriptionThe ID of the permission set to which this tab setting belongs. For profile tab settings, ParentId is the ID of the permission set owned by the profile. |
| Visibility | TypepicklistPropertiesCreate, Filter, Group, Restricted picklistDescriptionThe default visibility setting for this tab. Valid values are:Default OffDefault OnNoteThere’s no hidden value. Instead, a hidden tab is indicated by having no PermissionSetTabSetting row in the database. |

## Usage

To hide a tab, delete the associated PermissionSetTabSetting object. ParentId and Name fields can’t be updated.

This example creates a tab setting to make the custom object tab named CustomObject\_\_c visible for the System Administrator profile.

```

```

This example updates the existing tab setting to make the Account tab available instead of visible for the Standard User profile.

```

```

The example deletes the existing tab setting to make the Account tab hidden for the Standard User profile.

```

```

## Code Examples

```apex
try {
  // Query for the ID of the permission set owned by the System Administrator profile
  String queryString = "SELECT Id FROM PermissionSet
    + WHERE Profile.Name = 'System Administrator'";
  QueryResult queryResult = connection.query(queryString);
  if (queryResult.getSize() > 0) {
    // Construct the tab setting sObject
    PermissionSetTabSetting tabSetting = new PermissionSetTabSetting();
    tabSetting.setParentId(queryResult.getRecords()[0].getId());
    tabSetting.setName("CustomObject__c");
    tabSetting.setVisibility(TabVisibility.DefaultOn);
    SObject[] sObjects = new SObject[] { tabSetting };
    // Create the tab setting
    SaveResult[] saveResults = connection.create(sObjects);
    for (SaveResult saveResult : saveResults) {
      if (saveResult.isSuccess()) {
        System.out.println("Successfully created the tab setting.");
        System.out.println("ID: " + saveResult.getId());
      } else {
        Error error = saveResult.getErrors()[0];
        System.out.println("Failed to create the tab setting.");
        System.out.println("Status code: " + error.getStatusCode());
        System.out.println("Message: " + error.getMessage());
      }
    }
  } else {
    System.out.println("Failed to find the ID of the permission set.");
  }
} catch (ConnectionException ce) {
  ce.printStackTrace();
}
```

```apex
try {
  // Query for the ID of the tab setting for the Account tab on the Standard User profile
  String queryString = "SELECT Id FROM PermissionSetTabSetting "
      + "WHERE Parent.Profile.Name = 'Standard User' AND Name = 'standard-Account'";
  QueryResult queryResult = connection.query(queryString);
  if (queryResult.getSize() > 0) {
    // Change the visibility
    PermissionSetTabSetting tabSetting = (PermissionSetTabSetting)queryResult.getRecords()[0];
    tabSetting.setVisibility(TabVisibility.DefaultOff);
    // Update the tab setting
    SObject[] sObjects = new SObject[] { tabSetting };
    SaveResult[] saveResults = connection.update(sObjects);
    for (SaveResult saveResult : saveResults) {
      if (saveResult.isSuccess()) {
        System.out.println("Successfully updated the tab setting.");
        System.out.println("ID: " + saveResult.getId());
      } else {
        Error error = saveResult.getErrors()[0];
        System.out.println("Failed to update the tab setting.");
        System.out.println("Status code: " + error.getStatusCode());
        System.out.println("Message: " + error.getMessage());
      }
    }
  } else {
    System.out.println("Failed to find the ID of the tab setting.");
  }
} catch (ConnectionException ce) {
  ce.printStackTrace();
}
```

```apex
try {
  // Query for the ID of the tab setting for the Account tab on the Standard User profile
  String queryString = "SELECT Id FROM PermissionSetTabSetting "
      + "WHERE Parent.Profile.Name = 'Standard User' AND Name = 'standard-Account'";
  QueryResult queryResult = connection.query(queryString);
  if (queryResult.getSize() > 0) {
    // Delete the tab setting
    String[] ids = new String[] { queryResult.getRecords()[0].getId() };
    DeleteResult[] deleteResults = connection.delete(ids);
    for (DeleteResult deleteResult : deleteResults) {
      if (deleteResult.isSuccess()) {
        System.out.println("Successfully deleted the tab setting.");
        System.out.println("ID: " + deleteResult.getId());
      } else {
        Error error = deleteResult.getErrors()[0];
        System.out.println("Failed to delete the tab setting.");
        System.out.println("Status code: " + error.getStatusCode());
        System.out.println("Message: " + error.getMessage());
      }
    }
  } else {
    System.out.println("Failed to find the ID of the tab setting.");
  }
} catch (ConnectionException ce) {
  ce.printStackTrace();
}
```
