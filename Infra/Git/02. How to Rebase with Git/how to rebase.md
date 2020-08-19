How to rebase from master with Git

(1) Make sure to be in the feature branch

> git pull origin master --rebase

(2) If there are merge conflicts, you need to resolve it. Then, add the change (you do not need to do git commit).

> git add *

> git rebase --continue

(3) We need to force push because rebasing rewrite the history by creating a new tree.

> git push origin -f