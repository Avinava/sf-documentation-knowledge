---
title: "Configure the Environment Hub"
domain: packagingGuide
topic: configure-the-environment-hub
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.853Z
estimatedTokens: 794
keywords: [Configure, Environment, Hub, Enable, org, give, users, access, you’re, ISV, partner, already, installed, Business]
---

# Configure the Environment Hub

> Enable the Environment Hub in your org, and then configure it to give other users
  access. If you’re an ISV partner, the Environment Hub is already installed in your Partner
  Business Org.

# Configure the Environment Hub

Enable the Environment Hub in your org, and then configure it to give other users access. If you’re an ISV partner, the Environment Hub is already installed in your Partner Business Org.


| User Permissions Needed |
| --- |
| To set up and configure the Environment Hub: | Manage Environment Hub |

1.  To open a case to enable the Environment Hub in your org, contact Salesforce Customer Support.

    If you’re an ISV partner, you can skip this step.

2.  Log in to the org where the Environment Hub is enabled.
3.  Assign users access to features in the Environment Hub by creating or updating a permission set or profile.

    Be sure to assign users the Salesforce or Salesforce Platform license.

    | Permission Set | Profile | Environment Hub Settings |
    | --- | --- | --- |
    | N/A | Custom App Settings | Enabled for Lightning Experience by default. Enable the Environment Hub custom app setting to make it available in the App Menu in Salesforce Classic. |
    | System Permissions | Administrative Permissions | Enable “Manage Environment Hub” to allow users to:Create orgs for development, testing, and trials.Configure SSO for member orgs. |
    | System Permissions | General User Permissions | To allow users to connect existing orgs to the Environment Hub:“Connect Organization to Environment Hub”“View Setup and Configuration”“View Roles and Role Hierarchy” (required when enabling View Setup and Configuration) |
    | Object Settings | Standard Object Permissions | Grant object permissions based on the required level of access for the Environment Hub user.Hub Members object:“Tab Settings”—Visible“Read”—View existing Hub Member records.“Create”—This permission has no impact on the ability to create Hub Member records because record creation is handled either by connecting an existing org or creating an org from the Environment Hub.“Edit”—Edit fields on existing Hub Member records.“Delete”—Disconnect an org from the Environment Hub and delete its corresponding Hub Member record and Service Provider record (if SSO was enabled for the member).“View All”—Read all Hub Member records, regardless of who created them.“Modify All”—Read, edit, and delete all Hub Member records, regardless of who created them.Hub Invitations object:If you enable the “Connect Organization to Environment Hub” permission, enable “Create”, “Read”, “Edit”, and “Delete” for Hub Invitations.Signup Requests object:If you enable the “Manage Environment Hub” permission, enable “Create” and “Read” for Signup Requests to allow users to create orgs. Optionally, enable “Delete” to allow users to remove orgs from the hub. |
    | Service Providers | Service Provider Access | When configuring the Environment Hub in a new org, this section is empty.If you enable single sign-on (SSO) in a member org, new entries appear in this section. Entries appear in the format Service Provider [Organization ID], where Organization ID is the ID of the member org. Users who don’t have access to the service provider sometimes see this message when attempting to log in via SSO: User ‘[UserID]’ does not have access to sp ‘[Service Provider ID]’. |
