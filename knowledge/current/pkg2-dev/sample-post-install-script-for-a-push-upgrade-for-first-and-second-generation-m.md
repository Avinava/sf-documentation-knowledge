---
title: "Sample Post Install Script for a Push Upgrade for First- and Second-Generation Managed
        Packages"
domain: pkg2-dev
topic: sample-post-install-script-for-a-push-upgrade-for-first--and-second-generation-m
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.928Z
estimatedTokens: 420
keywords: [Sample, Post, Install, Script, Push, Upgrade, First-, Second-Generation, Managed, Packages, Automate, assignment, new, components, users]
---

# Sample Post Install Script for a Push Upgrade for First- and Second-Generation Managed
        Packages

> Automate the assignment of new components to existing users of a package.

# Sample Post Install Script for a Push Upgrade for First- and Second-Generation Managed Packages

Automate the assignment of new components to existing users of a package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Post-install scripts can be used with first and second-generation managed packages only.

For more information on writing a post-install Apex script, see [Run Apex on Package Install/Upgrade](atlas.en-us.pkg2_dev.meta/pkg2_dev/apex_post_install_script.htm#apex_post_install_script "App developers can specify an Apex script to run automatically after a subscriber installs or upgrades a managed package. This script makes it possible to customize the package install or upgrade, based on details of the subscriber’s organization. For instance, you can use the script to populate custom settings, create sample data, send an email to the installer, notify an external system, or kick off a batch operation to populate a new field across a large set of data. For simplicity, you can only specify one post install script. It must be an Apex class that is a member of the package.").

In this sample script, the package upgrade contains new Visualforce pages and a new permission set that grants access to those pages. The script performs the following actions.

-   Gets the Id of the Visualforce pages in the old version of the package
-   Gets the permission sets that have access to those pages
-   Gets the list of profiles associated with these permission sets
-   Gets the list of users who have those profiles assigned
-   Assigns the permission set in the new package to those users

```

```

```

```

## Code Examples

```apex
global class PostInstallClass implements InstallHandler {
    global void onInstall(InstallContext context) {

        //Get the Id of the Visualforce pages 
        List<ApexPage> pagesList = [SELECT Id FROM ApexPage WHERE NamespacePrefix =  
            'TestPackage' AND Name = 'vfpage1'];

        //Get the permission sets that have access to those pages
        List<SetupEntityAccess> setupEntityAccessList = [SELECT Id, 
            ParentId, SetupEntityId, SetupEntityType FROM SetupEntityAccess 
            WHERE SetupEntityId IN :pagesList];        
        Set<ID> PermissionSetList = new Set<ID> ();

        for (SetupEntityAccess sea : setupEntityAccessList) {
            PermissionSetList.add(sea.ParentId);
        }
        List<PermissionSet> PermissionSetWithProfileIdList = 
            [SELECT id, Name, IsOwnedByProfile, Profile.Name,
            ProfileId FROM PermissionSet WHERE IsOwnedByProfile = true 
            AND Id IN :PermissionSetList];   

        //Get the list of profiles associated with those permission sets
        Set<ID> ProfileList = new Set<ID> ();
        for (PermissionSet per : PermissionSetWithProfileIdList) {
            ProfileList.add(per.ProfileId);
        }

        //Get the list of users who have those profiles assigned
        List<User> UserList = [SELECT id FROM User where ProfileId IN :ProfileList];                

        //Assign the permission set in the new package to those users
        List<PermissionSet> PermissionSetToAssignList = [SELECT id, Name 
            FROM PermissionSet WHERE Name='TestPermSet' AND 
            NamespacePrefix = 'TestPackage'];
        PermissionSet PermissionSetToAssign = PermissionSetToAssignList[0];
        List<PermissionSetAssignment> PermissionSetAssignmentList = new List<PermissionSetAssignment>();
        for (User us : UserList) {
            PermissionSetAssignment psa = new PermissionSetAssignment();
            psa.PermissionSetId = PermissionSetToAssign.id;
            psa.AssigneeId = us.id;
            PermissionSetAssignmentList.add(psa);
        }
        insert PermissionSetAssignmentList;
    }
}
```

```apex
// Test for the post install class
@isTest
private class PostInstallClassTest {
    @isTest           
    public static void test() {
      PostInstallClass myClass = new PostInstallClass();
      Test.testInstall(myClass, null);
    }
}
```

## Related Topics

- Run Apex on Package Install/Upgrade (atlas.en-us.pkg2_dev.meta/pkg2_dev/apex_post_install_script.htm)
