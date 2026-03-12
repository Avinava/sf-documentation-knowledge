---
title: "Image Upload Example"
domain: mobile-offline
topic: image-upload-example
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.091Z
estimatedTokens: 1927
keywords: [Image, Upload, Here’s, quick, uploading, Salesforce, createContentDocumentAndVersion, adapter, technique, works, mobile, devices, whether, they’re, online]
---

# Image Upload Example

> Here’s a quick example of uploading an image to Salesforce using the createContentDocumentAndVersion adapter. This technique works
    on mobile devices, whether they’re online or offline. This technique works only in Salesforce
    mobile apps.

# Image Upload Example

Here’s a quick example of uploading an image to Salesforce using the createContentDocumentAndVersion adapter. This technique works on mobile devices, whether they’re online or offline. This technique works only in Salesforce mobile apps.

This component is intended to be used as a quick action in a record context, for example, added to a record detail page. Uploaded images are attached to the associated record, and they can be viewed in the **Notes & Attachments** related items panel for that record.

```

```

The user interface has three main sections.

-   A local file selection widget, which is always displayed.
-   A selected file info panel, which is displayed only when there’s a file selected. This panel also contains an **Upload** button that triggers the file upload to Salesforce.
-   An error messages panel, which is displayed only when there’s an error with an upload.

This template is standard markup for a simple widget. All the magic happens on the other side of those four onchange attributes, and the handler functions that perform actions when the controls are used.

Here’s the component’s JavaScript implementation.

```

```

For the purpose of explanation, we can divide the implementation into these four sections.

-   Import statements
-   State tracking
-   Simple convenience functions and change handlers
-   The file upload handler

## Import Statements

The only thing interesting about the import statements is the API function, createContentDocumentAndVersion. The file upload discussion describes how to use this function.

## State Tracking

This component’s state tracking consists of one @api public attribute and five @track internal state attributes.

-   recordId is public and allows the component to receive a record context. This context is used to associate (attach) files that are uploaded to the record from which the component is launched. For example, to attach photos of equipment installed to the Service Appointment record of a technician’s visit.
-   files holds the currently selected local file prior to being uploaded. This variable is used to hold a file locally while the Title and Description are edited. It’s an array so that, with some minor code changes, you can upload multiple files at a time.
-   titleValue and descriptionValue hold the form field values for editing via the form fields.
-   uploadingFile indicates active processing and is used to manage the **Upload** button’s enabled or disabled state.
-   errorMessage holds messages about any errors that occur when the actual upload is attempted.

## Convenience and Handler Functions

-   The fileName getter is used locally only. It’s not relevant to or used for analysis of what to prime, so it’s exempt from the “simple getters only” rule.
-   resetInputs resets the form fields and state after a successful upload.
-   handleFilesInputChange, handleTitleInputChange, and handleDescriptionInputChange each update internal state values, in response to user changes on the form.

The code for each of these handlers is short, simple, and reasonably self-explanatory. They’re common for any LWC that handles user input via a form. We’ll talk about how they’re used in the next section, but we’ll leave these few lines of implementation code for you to read through yourself.

## File Upload Handler Functions

The handleUploadClick and createContentDocumentLink functions together perform all of the work to upload a file to Salesforce, and link that file to an associated record. Both functions are defined as asynchronous using the async keyword.

handleUploadClick handles the user interface event (clicking the **Upload** button), and also creates the file upload. createContentDocumentLink is a utility function that creates the relationship between the file upload and the “owning” record. These functions are fairly different in how they work, so they’re described separately.

handleUploadClick is called when the user clicks the **Upload** button, which can only happen after they select a local file to be uploaded. It nevertheless begins by checking for a couple of situations where the upload can’t succeed:

-   If an upload is already in progress, don’t start a new one.
-   If there’s no actual file to upload, don’t try to upload a nonexistent file.

The user interface state *should* prevent these situations by disabling the **Upload** button when either of those conditions are true. However, a well-written function verifies its inputs. These checks ensure that you don’t cause an error if these important assumptions aren’t correct.

