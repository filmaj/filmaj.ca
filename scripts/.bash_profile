export PATH=$PATH:/Applications/Xcode.app/Contents/Developer/usr/bin:~/SDKs/android-sdk-macosx/tools:~/SDKs/android-sdk-macosx/platform-tools:~/SDKs/BB10-WebWorks-1.0.4.11/dependencies/tools/bin
export PM_APP=/Applications/PackageMaker.app
export XC_APP=/Applications/Xcode.app

source ~/src/filmaj.github.com/scripts/git-completion.bash

alias ls='ls -aGl'
alias static='node ~/src/filmaj.github.com/scripts/static_server.js'

# {{{
# Node Completion - Auto-generated, do not touch.
shopt -s progcomp
for f in $(command ls ~/.node-completion); do
  f="$HOME/.node-completion/$f"
  test -f "$f" && . "$f"
done
# }}}
