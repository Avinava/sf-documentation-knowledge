---
title: "Improve Amazon Transcribe's Transcription Accuracy with Custom Vocabulary and
    Filters"
domain: voice-developer-guide
topic: improve-amazon-transcribes-transcription-accuracy-with-custom-vocabulary-and-fil
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.585Z
estimatedTokens: 1024
keywords: [Improve, Amazon, Transcribe's, Transcription, Accuracy, Custom, Vocabulary, Filters, ensure, transcript, displays, terms, correct, spelling, capitalization]
---

# Improve Amazon Transcribe's Transcription Accuracy with Custom Vocabulary and
    Filters

> Use a custom vocabulary to ensure that your transcript displays
      terms with the correct spelling and capitalization. Use vocabulary filters to filter or mask
      unwanted content, like profanity.

# Improve Amazon Transcribe's Transcription Accuracy with Custom Vocabulary and Filters

Use a custom vocabulary to ensure that your transcript displays terms with the correct spelling and capitalization. Use vocabulary filters to filter or mask unwanted content, like profanity.

| Ease of Implementation | Easy |
| --- | --- |
| Estimated Time to Implement | 30 minutes |

## Prerequisites

To implement this use case, you need either the AWS root user or AWS administrator credentials.

## Step 1: Set Up Custom Vocabularies and/or Vocabulary Filtering in Amazon Transcribe

![Amazon Transcribe](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_amazon_transcribe_vocab.png&folder=voice_developer_guide)

-   To process speech more accurately, set up your [custom vocabulary](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html) in Amazon Transcribe. This feature is useful for domain-specific terminology.
-   To mask or remove words that you don’t want to appear in the transcription, set up [vocabulary filtering](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html) in Amazon Transcribe.

Be sure to record the name of the custom vocabulary and the name of the filter for the next step.

## Step 2: Modify the Contact Flows That Perform Transcription

The [kvsConsumerTrigger](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm "This Lambda function is the initiation point for starting real-time transcription.") Lambda function, which is installed with Service Cloud Voice, requires information about your vocabulary changes. This function starts the transcription process and is used by both inbound and outbound flows. Update these flows with additional parameters.

To update your flows, perform the following steps on all contact flows that use transcription:

1.  Find and edit any contact flow block that runs the [kvsConsumerTrigger](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm "This Lambda function is the initiation point for starting real-time transcription.") Lambda function. This block should have the title **Invoke AWS Lambda function**.

    ![Invoke block](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_transcribe_flow_invoke_block.png&folder=voice_developer_guide)

    To verify that you’ve selected the correct block, check that it ends with the string **kvsConsumerTrigger**.

    ![Invoke details](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_transcribe_flow_invoke_detail.png&folder=voice_developer_guide)

2.  If you have a custom vocabulary, add a vocabularyName parameter to this block with the name of your custom vocabulary that you created earlier.

    ![Custom vocabulary](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_transcribe_param_custom_vocab.png&folder=voice_developer_guide)

3.  If you have vocabulary filtering in place, add a vocabularyFilterName parameter to this block with the name of your vocabulary filter that you created earlier. Also, add a vocabularyFilterMethod parameter with one of the following values: mask or remove. mask replaces the term with asterisks. remove removes the term from the transcript. If no vocabularyFilterMethod parameter is provided, the behavior defaults to mask.

    ![Vocabulary filter](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_transcribe_param_vocab_filter.png&folder=voice_developer_guide)

4.  Save the block and contact flow, and then publish your contact flow.

## Test This Example

To test this example, perform an inbound call and review the transcript that appears. The transcript should reflect your filters and custom vocabulary.

#### See Also

-   [*Amazon Transcribe:* Custom vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html "Amazon Transcribe: Custom vocabularies - HTML (New Window)")

-   [*Amazon Transcribe:* Vocabulary filtering](https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html "Amazon Transcribe: Vocabulary filtering - HTML (New Window)")

## Related Topics

- kvsConsumerTrigger (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm)
