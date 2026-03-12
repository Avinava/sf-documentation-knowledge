---
title: "Commerce Einstein Webstore Recommendations"
domain: chatterapi
topic: commerce-einstein-webstore-recommendations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.143Z
estimatedTokens: 1029
keywords: [Commerce, Einstein, Webstore, Recommendations, product]
---

# Commerce Einstein Webstore Recommendations

> Get Commerce Einstein product recommendations.

# Commerce Einstein Webstore Recommendations

Get Commerce Einstein product recommendations.

Resource

```

```

Resource example

```

```

Available version

55.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| anchorFromCurrent​Cart | Boolean | Indicates whether to use products in the cart as anchor values for generating product recommendations (true) or not (false). If unspecified, the default value is false. Use this field when using a product recommender as CustomersWhoBoughtAlsoBought. | Optional | 63.0 |
| anchorValues | String | List of product or category IDs to use as context for the recommendations. When using a product recommender, such as SimilarProducts or ComplementaryProducts, specify product IDs. When using a category recommender, such as MostViewedByCategory or TopSellingByCategory, specify category IDs.NoteThe anchor list can't contain both product IDs and category IDs. | OptionalThis field is required for product or category recommenders. | 55.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the recommendation. | Optional | 56.0 |
| dataSpace | String | Reserved for future use. | Optional | 60.0 |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.NoteTo view prices from the API, administrators must specify an effective account. | Optional | 55.0 |
| includePricing​AndProduct​Information | Boolean | Indicates whether to include product and pricing information for the request product in the response (true) or not (false). If unspecified, the default value is false. | Optional | 63.0 |
| includeRequest​Product | Boolean | Specifies whether to include product information for the requested product in the response (true) or not (false). If unspecified, the default value is false. | Optional | 60.0 |
| individualId | String | Reserved for future use. | Optional | 60.0 |
| personalization​Point | String | Reserved for future use. | Optional | 60.0 |
| recommender | String | Specifies the recommender to use to generate recommendations.RecentlyViewed — Generates recommendations based on items that the customer recently viewed.SimilarProducts — Generates recommendations based on the viewing behavior of customers who viewed the same product and the product’s similarity to other products. These recommendations match the category of the product viewed.ComplementaryProducts — Generates recommendations of products that complement other products. These recommendations don’t match the category of the product being viewed.CustomersWhoBoughtAlsoBought — Generates recommendations of products that were bought by other customers who also bought this product.MostViewedByCategory — Generates recommendations of products that were most viewed in a specific category.Personalization—Reserved for future use.TopSellingByCategory — Generates recommendations by analyzing which products were recently purchased by other customers in the category being viewed.Upsell — Generates recommendations by analyzing the purchasing behavior of other shoppers who either bought or viewed the same product.TopSelling — Generates recommendations by analyzing which products were recently purchased by other customers.PersonalizedForShopper —Reserved for future use.NoteWhen you specify a recommender, always include the cqcid cookie value in the "Cookie" header of your request. The value of the cqcid cookie must be the same as that used in the shopper's Einstein activity tracking events. If you omit the cqcid cookie, an empty set of results is returned.For more information about each recommender, see the Usage Notes section for the Einstein Recommendations Component for D2C Stores. | Required | 55.0 |

Response body for GET

[Commerce Einstein Recommendation Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_einstein_recommendation_results.htm "Commerce Einstein recommendations.")

## Code Examples

```
/commerce/webstores/webstoreId/ai/recommendations
```

```
https://yourInstance.salesforce.com/services/data/v66.0//commerce/webstores/0ZExx0000000002GAA/ai/recommendations
```

## Related Topics

- Commerce Einstein Recommendation Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_einstein_recommendation_results.htm)
