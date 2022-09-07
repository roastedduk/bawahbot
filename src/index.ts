import { Telegraf } from "telegraf";
import { Application, Router } from "@cfworker/web";
import createTelegrafMiddleware from "cfworker-middleware-telegraf";
import start from './commands/start';
import bottom from './commands/bottom';
import bottomInlineQuery from "./commands/bottomInlineQuery";

// @ts-ignore
const bot = new Telegraf(self.BOT_TOKEN);

bot.start(start)
bot.command('bottom', bottom)
bot.on('inline_query', bottomInlineQuery)

const router = new Router();
// @ts-ignore
router.post(`/${self.SECRET_PATH}`, createTelegrafMiddleware(bot));
new Application().use(router.middleware).listen();