going cross platform: phonegap + html5
35 minute talk
15 minute demo

intro
-----
who i am
before getting into technical stuff: a brief history of tools and technology

communication and the digitization of our lives
-----------------------------------------------
extending our perceived world with tools
* all about creating connections: with people, ideas
* history:
 * maps, books allowed perpetuating information
 * printing press: connections easier to form, accessibility++
 * telegraph, telephone made it real-time
then: computers, internet and the web
* precursor: memex. "Enlarged intimate supplement to one's memory."
* precursor: hypercard. easy. link stuff. animate stuff. basic scripting (HyperTalk). _free_. _hugely_ popular early on.
 * "It was not lost on Apple or its mainstream developers that the power HyperCard gave to people could cut into the sales of ordinary shrink wrapped products."
* internet tank
lead into the mobile future
* 1996: Nokia Communicator 9000. [image]. fucking beast. 8MB RAM,
   weighed 400 grams, 24 mHz CPU. Featured: Email, browsing, Serial
   Terminal (!!!), Contacts, Calendar, Calculator. Sound familiar?
* 16 years later, we are now connected _all the fucking time_
* additionally, our perception is extended beyond our five senses. Our tools and technology extend our memory, our perception, literally make us more intelligent ... (cont.)
* ... arguable (funny internet pic. 4chan? lolcats?)

vendor lock in, open tech
-------------------------
the web is a giant open API. fucking awesome.
what happens when we close it down? we create proprietary APIs
lock-in: lack of choice, implicitly tying your hands financially
* ironically, vendor lock-in + adobe exists. sadface
 * not to fear, though. related to Flash. we all know the route that is
   going.
* MSFT: "The Windows API is so broad, so deep, and so funcitonal that
  most software vendors would be crazy not to use it. And it is so
  deeply embedded in the source code of many Windows apps that there is
  a huge switching cost to using a different OS instead." -Aaron Contorer, Feb. 21, 1997, internal Microsoft memo
  drafted for Bill Gates
* Apple: remember early iPhone SDK? Devs had to agree to an NDA that
  forbade them from discussing the content of the APIs!! WTF! lock-in
  via censorship. luckily was abandoned in Oct. 2008.
battle this with openneess
open tech, open web
* web as a platform
 * consider: gopher vs. www
  * U of Minnesota charging license fees for gopher implementation
  * CERN's Tim Berners-Lee advocated for www being open and free
  * look who won. the web vs. native debate is silly. native's cool. web will win. ;)
  * my fear is people willingly adopting the licensed walled garden without a second thought
* HTML5
 * a lot of sweet shit is coming down the pipeline
 * device apis will take the web to the next level. web 3.0? 4.0? which revision we at now? did we skip straight to 5.0 with html5?

web-based sdks
--------------
companies and manufacturers starting to listen
* blackberry webworks
* windows 8
* tizen
* b2g
webrtc, TODO: investigate

phonegap ftw
------------
nitobi, no, adobe phonegap
apache cordova
usual shpiel: 6 platforms. HTML, CSS, JS.
if your product/brand/business was built on the web, and app stores are an extension, not core to your strategy, then this approach makes sense
not without its limitations
* in no way shape or form does this allow you to not play by the platform rules
* run once, _debug_ everywhere
 * hell, hypercard didn't ship a debugger til 2.0 (trollface)
* web is good at a lot of shit right now, but not all
 * 3d graphics (but webgl coming and runs great on new BlackBerries, so who knows)
* "stuck" in the phonegap api.. sorta
plugins!

demo
----
simple app, consuming sensors (TODO: investigate dom from w3c hack project)
deploy to android device and ios simulator
phonegap-build the shit out of it
