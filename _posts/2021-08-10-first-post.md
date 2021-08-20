---
layout: post
title:  "First Post + Goals for the website"
date:   2021-08-10 22:55:31 -0700
categories: meta blogging learning
author: Roy Rinberg
---

This is my first post on this personal site. I'm a big proponent of [learning in public] and I intend to use this site as a platform for fleshing out my own ideas. At the same time, it might give you an idea of what it's like inside my brain (if you happen to be curious).


##  Goals:
- [x] Have a [Jekyll blog](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll).
- [x] Link my [CV + SWE resume](https://royrinberg.com/professional/#interviewing-and-recruiting).
- [x] Have [royrin.github.io](royrin.github.io) hosted on [www.royrinberg.com](www.royrinberg.com).
- [x] Set up my jekyll blog to also point to posts on medium - following this structure : [link](https://jonbake.com/blog/2019/08/02/creating-a-hybrid-jekyll-medium-blog.html)
- [x] Add ability for [comments](https://utteranc.es/).
- [x] Add a sidebar on each post that will show the table of contents, like this [site](https://os.phil-opp.com/freestanding-rust-binary/)
- [ ] Potentially add goodreads widget: [link](https://www.goodreads.com/user/edit?tab=widgets)
- [ ] Consider making this app a [PWA](https://fredrickb.com/2019/07/25/turning-jekyll-site-into-a-progressive-web-app/).
 
[learning in public]:  https://www.swyx.io/learn-in-public/ 

## Blog Goals
- [ ] Start airing out my Effective Altruism ideas, even if no one reads them, I can later link to them.
- [ ] Write a short post on 1. a summary of my time at Ouster 2. what am I trying to get out from Columbia


## Code and formatting

### Comments
I looked into a few solutions for adding comments, and ultimately settled on [utterance](https://utteranc.es/), which uses Github issues to allow people to comment. It's free and open-source, the only drawback is that people need to have a github account to comment. I doubt I'll have too many comments (or any). [Disqus](https://disqus.com/) is an alternative, but I didn't see good free options. 

### Table-of-Contents
Playing around with the table of contents sidebar actually took a reasonable bit of time. 

Ultimately I found 2 workable solutions, 
1.  through this repo: [https://github.com/jwrr/minima-sidebar](https://github.com/jwrr/minima-sidebar) (see [here](https://jwrr.github.io/minima-sidebar/#why)), Which uses css, and can manually insert a table-of-contents to an individual post.
    ```
    <nav class="toc" style = "margin-bottom: 0;" markdown="1">
    **Table of Contents**

    * TOC
    {:toc}
    </nav>
    ```

2. And the other through this repo : [https://github.com/allejo/jekyll-toc](https://github.com/allejo/jekyll-toc). Which uses a nav tag in the html in `post.html` to automatically generate a table-of-contents for all posts, by pointing to `table_of_contents.html` 
    ```
    <nav class="toc" markdown="1">
    <b>Table of Contents</b>
    { % include table_of_contents.html html=content %} ### with no space between "{" and "%".
    </nav>
    ```