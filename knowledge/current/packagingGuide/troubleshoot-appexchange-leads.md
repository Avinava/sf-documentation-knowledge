---
title: "Troubleshoot AppExchange Leads"
domain: packagingGuide
topic: troubleshoot-appexchange-leads
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.553Z
estimatedTokens: 1320
keywords: [Troubleshoot, AppExchange, Leads, enabled, lead, collection, listing, However, count, org, different, expect, how, routing, rules]
---

# Troubleshoot AppExchange Leads

> You enabled lead collection for your AppExchange listing. However, the lead count in
    your org is different than you expect. Learn how lead routing rules, reCAPTCHA verification, and
    other settings determine what leads AppExchange sends to your Salesforce org.

# Troubleshoot AppExchange Leads

You enabled lead collection for your AppExchange listing. However, the lead count in your org is different than you expect. Learn how lead routing rules, reCAPTCHA verification, and other settings determine what leads AppExchange sends to your Salesforce org.

## Custom Lead Routing Rules

Typically, you set up custom lead routing rules to prevent duplicate or unwanted leads from reaching your sales team.

For example, an employee at your company watches your AppExchange listing’s demo video. When prompted for contact information, they enter a company email address. AppExchange records this interaction as a lead. From a sales perspective, it’s an unwanted lead.

To prevent leads from users with your company’s email address from propagating to your Salesforce org, you can create a custom lead routing rule. See [Lead Routing in Salesforce](https://www.salesforce.com/products/guide/lead-gen/routing-assignment-rules/).

## Customer Contact Preferences

Customer can choose to share their contact info with, and allow contact from, AppExchange providers. AppExchange sends only leads to your Salesforce org for customers who allow provider contact.

## Web-to-Lead reCAPTCHA

To receive AppExchange leads in your Salesforce org, disable Require reCAPTCHA Verification in your org’s Web-to-Lead settings. If reCAPTCHA is enabled, AppExchange leads aren’t sent to your org.

![Web-to-Lead Setup page with an orange circle around the Require reCaptcha Verification label and checkbox](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fweb-to-lead-setup.png&folder=packagingGuide)

## State and Country/Territory Picklists

AppExchange sends leads to your org via Web-to-Lead. Users provide contact info for the lead by completing the AppExchange Web-to-Lead form. They’re required to select a country or territory from a picklist. The selected country or territory is saved as a text value. For example, a user selects Japan. The saved value is the full name of the country, Japan. The AppExchange lead is sent to your org with country set to Japan.

In orgs with state and country/territory picklists enabled, you can optionally populate these picklists with predefined, standard state and country lists that Salesforce provides. You can also edit country names and integration values, also know as developer names.

The Web-to-Lead form uses the integration values from the state and country/territory picklists. For AppExchange lead creation to succeed, the integration value for a country/territory in your org must match the value captured on the AppExchange Web-to-Lead form. In our example, they must both be Japan.

![The country and territory details configuration page in a Salesforce org showing that both the name and integration value are set to Japan](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcountry-territory-details-edit.png&folder=packagingGuide)

Changing country/territory names doesn’t affect AppExchange lead creation, but changing integration values does. Don’t change integration values. The country or territory sent in an AppExchange lead must match an integration value in your org. If there’s no match, lead creation fails. The same issue occurs with state picklists.

To avoid state and country/territory picklist-related lead failures, you have two options. Use the standard picklist integration values, or add duplicate states and countries/territories to your picklists.

-   Use Standard Picklist Integration Values

    To implement this option, use the Salesforce standard state and country/territory picklists in your org, and leave the integration values as-is. We recommend this option for most partners.

    With this option, AppExchange leads propagate to your org with full state and country/territory names. The names match integration values in the standard picklists.

-   Add Duplicate States and Countries/Territories to Your Picklists

    Implement this option if you require two-letter state or country/territory abbreviations in your org. For example, you show abbreviations in the user interface, or use them to integrate with other systems.

    Add duplicate states and countries/territories to your picklists with different integration values. Set one value to the two-letter state or country/territory abbreviation. Set the other value to the full state or country/territory name. Make only the two-letter abbreviation picklist entries visible.

    With this option, AppExchange leads propagate to your org with full state and country/territory names, which match the full name integration values in your org. You also have two-letter integration values to use as needed.


#### See Also

-   [Leads](https://help.salesforce.com/s/articleView?id=sales.leads_def.htm&type=5&language=en_US)

-   [Standard Countries for Address Picklists](https://help.salesforce.com/articleView?id=admin_state_country_picklists_standard_countries.htm&language=en_US "Standard Countries for Address Picklists - HTML (New Window)")

-   [Integration Values for State and Country Picklists](https://help.salesforce.com/articleView?id=admin_state_country_picklists_integ_values.htm&language=en_US "Integration Values for State and Country Picklists - HTML (New Window)")
