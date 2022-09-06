import { Context } from "telegraf";
import { generateBottomNoise } from "../lib/generator";

export default function (ctx: Context) {
    ctx.reply(generateBottomNoise())
}