---
title: "Salesforce Partner Business Org"
domain: packagingGuide
topic: salesforce-partner-business-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.490Z
estimatedTokens: 980
keywords: [Salesforce, Partner, Business, Org, PBO, tools, manage, AppExchange, ISV, OEM, consulting, practice, internal-use, production, comes]
---

# Salesforce Partner Business Org

> A Salesforce Partner Business Org (PBO) contains tools to set up and manage your
  AppExchange ISV or OEM business, or your consulting practice. This internal-use production org
  comes with two Sales & Service Cloud Enterprise Edition licenses and pre installed tools. Your
  PBO is provisioned when you join the Salesforce Partner Community.

# Salesforce Partner Business Org

A Salesforce Partner Business Org (PBO) contains tools to set up and manage your AppExchange ISV or OEM business, or your consulting practice. This internal-use production org comes with two Sales & Service Cloud Enterprise Edition licenses and pre installed tools. Your PBO is provisioned when you join the Salesforce Partner Community.

| PBO Tool | Overview |
| --- | --- |
| Channel Order App (COA) | The COA is the app that OEM and ISV partners use to create, manage, and submit customer orders to Salesforce. OEM partners can use the COA to provision Salesforce licenses and for revenue sharing. ISV partners can use the COA for revenue sharing.The COA is pre installed in PBOs, but additional setup is required to access it.See AlsoReport Orders to Salesforce with the Channel Order AppTrailhead: Channel Order App Basics |
| Checkout Management App (CMA) | The CMA is a companion app to use with AppExchange Checkout, AppExchange’s integrated payment platform. With Checkout, customers can buy solutions directly from AppExchange listings with a credit card or bank transfer. The CMA has a dashboard that shows Checkout data so partners can monitor key performance indicators, such as solution revenue and subscription status. The CMA also features customizable email notifications. Partners can automate emails to customers and team members.Checkout and the CMA are available to ISV partners that distribute solutions in managed packages and are based in the United States, United Kingdom, or a European Union country. They aren’t available to OEM partners.The CMA is pre installed in PBOs.See AlsoSell on AppExchange with CheckoutTrailhead: AppExchange Checkout |
| Dev Hub | A Dev Hub is where partners create and manage scratch orgs, second-generation managed packages, and namespaces. All Salesforce ISV and OEM partners should designate their PBO as their Dev Hub org.Dev Hub is disabled in newly provisioned PBOs. Enable Dev Hub in Setup.See AlsoSet Up Your Development Environment |
| Environment Hub | The Environment Hub is used to connect, create, view, and log in to Salesforce orgs from one location. If your company has multiple environments for development, testing, and trials, the Environment Hub streamlines org management. The Environment Hub is the only way that ISV partners can create Partner Developer Edition orgs (PDEs). A PDE has a higher API call limit, more storage, and a greater number of licenses available than a Developer Edition org. ISVs use PDEs for managed package development and packaging.The Environment Hub app is pre installed in PBOs.See AlsoManage Orgs with Environment Hub |
| License Management App (LMA) | The LMA is a managed package that helps partners manage leads and licenses for their AppExchange solutions. It includes custom objects for tracking package details, package versions, and licenses. Additionally, it features the Subscriber Support Console, a tool partners use to troubleshoot issues directly within subscriber organizations. The org that the LMA is installed in is called the License Management Org (LMO).The LMA is pre installed in PBOs.See AlsoManage Licenses for Managed PackagesTrailhead: App Licensing and Customer Support for AppExchange |
| Feature Management App (FMA) | The FMA, a managed package that extends the LMA, allows partners to control the release of features to customers. For example, dark-launch a feature to see how it works in production before a full release, or offer limited-time trials to specific orgs. The FMA also gives partners the ability to track activation metrics for these features.The FMA isn’t pre installed in PBOs.See AlsoInstall and Set Up the Feature Management App in Your License Management OrgManage Features in First-Generation Managed PackagesManage Features in Second-Generation Managed PackagesTrailhead: App Licensing and Customer Support for AppExchange |

## Related Topics

- Report Orders to Salesforce with the Channel Order App (atlas.en-us.packagingGuide.meta/packagingGuide/coa_intro.htm)
- Sell on AppExchange with Checkout (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sell.htm)
- Manage Orgs with Environment
         Hub (atlas.en-us.packagingGuide.meta/packagingGuide/environment_hub_intro.htm)
