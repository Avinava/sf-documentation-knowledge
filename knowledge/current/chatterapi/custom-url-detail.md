---
title: "Custom URL Detail"
domain: chatterapi
topic: custom-url-detail
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.845Z
estimatedTokens: 75
keywords: [Custom, URL, Detail, Detailed]
---

# Custom URL Detail

> Detailed description of a custom URL.

# Custom URL Detail

Detailed description of a custom URL.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| customUrlId | String | ID of the custom URL. | Small, 62.0 | 62.0 |
| domainId | String | ID of the custom domain. | Small, 62.0 | 62.0 |
| domainName | String | Domain Name | Small, 62.0 | 62.0 |
| lastModified | String | Date when the custom URL was last modified. | Small, 63.0 | 63.0 |
| path | String | The path on the domain, starting with a slash (/).A slash (/) with no subsequent characters represents the root path, such as https://www.example.com.You can use the same path for more than one domain, but you can use each path only once within the same domain. | Small, 62.0 | 62.0 |
| primarySiteUrl | Boolean | Indicates whether this custom URL is the preferred URL for authenticated pages and email (true) or not (false).This property applies only when the siteType is Community or SalesforceSite.Each site can have only one primary custom URL. For more information, see Add a Custom URL in Salesforce Help. | Small, 62.0 | 62.0 |
| siteId | String | ID of the site that this custom URL serves. | Small, 62.0 | 62.0 |
| siteName | String | Name of the site that this custom URL serves. | Small, 62.0 | 62.0 |
| siteType | String | Type of site that this custom URL serves.Community—An Experience Cloud Site.SalesforceSite—A Salesforce Site.LegacySite—A legacy site type, such as legacy Site.com sites. | Small, 62.0 | 62.0 |
| status | String | Custom URL status. Values are:AwaitingPublish—The custom URL is ready to be published from within Site.com Studio. This status applies only to custom URLs with a siteType of LegacySite when no sites of other types exist on the same domain.AwaitingUnpublish—The custom URL was removed but is still published. To finish deleting the custom URL, click Unpublish in Site.com Studio. This status applies only to custom URLs with a siteType of LegacySite.InDevelopment—The custom URL is ready to be published. This status applies only to custom URLs with a siteType of LegacySite when no sites of other types exist on the same domain.Offline—The custom URL is associated with an inactive site.Preview—The custom URL is active for an Experience Cloud site with a status of Preview.PublishFailed—There was an unexpected issue with the background publishing operation for a site associated with the custom URL. This status is assigned to the custom URL after the background publishing operation is attempted every hour for two weeks without success.Published—The custom URL is active and is associated with a site that is live.Publishing—Salesforce is publishing the custom URL in the background. If this custom URL was previously published, the custom URL remains available throughout the publishing process. | Small, 63.0 | 63.0 |

#### See Also

-   [Custom Domain Custom URL Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_custom_domain_custom_url_collection.htm "List of custom URLs for a custom domain. A custom URL consists of a domain, a custom path prefix, and a unique site path. For a domain to serve content from a site, at least one custom URL is required.")

## Code Examples

```
/connect/custom-domain/domains/domainId/custom-urls/customUrlId
```

## Related Topics

- Custom URL Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_custom_domain_custom_url_detail.htm)
- Experience Cloud Site (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_specific.htm)
- Custom Domain Custom URL Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_custom_domain_custom_url_collection.htm)
