---
title: "PackageLicense"
domain: object-reference
topic: packagelicense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.236Z
estimatedTokens: 491
keywords: [PackageLicense, license, installed, managed, package, API, version, 31.0, later, Calls, Special, Access, Rules, Usage]
---

# PackageLicense

> Represents a license for an installed managed
        package.
    This object is available in API version 31.0 and later.

# PackageLicense

Represents a license for an installed managed package. This object is available in API version 31.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AllowedLicenses | TypeintPropertiesFilter, Group, SortDescriptionThe number of users allowed to use the package. |
| ExpirationDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the package license expires. |
| IsAvailableForIntegrations | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReserved for future use. |
| IsProvisioned | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReserved for internal use. |
| NamespacePrefix | TypestringPropertiesFilter, Group, SortDescriptionThe namespace prefix associated with the package. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the license. Possible values are: Active, Expired, Free, and Trial. |
| UsedLicenses | TypeintPropertiesFilter, Group, SortDescriptionThe number of users who have a license to the package. |

## Usage

Use this object to determine the number of licenses allowed and in use for a managed package installed in your organization.

The following example demonstrates the use of the API to manage licenses for a package. The example defines an Apex class that does the following.

-   Retrieves the PackageLicense record for the specified package (identified by its namespace prefix).
-   Defines a function that returns a list of all users with the specified profile.
-   Creates a UserPackageLicense record for each user with that profile, which has the effect of assigning a license for the package to all users with that profile.
-   Returns an error message if the number of users exceeds the number of available licenses.

```

```

## Code Examples

```apex
public class AssignPackageLicense {
     
    static String PACKAGE_NAMESPACE_PREFIX = 'acme_101';
    static String PROFILE_ID = '00exx000000jz1SAAQ';
    public static String exceptionText {get; set;}
        
    public AssignPackageLicense() {
         exceptionText = 'Initialized';
    }

 		static List<User> getUsersWithProfile(){
      String userQuery = 'SELECT Id FROM User WHERE ProfileId = :PROFILE_ID';
      List<User> matchingUsers = new List<User>();
      matchingUsers = [SELECT Id FROM User WHERE ProfileId = :PROFILE_ID];
      return matchingUsers;
    }

    public static void assignLicenseByProfile() {
        //find the PackageLicense Id
        PackageLicense pl = [SELECT Id, NamespacePrefix, AllowedLicenses, UsedLicenses, 
        					 ExpirationDate,Status FROM PackageLicense WHERE 
        					 NamespacePrefix = :PACKAGE_NAMESPACE_PREFIX];
        System.assert(pl != null, 'PackageLicense cannot be null.');
        List<User> usersToAssignLicenses = getUsersWithProfile();
        List<UserPackageLicense> firstUPLs = new List<UserPackageLicense>();
        
        //create a new UserPackageLicense record for each user with the specified profile
        for (Integer i = 0; i< usersToAssignLicenses.size(); i++){
              UserPackageLicense upl = new UserPackageLicense();
              upl.PackageLicenseId = pl.Id;
              upl.UserId = usersToAssignLicenses[i].Id;
              firstUPLs.add(upl);
        }
        
        try {
          //bulk insert
          insert(firstUPLs);
          } catch(DmlException e) {
             for (Integer i = 0; i < e.getNumDml(); i++) {
             // process exception here 
               System.debug(e.getDmlMessage(i)); 
               String status = e.getDmlStatusCode(i);
               System.debug(status + ' ' + e.getDmlMessage(i));
               if(status.equals('LICENSE_LIMIT_EXCEEDED')){
                exceptionText = 'You tried to assign more licenses than available. ' 
                +' You tried to create '+ firstUPLs.size()+' licenses but only have '
                + (pl.AllowedLicenses - pl.UsedLicenses) + ' licenses free.';
                System.debug(exceptionText);
               }
             }
         }
    }    
 }
```
