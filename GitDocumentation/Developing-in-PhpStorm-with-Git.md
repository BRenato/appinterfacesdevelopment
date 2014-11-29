The PhpStorm environment development can be downloaded here : http://www.jetbrains.com/phpstorm/download/index.html, this is a free 30-day trial. 

## Why use PhpStorm ?

With PhpStorm for Php development you will be able to use Composer dependency manager for PHP, PhpStorm is able to manage namescape and it has a code (Re)arranger to control the structure of your existing and generated code. PhpStorm is able to show you in our the Joomla classes which are deprecated by crossing the text. 

## How to start?

Just import these settings by doing File, Import settings to have an environment correctly configured :

Open the settings menu by using the icon on the PhpStorm toolbar, there go to Version Control and select Github.com enter here your username and password and click on Test to see if the connexion is working. You can apply the changes.

Then import Joomla-cms and Joomla-platform located in github, by going into VCS → Checkout then do version control → Github, copy the URL of the repository here.

Then import Kunena-forum project or your own fork located in GitHub, by following the same process that above. 

## Import Joomla project and Joomla! platform

You need to import from Github the files from Joomla project and from Joomla! platfrom to make easier developpement to have autocomplete on classes and methods and so on.

In your Kunena project, select External libraries then do a right-click and choose Configure PHP Include paths. Then with the green cross add the directory for Joomla project and do the same for Joomla! platfrom. 

## Basic configuration

`Open File > Settings > Editor
In the field Other, select in the drop-down All
Check the box below Ensure line feed at file on save`

`Open File > Settings > Editor > Appareance
Check the boxes Show line numbers and Show whitespaces`

`Open File > Settings > Code Style > PHP
In the first tab Tabs and Indents check the box Use tab character`

`Follow this guide to configure PhpStorm to support Joomla! coding standards: http://docs.joomla.org/Joomla_CodeSniffer#PHPStorm`

`Set global file ignoring :
Enter into git bash : config --global core.excludesfile ~/.gitignore_global
This will basically build under your [core] key under ~/.gitconfig the following entry: 
[core]
 excludesfile = /Users/cordoval/.gitignore_global
Now you can go into .gitignore_global and add the annoying .idea and netbeans folders if you want.
You can add these :
# OS generated files #
######################
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db 
.idea`

## Create symbolic links between Kunena working directory in PhpStorm and your Joomla! installation

To make developpement easier and try the changed direclty in the Joomla! installation, you can put the PhpStorm working directory into there.

To do that, we provide two scripts one for linux system and other one for recent windows OS. Before executing the followings scripts just install Joomla! and a build of Kunena developpement of the same branch that one you are working.

These scripts can be found into https://github.com/Kunena/Kunena-Forum/tree/develop/scripts, for linux it's git-link.sh and for windows OS it's kunena_sym_links.bat.

These two scripts will just make a symbolic link between the files for your Kunena working directory into PhpStorm and with your Joomla! installation. The scripts will just ask you, to enter the path of your Kunena working directory into PhpStorm and the path of your Joomla! installation.

You need to relaunch the scripts to remove the symbolic links in order to install a kunena build. 

## How to work?

GitHub Repository changes over time and you need to keep your own fork or branches up to date. Usually the procedure is easy, but from time to time someone else may modify the same code you have been working with. If this happens, you need to resolve the conflicts between your code and the master.

On the Kunena Project, do a right-click and select Inspect Code..., PhpStorm will analyse your code during a couple a minutes and it will show all issues that you can fix in your project, these issues are put by categories.

You can see the current branch where you are working, by looking at the bottom of PhpStorm Window.

Check-list, before committing : 

1. Before committing, you need to check that you haven't a mistake, on the Kunena project do a right-click, select Git and Choose compare with latest revision. 
2. Make sure that your changes are against the latest revision, else you may have some conflicts. 
3. Test that your code works if you have made any changes to the code 
4. Put a commit message which isn't larger than 70 characters, so make a comment short and clear. 

To do a commit, right-click on the Kunena project, open Git dialog and go to Commit Directory..., on the bottom of commit changes window if you hover the commit button, you see three options, just select commit and push... 

## Using Ant with PhpStorm

PhpStorm hasn't support for Ant and there is no plugins to add Ant support, you need to configure manually Ant support in PhpStorm : 

1. Install Ant (e.g. with the binary distribution: http://ant.apache.org/bindownload.cgi) 
2. Extract the archive by example into C:\ant on windows OS 
3. Open File > Settings > External Tools 
4. Press the green plus to add a new tool 
5. Fill out the form 
1. Name: Ant (or a name that you will remember) 
2. Group: Leave empty for quicker selection or fill in whatever you like 
3. Under Options, only check the box "Open Console" 
4. Show in: Leave it as is 
7. Program: Link to the C:\ant\bin\ant.bat inside the Ant installation folder (or an equivalent file on non windows OS) 
8. Parameters: -f $FileName$ 
9. Working Directory: $FileDir$ 
10. Submit! 
6. Once the external tool is configured, rightclick the build/build.xml file and select the tool from the List (e.g. look for Ant or [GroupName] > Ant if you specified a group) 

## Joomla coding standards

You will find some docs how to configure your developpement environnement to support CodeSniffer stuffs, by example you have this one  : http://docs.joomla.org/Joomla_CodeSniffer#PHPStorm_2 

## Keeping Up Development

GitHub Repository changes over time and you need to keep your own fork or branches up to date. Usually the procedure is easy, but time to time someone else may modify the same code you have been working at. If this happens, you need to resolve the conflicts between your code and the master. 

## Tips and Tricks

PhpStorm performs a spellchecking on all our code by default (variables namming...) but you can just ignore it.

Sometimes (not very often) it might happen, that the code completion doesn't work. In this case, you can tell to PhpStorm the classname to use by adding a PhpDoc comment.

You can add too the jQuery and Mootols docs to PhpStorm, like that when you edit a javscript file and hover a function which is on Mootools or jQuery framework, PhpStorm will show for you the doc associated. To do that, open Settings dialog (File/Settings) and navigate to “JavaScript Libraries” panel. Add a new library or select an existing one. You can follow too the official doc : http://www.jetbrains.com/phpstorm/webhelp/configuring-javascript-libraries.html