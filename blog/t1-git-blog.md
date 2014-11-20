    11-20-2014

      Git and Github

On my first week at DevbootCamp ,along with other topics, I have learned about Git, one of the most popular Version Control systems available, and Github , Git repository hosting service.
Here I am going to cover what are Git and Github, what are the benfits of using them, and how does Git keep track of the changes.
First thing to point out, is that Git and Github are not same. Git is a software on a local computer that keeps track of the changes that developers make to their projects, while Github is an online environment where people store their code ( with al the changes), collaborate  and so on.
As Version Control system, Git also   stores information about time when every modification (commit)  was made. Basicaly, it keeps every version of the project starting from day 1 of its (project's ) existence till the last commit made. This way developers can see how their work was evolved, and also come back to any of the previous versions of the project,and start working from there again.
Git tracks changes  through commits. Every time developer modifies file/program, he tells Git about it using commands on Terminal :
-git add filename (this command brings change to Git's attention)
-git commit -m"message" (this command makes "snapshot" of new, modified version of a project)
 While Git stores all the history of the project locally, Github allows to access this history from any computer. More than that, it also makes possible for multiple developers to collaborate on same project without worrying that their changes will interlap with one another.



