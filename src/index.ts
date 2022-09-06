import { generateBottomNoise } from './generator';
import { Telegraf } from "telegraf";
import { Application, Router } from "@cfworker/web";
import createTelegrafMiddleware from "cfworker-middleware-telegraf";

// @ts-ignore
const bot = new Telegraf(self.BOT_TOKEN);
bot.command('bottom', ctx => ctx.reply(generateBottomNoise()))

const router = new Router();
// @ts-ignore
router.post(`/${self.SECRET_PATH}`, createTelegrafMiddleware(bot));
new Application().use(router.middleware).listen();