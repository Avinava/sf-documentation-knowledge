---
title: "Set Up an API-Enabled Profile"
domain: mobile-sdk
topic: set-up-an-api-enabled-profile
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:25.313Z
estimatedTokens: 474
keywords: [API-Enabled, Profile, you’re, new, Experience, Cloud, sites, start, enabling, digital, experiences, org, Enable, asked, domain, sure, doesn’t, SSL, https]
---

> If you’re new to Experience Cloud sites, start by enabling digital
                        experiences in your org. See Enable Digital
                              Experiences. When you’re asked to create a domain name,
                        be sure that it doesn’t use SSL (https://).

# Set Up an API-Enabled Profile

If you’re new to Experience Cloud sites, start by enabling digital experiences in your org. See [Enable Digital Experiences](https://help.salesforce.com/apex/HTViewHelpDoc?id=networks_enable.htm&language=en_US "HTML (New Window)"). When you’re asked to create a domain name, be sure that it doesn’t use SSL (https://).

To set up your Experience Cloud sie, see [Create an Experience Cloud Site](https://help.salesforce.com/apex/HTViewHelpDoc?id=networks_creating.htm&language=en_US "HTML (New Window)"). Note that you’ll define a site URL based on the domain name you created when you enabled digital experiences.

Next, configure one or more profiles with the API Enabled permissions. You can use these profiles to enable your Mobile SDK app for Experience Cloud site members. For detailed instructions, follow the tutorial at [Example: Configure an Experience Cloud Site For Mobile SDK App Access](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial.htm "Configuring your Experience Cloud site to support logins from Mobile SDK apps can be tricky. This tutorial helps you see the details and correct sequence first-hand.").

1.  Create a new profile or edit an existing one.
2.  Edit the profile’s details to select API Enabled under **Administrative Permissions**.
3.  Save your changes, and then edit your Experience Cloud site from Setup by entering digital experiences in the Quick Find box and then selecting **All Sites**.
4.  Select **Workspaces** next to the name of your site. Then click **Administration** | **Members**.
5.  Add your API-enabled profile to **Selected Profiles**.

Users to whom these profiles are assigned now have API access. For an overview of profiles, see [User Profiles Overview](https://help.salesforce.com/apex/HTViewHelpDoc?id=admin_userprofiles.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Related Topics

- Example: Configure an
                              Experience Cloud Site For Mobile SDK App Access (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial.htm)
