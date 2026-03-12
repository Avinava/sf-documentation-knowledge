---
title: "Leads and Licenses Aren’t Being Created in the License Management
            App"
domain: pkg1-dev
topic: leads-and-licenses-arent-being-created-in-the-license-management-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.451Z
estimatedTokens: 990
keywords: [Leads, Licenses, Aren’t, Created, License, Management, App, customer, installs, package, records, review, configurations, Org, LMO]
---

# Leads and Licenses Aren’t Being Created in the License Management
            App

> When a customer installs your package, leads and license records are created. If these
        records aren’t being created, review these configurations in the License Management Org
        (LMO). If you resolve your issue using one of these recommendations, your missing licenses
        appear in the LMA within a few days.

# Leads and Licenses Aren’t Being Created in the License Management App

When a customer installs your package, leads and license records are created. If these records aren’t being created, review these configurations in the License Management Org (LMO). If you resolve your issue using one of these recommendations, your missing licenses appear in the LMA within a few days.

Did the customer complete the package installation?

When a customer clicks **Get it Now** on your AppExchange listing, Salesforce counts this selection as an installation. However, the customer can cancel the installation before it’s completed, or the installation could have failed. If the installation doesn’t finish, a license isn’t created.

Is State and Country picklist validation enabled?

To avoid state and country picklist-related lead failures, you have two options. Use the standard picklist integration values, or add duplicate states and countries to your picklists.

**Standard picklist integration values**

To implement this option, use the Salesforce standard state and country picklists in your org, and leave the integration values as-is. We recommend this option for most partners.

With this option, AppExchange leads propagate to your org with full state and country names, and the names match integration values in the standard picklists.

**Add duplicate states and countries to your picklists.**

Implement this option if you have a requirement to use the two-letter state or country abbreviations in your org. For example, you display abbreviations in the user interface or use them to integrate with other systems. Add duplicate states and countries to your picklists with different integration values. Set one value to the two-letter state or country abbreviation. Set the other value to the full state or country name. Make only the two-letter abbreviation picklist entries visible.

With this option, AppExchange leads propagate to your org with full state and country names, which match the full name integration values in your org. You also have two-letter integration values to use as needed.

Does the lead or license object have a trigger?

Don’t use before\_create or before\_update triggers on leads and licenses. Instead, use after\_ triggers, or remove all triggers. If a trigger fails, it can block license creation.

Does the lead or license record have a required custom field?

If yes, remove the requirement. The LMA doesn’t populate a required custom field, so it can prevent licenses or leads from being created.

Is the lead manager a valid, active user?

If not, the LMA can’t create leads and licenses.

Does the lead or license record have a validation rule?

Validation rules often block the creation of LMA lead or license records because the required field isn’t there.

Does the lead or license have a workflow rule?

Workflow rules sometimes prevent leads and licenses from being created. Remove the workflow rule.

Was the lead converted to an account?

When leads are converted to accounts, they’re no longer leads.

Are you using standard duplicate rules for leads?

When a customer installs your package, the LMA checks for existing leads and contacts. If an existing contact matches the customer who installed your package, a lead record isn’t created. To complete these checks, the LMA applies [standard lead duplicate rules](https://help.salesforce.com/articleView?id=duplicate_rules_standard_lead_rule.htm&language=en_US "HTML (New Window)") and [matching rules](https://help.salesforce.com/articleView?id=matching_rules_standard_contact_rule.htm&language=en_US "HTML (New Window)"). If you prefer to have the LMA associate every license with a lead regardless of whether there’s an existing contact match, [customize the standard duplicate rule for leads](https://help.salesforce.com/articleView?id=duplicate_prevention_map_of_tasks.htm&language=en_US "HTML (New Window)") and remove the matching rule for contacts.
