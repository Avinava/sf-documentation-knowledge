---
title: "Video Info"
domain: bi-dev-guide-rest
topic: video-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.739Z
estimatedTokens: 180
keywords: [Video, Info, describing, particular]
---

# Video Info

> Information for describing a particular video.

# Video Info

Information for describing a particular video.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The platform-specific ID of the video content. | Small, 46.0 | 46.0 |
| label | String | The title of the video. | Small, 46.0 | 46.0 |
| link​Type | Connect​Template​Video​Link​Type​Enum | The video platform. Valid values are:VidyardYouTube | Small, 46.0 | 46.0 |
| purpose | Connect​Template​Video​Purpose​Enum | The video purpose. Valid values are:OnboardingWalkthrough | Small, 46.0 | 46.0 |
| show​Playlist | Boolean | Indicates whether the video platform displays a playlist or not. | Small, 46.0 | 46.0 |
