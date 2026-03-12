---
title: "Scratch Org Users"
domain: sfdx-dev
topic: scratch-org-users
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:18.569Z
estimatedTokens: 1347
keywords: [Scratch, Org, Users, includes, administrator, user, admin, typically, adequate, testing, needs, sometimes, test, different, profiles]
---

# Scratch Org Users

> A scratch org includes one administrator user by default. The admin user is typically
      adequate for all your testing needs. But sometimes you need other users to test with different
      profiles and permission sets.

# Scratch Org Users

A scratch org includes one administrator user by default. The admin user is typically adequate for all your testing needs. But sometimes you need other users to test with different profiles and permission sets.

You can create a user by opening the scratch org in your browser and navigating to the Users page in Setup. You can also use the org create user CLI command to easily integrate the task into a continuous integration job.

## Scratch Org User Limits, Defaults, and Considerations

-   You can run the org create user command only for scratch orgs. If you try to create a user for a non-scratch org, the command fails.
-   Your scratch org edition determines the number of available user licenses. The number of licenses determines the number of users you can create. For example, a Developer Edition org includes a maximum of two Salesforce user licenses. Therefore, in addition to the default administrator user, you can create one standard user.
-   The new user’s username must be unique across all Salesforce orgs and in the form of an email address. The org create user command provides the \--set-unique-username flag to ensure uniqueness. The username is active only within the bounds of the associated scratch org.
-   You can’t delete a user using Salesforce CLI, just like you can’t delete a Salesforce user using Setup. The user is deactivated when you delete the scratch org with which the user is associated. Deactivating a user frees up the user license. But you can’t reuse usernames, even if the associated user has been deactivated.
-   The simplest way to create a user is to let the org create user command assign default or generated characteristics to the new user. If you want to customize your new user, create a definition file and specify it with the \--definition-file (\-f) flag. In the file, you can include all the User sObject fields and a set of Salesforce DX-specific options, described in [User Definition File for Customizing a Scratch Org User](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users_def_file.htm "To customize a new scratch org user, rather than use the default and generated values, create a definition file."). You can also specify these options on the command line.
-   If you don’t customize your new user, the org create user command creates a user with these default characteristics.
    -   The username is the existing administrator’s username prepended with a timestamp. For example, if the administrator username is test-wvkpnfm5z113@example.com, the new username is something like 1505759162830\_test-wvkpnfm5z113@example.com.
    -   The user’s profile is Standard User.
    -   The values of the required fields of the User sObject are the corresponding values of the administrator user. For example, if the administrator’s locale (specifically the LocaleSidKey field of User sObject) is en\_US, the new user’s locale is also en\_US.
-   After the new user has been created, Salesforce CLI automatically authenticates it to the scratch org so the new user can immediately start using the scratch org. Salesforce CLI uses the same authentication method that was used on the associated Dev Hub org. Due to Hyperforce limitations, if the Dev Hub authentication used the JWT flow and the scratch org is on Hyperforce, then the scratch org user creation fails. For this reason, if you plan to create scratch org users, authenticate to the Dev Hub org with either the org login web or org login sfdx-url command, and not org login jwt.

## How Scratch Org Users Can Log In to the Scratch Org

How you log in to a scratch org can depend on if you’re the default admin user, or on which infrastructure the scratch org was created. To determine the infrastructure, find the **Instance** on the Company Information Setup page, then go to [Find My Instance](https://availability.salesforce.com/find-my-instance/).

-   Regardless of the instance, default admin users can log in using test.salesforce.com or the My Domain URL, such as https://MyDomainName.scratch.my.salesforce.com.
-   If the scratch org is on a Salesforce first-party instance, other users can log in using test.salesforce.com or the My Domain URL.
-   If the scratch org is on a Hyperforce instance, other users must log in using the My Domain URL.

-   **[Create a Scratch Org User](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create_users.htm)**
    Although scratch orgs were designed to be used by one developer, sometimes you need other users to test with different profiles and permission sets.
-   **[User Definition File for Customizing a Scratch Org User](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users_def_file.htm)**
    To customize a new scratch org user, rather than use the default and generated values, create a definition file.
-   **[Generate or Change a Password for a Scratch Org User](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_passwd.htm)**
    By default, new scratch orgs contain one administrator user with no password. Use the org generate password CLI command to generate or change a password for this admin user. After it's set, you can’t unset a password, you can only change it.

#### See Also

-   [User sObject API Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm)

## Related Topics

- User Definition File for Customizing a Scratch Org User (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users_def_file.htm)
- Create a Scratch Org User (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create_users.htm)
- Generate or Change a Password for a Scratch Org User (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_passwd.htm)
