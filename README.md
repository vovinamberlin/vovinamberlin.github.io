# USAGE

## Writing post

A post use `post` layout, post can contain any further images in the post. The post layout should be made `center` aligned, and its content follows.

A post can contain:
- an `img` value, which will show only an image
- a link to `youtube` (embed value) will show only a youtube embeded
- a `imgs` value, will show a carousel of images
- a `youtubes` value will show a carousel of youtubes

`youtubes`:
  - `url`: the embed url of Youtube
    `title`: the title in the caption

category:
- `home`: post will appear only on homepage
- `blog`: post will appear only in the blog page
- `event`: post will appear only in the event page

use excerpt_separator to extract the excerpt to show in listings page:
- <!--more-->

lang:
- `de`: post will appear only in German page
- `en`: post will appear only in English page
- `vi`: post will appear only in Vietnamese page

ref:
- `value`: a ref should be the same in different languages, so that we have a way to let Search Engine or Translation Service to know which page / post has a translation

permalink:
- use its value to uniquely identify a post, it should be different in different languages


# TODO

- Update post for Vovinam Berlin club (done, missing German translation)

- Work with ref for Google Translation service to know the translation of the article.

- Create a new /events page

- Write posts for Ronneburg event

- Write blogs at /blog

- Have new /theories and /techniques page (define new structure to store data)

- Add button to share post to social networks

- Add social commenting system

- RSS ?

-


# Landing Page Jekyll theme

Jekyll theme based on [landing-page bootstrap theme ](http://startbootstrap.com/templates/landing-page/)

## How to use
 - Place a image in `/img/services/`
 - Create posts to display your services. Use the follow as an example:

```txt
---
layout: home
img: ipad.png
category: Services
title: The service title
---
The description of this service
```

## Demo
View this jekyll theme in action [here](https://swcool.github.io/landing-page-theme)

## Screenshot
![screenshot](https://raw.githubusercontent.com/swcool/landing-page-theme/master/img/screenshot.png)

===

For more Jekyll details, read [documentation](http://jekyllrb.com/).
This Jekyll theme used [Freelancer Jekyll theme](https://github.com/jeromelachaud/freelancer-theme/) as reference.

## License
The contents of this repository are licensed under the [Apache
2.0](http://www.apache.org/licenses/LICENSE-2.0.html).

## Version
1.0.1
