---
title: "createEngagementInteraction(engagementContainerInput)"
domain: omnistudio
topic: createengagementinteractionengagementcontainerinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.439Z
estimatedTokens: 538
keywords: [createEngagementInteraction, engagementContainerInput, engagement, interaction, record, API, Version, Requires, Chatter]
---

# createEngagementInteraction(engagementContainerInput)

> Create an engagement interaction record.

# createEngagementInteraction(engagementContainerInput)

Create an engagement interaction record.

## API Version

55.0

## Requires Chatter

No

## Signature

public static ConnectApi.EngagementsCreateOutput createEngagementInteraction(ConnectApi.EngagementsCreateInput engagementContainerInput)

## Parameters

engagementContainerInput

Type: [ConnectApi.EngagementsCreateInput](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_engagements_create.htm "Input representation of the engagements create request.")

Input representation of the engagements create request.

## Return Value

Type: [ConnectApi.EngagementsCreateOutput](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_engagement_interaction_create_output.htm "Output representation to create an engagement record along with the status.")

## Example

Account initiatingUserAccount = new Account(Name='Test'); insert initiatingUserAccount; ConnectApi.EngagementInteractionCreateInput interactionInput = new ConnectApi.EngagementInteractionCreateInput(); interactionInput.communicationChannel = 'Video Call'; interactionInput.attendeeAuthenticated = true; interactionInput.attendeeVerified = false; interactionInput.sentiment = 'Positive'; interactionInput.startDateTime = datetime.now().formatGMT('yyyy-MM-dd\\'T\\'HH:mm:ss.SSS\\'Z\\''); interactionInput.endDateTime = datetime.now().formatGMT('yyyy-MM-dd\\'T\\'HH:mm:ss.SSS\\'Z\\''); interactionInput.status = 'New'; interactionInput.initiatingAttendeeId = initiatingUserAccount.id; interactionInput.attendeeAuthenticated = true; interactionInput.type = 'Inbound'; interactionInput.status = 'New'; interactionInput.attendeeVerificationTime = datetime.now().formatGMT('yyyy-MM-dd\\'T\\'HH:mm:ss.SSS\\'Z\\''); interactionInput.reason = 'Unknown Charges'; interactionInput.phoneNumber = '9999999999'; ConnectApi.EngagementsCreateInput containerInput = new ConnectApi.EngagementsCreateInput(); containerInput.engagementInteraction = interactionInput; ConnectApi.EngagementsCreateOutput output = ConnectApi.EngagementContainerConnect.createEngagementInteraction(containerInput);

## Related Topics

- ConnectApi.EngagementsCreateInput (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_engagements_create.htm)
- ConnectApi.EngagementsCreateOutput (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_engagement_interaction_create_output.htm)
