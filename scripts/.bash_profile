export PATH=$PATH:/Applications/Xcode.app/Contents/Developer/usr/bin:~/sdks/android/sdk/tools:~/sdks/android/sdk/platform-tools:~/src/depot_tools:~/src/chromedriver:/Users/filmaj/bin/apache-ant-1.9.2/bin:/Users/filmaj/bin/apache-maven-3.1.1/bin
export ANDROID_HOME="$HOME/sdks/android/sdk"
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_25.jdk/Contents/Home
export PYTHONPATH=/Users/filmaj/src/sauce/lib:/Users/filmaj/src/sauce/cloud:$PYTHONPATH

source ~/src/filmaj.github.com/scripts/git-completion.bash

alias ll='ls -aGl'
alias static='node ~/src/filmaj.github.com/scripts/static_server.js'
alias ios-sim='open /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications/iPhone\ Simulator.app'

# startup virtualenv-burrito
if [ -f $HOME/.venvburrito/startup.sh ]; then
    . $HOME/.venvburrito/startup.sh
fi

# MacPorts Installer addition on 2013-09-05_at_12:28:42: adding an appropriate PATH variable for use with MacPorts.
export PATH=/opt/local/bin:/opt/local/sbin:$PATH
# Finished adapting your PATH environment variable for use with MacPorts.


# {{{
# Node Completion - Auto-generated, do not touch.
shopt -s progcomp
for f in $(command ls ~/.node-completion); do
  f="$HOME/.node-completion/$f"
  test -f "$f" && . "$f"
done
# }}}

##
# Your previous /Users/filmaj/.bash_profile file was backed up as /Users/filmaj/.bash_profile.macports-saved_2013-11-21_at_23:57:05
##

# MacPorts Installer addition on 2013-11-21_at_23:57:05: adding an appropriate PATH variable for use with MacPorts.
export PATH=/opt/local/bin:/opt/local/sbin:$PATH
# Finished adapting your PATH environment variable for use with MacPorts.

