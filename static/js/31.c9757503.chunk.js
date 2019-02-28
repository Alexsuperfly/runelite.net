(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{252:function(e,n){e.exports={title:"1.3.8 Release",description:"World map clue overlay, friend notes, hot-cold helper, and special attack counter",author:"Adam",__content:'<p>Clue scroll locations are now shown on the in-game world map. Thanks to\n<a href="https://github.com/MESLewis">@MESLewis</a> for his work on this over the past\nweeks.</p>\n<p><img src="/img/blog/1.3.8-Release/cluemap.png" alt="cluemap"/></p>\n<p>A friend notes plugin has been added which lets you associate notes to friends\non your friends list.</p>\n<p><img src="/img/blog/1.3.8-Release/friendnotes.png" alt="friendnotes"/></p>\n<p><a href="https://github.com/Eadgars-Ruse">@Eadgars-Ruse</a> added a hot-cold helper to the\nclue plugin which helps you narrow down which location the clue is at each time\nyou check the orb. It marks the possible locations to dig on the map.</p>\n<p>A special attack counter was added which counts draining special attacks done\nagainst certain bosses like the Corporeal Beast.</p>\n<p><img src="/img/blog/1.3.8-Release/speccounter.png" alt="speccounter"/></p>\n<p>A FPS plugin was added from <a href="https://github.com/LeviSchuck">@LeviSchuck</a> which\ndisplays the current FPS, and allows you to configure a max FPS limit.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix agility plugin calculating laps to level when you level up on a lap</li>\n<li>Add missing Rellekka fishing spots to fishing plugin</li>\n<li>XP globes mouseover now shows xp per hour</li>\n<li>Fix date placement in screenshot with stretched fixed mode</li>\n<li>Fix xp tracker sometimes showing negative XP</li>\n<li>Fix bank tags to be case insensitive</li>\n<li>Add Puro-Puro static spawn locations to imp plugin</li>\n<li>A chest price evaluator was added to the barrows plugin</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 29 contributors this release!</p>\n<pre><code>AWarbear (4):\n      Make farming tracker use english for dates by default (#2345)\n      agility plugin: identify active course based on its region\n      agility plugin: fix calculating laps to level when leveling up from a lap\n      Move system tray icon to be created before the client requests focus\n\nAdam (17):\n      impling plugin: use spawn events\n      npc indicators: remove unnecessary tagged npcs list\n      npc indicators: use events for highlighted npcs\n      runelite-client: add tick counter\n      demonic gollias: use tick counter\n      mixins: inject get/set tick count\n      runescape-client: refactor Nameable\n      runescape-client: class304 -&gt; FriendContainer\n      runescape-client: class298 -&gt; IgnoreContainer\n      runescape-client: refactor FriendManager\n      runescape-client: method1792 -&gt; removeFriend\n      runelite-api: expose Friend\n      runelite-api: add nameable name change event\n      injector: add method hooks\n      Add removed friend event\n      chatbox input manager: add support for character limit\n      Add friend notes plugin\n\nAlex Kolpa (1):\n      Ensure tile spawns on all planes are simulated (#2495)\n\nEadgars-Ruse (2):\n      Add hot-cold clue scroll plugin\n      Fix warmer/colder consideration for hot-cold plugin\n\nJeroen (1):\n      Show missing fishing spots in Rellekka in overlay.\n\nJonathan (1):\n      Add xp per hour to xp globes mouse-over tooltip\n\nJordan (2):\n      Add all bracelets to Argdougne emote clue item requirement (#2417)\n      Fix Sinclair Mansion emote clue (#2468)\n\nJordan Atwood (2):\n      Fix &quot;No boots&quot; requirement in Mausoleum clue\n      Fix Shadow dungeon emote clue location\n\nJoshua Filby (11):\n      feat: add a way to get AccountType\n      refactor: rename ScriptEvent#field787 to ScriptEvent#mouseX\n      refactor: rename ScriptEvent#field780 to ScriptEvent#mouseY\n      refactor: rename ScriptEvent#widget to ScriptEvent#source\n      refactor: rename ScriptEvent#field779 to ScriptEvent#op\n      refactor: rename ScriptEvent#field776 to ScriptEvent#target\n      refactor: rename ScriptEvent#pressedKey to ScriptEvent#typedKeyCode\n      refactor: rename ScriptEvent#typedKey to ScriptEvent#typedKeyChar\n      refactor: rename ScriptEvent#objs to ScriptEvent#params\n      refactor: rename ScriptEvent#string to ScriptEvent#opbase\n      fix: import correct field\n\nKamiel (1):\n      Add missing overhead icons to API\n\nLars \xd8rnlo (1):\n      Add config option that enables/disables mouse tooltip on rune pouch however since information is already available on screen if rune pouch is enabled.\n\nLevi (1):\n      FPS Plugin\n\nLevi Schuck (2):\n      Fix negative total XP calculation when skill starts\n      FPS plugin: fix startup not applying limits\n\nLotto (3):\n      screenshotplugin: fix timestamp &quot;button&quot; not being stretched\n      screenshotplugin: fix screenshot button ignoring displayDate setting\n      screenshotplugin: fix Hunter levelup widget ignoring toggle\n\nMagic fTail (3):\n      BossTimerPlugin: Add missing bosses (#2150)\n      bank tag plugin: fix searching to be case insensitive\n      HunterPlugin: Fix deadfall trap\n\nMaid Dog (2):\n      Use Immenizz&#39;s in-game name\n      Fix monastery clue position\n\nMantautas Jurksa (1):\n      Add Puro-Puro static spawn locations\n\nMax Weber (6):\n      runelite-client: Cleanup cli arguments\n      runelite-client: Log uncaught exceptions\n      method3836 &gt; getSpriteAsSpritePixels\n      Add SpriteManager to get sprites from the cache.\n      runelite-client: Make notification options not mutually excusive\n      Add Burgh de Rott map clue\n\nMorgan Lewis (7):\n      runescape-client: export more world map related methods\n      runescape-api: import world map methods\n      Add world map api and mixin\n      runelite-client: add world map overlay renderer\n      runelite-client: add world map test plugin\n      clue plugin: add world map overlay for clue location\n      WorldMapOverlay: Add check for current plane\n\nRheon (1):\n      Add spade req, fix item reqs for emote clues (#1753)\n\nShuhao Wu (1):\n      Updated cryptic clue solution for Kalphite area\n\nSoyChai (2):\n      demonicgorilla: Rename plugin to &quot;Demonic Gorillas&quot; with capital G\n      demonicgorilla: Use proper inverse methods instead of the ! operator\n\nTomas Slusny (14):\n      Option to only recolor right click menu on ground\n      Add 2 new notifications modes (message, flash)\n      Disable filtering on logback.xml\n      Merge ImagePanelComponent with PanelComponent\n      Update all overlays to support new PanelComponent\n      Make ProgressPie follow component pattern\n      Move the xp/hr in globes to new system\n      Sanitize player indicators options\n      Clear children in LocationOverlay\n      Simplify component system\n      Update plugins to use the new TitleComponent\n      Add support for customizable gap and border\n      Restore min width when keeping window size small\n      Iron platelegs -&gt; platebody for Draynor emote clue\n\nTyler Nichols (1):\n      Update to Solution of speaking to Falo the Bard (#2352)\n\nWooxSolo (5):\n      Add graphics object API\n      Add graphics object created event\n      Add graphics objects to devtools\n      Add option to keep either window or client size\n      Change WorldPoint::distanceTo to use chebyshev distance instead of euclidean distance\n\niguaan (1):\n      correct hard entrana cryptic clue\n\nraqes (1):\n      Add special attack counter\n\ntrimbe (3):\n      Add missing Dorgesh-Kaan clue, fix dagganoth king cryptic\n      item manager: change batch item price to accept a collection\n      barrows plugin: add barrows chest price evaluator\n\nwa1id (1):\n      Add Elite Map clue at Zul-andra (#2306)\n</code></pre>'}}}]);
//# sourceMappingURL=31.c9757503.chunk.js.map