The actual upload processing takes place within a try block because all data mutations have the opportunity to fail, especially when you’re allowing for them to occur while offline. The first part of uploading a file is creating a file upload with a call to the new API function.

```

```

This one call creates two related records. One record is a ContentDocument representing the file, including the name and description. The second is a related ContentVersion record that holds the file data and represents the current version of the uploaded file.

This one call does a lot of work, including creating the relationship between the two records. While you can achieve the same end result using the createRecord adapter, you can do that only while online. Creating and preserving the relationship between the two isn’t possible using createRecord while offline, mostly due to the complexity of the representation of files in Salesforce. createContentDocumentAndVersion abstracts that complexity, making file uploads as simple as the preceding snippet, which is just one line of code, wrapped for readability.

createContentDocumentAndVersion creates a file upload, but it does *not* associate that uploaded file with the “owning” record for the record context (if any). After it completes the upload (notice the await keyword before the call), we verify that we have a record context (recordId). If so, call the createContentDocumentLink helper function to create that association, in the form of a ContentDocumentLink record.

If handleUploadClick is exotic for using a mobile only API function, createContentDocumentLink is boring, using createRecord, a staple of LWC code since the framework’s release.

```

```

This code is another one-liner when you unwrap it. The trick is knowing enough about the representation of files and their relationship to other object types in Salesforce. In this case, it’s knowing that ContentDocumentLink represents a relationship between an uploaded file and another record, and knowing which fields to stick the relevant record IDs into.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=mobile_offline)

#### Tip

ShareType: "V" might seem a bit mysterious, but it’s simple and not particularly relevant. It sets the sharing level to view-only. See [ContentDocumentLink](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlink.htm) in the Object Reference for the Salesforce Platform for details.

## Where’s the “Offline” Part?

You just finished looking at it. And it looks a lot like regular LWC code for an online-only mobile feature. The only thing new is the createContentDocumentAndVersion adapter. There’s nothing offline-specific about the code here—it works fine while you’re online, too. The offline details are behind the scenes. Follow [the LWC Offline guidelines for optimizing priming](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline.htm), and you’re good to go.

## Code Examples

```
<!-- fileUpload.html -->
<template>
    <h1>File Upload</h1>

    <!-- File selection controls. Always displayed.
         Set `accept="*/*"` to allow uploads of any type of file. -->
    <div>
        <lightning-input
                type="file"
                name="fileUploader"
                label="Select file to upload"
                multiple="false"
                accept="image/*"
                onchange={handleFilesInputChange}
            >
            </lightning-input>
        </div>

    <!-- If a file is selected, display additional input controls. -->
    <div if:true={fileName}>

        <!-- Show the filename (read-only) -->
        <p>Selected file:</p>
        <p>{fileName}</p>
        
        <!-- Form fields for upload details -->
        <div class="inputs">
            <lightning-input
                type="text"
                label="Title"
                value={titleValue}
                onchange={handleTitleInputChange}
            ></lightning-input>
            <lightning-input
                type="text"
                label="Description"
                value={descriptionValue}
                onchange={handleDescriptionInputChange}
            ></lightning-input>
        </div>

        <!-- Button to actually do the upload (enqueued as a draft) -->
        <button
            class="slds-button slds-button_brand slds-var-m-top_medium"
            disabled={uploadingFile}
            onclick={handleUploadClick}
        >
            <label>Upload</label>
        </button>
    </div>

    <!-- If there are errors, show them here -->
    <div if:true={errorMessage}>
        <lightning-card title="Error">
            <div class="card-body">{errorMessage}</div>
        </lightning-card>
    </div>
</template>
```

