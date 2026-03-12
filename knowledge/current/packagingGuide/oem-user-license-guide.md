---
title: "OEM User License Guide"
domain: packagingGuide
topic: oem-user-license-guide
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:20.958Z
estimatedTokens: 4123
keywords: [OEM, User, License, partners, Availability, Objects, Financial, Services, Cloud-Only, Features, Permissions, Org-Level, Allocations, Storage, Limits]
---

# OEM User License Guide

> Learn about the license types that are available to OEM partners.

# OEM User License Guide

Learn about the license types that are available to OEM partners.

## License Types and Availability

These licenses are available for resale to new and existing OEM partners. Licenses that OEM partners sell can only be used to access the partner solution.

Internal User Licenses:

-   Force.com Platform Embedded—A contractually restricted Salesforce Platform user license.
-   Force.com Platform Embedded Starter—A contractually restricted Salesforce Platform Starter license that provides access to only 10 objects.
-   Force.com Platform Embedded Admin—A contractually restricted Salesforce admin license that’s required on all initial orders. It’s used to configure and administer the OEM application. This license prohibits providing access to or use of any CRM functionality. Prohibitions include, but aren’t limited to, create, read, update, and delete (CRUD) on Leads, Opportunities, Cases, Solutions, Forecasts, and Campaigns.
-   Force.com Platform Embedded Partner Admin—A contractually restricted Enterprise Edition Salesforce admin license. Partner Admin User subscriptions can be used only by partners to configure and administer OEM apps. This license prohibits providing access to or use of any CRM functionality. Customers can’t use this license.
-   Integration User License—An API-only user license; no customization for OEM partners. See [Give Integration Users API-Only Access](https://help.salesforce.com/s/articleView?id=platform.integration_user.htm&type=5&language=en_US)
-   Financial Service Cloud Embedded Starter—A contractually and technically restricted Enterprise Edition version of the Financial Services Cloud–Sales & Service product. This license includes the features of Force.com Platform Embedded and part of the Financial Services Cloud data model.
-   Identity for Employees—An Identity Only license that provides single sign-on (SSO) and identity provider features for customers who manage identity and access rules for apps via Salesforce.

External User Licenses: These licenses can be assigned to external users only.

-   Commerce Portal—Custom digital experiences to engage any external stakeholder, including Brand Engagement and Customer Loyalty.
-   Customer Community—Business-to-consumer experiences well suited for communities with large numbers of external users who need access to Salesforce Knowledge.
-   Customer Community Plus—Similar to the Customer Community license with more storage, access to reports and dashboards, and advanced sharing.
-   Partner Community—Business-to-business experiences for users who need access to sales data, where the OEM partner’s solution allows access to Sales objects. Partner Community licenses can’t be used with person accounts.

These tables list object access, user permissions and features, and org limits for the Internal User license. For external user licenses limits and CRUD access information, refer to [Experience Cloud User Licenses](https://help.salesforce.com/s/articleView?id=platform.users_license_types_communities.htm&type=5&language=en_US).

These symbols are used in the tables.

-   ![Check indicates included](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckmark02.png&folder=packagingGuide)—Included in license
-   $—Available as an add-on for a fee
-   C—Create access to the object
-   R—Read access to the object
-   U—Update access to the object
-   D —Delete access to the object

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

Success plans aren’t included or amended in any OEM subscription. To learn more about success plans, go to [Salesforce Agreements and Terms](https://www.salesforce.com/company/legal/agreements/).

## Objects

| Object Accessed | Force.com Platform Embedded and Force.com Platform Embedded Starter*** | Financial Services Cloud Embedded Starter |
| --- | --- | --- |
| Accounts | CRUD | CRUD |
| Activities | CRUD | CRUD |
| Addresses | R | R** |
| Assets | CRUD | CRUD |
| Authorization Forms | CRUD | CRUD |
| Authorization Form Consents | CRUD | CRUD |
| Authorization Form Data Uses | CRUD | CRUD |
| Authorization Form Texts | CRUD | CRUD |
| Background Operations | R | R** |
| Business Brands | CRUD | CRUD |
| Calendar | CRUD | CRUD |
| Communication Subscriptions | CRUD | CRUD |
| Communication Subscription Channel Types | CRUD | CRUD |
| Communication Subscription Consents | CRUD | CRUD |
| Communication Subscription Timings | CRUD | CRUD |
| Contacts | CRUD | CRUD |
| Contact Point Addresses | CRUD | CRUD |
| Contact Point Consents | CRUD | CRUD |
| Contact Point Emails | CRUD | CRUD |
| Contact Point Phones | CRUD | CRUD |
| Contact Point Type Consents | CRUD | CRUD |
| Content | CRUD | CRUD |
| Contracts* | CRUD | CRUD |
| Customers | CRUD | CRUD |
| Data Use Legal Bases | CRUD | CRUD |
| Data Use Purposes | CRUD | CRUD |
| Documents | CRUD | CRUD |
| Endorsements | CRUD | CRUD |
| Events | CRUD | CRUD |
| Ideas | CR | CR** |
| Individual | CRUD | CRUD |
| Knowledge | R | R |
| Locations | R | R** |
| Orders* | CRUD | CRUD |
| Person Account | CRUD | CRUD |
| Party Consents | CRUD | CRUD |
| Push Topics | CRUD | CRUD |
| Sellers | CRUD | CRUD |
| Skills | CRUD | CRUD |
| Skill Users | CRUD | CRUD |
| Social Posts | CRUD | CRUD |
| Streaming Channels | CRUD | CRUD |
| Tasks | CRUD | CRUD |
| User External Credentials | CRUD | CRUD |
| Products & Price Books | CRUD | CRUD |
| ISV Custom Object | CRUD | CRUD |

\* With the Orders Platform permission set license (PSL), available to OEM partners only, administrators can give the users who have Salesforce Platform user licenses access to Contracts, Products, Price Books, and Orders. Orders functionality is automatically available to all licenses except the Salesforce Platform licenses, which explicitly require the new PSL to grant access.

\*\* CRUD access is contractually limited to align with Force.com Platform Embedded.

\*\*\*Force.com Platform Embedded Starter is restricted to 10 identified objects.

## Financial Services Cloud-Only Objects

Review access permissions for objects available only in the Financial Services Cloud Embedded Starter license.

| Object Accessed | Financial Services Cloud Embedded Starter |
| --- | --- |
| Account-Account Relation | CRUD |
| Alerts | CRUD |
| Assets & Liabilities | CRUD |
| Billing Statement | CRUD |
| Business Milestone | CRUD |
| Card | CRUD |
| Contract-Contact Relation | CRUD |
| Financial Account | CRUD |
| Financial Account Role | CRUD |
| Financial Account Transaction | CRUD |
| Financial Goal | CRUD |
| Financial Holding | CRUD |
| Identity Document | CRUD |
| Life Event | CRUD |
| Person Life Event | CRUD |
| Revenue | CRUD |
| Securities | CRUD |

## User Features

| User Feature | Force.com Platform Embedded Starter | Force.com Platform Embedded | Financial Services Cloud Embedded Starter |
| --- | --- | --- | --- |
| Console | $ |  |  |
| Analytics (CRM Analytics) | $ | $ | $ |
| Create Knowledge Articles | $ | $ | $ |
| Salesforce Mobile App |  |  |  |
| Offline |  |  |  |
| Flows and Process Builder |  |  |  |
| Approval Process |  |  |  |
| Original Territory Management* | — | — | — |
| Enterprise Territory Management |  |  |  |

\* Original Territory Management was retired for all customers in the Summer ’21 release. Users can’t access the original territory management feature or its underlying data. We encourage you to migrate to Enterprise Territory Management. For more information, refer to the [Original Territory Management Module Retirement](https://help.salesforce.com/s/articleView?id=000318370&type=1&language=en_US) article.

## User Permissions

| User Permission | Force.com Platform Embedded Starter | Force.com Platform Embedded | Financial Services Cloud Embedded Starter |
| --- | --- | --- | --- |
| Account Teams |  |  |  |
| Advanced Sharing |  |  |  |
| Chatter |  |  |  |
| Custom Profiles |  |  |  |
| Custom Permission Sets |  |  |  |
| Einstein Search |  |  |  |
| Customize Reports |  |  |  |
| Customize Dashboards |  |  |  |
| View Dashboards* |  |  |  |
| Identity |  |  |  |
| Org Allows Custom Profiles and Page Layouts |  |  |  |
| Org Allows Record Types |  |  |  |
| Send Email |  |  |  |
| Submit Workflow Approvals |  |  |  |
| Unlimited Next Best Action Strategy Executions** | $ |  |  |
| Custom Tabs Limit | 25 | 25 | 25 |
| Custom Objects Limit | 10**** | 400*** | 400*** |

\* To view a dashboard, the running user of a dashboard must be a Salesforce Platform user. Dashboards using the Salesforce Platform administrator as the running user aren’t viewable by other Salesforce Platform license types.

\*\* Next Best Action requests made by users with this permission aren’t counted against the monthly entitlement.

\*\*\* The limit of 400 custom objects applies to the primary solution offering. End users can create and access up to 10 more custom objects. These custom objects must be within the scope of, and used only with the partner solution.

\*\*\*\* The limit of 10 objects includes what's in the primary solution offering. Contractual restriction only.

## Org-Level Allocations

Solutions sold for installation in a trial org include either an Enterprise Edition or an Unlimited Edition (UE) org. This depends on the license ordered via the Channel Order App (COA). By default, partners get Enterprise Edition licenses. Unlimited Edition licenses have higher technical limits for developing robust solutions. To request an Unlimited Edition license, contact your Partner Account Manager (PAM).

Learn more about org-level allocations.

-   [Salesforce Enterprise Edition Allocations](https://help.salesforce.com/s/articleView?id=xcloud.overview_limits_enterprise.htm&type=5&language=en_US)
-   [Salesforce Unlimited Edition Allocations](https://help.salesforce.com/s/articleView?id=xcloud.overview_limits_unlimited.htm&type=5&language=en_US)
-   [Sandbox Licenses and Storage Limits by Type](https://help.salesforce.com/s/articleView?id=platform.data_sandbox_environments.htm&type=5&language=en_US)

Solutions sold for use in a Shared Org don’t include incremental org-level allocations such as additional sandboxes. Any per-user increases to org limits, such as API call limits, are added to the customer’s existing allowances.

With solutions sold for use in a UE Shared Org, partners order Enterprise Edition products through COA catalogs. The Partner Operations team then provisions the appropriate Force.com Platform Embedded UE license on behalf of the partner. The provisioned license is subject to the partner’s service order contractual terms. UE license allocations govern per-user storage and API limits.

## Storage Limits

| Additional Org Limits (Added Per User) | Force.com Platform Embedded Starter | Force.com Platform Embedded | Financial Services Cloud Embedded Starter |
| --- | --- | --- | --- |
| Data Storage | 20 MB | Enterprise Edition: 20 MBUnlimited Edition: 120 MB | Enterprise Edition: 20 MBUnlimited Edition: 120 MB |
| File Storage | 2 GB | 2 GB | 2 GB |

Each Enterprise Edition or Unlimited Edition org is allocated a minimum of 10 GB, which is the base data storage allocation for an Enterprise Edition org. For example, an Enterprise Edition org with 20 Force.com Platform Embedded users at 20 MB per user receives 400 MB plus 10 GB, or 10.4-GB total data storage. An Enterprise Edition org with 100 Force.com Platform Embedded users with 100 users receives 12 GB because 100 users multiplied by 20 MB per user is 2 GB.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

If your customer has an existing Enterprise Edition org, they aren't granted an additional 10 GB of data storage when they buy your solution. Their org already includes the 10 GB of data storage as part of the base allocation.

For file storage, each Force.com Platform Embedded org is allocated a per-user limit multiplied by the number of users in the org plus a per-org allocation of 10 GB. For example, a Force.com Platform Embedded org with 600 users receives 1,210 GB of file storage, or 2 GB per user multiplied by 600 users plus 10 GB.

For data and file storage limits for other Salesforce editions, refer to [Data and File Storage Allocations](https://help.salesforce.com/s/articleView?id=xcloud.overview_storage.htm&type=5&language=en_US) and [Salesforce File Storage Allocations](https://help.salesforce.com/s/articleView?id=experience.files_storage.htm&type=5&language=en_US).

## API Limits

Limits are enforced against the aggregate of all API calls made to the org in a 24-hour period. Limits aren’t on a per-user basis. When an org exceeds a limit, all users in the org can be temporarily blocked from making calls. Calls are blocked until usage for the preceding 24 hours drops below the limit.

For Enterprise Edition org API limits, including API limits with External User licenses, refer to [API Request Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm).

| Salesforce Edition | API Requests (Calls) Per License Type Per 24-Hour Period | Total Requests (Calls) Per 24-Hour Period |
| --- | --- | --- |
| Enterprise Edition | Force.com Platform Embedded: 1,000Force.com Platform Embedded Starter: 200Financial Services Cloud Embedded Starter: 1,000 | 100,000 + (number of licenses x calls per license type) + purchased API call add-ons |
| Unlimited Edition | Force.com Platform Embedded: 5,000Force.com Platform Embedded Starter: 200Financial Services Cloud Embedded Starter: 5,000 | 100,000 + (number of licenses x calls per license type) + purchased API call add-ons |

## Considerations for Government Cloud Plus Customers

Keep these considerations in mind when you work with Government Cloud Plus customers.

-   If you sell to a Government Cloud Plus customer, additional fees and restrictions apply. For details, contact your Partner Account Manager (PAM).
-   Only Services that are included in the Government Cloud Plus Products list can be resold to Government Cloud Plus Customers. This list is updated from time to time and is available on the Salesforce [Salesforce Legal](https://www.salesforce.com/company/legal/) page.
-   To identify a Government Cloud Plus customer, check the Salesforce instance where their org resides. The instance is listed on the customer’s license record in the License Management App (LMA). After you determine the instance where their org resides, compare it with the [Government Cloud Plus instances](https://help.salesforce.com/s/articleView?id=000386297&type=1&language=en_US) on Salesforce Help.

## Legacy License Types

These licenses aren’t available to new partners, but can be resold by existing partners who have already contracted to resell them. These licenses can be assigned to external users only.

-   ISV Portal—An Authenticated Website license with basic data sharing options. Manual sharing to user and participation in sharing groups aren’t permitted. Users can only log in via Salesforce Platform Sites. An ISV Portal license is best used when projected user volumes exceed 100,000.
-   ISV Portal with Sharing—A Customer Portal Manage Custom license with full sharing capabilities. Users can log in only via Salesforce Platform Sites. This license is best used when projected user volumes are under 100,000 and granular security access is required.

#### See Also

-   [Experience Cloud User Licenses](https://help.salesforce.com/s/articleView?id=platform.users_license_types_communities.htm&type=5&language=en_US)

-   [Original Territory Management Retirement](https://help.salesforce.com/articleView?id=000273181&type=1&language=en_US)

-   [Data and File Storage Allocations](https://help.salesforce.com/articleView?id=xcloud.overview_storage.htm&type=5&language=en_US "Data and File Storage Allocations - HTML (New Window)")

-   [Salesforce File Storage Allocations](https://help.salesforce.com/s/articleView?id=experience.files_storage.htm&type=5&language=en_US "Salesforce File Storage Allocations - HTML (New Window)")

-   [API Request Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm "API Request Limits and Allocations - HTML (New Window)")
