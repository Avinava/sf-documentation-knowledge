---
title: "createPresentationContent(presentationContentInput)"
domain: life-sciences-dev-guide
topic: createpresentationcontentpresentationcontentinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.016Z
estimatedTokens: 697
keywords: [createPresentationContent, presentationContentInput, new, presentation, content, provided, metadata, API, Version, Requires, Chatter]
---

# createPresentationContent(presentationContentInput)

> Create new presentation content with the provided
        metadata.

# createPresentationContent(presentationContentInput)

Create new presentation content with the provided metadata.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.GenericResponseOutputRepresentation createPresentationContent(ConnectApi.PresentationContentInputRepresentation presentationContentInput)

## Parameters

presentationContentInput

Type: [ConnectApi.PresentationContentInputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_input_presentation_content_input.htm "Input representation for creating or updating presentation content.")

Input representation that contains the metadata for the presentation content. The fileId field is not accepted in this Apex representation.

## Return Value

Type: [ConnectApi.GenericResponseOutputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_output_generic_response_output.htm "Output representation for a generic response from a Connect API call.")

## Example

ConnectApi.PresentationContentInputRepresentation input = new ConnectApi.PresentationContentInputRepresentation(); input.contentType = 'PRESENTATION\_PDF'; ConnectApi.PresentationInput presentation = new ConnectApi.PresentationInput(); presentation.name = 'PDF Presentation Name'; presentation.id = 'pdf-presentation-id'; presentation.enableDoubleTapZoom = true; presentation.enablePinchZoom = true; presentation.playerGesture = 'SWIPEUP'; presentation.activationDate = Date.today(); presentation.deactivationDate = Date.today().addDays(365); input.presentation = presentation; input.pages = new List<ConnectApi.PresentationPageInput>(); ConnectApi.PresentationPageInput page1 = new ConnectApi.PresentationPageInput(); page1.pageNumber = 1; page1.name = 'PDF Page 1 Name'; page1.id = 'pdf-page-name-1'; page1.mandatory = true; page1.contentDocumentId = '069SB0000048cPDYAY'; page1.activationDate = Date.today(); page1.deactivationDate = Date.today().addDays(365); ConnectApi.ProductGuidanceRepresentation product1 = new ConnectApi.ProductGuidanceRepresentation(); product1.productId = '1KeYH0000001j2m0AA'; product1.guidanceIds = new List<String>(); product1.guidanceIds.add('guidance-id-1'); product1.guidanceIds.add('guidance-id-2'); page1.products = new List<ConnectApi.ProductGuidanceRepresentation>(); page1.products.add(product1); input.pages.add(page1); ConnectApi.PresentationPageInput page2 = new ConnectApi.PresentationPageInput(); page2.pageNumber = 2; page2.name = 'PDF Page 2 Name'; page2.id = 'pdf-page-name-2'; page2.mandatory = true; page2.activationDate = Date.today(); page2.deactivationDate = Date.today().addDays(365); input.pages.add(page2); System.debug(ConnectApi.LifeSciPresentation.createPresentationContent(input));

## Related Topics

- ConnectApi.PresentationContentInputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_input_presentation_content_input.htm)
- ConnectApi.GenericResponseOutputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_output_generic_response_output.htm)
