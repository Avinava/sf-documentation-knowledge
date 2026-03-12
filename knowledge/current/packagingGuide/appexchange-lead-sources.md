---
title: "AppExchange Lead Sources"
domain: packagingGuide
topic: appexchange-lead-sources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.448Z
estimatedTokens: 2219
keywords: [AppExchange, Lead, Sources, leads, include, help, understand, source—that, how, originated, source, code, identifies, action, customer]
---

# AppExchange Lead Sources

> AppExchange leads include details to help you understand the source—that is,
    where and how the lead originated. The lead source code identifies the action that the customer
    performed to generate the lead, such as watching a demo video. The lead source description
    provides information about how the customer discovered your listing, such as a third-party
    marketing campaign.

# AppExchange Lead Sources

AppExchange leads include details to help you understand the source—that is, where and how the lead originated. The lead source code identifies the action that the customer performed to generate the lead, such as watching a demo video. The lead source description provides information about how the customer discovered your listing, such as a third-party marketing campaign.

## Lead Source Codes

Lead source codes are stored in the Lead Source field and use this format: SFDC-XX|Listing Name or SFDC-dup-XX|Listing Name. XX identifies the action that the customer performed to generate the lead.

This table lists source codes.

| Source Code | Description |
| --- | --- |
| IN | This code is applied when a user takes one of these actions.The user clicks Get It Now on your listing and starts the production installation process for your solution.The user clicks Try It on your listing and starts the sandbox installation process for your solution.Sometimes users don’t complete the installation, or they uninstall your solution later. To track package installations, use the License Management App (LMA). |
| DM | The user clicks the demo video tile in the media carousel of your listing. |
| LM | The user clicks Learn More on your listing.Listings that previously had Learn More buttons now have Get It Now buttons and receive lead source codes with IN actions. |
| TS | This code is applied when a user takes one of these actions.The user clicks Get It Now on your listing and starts a 30-day trial of Salesforce and your solution.The user clicks Try It on your listing and starts a Trialforce trial. |
| TD | The user clicks Try It on your listing and starts a test drive of your solution. |

## Lead Source Description

The lead source description indicates how a customer discovered your listing and, if applicable, their contact preferences about other products or services that you offer. Lead source descriptions vary based on how you market your listing, but can include:

-   Urchin Tracking Module (UTM) parameters from marketing campaigns.
-   Codes from referral programs.
-   External traffic sources, such as Google searches.
-   Internal traffic sources, such as AppExchange searches.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

UTM, referral code, and traffic source details are available for AppExchange solution listings. For consultant listings, the lead source description includes only a customer’s contact preference in text format.

These details are stored in the Description field and are provided in JSON format:

```

```

If UTM or referral code details aren’t available, AppExchange omits them and populates an other\_source property from a standard list of internal and external traffic sources:

```

```

To receive UTM or referral code details in your lead source description, configure a referrer URL as follows:

https://appexchange.salesforce.com/appxListingDetail?listingId=a0NXXXXXXXXXXXXXXX &utm\_campaign=example-campaign&utm\_content=example-content&utm\_medium=example-medium &utm\_source=example-source&utm\_term=example-term&referral\_code=example-code

Where a0NXXXXXXXXXXXXXXX is your listing ID.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

#### Tip

