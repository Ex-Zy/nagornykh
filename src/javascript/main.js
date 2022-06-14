"use strict";
import circle from "./modules/circle";
import themeSwitcher from "./modules/themes";

circle.runAnimation();
themeSwitcher.render({ enableRandom: false, time: 15000 });