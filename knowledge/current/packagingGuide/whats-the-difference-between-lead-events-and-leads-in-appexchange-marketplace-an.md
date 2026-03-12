---
title: "What’s the Difference Between Lead Events and Leads in AppExchange
   Marketplace Analytics?"
domain: packagingGuide
topic: whats-the-difference-between-lead-events-and-leads-in-appexchange-marketplace-an
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.033Z
estimatedTokens: 1378
keywords: [What’s, Difference, Lead, Events, Leads, AppExchange, Marketplace, Analytics, how, defined, they, differ, records, appear, Salesforce]
---

# What’s the Difference Between Lead Events and Leads in AppExchange
   Marketplace Analytics?

> Learn how lead events are defined in AppExchange Marketplace Analytics and how they
  differ from the lead records that appear in your Salesforce org.

# What’s the Difference Between Lead Events and Leads in AppExchange Marketplace Analytics?

Learn how lead events are defined in AppExchange Marketplace Analytics and how they differ from the lead records that appear in your Salesforce org.

Marketplace Analytics records a lead event when a customer visits your listing and performs one of these actions.

-   Watches a demo
-   Takes a test drive
-   Interacts with AppExchange Chat
-   Clicks **Get It Now**
-   Clicks **Learn More** (applies only to consultant listings).
-   Installs your solution

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

    #### Note

    AppExchange Chat is required to view chat data in Marketplace Analytics. Learn about AppExchange Chat in the [Salesforce Partner Community](https://partners.salesforce.com/s/education/general/AppExchange_Chat).


If you configured Web-to-Lead and enabled lead collection for the listing, each of these activities also creates a lead in your org. However, custom lead routing rules, customer contact preferences, and Web-to-Lead reCAPTCHA can cause the number of leads in your org to differ from the number of lead events shown in Marketplace Analytics.

## Custom Lead Routing Rules

Typically, you set up custom lead routing rules to prevent duplicate or unwanted leads from reaching your sales team. Here are some common examples of routing rules where Marketplace Analytics lead events aren’t recorded as leads in your org.

| Lead Routing Rule | Example | Marketplace Analytics | Your Org |
| --- | --- | --- | --- |
| Domain RestrictionYou filter leads from customers whose email address includes your company’s domain. | An employee at your company watches your listing’s demo video and uses a company email address when AppExchange asks for contact information.In this scenario, Marketplace Analytics records a lead event, but the lead routing rule filters the lead in your org. | A lead event is recorded. | A lead isn’t recorded. The lead routing rule filters out the lead. |
| Duplicate Email AddressesYou filter leads associated with an email address that’s been captured in an existing lead. | A new customer goes to your listing and watches a video, takes a test drive, and installs your solution. For each activity, the customer provides the same email address.In this scenario, Marketplace Analytics records three lead events: one for each activity. In your org, the lead routing rule creates a lead for the first activity. The others are marked as duplicates because they’re associated with the same email address. | Three lead events are recorded, one for each activity. | A lead is created for the first activity only. The others are marked as duplicates because they’re associated with the same email address. |

## Customer Contact Preferences

In a customer’s Trailblazer settings, the customer can choose to share their contact info with, and allow contact from, AppExchange providers. Their choices impact lead creation in your org. For customers who allow provider contact, AppExchange lead events are recorded in Marketplace Analytics and propagate to your org as leads. Here are common examples of how contact preferences impact lead creation.

| Trailblazer.me Contact Preference | Example | Marketplace Analytics | Your Org |
| --- | --- | --- | --- |
| Allow | A prospect who allows provider contact watches your listing’s demo video. | A lead event is recorded. | If custom lead routing rules don’t filter out the lead, then a lead is created in your org. |
| Prohibit | A prospect who prohibits provider contact takes a test drive of your solution. | A lead event is recorded. | If custom lead routing rules don’t filter out the lead, then a lead is created in your org. The lead is flagged as contact prohibited. |

Customers can override their default Trailblazer contact preferences when interacting with AppExchange listings. AppExchange recognizes when a customer interacts with your listing in a way that you chose to collect leads for. These customers are prompted to fill out the AppExchange lead sign-up form.

![A lead-collection form with an orange circle around the checkbox and description where customers can allow provider contact](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fdashboard%2Fimages%2Flead-collection-form.png&folder=packagingGuide)

The form prepopulates with the customer’s contact info and preferences from their Trailblazer profile settings. On the form, the customer can choose to allow or prohibit provider contact, effectively overriding the contact preference that they set in their Trailblazer profile.

## Web-to-Lead reCAPTCHA Verification

To receive AppExchange leads, disable Require reCAPTCHA Verification in your org’s Web-to-Lead settings.

#### See Also

-   [Collect AppExchange Leads](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_leads_intro.htm "You can configure your AppExchange listings to collect leads and deliver them to your Salesforce org. Specific customer interactions, such as watching your listing’s demo video, can trigger lead collection.")

-   [Troubleshoot AppExchange Leads](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_troubleshoot_leads.htm "You enabled lead collection for your AppExchange listing. However, the lead count in your org is different than you expect. Learn how lead routing rules, reCAPTCHA verification, and other settings determine what leads AppExchange sends to your Salesforce org.")

## Related Topics

- Collect AppExchange Leads (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_leads_intro.htm)
- Troubleshoot AppExchange Leads (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_troubleshoot_leads.htm)
