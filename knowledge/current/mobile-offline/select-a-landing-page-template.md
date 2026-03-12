---
title: "Select a Landing Page Template"
domain: mobile-offline
topic: select-a-landing-page-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.594Z
estimatedTokens: 584
keywords: [Select, Landing, Template, Mobile, Offline, home, Salesforce, App, user, logs, experience, thing, they, intended, give]
---

# Select a Landing Page Template

> The Landing Page is the Mobile Offline home page for the Salesforce Mobile App. When a
    user logs into the Salesforce Mobile App offline experience, the landing page is the first thing
    they see. This page is intended to give access to the user’s most important records and allow
    them to quickly and easily take relevant actions.

# Select a Landing Page Template

The Landing Page is the Mobile Offline home page for the Salesforce Mobile App. When a user logs into the Salesforce Mobile App offline experience, the landing page is the first thing they see. This page is intended to give access to the user’s most important records and allow them to quickly and easily take relevant actions.

The landing page can be customized to meet user needs, using both out-of-the-box and custom objects, and Lightning global quick actions. It’s configured as a static resource file in JSON format.

![Landing page](/docs/resources/img/en-us/260.0?doc_id=images%2Fdx_onboard_landing.png&folder=mobile_offline)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Only one landing page layout is allowed per org.

## Landing Page Templates

You can use the Onboarding Wizard to select a preconfigured landing page template that best fits your use case. The Onboarding Wizard copies the landing page JSON file (based on the chosen template) into the Offline App Starter Kit staticresources folder. Locate and update the landing\_page.json file to build a customized offline app experience.

![Landing page template picker](/docs/resources/img/en-us/260.0?doc_id=images%2Fdx_onboard_template_picker.png&folder=mobile_offline)

Each landing page template has specific objects and quick actions.

-   Default
    -   Accounts
    -   Contacts
    -   Opportunities
-   Case Management
    -   New Case action
    -   5 most recent Cases
    -   5 most recent Accounts
    -   5 most recent Contacts
-   Healthcare
    -   BarcodeScanner action
    -   New Visit action
    -   New Visitor action
    -   Visit object
-   Retail Execution
    -   New Opportunity action
    -   New Lead action
    -   New Account action

For more information on updating the landing\_page.json file, see [Customize The Landing Page](https://help.salesforce.com/s/articleView?language=en_US&id=sf.salesforce_app_plus_offline_landing_page.htm&type=5 "HTML (New Window)") in the Salesforce Help.

-   [← Previous](atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_briefcase.htm "Build a Briefcase")
-   [Next →](atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_lwc_qa.htm "Generate and Configure LWC Quick Actions")

## Related Topics

- ← Previous (atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_briefcase.htm)
- Next → (atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_lwc_qa.htm)
