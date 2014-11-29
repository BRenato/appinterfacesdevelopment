## High level git overview

Check out this high-level overview of git and how it is different from the likes of svn:

http://files.zend.com/help/Zend-Studio/git_and_github.htm

## Commands

If you want to make a patch from one commit (K1.6 -> K2.0), you can do it like this:

    git show 1990134b2d599a9c879d > ../joomla17.patch

Tagging a release:

    git tag -a 3.0.3 -m 'Kunena 3.0.3 Release'
    git push upstream --tags

Finding out all changes between two releases:

    git fetch --tags upstream
    git log --no-merges --oneline 2.0.3..2.0.4 >../changelog-2.0.4.txt

## Scripts

Here is a tiny little helper that was used to convert various sub-projects from our prior svn trunk structure into git:

https://github.com/fxstein/migration/blob/master/clone.sh

