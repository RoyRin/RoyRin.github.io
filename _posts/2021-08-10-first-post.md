---
layout: post
title:  "First Post + Goals for the website"
date:   2021-08-10 22:55:31 -0700
categories: meta blogging learning
author: Roy Rinberg
---

This is my first post on this personal site. I'm a big proponent of [learning in public] and I intend to use this site as a platform for fleshing out my own ideas. At the same time, it might give you an idea of what it's like inside my brain (if you happen to be curious).


##  Goals:
- [x] Have a fully functioning Jekyll blog, with some images in it, and
- [x] link my CV + SWE resume 
- [x] have it hosted on www.royrinberg.com
- [x] Write a short post on 1. a summary of my time at Ouster 2. what am I trying to get out from Columbia
- [x] set up a joint medium + personal blog structure using Jekyll - following this structure : [link](https://jonbake.com/blog/2019/08/02/creating-a-hybrid-jekyll-medium-blog.html)
- [x] Add ability for comments
- [x] Add a sidebar on each post that will show the table of contents, like this [site](https://os.phil-opp.com/freestanding-rust-binary/)
- [ ] Potentially add goodreads widget: [link](https://www.goodreads.com/user/edit?tab=widgets)

 
[learning in public]:  https://www.swyx.io/learn-in-public/ 


## Code and formatting
I can manually add a table of contents using :
```
<nav class="toc" style = "margin-bottom: 0;" markdown="1">
**Table of Contents**

* TOC
{:toc}
</nav>
```

But for now, I set this up to be the default behaviour through the layouts/post.html
which points to `table_of_contents.html` using
```
<nav class="toc" markdown="1">
<b>Table of Contents</b>
{ % include table_of_contents.html html=content %} # with no space between "{" and "%".
</nav>
```