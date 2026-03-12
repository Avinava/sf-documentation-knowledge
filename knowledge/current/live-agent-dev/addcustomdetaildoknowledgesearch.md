---
title: "addCustomDetail.doKnowledgeSearch"
domain: live-agent-dev
topic: addcustomdetaildoknowledgesearch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.191Z
estimatedTokens: 168
keywords: [addCustomDetail.doKnowledgeSearch, knowledgeSearch, automatically, search, Knowledge, articles, criteria, pre-chat, form, Usage]
---

# addCustomDetail.doKnowledgeSearch

> Use the knowledgeSearch method to automatically
  search for Knowledge articles based on criteria in a pre-chat form.

# addCustomDetail.doKnowledgeSearch

Use the knowledgeSearch method to automatically search for Knowledge articles based on criteria in a pre-chat form.

## Usage

Retrieves a custom detail value from a pre-chat form when a customer requests a chat with an agent. After an agent accepts the chat request, this value is used as a search keyword to find articles in the Knowledge One widget. The doKnowledgeSearch() method conducts a search by using the value parameter in the addCustomDetail method. Available in API version 31.0 and later.

## Syntax

liveagent.addCustomDetail(**String** label, **String** value, (optional) **Boolean** displayToAgent).doKnowledgeSearch()
