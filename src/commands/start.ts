import { Context } from "telegraf";

export default function (ctx: Context) {
    const message = `👋 Hello ${ctx.from?.first_name}!\n\nYou can use this bot to generate ⬇️ bottom noises that's apparently very hard to do.\nJust type /bottom and I'll generate it for you or use the inline mode by typing @bottomlangbot in any chats.\n\nBot created by 🐤 @roasted_duck.`
    ctx.reply(message)
}