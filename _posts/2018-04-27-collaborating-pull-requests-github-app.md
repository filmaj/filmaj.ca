---
layout: default
title: Collaborating with Pull Requests Using the Github Desktop App
---
# Collaborating with Pull Requests Using the Github Desktop App

I'm lucky enough to have the privilege of working with a cross-disciplinary team.
The ability to lean on each others' varied experiences and expertise is an incredible
asset and feels empowering. It is also super fun and rewarding to be able to learn
new things from your peers every day. I feel that because of this diversity our
team is able to tackle challenges way above my own personal comfort level because
I know I have squad of badasses by my side. In this sense, we truly are more than
just the sum of each of our individual abilities.

As a developer, having proficiency with [revision control systems](https://www.atlassian.com/git/tutorials/what-is-version-control) -
a way to keep track of changes to a project over time - is a must. I feel comfortable
leaning on the tools and processes that have come out of decades of evolution of
revision control systems, and there is plenty to be learned from this space, especially
if this is new to you.

With the positives of a multi-disciplinary team, though, come challenges. One of
these is the plethora of processes, tools and services that each team member has
familiarity with - or not. Collaborating on content and source code is a daily
task for our team. In today's [Github](https://github.com) age, leveraging the
[pull request](https://help.github.com/articles/about-pull-requests/) is an industry-
standard way of iterating on, reviewing and evolving source code - but its use
shouldn't be limited to just software development. In this post I try to present
an accessible pull request-based change workflow using the [GitHub Desktop App](https://desktop.github.com),
and ideally one that doesn't require knowledge of programmer tools like the command-line
interface (terminal) or `git`.

# What is a Pull Request?

Distilled down, a [pull request](https://help.github.com/articles/about-pull-requests/)
is a specially-formatted way of asking the owners of a project to review and possibly
accept changes you want to make to that project. A pull request is both a set of
information as well as a medium of conversation, the latter of which, in my opinion,
is the true power and beauty of this process.

## Pull Request Baseline

Initially, a pull request is composed of two things:

1. The changes you want the project to review and accept. You can think of these
as one or more tweaks (or, in codespeak, _commits_). This could be a simple typo
fix, a complex new software feature written in a programming language, changes in
structure to documentation, or even a adding a funny gif.
2. On top of the changes themselves, the pull request author may describe their
changes. This is your opportunity to sell your changes, list the pros and cons,
and provide any additional context around your changes that can help the project
owners sift through it all.

Over time, though, a pull request evolves.

## Pull Request Conversation

In my opinion, the best part about presenting your changes as a pull request is
the conversation that the pull request format enables. Beyond the baseline, Github's
pull request medium allows the project owners, contributors and the pull request
author to have a conversation around the changes. Contributors to the project can
[review the changes](https://github.com/features/code-review) and comment on them.
Reviewers of the pull request can accompany their comments with an Comment / Approve
/ Request changes tag:

![Github pull request review form]({{ "/img/posts/collaborating-pull-requests-github-app/review-box.png" | absolute_url }})

This gives an immediate sense of how the reviewers feel about the changes (like
a green/yellow/red light 🚥).

Comments can be about the entire set of changes, but you can also comment on very
specific parts of your changes - even as specific as commenting on a single line:

![Github pull request single line comment]({{ "/img/posts/collaborating-pull-requests-github-app/review-single-line.png" | absolute_url }})

This [commenting and reviewing system](https://github.com/features/code-review)
enables a rich conversation, back and forth, between the pull request author and
the project owners, contributors and reviewers. The result is a process that allows
for deep, collaborative introspection on changes, and enables teams to iterate on
changes, improving them, until every stakeholder involved is happy with the result.
At that point, usually a pull request is accepted and the changes land in the project
(in codespeak, this is called _merging_ - your pull request was _merged_).

The pull request can be used as more than just a reviewing system, too. It is a
great way to keep people on your team informed - it doesn't necessarily have to
be about reviews and approvals. It can just be a nice, more curated way of saying
"FYI, here's what I've been working on, maybe this interests you." If it does interest
your team members, great, they then have a medium in which to check the changes
out and get more involved if they want to, using the commenting and reviewing system
we just described.

# Creating a Pull Request with the GitHub Desktop App

So let's get to work! I'll put together a pull request for one of my team's projects:
an e-mail newsletter we send out company-wide every month. The changes I have in
mind are simple: I want to tweak the wording in the newsletter documentation in
order to clarify instructions on how to contribute to the newsletter.

## Updating the Project

First we need to ensure that the project we want to send a pull request to is up
to date. In the [Desktop App](https://desktop.github.com), you can do that by clicking
the "Fetch origin" button. This will download the most recent version of the project:

![Github App project fetching]({{ "/img/posts/collaborating-pull-requests-github-app/app-fetch.png" | absolute_url }})

## Packaging Your Changes

In order to present your changes to the project in the form of a pull request,
they must be encapsulated in a particular way. GitHub is built on top of `git`,
the command line (😱) program for managing project history and changes. Don't worry,
I'm not going to get too deep here. All you need to know is that we need to leverage
a `git` _branch_ to encapsulate our changes. A _branch_ is a series of changes.
Most projects determine a main branch (in `git` the default for this is called
the `master` branch). The branch terminology is apt because changes can evolve over
several branches over time - just like a tree. The idea is that you _branch_ from
a known-good state of the project and work on your changes solely within that branch.
This allows the project to continue to evolve as work on the branch comes together.
Eventually, when the branch is ready to land back into the project, the branch will
be _merged_ in - meaning, the branch becomes a permanent part of the project.

The pull request, then, becomes the process by which a team can review a set of
changes (located on a branch) before accepting them into the project (merging
them in).

Back to reality: after updating our project, we want to _branch_ from this latest
point in project history, and add our changes there. To do that, click on the
"Current branch" drop down, enter a name for your branch (`doc-updates` in my case),
and click the "Create New Branch" button:

![Github App branch creation]({{ "/img/posts/collaborating-pull-requests-github-app/app-create-branch.png" | absolute_url }})

This is done as a courtesy to the project owners and any potential reviewers of
your changes: you don't want to present your changes based on an old version of
the project - that would get confusing for the reviewers and lowers the chances
of your pull request being accepted. Recall that since your pull request is describing
one or more changes it's useful to ensure we're clear on what the baseline to these
differences are. The more recent this baseline is, the more up to date and relevant
your changes are, the easier it is to review them, and the higher the chance your
changes will get accepted.

## Making Your Changes

![Github App branch created]({{ "/img/posts/collaborating-pull-requests-github-app/app-branch-created.png" | absolute_url }})

Cool, now we have a branch ready to house our changes. Note how the [Desktop App](https://desktop.github.com)
changed to reflect that: the "Current branch" changed and the button on the
right changed. This button hints as to what we'll do in the near future: publish
our changes! First thing's first, though, let's make our changes. In this case,
I just want to fix up some documentation, so I opened my favourite text editor and
went ahead and made the changes.

When I flip back to the [Desktop App](https://desktop.github.com), the changes I made are now summarized:

![Github App summary of changes]({{ "/img/posts/collaborating-pull-requests-github-app/app-change-summary.png" | absolute_url }})

Neat, the App shows off the differences, nicely highlighted in green (what's new,
or got added) and red (what changed, or got removed). The last step in preparing
our branch is to _commit_ our changes. Each _commit_ (think "small change") should
be annotated with at least a short summary, but larger changes may warrant a longer
description. Let's fill out the form in the bottom-left of the [GitHub Desktop App](https://desktop.github.com)
to create our commit:

![Github App commit form]({{ "/img/posts/collaborating-pull-requests-github-app/app-commit-box.png" | absolute_url }})

(Side note: I am a huge fan of [using emoji in commit summaries](https://gitmoji.carloscuesta.me/))

After clicking the "Commit" button, your commit will be listed at the bottom of the [App](https://desktop.github.com).

## Publishing Your Changes and Issuing a Pull Request

We're almost there! Next, we need to publish our new branch containing our changes.
As I mentioned earlier, we'll want to click the "Publish" button that appeared when
we created our new `doc-updates` branch. Once published, from the top Branch menu,
select "Create Pull Request":

![Github App create pull request]({{ "/img/posts/collaborating-pull-requests-github-app/app-create-pull-request.png" | absolute_url }})

This will now pop you over into your browser, and it should look something like this:

![Github open pull request]({{ "/img/posts/collaborating-pull-requests-github-app/github-open-pull-request.png" | absolute_url }})

As I mentioned earlier, a pull request is more than just the set of changes you
made: it is also a more curated way of presenting your changes. In this final step,
we're given the opportunity to provide a title and description of the changes, as
well as reasoning, context, concerns, future TODOs - anything, really, that you
want to communicate along with your changes. Since the changes I put together here
are pretty small, I don't have to go too deep (but it's always fun to include a
funny picture to lighten the mood up 🙃):

![Github finish pull request]({{ "/img/posts/collaborating-pull-requests-github-app/github-finish-pull-request.png" | absolute_url }})

Note that how, on the right side, [you can ask for specific reviewers to be pinged for a review](https://blog.github.com/2016-12-07-introducing-review-requests/)
(and Github will suggest some based on prior project history and which files you're
changing), as well as assign the pull request to specific people, labels, milestones
or projects.

Once you're happy with the pull request title and summary, hit that green button
to submit your pull request! It should look something like this:

![Github pull request on the Github site]({{ "/img/posts/collaborating-pull-requests-github-app/github-pr-ready.png" | absolute_url }})

The final pull request view reads like a timeline, in chronological order, top-to-bottom.
The most recent activity will be displayed at the bottom of the pull request. This
is helpful to visualize the evolution of the pull request - put differently, how
the pull request conversation unfolded. As reviewers comment on your pull request,
they will show up near the bottom.

# Updating Your Pull Request

Issuing a pull request is just the start, though. What to do once you get some
reviews on it and you need to make more changes to address concerns brought up
during review? Not to worry, it's essentially repeating the _committing_ process
we went through initially, adding more changes to the same branch, which the pull
request you just issued is based off of.

For this pull request I started for our newsletter project, I noticed that only
one bullet point in the contributor documentation didn't have a period at the
end. I like consistency, so I'm going to add a period to the end of the bullet point,
bringing it in line with the rest of the documentation. It isn't much, but it'll
necessitate me updating my branch (and thus, automatically by way of Github, pull
request). To start, I'll go ahead and re-open my text editor and make the change.
When I flip back to the [Desktop App](https://desktop.github.com), it has detected
that I made some changes and helpfully summarized them for me again:

![Github App more changes ready to be committed]({{ "/img/posts/collaborating-pull-requests-github-app/app-second-commit.png" | absolute_url }})

Just like before, I'll use the box in the bottom-left to commit these new changes:

![Github App commit form for additional changes]({{ "/img/posts/collaborating-pull-requests-github-app/app-commit-box-2.png" | absolute_url }})

After I've done that, note that the right-most button in the top bar changed:

![Github App push origin button]({{ "/img/posts/collaborating-pull-requests-github-app/app-push-origin.png" | absolute_url }})

Hit that button to push your changes up to GitHub. Because we're using the same
branch that we used for issuing our pull request, our pull request will automatically
be updated once we push the new commit up. If we flip back to our browser and refresh
the URL for our pull request, we'll see a new pull request "timeline" item showing
that we added another commit:

![Github new commit in the pull request]({{ "/img/posts/collaborating-pull-requests-github-app/github-new-commit.png" | absolute_url }})

That's it! You can rinse and repeat this process as much as you want, making as
many tweaks as you want, and your pull request will be kept up to date.

# Reviewing a Pull Request

What about reviewing an open pull request? This is done almost entirely in the
"Files Changed" tab of the pull request:

![Github pull request Files Changed tab]({{ "/img/posts/collaborating-pull-requests-github-app/github-files-changed.png" | absolute_url }})

This view will summarize, once again in red and green, all the changes in all the
files tracked in the project that are encapsulated in the pull request. There are
two key interactions reviewers can take to help propel the pull request conversation
forward.

## Line-Specific Comments

![Github pull request single line comment]({{ "/img/posts/collaborating-pull-requests-github-app/review-single-line.png" | absolute_url }})

If you hover over a specific line in the "Files Changed" tab, you should see a
little blue plus button pop up near the left side of the line. If you click this
button, you'll be provided with a text field where you can add a comment to that
specific line. Once you've written that up, you can choose to either submit it as
a single one-off comment not explicitly associated with a more holistic review of
the entire pull request, or add the comment as part of the start of your review.
I tend to always use the "Start a review" button here, especially if I have more
than one specific-line comment to add. If you click the "Start a review" button,
you should see something like this:

![Github pull request pending single line comment]({{ "/img/posts/collaborating-pull-requests-github-app/review-pending-line-comment.png" | absolute_url }})

Note that the comment is labeled as "Pending", as we have just _started_ our review,
but we haven't finished it. Also note that the green "Review changes" button in
the top-right now has a (1) badge. This badge reminds you how many pending specific-line
comments you have queued up as part of your review.

## Reviewing Changes

After adding all the line-specific comments you want, in order to land them into
the pull request conversation, you'll need to click the "Review changes" button:

![Github pull request review form]({{ "/img/posts/collaborating-pull-requests-github-app/review-box.png" | absolute_url }})

This form gives you one final opportunity to summarize all of your line-specific
comments and, as long as you are not the author of the pull request, also allows
you to choose a "mood" for your review. You can simply leave the comments as they
are, or you can tint them by selecting either the "Approve" or "Request changes"
button. In the pull request timeline, an approval would show up as a friendly green
check mark ✅, while a change request would be seen as a red X. You can treat these
as helpful little visual indicators summarizing your review. Here's what my review
looks like on the pull request timeline:

![Github pull request review submitted]({{ "/img/posts/collaborating-pull-requests-github-app/github-review-created.png" | absolute_url }})

You can also review changes without submitting any line-specific comments. You can
omit those and go straight to clicking the "Review changes" button, and keep your
review to just a comment (possibly annotated as an approval or a change request).

# Accepting Changes

Assuming the conversation in your pull request went well, we expect that your changes
will be accepted. This is done most simply using the big friendly green button at
the bottom of the pull request timeline view:

![Github merge pull request button]({{ "/img/posts/collaborating-pull-requests-github-app/github-merge.png" | absolute_url }})

# Conclusion

I hope this article was helpful and accessible to more pople wanting to learn to
collaborate on Github! The pull request model is a powerful conversational medium
and helps keep activity and decision making transparent. I have no doubt that industries
beyond tech can benefit from adopting this awesome feature. Happy collaborating!

Have any feedback for me? Tell me by yelling at me on social media [@filmaj](https://twitter.com/filmaj).
