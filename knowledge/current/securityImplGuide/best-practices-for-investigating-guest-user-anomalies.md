---
title: "Best Practices for Investigating Guest User Anomalies"
domain: securityImplGuide
topic: best-practices-for-investigating-guest-user-anomalies
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.941Z
estimatedTokens: 1011
keywords: [Best, Practices, Investigating, Guest, User, Anomalies, Keep, tips, mind, investigate, unusual, behavior, require, well-informed, evaluation]
---

# Best Practices for Investigating Guest User Anomalies

> Keep these tips in mind when you investigate unusual user behavior. Find the information
    that you require to make a well-informed evaluation of your data’s safety.

# Best Practices for Investigating Guest User Anomalies

Keep these tips in mind when you investigate unusual user behavior. Find the information that you require to make a well-informed evaluation of your data’s safety.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


We recommend that you review these following settings.

-   **Organization Wide Default (OWD) Sharing Settings:**
    -   All Standard & Custom Objects having Default External access as Public Read or Public Read/Write (for example, Accounts)
    -   All Standard & Custom Objects having Default External access as Controlled by Parent, as the permission follows the parent objects (for example, Contacts).
-   **Guest User Profiles:**
    -   A suspicious event caused by guest user profiles likely means that guest users accessed objects via Apex and submitted SOQL queries that have returned results. In general, guest users shouldn’t have access to objects. Review any Create, Read, Update, Delete (CRUD) access owned by each standard or custom object within guest user profiles.

To generate a report showing your current Guest User access and permissions, use the Authenticated and Guest User Access Report and Monitoring app, which can be found in the AppExchange marketplace. To ensure that you aren’t inadvertently permitting guest users access to your data in this manner, we suggest reviewing these best practices:

**Org Settings**

1.  Ensure that List Views are shared only with certain groups or set to private.
2.  Set internal and external organization-wide sharing defaults (OWD) to ‘private’ on all objects with non-public data.
3.  Alternate sharing models can be permitted with proper justification. For example, adequate restrictions at the create, read, update, and delete \[CRUD\] level.
4.  Set all sharing rules to not share any data with the Site Guest User.
5.  Restrict access to @AuraEnabled Apex Methods for Guest and Portal Users Based on User Profile.

**Site Guest User Profiles**

1.  Review field-level security for each object.
2.  Configure Sharing Rules and Permission sets to not open access for custom or standard objects.
3.  Ensure that all active profiles have no access to standard or custom objects that could contain personal information, per the [Best Practices and Considerations When Configuring the Guest User Profile](https://help.salesforce.com/s/articleView?id=sf.networks_guest_profile_best_practices.htm&type=5&language=en_US).
4.  Confirm that Object access, and the API Enabled and Access Activities checkboxes are unchecked.
5.  Transfer ownership of sensitive records created by the Site Guest User profile to an internal user by following the steps outlined in [Assign Records Created by Guest Users to a Default User in the Org documentation](https://help.salesforce.com/s/articleView?language=en_US&id=networks_assign_guest_records.htm&type=5).
6.  Ensure that ownership of all existing records is transferred to an internal user.

**Additional Steps**

1.  Remove guest user visibility in Communities/Experience Cloud by disabling the **Let guest users see other members of this site** checkbox under Setup. From Setup, go to Digital Experiences > All Sites > Workspaces > Administration > Preferences.
2.  Review any custom Apex code:
    -   Check for public API methods returning data, and confirm methods can’t be used to exfiltrate object records.
    -   Enforce field-level security for all Apex classes.
    -   Ensure that all controllers are respecting the permissions of the current user.
3.  Keep JavaScript libraries in static resources continually updated to the latest security patch
4.  By default, unassigned files are public. As a best practice, set up a trigger to assign an owner to files uploaded by guest users. You can restrict file upload size or type using community file moderation.
