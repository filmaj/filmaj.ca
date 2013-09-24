export PATH=$PATH:/Applications/Xcode.app/Contents/Developer/usr/bin:~/sdks/android/sdk/tools:~/sdks/android/sdk/platform-tools:~/src/depot_tools:~/src/chromedriver
export ANDROID_HOME=~/sdks/android/sdk
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_25.jdk/Contents/Home

source ~/src/filmaj.github.com/scripts/git-completion.bash

alias ls='ls -aGl'
alias static='node ~/src/filmaj.github.com/scripts/static_server.js'

# startup virtualenv-burrito
if [ -f $HOME/.venvburrito/startup.sh ]; then
    . $HOME/.venvburrito/startup.sh
fi

# MacPorts Installer addition on 2013-09-05_at_12:28:42: adding an appropriate PATH variable for use with MacPorts.
export PATH=/opt/local/bin:/opt/local/sbin:$PATH
# Finished adapting your PATH environment variable for use with MacPorts.

