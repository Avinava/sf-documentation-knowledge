---
title: "Improve Contact Lens Transcription Accuracy with a Custom Vocabulary"
domain: voice-developer-guide
topic: improve-contact-lens-transcription-accuracy-with-a-custom-vocabulary
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.469Z
estimatedTokens: 576
keywords: [Improve, Contact, Lens, Transcription, Accuracy, Custom, Vocabulary, Add, vocabularies, transcribe, domain, specific, terminology, correctly, fix]
---

# Improve Contact Lens Transcription Accuracy with a Custom Vocabulary

> Add one or more custom vocabularies to transcribe domain specific
      terminology correctly. Use it to fix the capitalization and spelling of domain-specific lingo
      and to mask text. To mask text, enter the term in the custom vocabulary file and display the
      term as ***.

# Improve Contact Lens Transcription Accuracy with a Custom Vocabulary

Add one or more custom vocabularies to transcribe domain specific terminology correctly. Use it to fix the capitalization and spelling of domain-specific lingo and to mask text. To mask text, enter the term in the custom vocabulary file and display the term as \*\*\*.

| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 30 minutes |

In this example, we show you how to add a custom vocabulary with Contact Lens.

## Prerequisites

To run through this example, create your custom vocabulary file first. To learn how to create a file, review the text and links on the screen when asked to upload the file.

## Step 1: Open Amazon Connect

To quickly access Amazon Connect, click **Telephony Provider Settings** in the Amazon contact center page.![The contact center page shows the Telephony Provider Settings link.](/docs/resources/img/en-us/260.0?doc_id=images%2Ftelephony_provider_settings_link.png&folder=voice_developer_guide)

## Step 2: Add a Custom Vocabulary

1.  In Amazon Connect, click **Analytics** | **Custom vocabularies**.
2.  In the Contact Lens Custom Vocabulary screen, click **Add custom vocabulary**.
3.  Enter the name and language of the custom vocabulary.
4.  Select **Choose a file**, and select the custom vocabulary file. ![Enter the name and language of the custom vocabulary.](/docs/resources/img/en-us/260.0?doc_id=images%2Fadd_custom_vocabulary.png&folder=voice_developer_guide)
5.  Click **Save and upload**.
6.  Refresh the Amazon Connect page until the state shows Ready.
7.  Click **…** to the right of the custom vocabulary, and select **Set as default**.![The State column in the Contact Lens Custom Vocabulary screen shows Ready.](/docs/resources/img/en-us/260.0?doc_id=images%2Fcustom_vocabulary_ready.png&folder=voice_developer_guide)

## Test This Example

To test this example, perform an inbound call and review the transcript that appears. The transcript should reflect your custom vocabulary.

#### See Also

-   [*Amazon Documentation:* Create a Custom Vocabulary Using a Table](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary-create-table.html "Amazon Documentation: Create a Custom Vocabulary Using a
    Table - HTML (New Window)")
