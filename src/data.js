export const gitLessons = [
  {
    id: "intro",
    title: "Introduction & Installation",
    description: "Git is a Distributed Version Control System used to track changes in source code during software development.",
    sections: [
      {
        subtitle: "Install on Mac",
        commands: [
          { code: "brew install git", desc: "Install Git via Homebrew" },
          { code: "git --version", desc: "Check installed Git version" }
        ]
      },
      {
        subtitle: "Repositories",
        text: "Repositories are divided into two types: Local & Remote.",
        commands: [
          { code: "git init", desc: "Local Repository: Hosted directly on your local machine." },
          { code: "git remote add origin https://github.com/username/repo.git", desc: "Remote Repository: Hosted on the cloud (e.g., GitHub or GitLab)." }
        ]
      }
    ]
  },
  {
    id: "basic",
    title: "1. Basic (Local Sandbox)",
    sections: [
      {
        commands: [
          { code: "git init", desc: "Initialize a new, empty repository." },
          { code: "git add <filename>", desc: "Add a file's modifications to the staging area." },
          { code: "git commit -m \"Add note\"", desc: "Record the staged changes to the repository's history with a descriptive message." },
          { code: "git status", desc: "Check the current state of the working directory and the staging area." },
          { code: "git log", desc: "View the commit history." },
          { code: "git show", desc: "Show the specific changes and details of a particular commit." }
        ]
      }
    ]
  },
  {
    id: "branch",
    title: "2. Branch (Testing)",
    description: "We use branches to split off from the main line of development. This allows us to work on new features or tests safely without altering the original, stable codebase.",
    sections: [
      {
        subtitle: "Basic Branch Commands",
        commands: [
          { code: "git branch", desc: "List all local branches." },
          { code: "git branch <name-file>", desc: "Create a new branch." },
          { code: "git checkout <name-file> / git switch <name-file>", desc: "Switch your working directory to the specified branch." }
        ]
      },
      {
        subtitle: "Branch Execution Workflow: Success Path",
        commands: [
          { code: "git branch test-code\ngit switch test-code\ngit add <filename>\ngit commit -m \"add new feature\"\ngit switch main\ngit merge test-code\ngit branch -d test-code", desc: "Feature completed successfully." }
        ]
      },
      {
        subtitle: "Branch Execution Workflow: Error Path",
        commands: [
          { code: "git branch test-code\ngit switch test-code\ngit restore .\ngit restore <filename>\ngit switch main\ngit branch -D test-code", desc: "Experiment failed, discarding changes." }
        ]
      },
      {
        subtitle: "Merge & Delete Branch",
        commands: [
          { code: "git checkout main\ngit merge new-file", desc: "Merges the specified branch into main" },
          { code: "git branch -d new-file", desc: "Delete Branch safely" }
        ]
      }
    ]
  },
  {
    id: "remote",
    title: "3. Remote Repositories",
    sections: [
      {
        commands: [
          { code: "git remote add origin \"URL\".git", desc: "Remote: Make a connection from GitHub to your local project folder." },
          { code: "git push -u origin main", desc: "Pushing code from your local machine up to the cloud. Only pushes added files. Commit first!" },
          { code: "git pull origin main", desc: "Takes code from the cloud and puts it into your local machine. (git fetch + git merge)" },
          { code: "git fetch origin", desc: "View and download updates from the remote repository, but it does not merge them into your working folder yet." }
        ]
      }
    ]
  },
  {
    id: "delete",
    title: "4. Undoing Changes",
    sections: [
      {
        subtitle: "Restore Files",
        commands: [
          { code: "git checkout -- file.txt\ngit restore file.txt", desc: "Both commands discard uncommitted changes in a specific file. `git restore .` takes back all files in the current directory that have been modified but not committed." }
        ]
      },
      {
        subtitle: "Undo git add (Unstage files)",
        commands: [
          { code: "git reset HEAD <filename>", desc: "If you accidentally staged a file using git add but do not want to commit it yet, you can remove it from the staging area." }
        ]
      },
      {
        subtitle: "Resetting Commits (Soft/Hard)",
        commands: [
          { code: "git reset --soft HEAD~1", desc: "Undoes the last commit but keeps your code changes in the staging area." },
          { code: "git reset --hard HEAD~1", desc: "Undoes the last commit AND deletes all associated code changes. (Use with extreme caution!)" }
        ]
      }
    ]
  },
  {
    id: "local-github",
    title: "5. Local Repository to GitHub",
    sections: [
      {
        text: "Establish a connection from your local machine to the remote GitHub repository before pushing code.",
        commands: [
          { code: "git remote add origin \"<URL>.git\"\ngit push -u origin main", desc: "Connect local repo to remote origin and push changes." }
        ]
      }
    ]
  },
  {
    id: "config",
    title: "6. Git Configuration",
    description: "Configuration is used to define your identity credentials so collaborators know exactly who authored specific code changes.",
    sections: [
      {
        subtitle: "Credentials",
        commands: [
          { code: "git config --global user.name \"Your Name\"", desc: "Set username" },
          { code: "git config --global user.email \"your.email@example.com\"", desc: "Set email" },
          { code: "git config --global --list", desc: "Verify defined configuration variables" }
        ]
      },
      {
        subtitle: "Setting Code Editors",
        commands: [
          { code: "git config --global core.editor \"nano\"", desc: "Nano (Easier than Vim - Common on Mac/Linux)" },
          { code: "git config --global core.editor \"subl -n -w\"", desc: "Sublime Text (Faster and visual)" },
          { code: "git config --global core.editor \"notepad++ -multiInst -nosession\"", desc: "Notepad++ (Common on Windows)" },
          { code: "git config --global core.editor \"vim\"", desc: "Vim (Advanced terminal editor)" },
          { code: "git config --global core.editor \"code --wait\"", desc: "VS Code" }
        ]
      }
    ]
  },
  {
    id: "ssh",
    title: "7. Git SSH",
    description: "SSH provides a secure cryptographic connection, setting verification permissions for who can pull and push code to the project.",
    sections: [
      {
        commands: [
          { code: "ssh-keygen -t ed25519 -C \"your.email@example.com\"", desc: "Generate Key (Press Enter 3 times to accept defaults)" },
          { code: "pbcopy < ~/.ssh/id_ed25519.pub", desc: "Copy Key (Mac Terminal command)" },
          { code: "cat ~/.ssh/id_ed25519.pub", desc: "Alternatively, view and copy manually. Then Add to GitHub: Settings -> SSH and GPG keys -> New SSH key -> Paste." },
          { code: "ssh -T git@github.com", desc: "Verify Setup" }
        ]
      }
    ]
  },
  {
    id: "tracking",
    title: "8. Team Tracking & History Inspection",
    sections: [
      {
        subtitle: "Inspect & Track",
        commands: [
          { code: "git diff", desc: "Shows the exact line-by-line file differences that are not yet staged." },
          { code: "git blame <filename>", desc: "Shows the revision hash and author details for who last modified every single line in a file." }
        ]
      },
      {
        subtitle: "Time Travel (Checking Out Commits)",
        commands: [
          { code: "git log --oneline", desc: "View the commit history in a condensed, single-line format to easily find the commit ID hash." },
          { code: "git checkout <commit-id>", desc: "Temporarily go back in time to view the exact state of the project at that specific commit." },
          { code: "git switch main", desc: "Return to the present state on your main branch." }
        ]
      }
    ]
  },
  {
    id: "advanced",
    title: "9. Time Travel & Stashing (Advanced)",
    description: "(Deeply checked to ensure precise logic definitions)",
    sections: [
      {
        commands: [
          { code: "git stash", desc: "Safely hides (stashes) your modified, uncommitted code so you can temporarily work on a different branch or task without losing data." },
          { code: "git stash pop", desc: "Applies your temporarily stashed code back into your working directory and removes it from the stash memory." },
          { code: "git reset --hard HEAD", desc: "Completely discards all new, uncommitted changes in your working directory, forcefully reverting files to the state of the last commit." },
          { code: "git branch -d <name-branch>", desc: "Safely deletes a branch. Git will block this action if the branch has unmerged changes to protect your data." },
          { code: "git branch -D <name-branch>", desc: "Forcefully deletes a branch, completely overriding safety checks regardless of whether it has been merged." },
          { code: "git reset <commit-id>", desc: "Moves the branch pointer backward to an older commit ID, erasing the history of all commits that happened after it." },
          { code: "git revert <commit-id>", desc: "Goes backward by generating a brand new commit that strictly undoes the changes introduced by a previous commit, perfectly preserving the overall project history without deleting data." }
        ]
      }
    ]
  }
];