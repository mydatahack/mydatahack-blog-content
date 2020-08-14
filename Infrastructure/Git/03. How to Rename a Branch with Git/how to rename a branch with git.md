How to rename a branch with git in both local and remote repo

Renaming a local branch is easy by using git branch command option -m. For the remote branch, we can create a new remote branch by pushing the renamed branch and then deleting the old branch.

(1) checkout

> git checkout old-branch-name

(2) rename

> git branch -m new-branch-name

(3) push the new branch

> git push origin -u new-branch-name

(4) delete the old one

> git push origin --delete old-branch-name
