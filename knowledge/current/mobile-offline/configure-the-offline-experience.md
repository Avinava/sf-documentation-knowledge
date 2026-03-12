---
title: "Configure the Offline Experience"
domain: mobile-offline
topic: configure-the-offline-experience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.600Z
estimatedTokens: 522
keywords: [Configure, Offline, Experience, provide, supplemental, configuring]
---

# Configure the Offline Experience

> In this section, we provide supplemental information on configuring your offline
    experience.

# Configure the Offline Experience

In this section, we provide supplemental information on configuring your offline experience.

For more detailed information, see about the [Salesforce Offline App Onboarding Wizard Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-mobile "HTML (New Window)").

1.  [Build a Briefcase](atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_briefcase.htm)
    Briefcase Builder is how you choose which records are available offline for your users. It's important to think about your users and which records they need access to while offline. The Offline App uses and depends on a Briefcase to use when priming records for offline use.
2.  [Select a Landing Page Template](atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_landing.htm)
    The Landing Page is the Mobile Offline home page for the Salesforce Mobile App. When a user logs into the Salesforce Mobile App offline experience, the landing page is the first thing they see. This page is intended to give access to the user’s most important records and allow them to quickly and easily take relevant actions.
3.  [Generate and Configure LWC Quick Actions](atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_lwc_qa.htm)
    The Onboarding Wizard can generate missing LWC quick actions based on the sObjects that are configured in your landing page template selection.
4.  [Deploy Your Configurations](atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_deploy.htm)
    Before you can run a quick action based on a Lightning web component, you need to deploy the relevant code artifacts to your org. Components and quick actions can be deployed using the Onboarding Wizard or manually with Visual Studio Code.
5.  [Add LWC Quick Actions to Mobile Layouts](atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_add_lwc_qa.htm)
    For a quick action to appear in the action bar of a record view, it must be assigned to the main page layout for the record's object type.

## Related Topics

- Build a Briefcase (atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_briefcase.htm)
- Select a Landing Page Template (atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_landing.htm)
- Generate and Configure LWC Quick Actions (atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_lwc_qa.htm)
- Deploy Your Configurations (atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_deploy.htm)
- Add LWC Quick Actions to Mobile Layouts (atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard_add_lwc_qa.htm)
