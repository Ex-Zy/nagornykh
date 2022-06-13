"use strict";
import circle from "./modules/circle";
import themeSwitcher from "./modules/themes";

circle.runAnimation();
themeSwitcher.render({ enableRandom: true, time: 15000 });