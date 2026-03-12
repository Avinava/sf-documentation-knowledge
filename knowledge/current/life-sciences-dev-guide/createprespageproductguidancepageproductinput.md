---
title: "createPresPageProductGuidance(pageProductInput)"
domain: life-sciences-dev-guide
topic: createprespageproductguidancepageproductinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.010Z
estimatedTokens: 471
keywords: [createPresPageProductGuidance, pageProductInput, new, association, products, guidance, presentation, API, Version, Requires, Chatter]
---

# createPresPageProductGuidance(pageProductInput)

> Create a new association between products and guidance with a
            presentation page.

# createPresPageProductGuidance(pageProductInput)

Create a new association between products and guidance with a presentation page.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.GenericResponseOutputRepresentation createPresPageProductGuidance(ConnectApi.PageProductInputRepresentation pageProductInput)

## Parameters

pageProductInput

Type: [ConnectApi.PageProductInputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_input_page_product_input.htm "Input representation for creating or deleting product guidance associations on a presentation page.")

Input representation that contains the presentation page ID and a list of associated products and guidances.

## Return Value

Type: [ConnectApi.GenericResponseOutputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_output_generic_response_output.htm "Output representation for a generic response from a Connect API call.")

## Example

ConnectApi.ProductContentInputRepresentation input = new ConnectApi.ProductContentInputRepresentation(); input.pageProducts = new List<ConnectApi.PresentationPageProductRepresentation>(); ConnectApi.PresentationPageProductRepresentation pageProduct = new ConnectApi.PresentationPageProductRepresentation(); pageProduct.id = 'pdf-page-name-1'; pageProduct.products = new List<ConnectApi.ProductGuidanceRepresentation>(); ConnectApi.ProductGuidanceRepresentation product = new ConnectApi.ProductGuidanceRepresentation(); product.productId = '1KeYH0000001j2m0AA'; product.guidanceIds = new List<String>(); product.guidanceIds.add('guidance-id-1'); product.guidanceIds.add('guidance-id-2'); pageProduct.products.add(product); input.pageProducts.add(pageProduct); System.debug(ConnectApi.LifeSciPresPageProductGuidance.createPresPageProductGuidance(input));

## Related Topics

- ConnectApi.PageProductInputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_input_page_product_input.htm)
- ConnectApi.GenericResponseOutputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_output_generic_response_output.htm)