To configure a referrer URL that contains only UTM parameters, consider using Google’s [Campaign URL Builder](https://ga-dev-tools.google/campaign-url-builder/).

This table lists lead source description properties.

| Property | Type | Description |
| --- | --- | --- |
| allow_contact_ other_products | Boolean | The customer’s contact preference regarding marketing communications for other products and services that you offer.If you don’t offer products or services outside of the listing where the lead originated, ignore this property.Examples:true–The customer consents to marketing communications related to other products and services that you offer.false–The customer doesn’t consent to marketing communications related to other products and services that you offer. |
| listing_url | String | The URL of the listing where the lead was generated, excluding UTM parameters, referral codes, and traffic source details. |
| utm_campaign | String | The promotional or marketing campaign that referred traffic to your listing.To populate this property, include the utm_campaign parameter in the referrer URL.Example: utm_campaign=appy-dreamforce |
| utm_content | String | The content zone or variant that referred traffic to your listing, such as a banner that uses a specific call to action or image.To populate this property, include the utm_content parameter in the referrer URL.Example: utm_content=cta-header-1 |
| utm_medium | String | The medium that referred traffic to your listing, such as cost per click.To populate this property, include the utm_medium parameter in the referrer URL.Example: utm_medium=cpc |
| utm_source | String | The source that referred traffic to your listing, such as a newsletter.To populate this property, include the utm_source parameter in the referrer URL. This property is required to use other UTM parameters.Example: utm_source=newsletter |
| utm_term | String | The keyword or phrase that referred traffic to your listing.To populate this property, include the utm_term parameter in the referrer URL.Example: utm_term=sales+productivity |
| referral_code | String | A unique identifier associated with the content or campaign, such as a discount code.To populate this property, include one of these parameters in the referrer URL:refreferralExample: ref=astro25off |
| other_source | String | The source that referred traffic to your listing if UTM parameters or referral codes aren’t provided.This property is set by AppExchange. The default value is Web.Examples:AppExchange Browse–Traffic referred by the AppExchange home page or from areas of the marketplace not included in other sources.AppExchange Explore–Traffic referred by an AppExchange Explore page.AppExchange Recommended–Traffic referred by a personalized recommendation on AppExchange.AppExchange Search–Traffic referred by an AppExchange search results page.AppExchange Sponsored Explore–Traffic referred by the Sponsored Solutions section on an Explore page.AppExchange Sponsored Search–Traffic referred by the Sponsored Solutions section on a search results page.Facebook–Traffic referred by a Facebook page or ad.Google–Traffic referred by a Google search or ad.Web–Traffic referred by any web source that isn’t affiliated with Facebook or Google. |

## Example

This example shows a sample referrer URL and the related JSON block. In this example, we assume that the customer agrees to marketing communications. For this sample URL:

https://appexchange.salesforce.com/appxListingDetail?listingId=a0NXXXXXXXXXXXXXXX &utm\_campaign=spring&utm\_medium=organic\_social&utm\_source=newsletter

This JSON block appears in the Description field of the lead:

```

```

## Package Installation Leads

Package installation is one example of a user activity that triggers lead creation. However, AppExchange isn’t the only source of installation leads. The License Management App (LMA) also creates installation leads. Let’s look at an example. A user purchases your solution and installs it via an installation URL. AppExchange isn’t aware of the user’s activity, so it doesn’t create a lead. However, the installation triggers the LMA to create a lead. To know which application created the lead, check the lead source code.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

The source code for LMA leads is Package Installation.

Let’s tweak our example to see how multiple installation leads can be created for the same package. First, a user clicks **Get It Now**, and starts but doesn’t complete the installation. AppExchange creates a lead with source code SFDC-IN|Simple Sample App. Later, the same user purchases your solution and installs it via an installation URL. The LMA creates a second lead with source code Package Installation. Same user. Same package. On the surface, the leads appear to be duplicates, but the lead source codes show that they aren’t.

Learn more about LMA leads in [Lead and License Records in the LMA](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/lma_terms_relationships.htm).

## Duplicate Leads

A duplicate lead is a lead that AppExchange already sent to your org for this user, listing, or action within the past 180 days.

Duplicate lead source codes always contain the string \-dup- and use the format SFDC-dup-XX|Listing Name. For example, SFDC-dup-DM|Simple Sample App indicates a duplicate lead from a user who clicked **View Demo** on the Simple Sample App listing.

## Code Examples

```
{
  "lead_description": {
    "allow_contact_other_products": true,
    "listing_url": "example-URL",
    "utm_parameters": {
      "utm_campaign": "example-campaign", 
      "utm_content": "example-content",
      "utm_medium": "example-medium",
      "utm_source": "example-source",
      "utm_term": "example-term"
    },
    "referral_code": "example-code"
  }
}
```

```
{
  "lead_description": {
    "allow_contact_other_products": true,
    "listing_url": "example-URL",
    "other_source": "example-traffic-source"
  }
}
```

```
{
  "lead_description": {
    "allow_contact_other_products": true,
    "listing_url": "https://appexchange.salesforce.com/appxListingDetail?listingId=a0NXXXXXXXXXXXXXXX",
      "utm_parameters": {
        "utm_campaign": "spring", 
        "utm_medium": "organic_social",
        "utm_source": "newsletter"
      }
  }
}
```
