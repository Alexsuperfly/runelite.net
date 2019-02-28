(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{272:function(e,n){e.exports={title:"1.4.15 Release",description:"Run energy plugin, friend list counter, team cape plugin improvements and hop-to in chat",author:"Tomas",__content:'<p>Run energy plugin was added thanks to <a href="https://github.com/seandewar">@seandewar</a>. This plugin will show tooltip with\nyour current weight, how much run time you have remaining and how much time it will take until your run energy fully\nregens. Also it has optional setting for displaying remaining run seconds instead of run percentage in the run energy\nbar.</p>\n<p><img src="/img/blog/1.4.15-Release/runenergy1.png" alt="runenergy1"/>\n<img src="/img/blog/1.4.15-Release/runenergy2.png" alt="runenergy2"/></p>\n<p>Thanks to work of <a href="https://github.com/forsco">@forsco</a> and <a href="https://github.com/Adam-">@Adam-</a> friend and ignore list\ncounter has been added, that will simply show max amount and used amount of friends/ignored players in the respective\ninterfaces.</p>\n<p><img src="/img/blog/1.4.15-Release/friendlist.png" alt="friendlist"/></p>\n<p><a href="https://github.com/ItsSebas">@ItsSebas</a> improved team capes plugin interface to display team cape icons with counts\ninstead of text in panel. This new design should be more compact and less intrusive than old one (and also looks way\nbetter!).</p>\n<p><img src="/img/blog/1.4.15-Release/teamcapes.png" alt="teamcapes"/></p>\n<p>The world hopper plugin now has support for hopping to people in chat via right-click menu thanks to\n<a href="https://github.com/Retoxified">@Retoxified</a>:</p>\n<p><img src="/img/blog/1.4.15-Release/hopto.png" alt="hopto"/></p>\n<p>Loose railing shortcut near Tree Gnome Village highlighting has been added to agility plugin thanks to\n<a href="https://github.com/ItsSebas">@ItsSebas</a>:</p>\n<p><img src="/img/blog/1.4.15-Release/looserailing.png" alt="looserailing"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The idle notifier plugin has been significantly improved, now it should not throw false warnings while\nin combat or when doing activity that is using same animations as some of the animations that display\nidle warning</li>\n<li>Barrows kill count chat message will now properly update the !kc data</li>\n<li>Time tracking plugin now also has &quot;Special patches&quot; in the overview tab</li>\n<li>Teleblock timers are now removed on logout</li>\n<li>Corp plugin now has option to hide the damage overlay</li>\n<li>&quot;Pause all&quot; menu option has been added to XP tracker right-click menu</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Tomas</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 12 contributors this release!</p>\n<pre><code>Adam (9):\n      Fix friend and ignore widget id changes\n      http service: improve update detection logic\n      runelite-api: add method for getting number of friends\n      Add Ignore API\n      runelite-client: add friend list plugin\n      widget id: update bottom line stones widget ids\n      woodcutting plugin: fix npe rendering redwood trees if axe is null\n      Revert &quot;Merge pull request #4568 from deathbeam/proper-shutdown&quot;\n      Update sprite ids and overrides\n\nDannysPVM (1):\n      Add camera setters to Client.java and RSClient.java.\n\nKarolcz125 (1):\n      Add LMS to ignored type in WorldHopper (#5139)\n\nMax Weber (1):\n      Update Scripts to 2018-08-30-rev174\n\nMichael Goodwin (1):\n      Fix Hot/Cold Nardah Genie Cave location\n\nRetoxified (1):\n      Add Hop-To option in chat\n\nRobbe De Neve (2):\n      Add special patches to overview tab\n      Add pause all button to xp tracker (#5126)\n\nRon Young (2):\n      corp: hide damage overlay\n      Reduce world map icon sizes (#5086)\n\nRuneLite Cache-Code Autoupdater (3):\n      Update Item IDs to 2018-08-30-rev174\n      Update Object IDs to 2018-08-30-rev174\n      Update Widget IDs to 2018-08-30-rev174\n\nSean Dewar (1):\n      Add run energy plugin\n\nSebastiaan (2):\n      Add Tree Gnome Village loose railing shortcut (#5093)\n      Make teleblock timers disappear on logout/hop (#5090)\n\nSebastiaan Vanspauwen (1):\n      Teamcapes plugin: Teamcape image instead of text (#5107)\n\nTomas Slusny (10):\n      Add exports for GameEngine#shutDown\n      Properly shutdown everything on window close\n      Stop plugins on shutdown\n      Reset idle timers when player clicks in-game\n      Properly reset idle timers on logout and login\n      Make animation idle remember last animating ID\n      Make combat idle notifier use interacting changed\n      Add idle notifier plugin tests\n      Remove dupe PVP_HR entry in world hopper\n      Fix setting of barrows kc from chat\n</code></pre>'}}}]);
//# sourceMappingURL=51.e5dd50d6.chunk.js.map