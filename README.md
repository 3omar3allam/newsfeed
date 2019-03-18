# Newsfeed

**running on [github pages](https://3omar3allam.github.io/newsfeed).**

## What's new?
* Each part is in a separate component for encapsulation and maintainability.
* Lazy-loading videos when click to reduce data usage and avoid memory leaks.

## Assumptions:
* Posts can be either text or image or video and cannot have mixed contents.
* Since the format of [posts.json](src/assets/posts.json) was not given, I assumed a format as if that's the way it's stored in database.
* Photos and videos sources are external (videos are iframes).
* Neglected forms to add a new post or comment since json files are not dynamically appendable.