```
// fileUpload.js
import { LightningElement, api, track, wire } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import {
  createContentDocumentAndVersion,
  createRecord,
} from "lightning/uiRecordApi";
// Imports for forced-prime ObjectInfo metadata work-around
import { getObjectInfos } from "lightning/uiObjectInfoApi";
import CONTENT_DOCUMENT from "@salesforce/schema/ContentDocument";
import CONTENT_VERSION from "@salesforce/schema/ContentVersion";
import CONTENT_DOCUMENT_LINK from "@salesforce/schema/ContentDocumentLink";

export default class FileUpload extends LightningElement {
  @api
  recordId;

  @track
  files = undefined;

  @track
  uploadingFile = false;

  @track
  titleValue = "";

  @track
  descriptionValue = "";

  @track
  errorMessage = "";

  // Object metadata, or "ObjectInfo", is required for creating records
  // while offline. Use the getObjectInfos adapter to "force-prime" the
  // necessary object metadata. This is a work-around for the static analyzer
  // not knowing enough about the file object schema.
  @wire(getObjectInfos, {
    objectApiNames: [ CONTENT_DOCUMENT, CONTENT_VERSION, CONTENT_DOCUMENT_LINK ],
  })
  objectMetadata;

  // Getter used for local-only processing. Not needed for offline caching.
  // eslint-disable-next-line @salesforce/lwc-graph-analyzer/no-getter-contains-more-than-return-statement
  get fileName() {
    // eslint-disable-next-line @salesforce/lwc-graph-analyzer/no-unsupported-member-variable-in-member-expression
    const file = this.files && this.files[0];
    if (file) {
      return file.name;
    }
    return undefined;
  }

  // Input handlers
  handleFilesInputChange(event) {
    this.files = event.detail.files;
    this.titleValue = this.fileName;
  }

  handleTitleInputChange(event) {
    this.titleValue = event.detail.value;
  }

  handleDescriptionInputChange(event) {
    this.descriptionValue = event.detail.value;
  }

  // Restore UI to default state
  resetInputs() {
    this.files = [];
    this.titleValue = "";
    this.descriptionValue = "";
    this.errorMessage = "";
  }

  // Handle uploading a file, initiated by user clicking Upload button
  async handleUploadClick() {
    // Make sure we're not already uploading something
    if (this.uploadingFile) {
      return;
    }

    // Make sure we have something to upload
    const file = this.files && this.files[0];
    if (!file) {
      return;
    }

    try {
      this.uploadingFile = true;

      // Create a ContentDocument and related ContentDocumentVersion for
      // the file, effectively uploading it
      const contentDocumentAndVersion =
        await createContentDocumentAndVersion({
          title: this.titleValue,
          description: this.descriptionValue,
          fileData: file,
        });
        console.log("ContentDocument and ContentDocumentVersion records created.");

      // If component is run in a record context (recordId is set), relate
      // the uploaded file to that record
      if (this.recordId) {
        const contentDocumentId = contentDocumentAndVersion.contentDocument.id;

        // Create a ContentDocumentLink (CDL) to associate the uploaded file
        // to the Files related list of the target recordId
        await this.createContentDocumentLink(this.recordId, contentDocumentId);
      }

      // Status and state updates
      console.log("File upload created and enqueued.");
      this.notifySuccess();
      this.resetInputs();
    } catch (error) {
      console.error(error);
      this.errorMessage = error;
    } finally {
      this.uploadingFile = false;
    }
  }

  // Create link between new file upload and target record
  async createContentDocumentLink(recordId, contentDocumentId) {
    await createRecord({
      apiName: "ContentDocumentLink",
      fields: {
        LinkedEntityId: recordId,
        ContentDocumentId: contentDocumentId,
        ShareType: "V",
      },
    });
    console.log("ContentDocumentLink record created.");
  }

  notifySuccess() {
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Upload Successful",
        message: "File enqueued for upload.",
        variant: "success",
      })
    );
  }
}
```

```
const contentDocumentAndVersion =
  await createContentDocumentAndVersion({
    title: this.titleValue,
    description: this.descriptionValue,
    fileData: file,
  });
```

```
async createContentDocumentLink(recordId, contentDocumentId) {
  await createRecord({
    apiName: "ContentDocumentLink",
    fields: {
      LinkedEntityId: recordId,
      ContentDocumentId: contentDocumentId,
      ShareType: "V",
    },
  });
```
