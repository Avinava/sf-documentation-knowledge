---
title: "Monitor Setup Changes with Setup Audit Trail"
domain: securityImplGuide
topic: monitor-setup-changes-with-setup-audit-trail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.573Z
estimatedTokens: 2001
keywords: [Monitor, Setup, Changes, Audit, Trail, tracks, recent, admins, history, especially, useful, there, multiple]
---

# Monitor Setup Changes with Setup Audit Trail

> Setup Audit Trail tracks the recent setup changes that you and other admins make. Audit
    history is especially useful when there are multiple admins.

# Monitor Setup Changes with Setup Audit Trail

Setup Audit Trail tracks the recent setup changes that you and other admins make. Audit history is especially useful when there are multiple admins.

| Available in: Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Essentials, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


| User Permissions Needed |
| --- |
| To view audit trail history: | View Setup and Configuration |

1.  From Setup, in the Quick Find box, enter View Setup Audit Trail, and then select **View Setup Audit Trail**.

    The history shows the 20 most recent setup changes made to your org. It lists the date of the change, who made it, and what the change was. If a delegate such as an admin or customer support representative makes a setup change on behalf of an end user, the Delegate User column shows the delegate’s username. For example, if a user grants login access to an admin and the admin makes a setup change, the admin’s username is listed in the Delegate User column. The user granting access is listed in the User column.

2.  To download your org’s complete setup history for the past 180 days, click **Download**.

After 180 days, setup entity records are deleted.

Changes tracked by the Setup Audit Trail include:

| Setup | Changes Tracked |
| --- | --- |
| Administration | Company information, default settings like language or locale, and company messagesMultiple currenciesUsers, portal users, roles, permission sets, and profilesEmail addresses for any userDeleting email attachments sent as linksEmail footers, including creating, editing, or deletingEmail deliverability settingsDivisions, including creating, editing, and transferring and changing users’ default divisionCertificates, adding or deletingMy Domain settings and changesEnabling or disabling Salesforce as an identity providerDKIM, email relay, and email domain filter values when a record is created, edited, or deleted |
| Profiles | Permission for a standard or custom profile changedGeneral or admin permission changedFLS changed on the profileEntity permission for a standard or custom profile changedProfile Page Layout changedTab set on a standard or custom profile changedUser tab set override changedUser tab set customization override changed for standard or custom profilesTab set visibility changed for a standard or custom profileTab set visibility modifiedDefault tab set modifiedCustom App default changed on standard or custom profilesProfile renamed, cloned, or deletedProfile description changedStandard or custom profile clonedConsole setting or layout changedView, or modify, all data enabled for this profileLogin hours for the profile modified.Client settings for the profile modifiedRecord type added to or removed from the profileDefault record type modifiedDefault person account record type modifiedDefault business account record type modifiedSingle sign on enabled or disabled for this profile |
| Permission Sets/Groups | Permission set (or group) created, cloned, or deletedPermission set (or group) assigned or removed for a userPermission set (or group) changes to the assignment expiration date (beta)Permission set created or cloned without a licenseDeveloper name, label, or description of a permission set changedSession activation changed by adminPermission in a permission set enabled or disabled by adminFLS for an object in a permission set changed by adminPermission set from a user assigned or unassigned by adminTab settings in a permission set changed by adminPermission set group recalculated |
| Customization | User interface settings like collapsible sections, Quick Create, hover details, or related list hover linksPage layout, action layout, and search layoutsCompact layoutsSalesforce app navigation menuInline editsCustom fields and field-level security, including formulas, picklist values, and field attributes like the auto-number field format, field manageability, or masking of encrypted fieldsLead settings, lead assignment rules, and lead queuesActivity settingsSupport settings, case assignment and escalation rules, and case queuesRequests to Salesforce Customer SupportTab names, including tabs that you reset to the original tab nameCustom apps (including Salesforce console apps), custom objects, and custom tabsContract settingsForecast settingsEmail-to-Case or On-Demand Email-to-Case, enabling or disablingCustom buttons, links, and s-controls, including standard button overridesDrag-and-drop scheduling, enabling or disablingSimilar opportunities, enabling, disabling, or customizingQuotes, enabling or disablingData category groups, data categories, and category-group assignments to objectsArticle typesCategory groups and categoriesSalesforce Knowledge settingsIdeas settingsAnswers settingsField tracking in feedsCampaign influence settingsCritical updates, activating or deactivatingChatter email notifications, enabling or disablingChatter new user creation settings for invitations and email domains, enabling or disablingValidation rules |
| Security and Sharing | Public groups, sharing rules, and org-wide sharing, including the Grant Access Using Hierarchies optionPassword policiesPassword resetsSession settings, like session timeout (excluding Session times out after and Session security level required at login profile settings)Delegated administration groups and the items delegated admins can manage (setup changes made by delegated administrators are also tracked)Lightning Login, enabling or disabling, enrollments, and cancellationsHow many records a user permanently deleted from their Recycle Bin and from the Org Recycle BinSAML (Security Assertion Markup Language) configuration settingsSalesforce certificatesIdentity providers, enabling or disablingNamed credentialsService providersShield Platform Encryption setupEvent ManagerTransaction SecuritySome connected app policy and setting updatesSome external client app policy and setting updates |
| Data Management | Using mass delete, including when a mass delete exceeds the user’s Recycle Bin limit on deleted recordsData export requestsMass transfer useReporting snapshots, including defining, deleting, or changing the source report or target object on a reporting snapshotUse of the Data Import WizardSandbox deletions |
| Development | Apex classes and triggersVisualforce pages, custom components, and static resourcesLightning componentsLightning pagesAction link templatesCustom settingsCustom metadata types and recordsRemote access definitionsSalesforce Sites domain registration and site creationThe use of standard external profiles for Salesforce Site self-registration, user creation, and loginPlatform event channels and channel members, and enriched fields |
| Various Setups | API usage metering notification, creatingTerritoriesProcess automation settingsApproval processesWorkflow actions, creating or deletingFlowsPackages from Salesforce AppExchange that you installed or uninstalledNotification delivery settings for custom and standard notification typesDeletion of recipes and dataflows from CRM Analytics and Salesforce Data Pipelines. |
| Using the application | Account team and opportunity team selling settingsActivating Google Apps servicesMobile configuration settings, including data sets, mobile views, and excluded fieldsUsers with the “Manage External Users” permission logging in to the partner portal as partner usersUsers with the “Manage Customer Users” permission logging in to the Salesforce Customer Portal as Customer Portal usersPartner portal accounts, enabling or disablingSalesforce Customer Portal accounts, disablingSalesforce Customer Portal, enabling or disablingCreating multiple Customer PortalsEntitlement processes and entitlement templates, changing or creatingSelf-registration for a Salesforce Customer Portal, enabling or disablingCustomer Portal or partner portal users, enabling or disabling |
