---
title: "updatePresentationContent(presentationContentInput)"
domain: life-sciences-dev-guide
topic: updatepresentationcontentpresentationcontentinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.019Z
estimatedTokens: 621
keywords: [updatePresentationContent, presentationContentInput, presentation, content, provided, metadata, API, Version, Requires, Chatter]
---

# updatePresentationContent(presentationContentInput)

> Update existing presentation content with the provided
            metadata.

# updatePresentationContent(presentationContentInput)

Update existing presentation content with the provided metadata.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.GenericResponseOutputRepresentation updatePresentationContent(ConnectApi.PresentationContentInputRepresentation presentationContentInput)

## Parameters

presentationContentInput

Type: [ConnectApi.PresentationContentInputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_input_presentation_content_input.htm "Input representation for creating or updating presentation content.")

Input representation that contains the metadata for the presentation content. The fileId field is not accepted in this Apex representation.

## Return Value

Type: [ConnectApi.GenericResponseOutputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_output_generic_response_output.htm "Output representation for a generic response from a Connect API call.")

## Example

ConnectApi.PresentationContentInputRepresentation input = new ConnectApi.PresentationContentInputRepresentation(); input.contentType = 'PRESENTATION\_PDF'; ConnectApi.PresentationInput presentation = new ConnectApi.PresentationInput(); presentation.name = 'Updated PDF Presentation Name'; presentation.id = 'pdf-presentation-id'; presentation.enableDoubleTapZoom = false; presentation.enablePinchZoom = false; presentation.playerGesture = 'TAPBOTTOM'; presentation.activationDate = Date.today().addDays(1); presentation.deactivationDate = Date.today().addDays(400); input.presentation = presentation; input.pages = new List<ConnectApi.PresentationPageInput>(); ConnectApi.PresentationPageInput page1 = new ConnectApi.PresentationPageInput(); page1.pageNumber = 1; page1.name = 'Updated PDF Page 1 Name'; page1.id = 'pdf-page-name-1'; page1.mandatory = true; page1.contentDocumentId = '069SB0000048cPEYBZ'; page1.activationDate = Date.today().addDays(1); page1.deactivationDate = Date.today().addDays(400); input.pages.add(page1); ConnectApi.PresentationPageInput page2 = new ConnectApi.PresentationPageInput(); page2.pageNumber = 2; page2.name = 'Updated PDF Page 2 Name'; page2.id = 'pdf-page-name-2'; page2.mandatory = false; page2.activationDate = Date.today().addDays(1); page2.deactivationDate = Date.today().addDays(400); input.pages.add(page2); System.debug(ConnectApi.LifeSciPresentation.updatePresentationContent(input));

## Related Topics

- ConnectApi.PresentationContentInputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_input_presentation_content_input.htm)
- ConnectApi.GenericResponseOutputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_output_generic_response_output.htm)
