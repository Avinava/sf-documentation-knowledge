---
title: "Assign a Permission Set to Multiple Users"
domain: securityImplGuide
topic: assign-a-permission-set-to-multiple-users
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.829Z
estimatedTokens: 305
keywords: [Assign, Permission, Multiple, Users, any]
---

# Assign a Permission Set to Multiple Users

> Assign a permission set to one or more users from any permission set page.

# Assign a Permission Set to Multiple Users

Assign a permission set to one or more users from any permission set page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Certain types of users, such as guest, Self-Service, integration, and system users, aren’t available in the Manage Assignments page. To view or manage these users, use the PermissionSetAssignment API object.

1.  From Setup, in the Quick Find box, enter Permission Sets, and then click **Permission Sets**.
2.  Select the permission set that you want to assign to users.
3.  Click **Manage Assignments** and then **Add Assignments**.
4.  Select the checkboxes next to the names of the users you want assigned to the permission set, and click **Next**.
5.  Optionally, select an expiration date for the user assignment to expire. For more information, see [Set Assignment Expiration Details for Users in Permission Sets and Permission Set Groups](https://help.salesforce.com/apex/HTViewHelpDoc?id=permissions_assign_expire_how.htm&language=en_US) in Salesforce Help.
6.  Click **Assign**.

Messages confirm success or indicate if a user doesn’t have the appropriate licenses for assignment.
